import React from "react";
import { Button, Text } from "./styles";

interface PropsEnvironmentButton {
  title: string;
  active?: boolean;
  onClick: () => void;
}

export const EnvironmentButton = ({
  title,
  active = false,
  onClick,
  ...rest
}: PropsEnvironmentButton) => {
  return (
    <Button onPress={onClick} active={active} {...rest}>
      <Text active={active}>{title}</Text>
    </Button>
  );
};
