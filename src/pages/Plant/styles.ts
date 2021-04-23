import styled from "styled-components/native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const Container = styled.View`
  flex: 1;
`;

export const ContainerList = styled.View`
  flex: 1;
  padding-horizontal: 32px;
  justify-content: center;
`;

export const Content = styled.View`
  padding: 20px 30px;
`;

export const Title = styled.Text`
  font-size: 17px;
  color: ${colors.heading};
  font-family: ${fonts.heading};
  line-height: 20px;
  margin-top: 15px;
`;

export const SubTitle = styled.Text`
  font-size: 17px;
  color: ${colors.heading};
  font-family: ${fonts.text};
  line-height: 20px;
`;

export const List = styled.FlatList``;
