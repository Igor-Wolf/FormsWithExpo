import styled from "styled-components";

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ImageLogo = styled.Image`
  width: 250px;
  height: 160px;
  border-radius: 10px;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const ButtonInitial = styled.Pressable`
  align-items: center;
  justify-content: center;

  background-color: orange;
  width: 80%;
  height: 50px;
  margin-top: 50px;
  elevation: 100;
`;

export const ButtonText = styled.Text`
    
    font-size: 18px;
    font-weight: bold;
    color: white;
    text-align: center;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
    

`;
