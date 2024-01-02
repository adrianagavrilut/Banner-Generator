import styled from 'styled-components';

export const StoryContainer = styled.div<{ generatedImage: string }>`
  display: flex;
  flex-direction: column;
  max-width: 1080px;
  height: 1920px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-image: ${(props) => `url(${props.generatedImage})`};
  background-size: cover;
  overflow: hidden;
`;

export const TextOverlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const TextContent = styled.div`
  // background-color: rgba(255, 251, 233, 0.6);
  padding: 20px 90px;
  border-radius: 5px;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
`;

export const Description = styled.p`
  font-size: 20px;
  text-align: center;
  margin-bottom: 20px;
`;
