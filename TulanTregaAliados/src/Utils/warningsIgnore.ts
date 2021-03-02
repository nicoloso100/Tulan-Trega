import {LogBox} from 'react-native';

const nestedScrollsForUIKittenMenus = 'VirtualizedLists should never be nested';

LogBox.ignoreLogs([nestedScrollsForUIKittenMenus]);
