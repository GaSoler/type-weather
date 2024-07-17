import { Spin } from './spin'
import { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    isLoading?: boolean;
}

export function Input({ isLoading = false, ...rest}: Props) {
  return (
      <div className='w-full flex items-center relative input'>
          <input type="text" {...rest} className='w-full h-14 rounded-lg bg-gray-600 py-4 px-5 border-none text-gray-100 text-base focus:outline-none focus:border focus:border-blue placeholder:text-gray-400' />

          {isLoading && <Spin />}
      </div>
  )
}