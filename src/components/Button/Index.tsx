import React from "react";

import { ButtonTouchable } from "./styles";

export const Button: React.FC = ({ children, ...rest }) => {
  return <ButtonTouchable {...rest}>{children}</ButtonTouchable>;
};
