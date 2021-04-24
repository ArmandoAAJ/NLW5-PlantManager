import React from "react";
import { Button, Title, SVG } from "./styles";

interface PlantProps {
  data: {
    name: string;
    photo: string;
  };
}

export const PlantCardPrimary = ({ data, ...rest }: PlantProps) => {
  return (
    <Button {...rest}>
      <SVG uri={data.photo} />
      <Title>{data.name}</Title>
    </Button>
  );
};
