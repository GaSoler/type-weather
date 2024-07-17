export type NextDaysItemProps = {
  day: string;
  icon: string;
  weather: string;
  min: number;
  max: number;
}

type Props = {
  data: NextDaysItemProps
}

export function NextDaysItem({ data }: Props){
  return (
      <div className='next-day-item flex flex-col items-center text-gray-200'>
          <h2 className="font-bold text-sm text-center">{data.day}</h2>

          <img src={data.icon} alt={data.weather} className="h-[84px] w-[84px]" />

          <h3 className="font-bold text-sm text-center">{data.weather}</h3>

          <p className="font-bold text-sm text-center">
              {data.min}ºc <span className="ml-2 text-gray-400">{data.max}ºc</span>
          </p>
      </div>
  )
}