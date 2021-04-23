import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

import Profile from "../../assets/profile.png";

export const Container = styled.View`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-top: ${getStatusBarHeight()};
`;

export const Content = styled.View``;

export const Text = styled.Text`
  font-size: 32px;
  color: ${colors.heading};
  font-family: ${fonts.text};
`;

export const Name = styled.Text`
  font-size: 32px;
  color: ${colors.heading};
  font-family: ${fonts.heading};
  line-height: 40px;
`;

export const Avatar = styled.Image.attrs({
  source: Profile,
})`
  width: 80px;
  height: 80px;
  border-radius: 40px;
`;
