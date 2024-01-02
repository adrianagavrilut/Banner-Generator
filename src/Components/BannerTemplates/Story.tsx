import React from 'react';
// import { StoryContainer } from './../../Styles/BannerTemplates/Story.style';
import {
  StoryContainer,
  TextOverlay,
  TextContent,
  Title,
  Description,
} from './../../Styles/BannerTemplates/Story.style';
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

const Story: React.FC<Props> = ({
  generatedTitle,
  generatedText,
  generatedImage,
  generatedCTA,
  generatedButtonColor,
  generatedBckgrndColor,
  generatedTextColor,
}) => {
  return (
    <StoryContainer generatedImage={generatedImage}>
      <TextOverlay style={{ color: generatedTextColor }}>
        <TextContent style={{ backgroundColor: `${generatedBckgrndColor}90` }}>
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
        </TextContent>
      </TextOverlay>
    </StoryContainer>
  );
};

export default Story;
