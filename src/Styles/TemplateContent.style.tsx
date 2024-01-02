import styled from 'styled-components';

export const ContentWrapper = styled.div`
.container-fluid {
  padding: 0 20px;
}

.col-md-3 {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.col-md-3 p {
  font-size: 1rem;
  line-height: 1.5;
  color: #333;
  margin-bottom: 15px;
  text-align: center;
}

.col-md-3 textarea {
  width: 100%;
  height: 150px;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  margin-bottom: 15px;
}

.col-md-3 button {
  padding: 10px 35px;
  font-size: 1.2rem;
  background-color: #9cb576;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.5s ease; 
  margin-left: auto;
  display: block;
}

.col-md-3 button:hover {
  background-color: #6d7f53;
}

.container-generate {
  background-color: #f9f9f9;
  // border: 1px solid #e0e0e0; 
  border-radius: 8px;
  padding: 10px; 
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  min-height: 500px;
}
`;
