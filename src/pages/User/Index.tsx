import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
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

  const handleSubmit = async () => {
    try {
      await AsyncStorage.setItem("@plantmanager:user", name);
      navigation.navigate("Confirmation");
    } catch () {
      Alert.alert('Não foi possível salvar seu nome.');
    }
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
                  onPress={handleSubmit}
                />
              </Footer>
            </Form>
          </Content>
        </TouchableWithoutFeedback>
      </KeyboardStyled>
    </Container>
  );
};
