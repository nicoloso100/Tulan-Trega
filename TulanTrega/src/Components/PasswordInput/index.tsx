import {Icon, Input, Text} from '@ui-kitten/components';
import React from 'react';
import {FieldError} from 'react-hook-form';
import {TouchableWithoutFeedback, View} from 'react-native';

interface PasswordInputProps {
  onChange: (value: string) => void;
  value: string;
  placeholder: string;
  size?: TInputSize;
  error?: FieldError;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  onChange,
  value,
  placeholder,
  error,
  size = 'small',
}) => {
  const [secureTextEntry, setSecureTextEntry] = React.useState<boolean>(true);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = (props: any) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
    </TouchableWithoutFeedback>
  );

  return (
    <View>
      <Input
        size={size}
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
        accessoryRight={renderIcon}
        secureTextEntry={secureTextEntry}
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

export default PasswordInput;
