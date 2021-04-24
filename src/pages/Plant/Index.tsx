import React, { useEffect, useState, useCallback } from "react";
import { View, ActivityIndicator, PickerItem } from "react-native";
import { useNavigation } from "@react-navigation/native";

import api from "../../services/api";

import { Load } from "../../components/Load/Index";
import { Header } from "../../components/Header/Index";
import { EnvironmentButton } from "../../components/EnvironmentButton/Index";
import { PlantCardPrimary } from "../../components/PlantCardPrimary/Index";

import {
  Container,
  Title,
  Content,
  SubTitle,
  ContainerList,
  List,
} from "./styles";
import colors from "../../styles/colors";
import { PlantProps } from "../../libs/storage";

interface EnvironmentProps {
  key: string;
  title: string;
}

export const Plant = () => {
  const navigation = useNavigation();
  const [environments, setEnvironments] = useState<EnvironmentProps[]>([]);
  const [plants, setPlants] = useState<PlantProps[]>([]);
  const [filteredPlants, setFilteredPlants] = useState<PlantProps[]>([]);
  const [environmentSelected, setEnvironmentSelected] = useState("all");

  const [loadAnimation, setLoadAnimation] = useState(true);
  const [loadMore, setLoadMore] = useState(true);

  const [page, setPage] = useState(1);

  const handleFetchMore = (distance: number) => {
    if (distance < 1) return;
    setLoadMore(true);
    setPage((oldValue) => oldValue + 1);
    loadPlants();
  };

  const handleEnvironmentSelected = (environment: string) => {
    setEnvironmentSelected(environment);

    if (environment === "all") {
      setFilteredPlants(plants);
      return;
    }

    const filtered = plants.filter((plant) =>
      plant.environments.includes(environment)
    );

    setFilteredPlants(filtered);
  };

  const handlePlantSelected = (plant: PlantProps) => {
    navigation.navigate("PlantSave", { plant });
  };

  async function loadPlants() {
    const { data } = await api.get(
      `plants?_sort=name&_order=asc&_page=${page}&_limit=8`
    );

    if (!data) {
      setLoadMore(false);
    }

    if (page > 1) {
      setPlants((oldValue) => [...oldValue, ...data]);
      setFilteredPlants((oldValue) => [...oldValue, ...data]);
    } else {
      setPlants(data);
      setFilteredPlants(data);
    }

    setLoadAnimation(false);
    setLoadMore(false);
  }

  useEffect(() => {
    async function loadEnvironments() {
      const { data } = await api.get(
        "plants_environments?_sort=title&_order=desc"
      );
      setEnvironments(data);
    }
    loadEnvironments();
  }, []);

  useEffect(() => {
    loadPlants();
  }, []);

  if (loadAnimation) return <Load />;

  return (
    <>
      <Container>
        <Content>
          <Header />
          <Title>Em qual ambiente</Title>
          <SubTitle>voce quer colocar sua planta?</SubTitle>
        </Content>
        <View>
          <List
            data={environments}
            keyExtractor={(item) => String(item.key)}
            renderItem={({ item }) => (
              <EnvironmentButton
                onClick={() => handleEnvironmentSelected(item.key)}
                active={item.key === environmentSelected}
                title={item.title}
              />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              justifyContent: "center",
              height: 40,
              paddingBottom: 5,
              marginVertical: 32,
              marginLeft: 32,
              paddingRight: 52,
            }}
          />
        </View>
        <ContainerList>
          <List
            data={filteredPlants}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <PlantCardPrimary
                data={item}
                onPress={() => handlePlantSelected(item)}
              />
            )}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            onEndReachedThreshold={0.1}
            onEndReached={({ distanceFromEnd }) =>
              handleFetchMore(distanceFromEnd)
            }
            ListFooterComponent={
              loadMore ? <ActivityIndicator color={colors.green_dark} /> : <></>
            }
            contentContainerStyle={{
              paddingBottom: 70,
            }}
          />
        </ContainerList>
      </Container>
    </>
  );
};
