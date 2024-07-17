import { useNavigate } from "react-router-dom"
import { CityProps } from "../services/getCityByNameService";
import { SelectCity } from "../components/select-city";


export function Search(){
	const navigate = useNavigate()

	function handleSelected(city: CityProps) {
		localStorage.setItem('@typewheather:city', JSON.stringify(city));
		navigate('/dashboard');
}

	return (
		<div className="w-full flex flex-col items-center p-6 custom-height bg-pattern">
			<img src="logo-large.svg" alt="Logo" />

			<main className="flex-1 max-w-[500px] flex flex-col items-center justify-center">
				<h1 className="text-3xl text-gray-100 text-center">Boas vindas ao <strong className="text-blue">TypeWeather</strong></h1>
				<span className="text-gray-200 text-xl mb-14">Escolha um local para ver a previsão do tempo</span>

				<SelectCity onSelect={handleSelected} />
			</main>
		</div>
	)
}