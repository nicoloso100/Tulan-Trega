import React from 'react';
import {
  AuthNavigationContainer,
  AuthNavigationIcon,
  AuthNavigationText,
  AuthNavigationTextContainer,
} from './styled';

interface AuthNavigationProps {
  text: string;
  onBack: () => void;
}

const AuthNavigation: React.FC<AuthNavigationProps> = ({text, onBack}) => {
  return (
    <AuthNavigationContainer onPress={onBack}>
      <AuthNavigationIcon fill="#8F9BB3" name="arrow-ios-back-outline" />
      <AuthNavigationTextContainer>
        <AuthNavigationText category="h1">{text}</AuthNavigationText>
      </AuthNavigationTextContainer>
    </AuthNavigationContainer>
  );
};

export default AuthNavigation;
