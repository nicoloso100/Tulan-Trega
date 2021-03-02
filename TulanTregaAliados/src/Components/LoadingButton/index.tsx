import {Button, Spinner} from '@ui-kitten/components';
import React from 'react';
import {View} from 'react-native';

interface LoadingButtonProps {
  label: string;
  loading?: boolean;
  onPress: () => void;
  status?: 'danger' | 'warning' | 'info';
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
  status,
}) => {
  return (
    <Button
      status={status ? status : 'primary'}
      onPress={onPress}
      appearance="outline"
      accessoryLeft={loading ? LoadingIndicator : undefined}
      disabled={loading ? true : false}>
      {label}
    </Button>
  );
};

export default LoadingButton;
