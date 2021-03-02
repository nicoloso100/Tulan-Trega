import {ImagePickerResponse} from 'react-native-image-picker';
import ImageResizer from 'react-native-image-resizer';
import {ShowErrorNotification} from './notifications';
import ImgToBase64 from 'react-native-image-base64';

export const ResizeImage = (
  imageResponse: ImagePickerResponse,
): Promise<string> => {
  return new Promise((resolve) => {
    if (imageResponse.uri) {
      ImageResizer.createResizedImage(
        imageResponse.uri,
        400,
        400,
        'JPEG',
        100,
        90,
        undefined,
        true,
        {
          mode: 'contain',
          onlyScaleDown: true,
        },
      )
        .then((responseCompressed) => {
          resolve(responseCompressed.uri);
        })
        .catch(() => {
          ShowErrorNotification(
            'Ha ocurrido un error al obtener la imágen, por favor inténtelo nuevamente',
          );
        });
    }
  });
};

export const ImageToBaase64 = (path: string): Promise<string> => {
  return ImgToBase64.getBase64String(path).then((base64String: string) => {
    return base64String;
  });
};
