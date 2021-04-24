import styled from "styled-components/native";
import { SvgFromUri } from "react-native-svg";
import { RectButton } from "react-native-gesture-handler";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const Button = styled(RectButton)`
  width: 100%;
  padding: 25px 10px;
  border-radius: 20px;
  flex-direction: row;
  align-items: center;
  background-color: ${colors.shape};
  margin: 5px 0;
`;

export const SVG = styled(SvgFromUri).attrs({
  height: 50,
  width: 50,
})``;

export const Title = styled.Text`
  flex: 1;
  margin-left: 10px;
  color: ${colors.green_dark};
  font-family: ${fonts.heading};
  font-size: 17px;
`;

export const Details = styled.View`
  align-items: flex-end;
`;

export const Time = styled.Text`
  color: ${colors.body_dark};
  font-family: ${fonts.heading};
  font-size: 16px;
  margin-top: 5px;
`;

export const TimeLabel = styled.Text`
  color: ${colors.body_light};
  font-family: ${fonts.text};
  font-size: 16px;
`;
