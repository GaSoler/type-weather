import { useEffect, useState } from "react";
import { CityProps, getCityByNameService } from "../services/getCityByNameService";
import { Input } from "./input";

interface Props {
  onSelect: (item: CityProps) => void;
}

export function SelectCity({ onSelect }: Props){
  const [city, setCity] = useState<CityProps[]>([]);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function getCities(name: string) {
    setIsLoading(true);

    const response = await getCityByNameService(name);

    setCity(response)
    setIsLoading(false);
  }

  useEffect(() => {
    if (search.trim().length === 0) {
      return;
    }

    const debounce = setTimeout(() => getCities(search), 500);
    return () => clearInterval(debounce);
  }, [search]);

  return (
    <div className="w-full relative">
      <Input
        isLoading={isLoading}
        placeholder='Buscar local'
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="select-list w-full rounded-lg overflow-hidden mt-2 absolute">
        {
          city.length > 0 && 
          city.map((item) => (
            <button type="button" key={item.id} onClick={() => onSelect(item)} className="w-full border-none bg-gray-500 cursor-pointer hover:bg-gray-600">
              <p className="py-4 px5 text-left">{item.name}</p>
            </button>
          ))
        }
      </div>
    </div>
  )
}