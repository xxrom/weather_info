import { Highlight } from "../ui/Highlight";
import { Card } from "../ui/card";

export type CityTime = {
  name: string;
  dt: number;
};

export const CityTime = ({ name, dt }: CityTime) => {
  return (
    <Card className="p-4">
      <div>
        Weather for <Highlight className="capitalize">{name}</Highlight>
      </div>

      <div>{`Updated: ${new Date(dt * 1000).toString().slice(0, 21)}`}</div>
    </Card>
  );
};
