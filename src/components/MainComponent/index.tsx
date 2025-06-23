import { Text } from "react-native"
import { ButtonInitial, ButtonText, Container, ImageLogo } from "./styles"

export const MainComponent = ({ showed } : any) => {
    return (
        <>
            <Container>
                <ImageLogo source={require("../../../assets/bat-logo.png")}></ImageLogo>
                <ButtonInitial onPress={showed}>
                    <ButtonText>FORMULÁRIO</ButtonText>
                </ButtonInitial>
            </Container>

        </>
    )
}