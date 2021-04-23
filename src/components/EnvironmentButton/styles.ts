import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

interface Props {
  active: boolean;
}

export const Button = styled(RectButton)<Props>`
  background-color: ${(props) =>
    props.active ? colors.green_light : colors.shape};
  height: 40px;
  width: 76px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  margin-horizontal: 5px;
`;

export const Text = styled.Text<Props>`
  color: ${colors.green_dark};
  font-family: ${(props) => (props.active ? fonts.heading : fonts.text)};
`;
