import React from 'react';
import {ShadowStyle} from '../../Styles/shadows';
import {NoDataContainer, NoDataIcon, NoDataText} from './styles';

interface NoDataProps {
  text: string;
}

const NoData: React.FC<NoDataProps> = ({text}) => {
  return (
    <NoDataContainer style={ShadowStyle}>
      <NoDataIcon fill="#8F9BB3" name="alert-circle-outline" />
      <NoDataText appearance="hint" category="h6">
        {text}
      </NoDataText>
    </NoDataContainer>
  );
};

export default NoData;
