import styled from "styled-components";

export const ScrolContainer = styled.ScrollView`
  display: flex;
  padding-top: 50px;
  
  
`;
export const ExternalContainer = styled.View`
  display:flex; 
  flex-direction: column;
  align-items:center;
`
export const Container = styled.View`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;  
  padding:20px;
`;

export const TextForm = styled.Text`
  color: white;
  font-size: 18px;
  margin-top:10px;
`;


export const ButtonSend = styled.Pressable`
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

export const InputArea = styled.TextInput`

    background-color: white;
    width:100%;
    margin-top:5px;
`



export const LogoTitle = styled.Text`
    
    text-align:center;
    font-weight: bold;
    font-size: 30px;
    color: orange


`