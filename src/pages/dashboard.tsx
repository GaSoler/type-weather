import { useEffect, useState } from 'react';
import { GetWeatherByCityResponseProps, getWeatherByCity } from '../services/getWeatherByCity';
import { CityProps } from '../services/getCityByNameService';

import { Details } from '../components/details'

export function Dashboard(){
	const [data, setData] = useState<GetWeatherByCityResponseProps>({} as GetWeatherByCityResponseProps);
  const [isLoading, setIsLoading] = useState(true);
  const [city, setCity] = useState<CityProps>(JSON.parse(localStorage.getItem('@typewheather:city') ?? ''));

  useEffect(() => {
    setIsLoading(true);

    const { latitude, longitude } = city;

    getWeatherByCity({ latitude, longitude })
      .then((response) => setData(response))
      .finally(() => setIsLoading(false));
  }, [city]);

  // if (isLoading) {
  //   return <Loading />
  // }

	return (
		<div className='dashboard'>
      {/* <Today city={city.name} onSearchValue={setCity} weather={data.today.weather} /> */}
      <Details data={data.today.details} />
      {/* <NextDays data={data.nextDays} /> */}
    </div>
	)
}