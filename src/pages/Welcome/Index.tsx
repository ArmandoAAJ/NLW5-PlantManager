import React from "react";
import { Entypo } from "@expo/vector-icons";

import { Container, TextTop, TextBottom, Image, Button } from "./styles";
import { useNavigation } from "@react-navigation/core";

export const Welcome: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <TextTop>
        Gerencie {"\n"}
        suas plantas de {"\n"}
        forma fácil
      </TextTop>
      <Image resizeMode="contain" />
      <TextBottom>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar voce
        sempre que precisar.
      </TextBottom>
      <Button onPress={() => navigation.navigate("User")}>
        <Entypo name="chevron-thin-right" size={24} color="white" />
      </Button>
    </Container>
  );
};
