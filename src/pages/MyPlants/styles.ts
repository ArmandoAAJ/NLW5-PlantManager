import styled from "styled-components/native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  margin: 0 20px;
  padding-top: 50px;
  background-color: ${colors.background};
`;

export const Spotlight = styled.View`
  padding: 0 20px;
  margin: 20px 0 0 0;
  border-radius: 20px;
  height: 110px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.blue_light};
`;

export const Image = styled.Image.attrs({
  width: 60,
  height: 60,
})``;

export const SpotlightText = styled.Text`
  flex: 1;
  color: ${colors.blue};
  padding: 0 20px;
  text-align: justify;
`;

export const Plants = styled.View`
  flex: 1;
  width: 100%;
`;

export const PlantTitle = styled.Text`
  font-size: 24px;
  font-family: ${fonts.heading};
  color: ${colors.heading};
  margin: 20px 0;
`;

export const List = styled.FlatList.attrs({
  flex: 1,
})``;
