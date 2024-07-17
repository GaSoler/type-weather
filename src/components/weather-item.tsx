interface Props {
  icon: string;
  title: string;
  value: string;
}

export function WeatherItem({icon, title, value}: Props){
  return (
    <div className='w-full flex items-center py-6 px-0'>
      <img src={icon} alt={title} className="w-8 h-8" />
      <span className="flex-1 ml-5 text-gray-200 font-bold text-left text-sm">{title}</span>
      <strong className="text-gray-100 font-bold text-xl">{value}</strong>
    </div>
  )
}