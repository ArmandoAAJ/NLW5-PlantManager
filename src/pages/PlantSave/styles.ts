import styled from "styled-components/native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { SvgFromUri } from "react-native-svg";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: space-between;
  background-color: ${colors.shape};
`;

export const PlantInfo = styled.View`
  flex: 1;
  padding-horizontal: 30px;
  padding-vertical: 50px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.shape};
`;

export const PlantName = styled.Text`
  font-family: ${fonts.heading};
  font-size: 24px;
  color: ${colors.heading};
  margin-top: 15px;
`;

export const Description = styled.Text`
  text-align: center;
  font-family: ${fonts.text};
  font-size: 17px;
  color: ${colors.heading};
  margin-top: 10px;
`;

export const TipPlantText = styled.Text`
  flex: 1;
  text-align: justify;
  font-family: ${fonts.text};
  font-size: 17px;
  color: ${colors.blue};
  margin-left: 20px;
`;

export const SVG = styled(SvgFromUri).attrs({
  height: 150,
  width: 150,
})``;

export const Content = styled.View`
  background-color: ${colors.white};
  padding: 20px 20px 0 20px;
  padding-bottom: ${getBottomSpace() || 20}px;
`;

export const TipPlant = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background-color: ${colors.blue_light};
  padding: 20px;
  border-radius: 20px;
  position: relative;
  bottom: 60px;
`;

export const Image = styled.Image.attrs({
  height: 56,
  width: 56,
})``;

export const Alert = styled.Text`
  text-align: center;
  font-family: ${fonts.complement};
  color: ${colors.heading};
  font-size: 12px;
  margin-bottom: 5px;
`;

export const Time = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  padding-vertical: 10px;
`;

export const TimeText = styled.Text`
  text-align: center;
  font-family: ${fonts.text};
  color: ${colors.heading};
  font-size: 24px;
`;
