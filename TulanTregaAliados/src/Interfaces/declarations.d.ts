declare module '*.svg' {
  import React from 'react';
  import {SvgProps} from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}
declare module '*.json' {
  const value: any;
  export default value;
}

declare module '@env' {
  export const API_URL: string;
  export const GOOGLE_API_KEY: string;
}

declare module 'react-native-image-base64';
declare module 'react-native-image-rotate';
declare module 'currencyjs';
