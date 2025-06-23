import { ScrollView } from "react-native";
import {
  ButtonSend,
  ButtonText,
  Container,
  ExternalContainer,
  InputArea,
  LogoTitle,
  ScrolContainer,
  TextForm,
} from "./styles";
import { useState } from "react";

export const Formulario = ({ showed }: any) => {
  const [user, setUser] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [obs, setObs] = useState("");
  return (
    <ScrolContainer>
      <Container>
        <LogoTitle>FORMULÁRIO</LogoTitle>
        <TextForm>Usuário</TextForm>
        <InputArea
          placeholder="user"
          value={user}
          onChange={(text: string) => setUser(text)}
        ></InputArea>
        <TextForm>Telefone</TextForm>
        <InputArea
          placeholder="phone"
          value={phone}
          onChange={(text: string) => setPhone(text)}
        ></InputArea>
        <TextForm>Email</TextForm>
        <InputArea
          placeholder="email"
          value={email}
          onChange={(text: string) => setEmail(text)}
        ></InputArea>
        <TextForm>Endereço</TextForm>
        <InputArea
          placeholder="address"
          value={address}
          onChange={(text: string) => setAddress(text)}
        ></InputArea>
        <TextForm>Observações</TextForm>
        <InputArea
          style={{ height: 100, textAlignVertical: "top" }}
          multiline={true}
          numberOfLines={4}
          placeholder="obs"
          value={obs}
          onChange={(text: string) => setObs(text)}
        ></InputArea>
      </Container>
      <ExternalContainer>
        <ButtonSend onPress={showed}>
          <ButtonText>ENVIAR FORMULÁRIO</ButtonText>
        </ButtonSend>
      </ExternalContainer>
    </ScrolContainer>
  );
};
