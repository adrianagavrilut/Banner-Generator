import styled from 'styled-components';

export const TwitterHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1500px;
  // width: 1500px;
  height: 500px;
  // background-color: #fffbe9; //fffdf4 // f5f8f1
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
`;

export const ImageContainer = styled.div<{ generatedImage: string }>`
  flex: 2;
  height: 100%;
  background-image: ${(props) => `url(${props.generatedImage})`};
  background-size: cover;
`;

export const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
`;

export const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;
