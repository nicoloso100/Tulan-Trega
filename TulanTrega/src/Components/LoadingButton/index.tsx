import {Button, Spinner} from '@ui-kitten/components';
import React from 'react';
import {View} from 'react-native';

interface LoadingButtonProps {
  label: string;
  loading?: boolean;
  onPress: () => void;
}

const LoadingIndicator = (props: any) => (
  <View style={[props.style]}>
    <Spinner size="small" />
  </View>
);

const LoadingButton: React.FC<LoadingButtonProps> = ({
  label,
  loading,
  onPress,
}) => {
  return (
    <Button
      onPress={onPress}
      appearance="outline"
      accessoryLeft={loading ? LoadingIndicator : undefined}>
      {label}
    </Button>
  );
};

export default LoadingButton;
