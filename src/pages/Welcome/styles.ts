import styled from "styled-components/native";
import { Dimensions } from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import image from "../../assets/watering.png";

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-around;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${colors.green};
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  margin-bottom: 10px;
  height: 56px;
  width: 56px;
`;

export const TextTop = styled.Text`
  font-size: 28px;
  font-family: ${fonts.heading};
  font-weight: bold;
  text-align: center;
  color: ${colors.heading};
  margin-top: 30px;
`;

export const TextBottom = styled.Text`
  text-align: center;
  font-family: ${fonts.text};
  font-size: 18px;
  padding-horizontal: 40px;
  color: ${colors.heading};
`;

export const Image = styled.Image.attrs({
  source: image,
})`
  height: ${Dimensions.get("window").width * 0.7}px;
`;

export const Buttom = styled.TouchableOpacity`
  background-color: ${colors.green};
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  margin-bottom: 10px;
  height: 56px;
  width: 56px;
`;
