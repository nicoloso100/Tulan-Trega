import {Input, Text} from '@ui-kitten/components';
import React from 'react';
import {FieldError} from 'react-hook-form';
import {View} from 'react-native';

interface TextInputProps {
  onChange: (value: string) => void;
  value: string;
  placeholder: string;
  size?: TInputSize;
  error?: FieldError;
}

const TextInput: React.FC<TextInputProps> = ({
  onChange,
  value,
  placeholder,
  error,
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

export default TextInput;
