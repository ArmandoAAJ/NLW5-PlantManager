import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import { formatDistance } from "date-fns";
import { pt } from "date-fns/locale";
import { Header } from "../../components/Header/Index";
import { loadPlant, PlantProps, removePlant } from "../../libs/storage";

import waterdrop from "../../assets/waterdrop.png";

import {
  Container,
  List,
  Spotlight,
  Image,
  SpotlightText,
  Plants,
  PlantTitle,
} from "./styles";
import { PlantCardSecondary } from "../../components/PlantCardSecondary/Index";
import { Load } from "../../components/Load/Index";

const MyPlants: React.FC = () => {
  const [myPlants, setMyPlants] = useState<PlantProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [nextWaterd, setNextWaterd] = useState("");

  const handleRemove = (plant: PlantProps) => {
    Alert.alert("Remover", `Deseja remover a planta ${plant.name}?`, [
      {
        text: "Não 🤞",
        style: "cancel",
      },
      {
        text: "Sim 😪",
        onPress: async () => {
          try {
            await removePlant(plant.id);
            setMyPlants((oldData) =>
              oldData.filter((item) => item.id !== plant.id)
            );
          } catch (error) {
            Alert.alert("Tivemos problemas ao deletar a planta selecionada!!.");
          }
        },
      },
    ]);
  };

  useEffect(() => {
    async function loadStorageDate() {
      const plantsStoraged = await loadPlant();

      const nextTime = formatDistance(
        new Date(plantsStoraged[0].dateTimeNotification).getTime(),
        new Date().getTime(),
        { locale: pt }
      );

      setNextWaterd(
        `Não esqueça de regar a ${plantsStoraged[0].name} à ${nextTime} horas.`
      );

      setMyPlants(plantsStoraged);
      setLoading(false);
    }
    loadStorageDate();
  }, []);

  if (loading) return <Load />;

  return (
    <Container>
      <Header />
      <Spotlight>
        <Image source={waterdrop} />
        <SpotlightText>{nextWaterd}</SpotlightText>
      </Spotlight>
      <Plants>
        <PlantTitle>Próximas regadas</PlantTitle>
        <List
          data={myPlants}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <PlantCardSecondary
              data={item}
              onPress={() => handleRemove(item)}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </Plants>
    </Container>
  );
};

export default MyPlants;
