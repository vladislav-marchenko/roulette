import { PrizesItem } from './PrizesItem'
import { items } from '@/consts'

export const Prizes = () => {
  return (
    <div className='space-y-2'>
      <h2 className='text-2xl font-bold'>Prizes</h2>
      <ul className='flex flex-col gap-4'>
        {items.map((item) => (
          <PrizesItem {...item} />
        ))}
      </ul>
    </div>
  )
}
