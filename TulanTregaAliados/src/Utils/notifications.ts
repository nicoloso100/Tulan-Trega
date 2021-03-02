import Toast from 'react-native-toast-message';

export const ShowErrorNotification = (message: string) => {
  Toast.show({
    type: 'error',
    position: 'top',
    text1: 'Alerta',
    text2: message,
    visibilityTime: 4000,
    autoHide: true,
    topOffset: 30,
    bottomOffset: 40,
  });
};

export const ShowSuccessNotification = (message: string) => {
  Toast.show({
    type: 'success',
    position: 'top',
    text1: 'OK',
    text2: message,
    visibilityTime: 4000,
    autoHide: true,
    topOffset: 30,
    bottomOffset: 40,
  });
};
