import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Platform } from "react-native";
import { Button } from "../../components/Button/Index";
import {
  Container,
  Content,
  TextEmoji,
  Title,
  SubTitle,
  Footer,
  Keyboard,
} from "./styles";

export const Confirmation: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Keyboard behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <Content>
          <TextEmoji>😀</TextEmoji>
          <Title>Prontinho</Title>
          <SubTitle>
            Agora vamos comecar a cuidar das suas {"\n"}
            paltinhas com muito cuidado
          </SubTitle>
          <Footer>
            <Button
              title="Começar"
              onPress={() => navigation.navigate("Plant")}
            />
          </Footer>
        </Content>
      </Keyboard>
    </Container>
  );
};
