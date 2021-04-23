import React from "react";
import { Container, Content, Text, Name, Avatar } from "./styles";

export const Header = () => {
  return (
    <Container>
      <Content>
        <Text>Olá,</Text>
        <Name>Armando</Name>
      </Content>
      <Avatar />
    </Container>
  );
};
