import React, {Fragment, useRef, useState} from 'react';
import {MapComponent, MapContainer, SearchBarStyles} from './styles';
import {
  GooglePlaceData,
  GooglePlaceDetail,
  GooglePlacesAutocomplete,
} from 'react-native-google-places-autocomplete';
import {GOOGLE_API_KEY} from '@env';
import MapView, {Camera, Marker, Region} from 'react-native-maps';
import {Dimensions} from 'react-native';
import {GetLocationByCoords} from '../../Utils/location';

const {width, height} = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 20.088365;
const LONGITUDE = -98.364966;
const LATITUDE_DELTA = 0.1;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const initialRegion = {
  latitude: LATITUDE,
  longitude: LONGITUDE,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
};

interface MapProps {
  defaultLocation?: ILocationCoords;
  onChangeLocation: (location: ILocation) => void;
}

const Map: React.FC<MapProps> = ({defaultLocation, onChangeLocation}) => {
  const mapRef = useRef<MapView | null>(null);
  const [showButtonsFix, setShowButtonsFix] = useState<number>(1);
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null);

  const navigateToDefaultLocation = (defLocation: ILocationCoords) => {
    if (mapRef !== null && mapRef.current) {
      const newRegion: Partial<Camera> = {
        center: {
          latitude: defLocation.latitude,
          longitude: defLocation.longitude,
        },
        pitch: 50,
        zoom: 13,
      };
      mapRef.current.animateCamera(newRegion, {
        duration: 2000,
      });
    }
  };

  const setInitialRegion = () => {
    setShowButtonsFix(0);
    if (defaultLocation) {
      let defLocation: ILocationCoords = {
        longitude: defaultLocation.longitude,
        latitude: defaultLocation.latitude,
      };
      setSelectedRegion({
        latitude: defLocation.latitude,
        longitude: defLocation.longitude,
        latitudeDelta: 5,
        longitudeDelta: 5 * ASPECT_RATIO,
      });
      navigateToDefaultLocation(defLocation);
    }
  };

  const onSearchLocation = async (
    data: GooglePlaceData,
    details: GooglePlaceDetail | null = null,
  ) => {
    let customZoom = 18;
    if (data.types.includes('political')) {
      customZoom = 8;
    }
    if (data.types.includes('country')) {
      customZoom = 4;
    }
    if (data.types.includes('neighborhood')) {
      customZoom = 15;
    }
    if (mapRef !== null && mapRef.current && details) {
      const newCoords: ILocationCoords = {
        latitude: details.geometry.location.lat,
        longitude: details.geometry.location.lng,
      };
      const newRegion: Partial<Camera> = {
        center: {
          latitude: newCoords.latitude,
          longitude: newCoords.longitude,
        },
        pitch: 50,
        zoom: customZoom,
      };
      setSelectedRegion({
        latitude: newCoords.latitude,
        longitude: newCoords.longitude,
        latitudeDelta: 5,
        longitudeDelta: 5 * ASPECT_RATIO,
      });
      mapRef.current.animateCamera(newRegion, {
        duration: 2000,
      });

      const address = await GetLocationByCoords(newCoords);
      onChangeLocation({
        address: address,
        latitude: newCoords.latitude,
        longitude: newCoords.longitude,
      });
    }
  };

  const onSelectLocation = async (e: any) => {
    const point = e.nativeEvent;
    setSelectedRegion({
      latitude: point.coordinate.latitude,
      longitude: point.coordinate.longitude,
      latitudeDelta: 5,
      longitudeDelta: 5 * ASPECT_RATIO,
    });

    let coords: ILocationCoords = {
      latitude: point.coordinate.latitude,
      longitude: point.coordinate.longitude,
    };
    const address = await GetLocationByCoords(coords);
    onChangeLocation({
      address: address,
      latitude: coords.latitude,
      longitude: coords.longitude,
    });
  };

  return (
    <MapContainer>
      <MapComponent
        ref={mapRef}
        showsUserLocation
        showsMyLocationButton
        zoomControlEnabled
        zoomEnabled={false}
        showsCompass={false}
        initialRegion={initialRegion}
        style={{flex: 1, marginBottom: showButtonsFix}}
        onPress={onSelectLocation}
        onMapReady={setInitialRegion}>
        {selectedRegion !== null && (
          <Fragment>
            <Marker coordinate={selectedRegion} />
          </Fragment>
        )}
      </MapComponent>
      <GooglePlacesAutocomplete
        fetchDetails
        placeholder="Search"
        onPress={onSearchLocation}
        query={{
          key: GOOGLE_API_KEY,
          language: 'es',
        }}
        styles={SearchBarStyles}
      />
    </MapContainer>
  );
};

export default Map;
