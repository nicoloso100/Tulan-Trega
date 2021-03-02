import {View} from 'react-native';
import styled from 'styled-components';
import MapView from 'react-native-maps';

export const MapContainer = styled(View)`
  width: 100%;
  height: 400px;
`;
export const MapComponent = styled(MapView)`
  flex: 1;
`;

export const SearchBarStyles = {
  container: {
    position: 'absolute',
    top: 0,
    width: '80%',
  },
  textInputContainer: {
    marginHorizontal: 0,
    flex: 1,
    backgroundColor: 'transparent',
    height: 35,
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  textInput: {
    height: 35,
    marginTop: 10,
    marginLeft: 10,
    margin: 0,
    padding: 0,
    borderRadius: 9,
    elevation: 5,
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowOffset: {x: 0, y: 0},
    shadowRadius: 15,
    borderWidth: 1,
    borderColor: '#FAFAFA',
    fontSize: 14,
  },
  listView: {
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: '#FAFAFA',
    backgroundColor: '#ffffff',
    elevation: 5,
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowOffset: {x: 0, y: 0},
    shadowRadius: 15,
    marginTop: 15,
  },
  description: {
    fontSize: 15,
  },
};
