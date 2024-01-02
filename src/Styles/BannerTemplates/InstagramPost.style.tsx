import styled from 'styled-components';

export const InstagramPostContainer = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  grid-template-rows: auto 1fr auto;
  max-width: 500px;
  height: 500px;
  border: 1px solid #ccc;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
`;

export const ImageSide = styled.div<{ generatedImage: string }>`
  grid-row: 2 / span 2;
  background-image: ${(props) => `url(${props.generatedImage})`};
  background-size: cover;
`;

export const ContentSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  grid-row: 2 / span 2;
  grid-column: 2 / 3;
  // background-color: #fffbe9; //fffdf4 // f5f8f1
  padding: 20px 5px;
`;

export const TitleContainer = styled.div`
  position: absolute;
  z-index: 1;
  grid-column: 1 / -1;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Title = styled.h2`
  margin: 20px 5px 20px 5px;
  background-color: rgba(255, 251, 249, 0.8);
  padding: 10px 20px;
  border-radius: 5px;
  text-align: center;
  font-size: 33px;
  font-weight: bold;
`;

export const Description = styled.p`
  font-size: 18px;
  font-weight: 777;
  background-color: rgba(255, 251, 249, 0.8);
  padding: 10px 20px;
  border-radius: 5px;
  text-align: center;
  margin-bottom: 30px;
`;
