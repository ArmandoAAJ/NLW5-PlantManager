import React from "react";
import { Entypo } from "@expo/vector-icons";

import { Container, TextTop, TextBottom, Image, Button } from "./styles";

export const Welcome: React.FC = () => {
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
      <Button>
        <Entypo name="chevron-thin-right" size={24} color="white" />
      </Button>
    </Container>
  );
};
