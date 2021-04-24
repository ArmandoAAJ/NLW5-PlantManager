import React, { useState } from "react";
import { Platform, Alert as DateAlert } from "react-native";
import { useRoute } from "@react-navigation/core";
import DateTimePicker, { Event } from "@react-native-community/datetimepicker";
import { isBefore, format } from "date-fns";
import { PlantProps } from "../../libs/storage";

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
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(Platform.OS === "ios");
  const route = useRoute();
  const { plant } = route.params as Plant;

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

        <Button title="Cadastrar planta" onPress={() => {}} />
      </Content>
    </Container>
  );
};
