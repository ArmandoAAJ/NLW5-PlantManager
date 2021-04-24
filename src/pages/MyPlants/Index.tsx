import React, { useEffect, useState } from "react";
import { formatDistance } from "date-fns";
import { pt } from "date-fns/locale";
import { Header } from "../../components/Header/Index";
import { loadPlant, PlantProps } from "../../libs/storage";

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

const MyPlants: React.FC = () => {
  const [myPlants, setMyPlants] = useState<PlantProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [nextWaterd, setNextWaterd] = useState("");

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
          renderItem={({ item }) => <PlantCardSecondary data={item} />}
          showsVerticalScrollIndicator={false}
        />
      </Plants>
    </Container>
  );
};

export default MyPlants;
