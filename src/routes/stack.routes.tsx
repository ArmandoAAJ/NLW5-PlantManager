import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Welcome } from "../pages/Welcome/Index";
import { User } from "../pages/User/Index";
import { Confirmation } from "../pages/Confirmation/Index";
import { PlantSave } from "../pages/PlantSave/Index";

import colors from "../styles/colors";
import { AuthRoutes } from "./tabs.routes";

const stackRoutes = createStackNavigator();

export const AppRoutes: React.FC = () => {
  return (
    <stackRoutes.Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: colors.white,
        },
      }}
    >
      <stackRoutes.Screen name="Welcome" component={Welcome} />
      <stackRoutes.Screen name="User" component={User} />
      <stackRoutes.Screen name="Confirmation" component={Confirmation} />
      <stackRoutes.Screen name="Plant" component={AuthRoutes} />
      <stackRoutes.Screen name="PlantSave" component={PlantSave} />
      <stackRoutes.Screen name="MyPlants" component={AuthRoutes} />
    </stackRoutes.Navigator>
  );
};
