import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AppRoutes } from "./stack.routes";

export const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
};
