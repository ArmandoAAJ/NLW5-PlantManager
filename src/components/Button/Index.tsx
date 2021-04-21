import React from "react";

import { ButtonTouchable, Text } from "./styles";

export const Button: React.FC = ({ children, ...rest }) => {
  return (
    <ButtonTouchable {...rest}>
      <Text>Confirmar</Text>
      {children}
    </ButtonTouchable>
  );
};
