import React, {useState} from 'react';
import {
  ImageAContainer,
  ImageActionIcon,
  ImageActionsContainer,
  ImageContainer,
  ImageHolder,
  ModalPicker,
  ModalPickerButton,
  ModalPickerButtonIcon,
  ModalPickerContent,
} from './styles';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {ImageToBaase64, ResizeImage} from '../../Utils/image';
import {TouchableOpacity} from 'react-native';
import ImageRotate from 'react-native-image-rotate';

interface ImageUploaderProps {
  defaultImg: string;
  onChangeImage: (image: string) => void;
}

export const ImageUploader: React.FC<ImageUploaderProps> = ({
  defaultImg,
  onChangeImage,
}) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [defaultImage] = useState<string>(defaultImg);
  const [currentUrl, setCurrentUrl] = useState<string>(defaultImage);

  const setChamgeImage = async (path: string) => {
    const base64 = await ImageToBaase64(path);
    onChangeImage(base64);
  };

  const onPressCamera = () => {
    launchCamera({mediaType: 'photo'}, (response) => {
      ResizeImage(response).then((image) => {
        if (image) {
          setChamgeImage(image).then(() => {
            setCurrentUrl(image);
            setVisible(false);
          });
        }
      });
    });
  };

  const onPressGallery = async () => {
    launchImageLibrary({mediaType: 'photo'}, (response) => {
      ResizeImage(response).then((image) => {
        if (image) {
          setChamgeImage(image).then(() => {
            setCurrentUrl(image);
            setVisible(false);
          });
        }
      });
    });
  };

  const rotateImage = () => {
    ImageRotate.rotateImage(
      currentUrl,
      90,
      (uri: string) => {
        setChamgeImage(uri).then(() => {
          setCurrentUrl(uri);
        });
      },
      (error: any) => {
        console.error(error);
      },
    );
  };

  const resetImage = () => {
    setCurrentUrl(defaultImage);
    onChangeImage(defaultImage);
  };

  return (
    <React.Fragment>
      <ModalPicker
        isVisible={visible}
        onBackdropPress={() => setVisible(false)}>
        <ModalPickerContent>
          <ModalPickerButton onPress={onPressCamera}>
            <ModalPickerButtonIcon fill="white" name="camera" />
          </ModalPickerButton>
          <ModalPickerButton onPress={onPressGallery}>
            <ModalPickerButtonIcon fill="white" name="image-2" />
          </ModalPickerButton>
        </ModalPickerContent>
      </ModalPicker>
      <ImageAContainer>
        <ImageContainer onPress={() => setVisible(true)}>
          <ImageHolder
            source={{
              uri: currentUrl,
            }}
          />
        </ImageContainer>
        <ImageActionsContainer>
          <TouchableOpacity onPress={rotateImage}>
            <ImageActionIcon fill="#8F9BB3" name="refresh" />
          </TouchableOpacity>
          <TouchableOpacity onPress={resetImage}>
            <ImageActionIcon fill="#8F9BB3" name="trash" />
          </TouchableOpacity>
        </ImageActionsContainer>
      </ImageAContainer>
    </React.Fragment>
  );
};

export default ImageUploader;
