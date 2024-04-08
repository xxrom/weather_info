import WeatherOneDayPage from "../page";

export type WeatherInCity = { params: { slug: string } };

const WeatherInCity = ({ params: { slug } }: WeatherInCity) => (
  <WeatherOneDayPage city={slug} />
);

export default WeatherInCity;
