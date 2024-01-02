import React from 'react';
import {
  TwitterHeaderContainer,
  ImageContainer,
  TextContainer,
  Title,
  Description,
} from './../../Styles/BannerTemplates/TwitterHeader.style';
import { Button } from './../../Styles/BannerTemplates/Button.style';

interface Props {
  generatedTitle: string;
  generatedText: string;
  generatedImage: string;
  generatedCTA: string;
  generatedButtonColor: string;
  generatedBckgrndColor: string;
  generatedTextColor: string;
}

const TwitterHeader: React.FC<Props> = ({
  generatedTitle,
  generatedText,
  generatedImage,
  generatedCTA,
  generatedButtonColor,
  generatedBckgrndColor,
  generatedTextColor,
}) => {
  return (
    <TwitterHeaderContainer style={{ backgroundColor: generatedBckgrndColor }}>
      <TextContainer style={{ color: generatedTextColor }}>
        <Title>{generatedTitle}</Title>
        <Description>{generatedText}</Description>
        <Button
          style={{
            backgroundColor: generatedButtonColor,
            color: generatedTextColor,
          }}
        >
          {generatedCTA}
        </Button>
      </TextContainer>
      <ImageContainer generatedImage={generatedImage} />
    </TwitterHeaderContainer>
  );
};

export default TwitterHeader;
