import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
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

interface ConfirmationParams {
  title: string;
  subtitle: string;
  buttonTitle: string;
  icon: "smile" | "hug";
  nextScreen: string;
}

const emojis = {
  hug: "🤗",
  smile: "😀",
};

export const Confirmation = () => {
  const routes = useRoute();
  const {
    title,
    subtitle,
    buttonTitle,
    icon,
    nextScreen,
  } = routes.params as ConfirmationParams;
  const navigation = useNavigation();
  return (
    <Container>
      <Keyboard behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <Content>
          <TextEmoji>{emojis[icon]}</TextEmoji>
          <Title>{title}</Title>
          <SubTitle>{subtitle}</SubTitle>
          <Footer>
            <Button
              title={buttonTitle}
              onPress={() => navigation.navigate(nextScreen)}
            />
          </Footer>
        </Content>
      </Keyboard>
    </Container>
  );
};
