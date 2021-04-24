import React, { useState } from "react";
import { Platform, Alert as DateAlert } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/core";
import DateTimePicker, { Event } from "@react-native-community/datetimepicker";
import { isBefore, format } from "date-fns";
import { plantSave, PlantProps } from "../../libs/storage";

import {
  Container,
  SVG,
  PlantName,
  Description,
  TipPlant,
  Image,
  Content,
  TipPlantText,
  PlantInfo,
  Alert,
  Time,
  TimeText,
} from "./styles";

import waterdrop from "../../assets/waterdrop.png";
import { Button } from "../../components/Button/Index";

interface Plant {
  plant: PlantProps;
}

export const PlantSave = () => {
  const navigation = useNavigation();
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(Platform.OS === "ios");
  const route = useRoute();
  const { plant } = route.params as Plant;

  const handleSave = async () => {
    try {
      await plantSave({
        ...plant,
        dateTimeNotification: selectedDateTime,
      });

      navigation.navigate("Confirmation", {
        title: "Tudo certo",
        subtitle: `Fique tranquilo que sempre vamos lembrar voce de cuidar ${"\n"} da suas plantinhas com bastante cuidado.`,
        icon: "hug",
        buttonTitle: "Muito Obrigado :D",
        nextScreen: "MyPlants",
      });
    } catch {
      DateAlert.alert("Não foi possível salvar!");
    }
  };

  const handleChangeTime = (event: Event, dateTime: Date | undefined) => {
    if (Platform.OS === "android") {
      setShowDatePicker((oldState) => !oldState);
    }

    if (dateTime && isBefore(dateTime, new Date())) {
      setSelectedDateTime(new Date());
      DateAlert.alert("Escolha um horário futuro! ⏰");
      return;
    }

    if (dateTime) {
      setSelectedDateTime(dateTime);
    }
  };

  return (
    <Container>
      <PlantInfo>
        <SVG uri={plant.photo} />
        <PlantName>{plant.name}</PlantName>
        <Description>{plant.about}</Description>
      </PlantInfo>
      <Content>
        <TipPlant>
          <Image source={waterdrop} />
          <TipPlantText>{plant.water_tips}</TipPlantText>
        </TipPlant>
        <Alert>Escolha o melhor horário para ser lembrado</Alert>
        {showDatePicker && (
          <DateTimePicker
            value={selectedDateTime}
            mode="time"
            display="spinner"
            onChange={handleChangeTime}
          />
        )}

        {Platform.OS === "android" && (
          <Time onPress={() => setShowDatePicker((oldState) => !oldState)}>
            <TimeText>{`Mudar ${format(selectedDateTime, "HH:mm")}`}</TimeText>
          </Time>
        )}

        <Button title="Cadastrar planta" onPress={handleSave} />
      </Content>
    </Container>
  );
};
