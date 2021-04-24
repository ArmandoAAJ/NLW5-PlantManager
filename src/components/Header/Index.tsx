import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Container, Content, Text, Name, Avatar } from "./styles";

export const Header = () => {
  const [name, setName] = useState<string>("");

  useEffect(() => {
    async function loadName() {
      const user = await AsyncStorage.getItem("@plantmanager:user");
      setName(user || "");
    }
    loadName();
  }, []);

  return (
    <Container>
      <Content>
        <Text>Olá,</Text>
        <Name>{name}</Name>
      </Content>
      <Avatar />
    </Container>
  );
};
