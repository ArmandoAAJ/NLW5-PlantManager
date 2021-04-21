import React from "react";
import { TouchableOpacityProps } from "react-native";
import { ButtonTouchable, Text } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export const Button = ({ title, ...rest }: ButtonProps) => {
  return (
    <ButtonTouchable {...rest}>
      <Text>{title}</Text>
    </ButtonTouchable>
  );
};
