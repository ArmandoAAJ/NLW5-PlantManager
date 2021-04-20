import React from "react";
import { AntDesign } from "@expo/vector-icons";

import { Container, TextTop, TextBottom, Image } from "./styles";

import { Button } from "../../components/Button/Index";

export const Welcome: React.FC = () => {
  return (
    <Container>
      <TextTop>
        Gerencie {"\n"}
        suas plantas de forma {"\n"}
        fácil
      </TextTop>
      <Image />
      <TextBottom>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar voce
        sempre que precisar.
      </TextBottom>
      <Button>
        <AntDesign name="right" size={24} color="white" />
      </Button>
    </Container>
  );
};
