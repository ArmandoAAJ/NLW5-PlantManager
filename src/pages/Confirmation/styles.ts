import styled from "styled-components/native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const Container = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  padding: 30px;
  justify-content: center;
  width: 100%;
`;

export const Title = styled.Text`
  font-size: 22px;
  line-height: 38px;
  text-align: center;
  color: ${colors.heading};
  font-family: ${fonts.heading};
  margin-top: 15px;
`;

export const SubTitle = styled.Text`
  font-size: 17px;
  text-align: center;
  color: ${colors.heading};
  font-family: ${fonts.text};
  padding-vertical: 20px;
`;

export const TextEmoji = styled.Text`
  font-size: 78px;
`;

export const Footer = styled.View`
  width: 100%;
  padding-horizontal: 50px;
  margin-top: 20px;
`;

export const Keyboard = styled.KeyboardAvoidingView`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;
