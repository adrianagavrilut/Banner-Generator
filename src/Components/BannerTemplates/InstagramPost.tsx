import React from 'react';
import {
  InstagramPostContainer,
  TitleContainer,
  ImageSide,
  ContentSide,
  Title,
  Description,
} from './../../Styles/BannerTemplates/InstagramPost.style';
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

const InstagramPost: React.FC<Props> = ({
  generatedTitle,
  generatedText,
  generatedImage,
  generatedCTA,
  generatedButtonColor,
  generatedBckgrndColor,
  generatedTextColor,
}) => {
  return (
    <InstagramPostContainer style={{ color: generatedTextColor }}>
      <TitleContainer>
        <Title>{generatedTitle}</Title>
      </TitleContainer>
      <ImageSide generatedImage={generatedImage} />
      <ContentSide style={{ backgroundColor: generatedBckgrndColor }}>
        <Description>{generatedText}</Description>
        <Button
          style={{
            backgroundColor: generatedButtonColor,
            color: generatedTextColor,
          }}
        >
          {generatedCTA}
        </Button>
      </ContentSide>
    </InstagramPostContainer>
  );
};

export default InstagramPost;
