import styled from "styled-components/native";
import colors from "../../styles/colors";

import image from "../../assets/watering.png";

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

export const TextTop = styled.Text`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  color: ${colors.heading};
  margin-top: 38px;
`;

export const TextBottom = styled.Text`
  text-align: center;
  font-size: 18px;
  padding-horizontal: 20px;
  color: ${colors.heading};
`;

export const Image = styled.Image.attrs({
  source: image,
})`
  width: 292px;
  height: 284px;
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
