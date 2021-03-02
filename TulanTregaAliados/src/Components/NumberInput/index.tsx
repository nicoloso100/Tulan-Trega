import {Icon, Input, Text} from '@ui-kitten/components';
import React from 'react';
import {FieldError} from 'react-hook-form';
import {View} from 'react-native';

interface NumberInputProps {
  onChange: (value: string) => void;
  value: string;
  placeholder: string;
  size?: TInputSize;
  error?: FieldError;
  caption?: string;
}

const AlertIcon = (props: any) => (
  <Icon {...props} name="alert-circle-outline" />
);

const NumberInput: React.FC<NumberInputProps> = ({
  onChange,
  value,
  placeholder,
  error,
  caption,
  size = 'small',
}) => {
  return (
    <View>
      <Input
        size={size}
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
        status={error ? 'danger' : undefined}
        keyboardType="numeric"
        caption={caption}
        captionIcon={caption ? AlertIcon : undefined}
      />
      <View>
        {error && (
          <Text category="c2" status="danger">
            {error.message}
          </Text>
        )}
      </View>
    </View>
  );
};

export default NumberInput;
