import React, { useEffect, useState, useCallback } from "react";
import { View, ActivityIndicator } from "react-native";
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

interface EnvironmentProps {
  key: string;
  title: string;
}

interface PlantsProps {
  id: string;
  name: string;
  abount: string;
  water_tips: string;
  photo: string;
  environments: [string];
  frequency: {
    times: number;
    repeat_every: string;
  };
}

export const Plant = () => {
  const [environments, setEnvironments] = useState<EnvironmentProps[]>([]);
  const [plants, setPlants] = useState<PlantsProps[]>([]);
  const [filteredPlants, setFilteredPlants] = useState<PlantsProps[]>([]);
  const [environmentSelected, setEnvironmentSelected] = useState("all");
  const [loadAnimation, setLoadAnimation] = useState(true);

  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);

  const handleFetchMore = (distance: number) => {
    if (distance < 1) return;
    setLoadingMore(true);
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

  async function loadPlants() {
    const { data } = await api.get(
      `plants?_sort=name&_order=asc&_page=${page}&_limit=8`
    );

    if (!data) return setLoadAnimation(true);

    if (page > 1) {
      setPlants((oldValue) => [...oldValue, ...data]);
      setFilteredPlants((oldValue) => [...oldValue, ...data]);
    } else {
      setPlants(data);
      setFilteredPlants(data);
    }
    setLoadingMore(false);
    setLoadAnimation(false);
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
            renderItem={({ item }) => <PlantCardPrimary data={item} />}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            onEndReachedThreshold={0.1}
            onEndReached={({ distanceFromEnd }) =>
              handleFetchMore(distanceFromEnd)
            }
            ListFooterComponent={
              loadingMore ? (
                <ActivityIndicator color={colors.green_dark} />
              ) : (
                <></>
              )
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
