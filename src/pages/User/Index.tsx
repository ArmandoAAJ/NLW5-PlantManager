import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Platform, TouchableWithoutFeedback, Keyboard } from "react-native";
import { Button } from "../../components/Button/Index";
import {
  Container,
  Content,
  View,
  Form,
  TextEmoji,
  Text,
  Input,
  Footer,
  KeyboardStyled,
} from "./styles";

export const User: React.FC = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>("");

  const navigation = useNavigation();

  const handleInputBlur = () => {
    setIsFocused(false);
    setIsFilled(!!name);
  };

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputChange = (value: string) => {
    setIsFilled(!!value);
    setName(value);
  };

  return (
    <Container>
      <KeyboardStyled behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Content>
            <Form>
              <View>
                <TextEmoji>{isFilled ? "😀" : "😄"}</TextEmoji>
                <Text>
                  Como podemos {"\n"}
                  chamar voce
                </Text>
              </View>
              <Input
                isFocused={isFocused}
                isFilled={isFilled}
                placeholder="Digite um nome"
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
                onChangeText={handleInputChange}
              />
              <Footer>
                <Button
                  disabled={name.length < 1}
                  title="Confirmar"
                  onPress={() => navigation.navigate("Confirmation")}
                />
              </Footer>
            </Form>
          </Content>
        </TouchableWithoutFeedback>
      </KeyboardStyled>
    </Container>
  );
};
