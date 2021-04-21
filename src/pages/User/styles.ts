import styled from "styled-components/native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

interface PropsInput {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
`;

export const View = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Form = styled.View`
  flex: 1;
  justify-content: center;
  padding-horizontal: 54px;
  align-items: center;
`;

export const Text = styled.Text`
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  color: ${colors.heading};
  font-family: ${fonts.heading};
  margin-top: 20px;
`;

export const TextEmoji = styled.Text`
  font-size: 48px;
`;

export const Input = styled.TextInput<PropsInput>`
  border-bottom-width: 1px;
  border-color: ${(props) =>
    props.isFocused || props.isFilled ? colors.green : colors.gray};
  color: ${colors.heading};
  width: 100%;
  font-size: 18px;
  margin-top: 50px;
  padding: 10px;
  text-align: center;
`;

export const Footer = styled.View`
  width: 100%;
  margin-top: 40px;
  padding-horizontal: 20px;
`;

export const KeyboardStyled = styled.KeyboardAvoidingView`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;
