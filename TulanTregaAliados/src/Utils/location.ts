import {GOOGLE_API_KEY} from '@env';
import GeocoderLib from 'react-native-geocoding';

const Geocoder: any = GeocoderLib;

Geocoder.init(GOOGLE_API_KEY, {language: 'es'});

export const GetLocationByCoords = (
  coords: ILocationCoords,
): Promise<string> => {
  return new Promise((resolve, reject) => {
    Geocoder.from(coords.latitude, coords.longitude)
      .then((json: any) => {
        resolve(json.results[0].formatted_address);
      })
      .catch((error: any) => reject(error));
  });
};
