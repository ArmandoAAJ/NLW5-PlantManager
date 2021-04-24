import React from "react";
import { Animated } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { Feather } from "@expo/vector-icons";

import {
  Button,
  Title,
  SVG,
  Details,
  Time,
  TimeLabel,
  Content,
  ButtonSwipeable,
} from "./styles";
import colors from "../../styles/colors";

interface PlantProps {
  data: {
    name: string;
    photo: string;
    hour: string;
    onPress: () => void;
  };
}

export const PlantCardSecondary = ({ onPress, data, ...rest }: PlantProps) => {
  return (
    <Swipeable
      overshootRight={false}
      renderRightActions={() => (
        <Animated.View>
          <Content>
            <ButtonSwipeable onPress={onPress}>
              <Feather name="trash" color={colors.white} size={32} />
            </ButtonSwipeable>
          </Content>
        </Animated.View>
      )}
    >
      <Button {...rest}>
        <SVG uri={data.photo} />
        <Title>{data.name}</Title>
        <Details>
          <TimeLabel>Regar às</TimeLabel>
          <Time>{data.hour}</Time>
        </Details>
      </Button>
    </Swipeable>
  );
};
