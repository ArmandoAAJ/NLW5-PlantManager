import React from "react";
import { Button, Title, SVG, Details, Time, TimeLabel } from "./styles";

interface PlantProps {
  data: {
    name: string;
    photo: string;
    hour: string;
  };
}

export const PlantCardSecondary = ({ data, ...rest }: PlantProps) => {
  return (
    <Button {...rest}>
      <SVG uri={data.photo} />
      <Title>{data.name}</Title>
      <Details>
        <TimeLabel>Regar às</TimeLabel>
        <Time>{data.hour}</Time>
      </Details>
    </Button>
  );
};
