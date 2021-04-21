import styled from "styled-components/native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const ButtonTouchable = styled.TouchableOpacity`
  background-color: ${colors.green};
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  height: 56px;
`;

export const Text = styled.Text`
  font-size: 16px;
  color: ${colors.white};
`;
