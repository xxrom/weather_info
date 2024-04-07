import WeatherOneDayPage from "../page";

export type WeatherInCity = { params: { slug: string } };

const WeatherInCity = ({ params }: WeatherInCity) => {
  const { slug } = params;

  return <WeatherOneDayPage city={slug} />;
};

export default WeatherInCity;
