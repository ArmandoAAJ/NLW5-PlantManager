import React, { useState } from "react";
import { Platform } from "react-native";
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
  Keyboard,
} from "./styles";

export const User: React.FC = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>("");

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
      <Keyboard behavior={Platform.OS === "ios" ? "padding" : "height"}>
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
              <Button />
            </Footer>
          </Form>
        </Content>
      </Keyboard>
    </Container>
  );
};
