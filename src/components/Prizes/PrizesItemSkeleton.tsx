import { Price } from '../Price'

export const PrizesItemSkeleton = () => {
  return (
    <li className='group flex items-center gap-2'>
      <div className='skeleton aspect-square w-14 rounded-lg' />
      <div className='divider flex flex-auto flex-col gap-1'>
        <div className='skeleton h-4 w-20' />
        <Price value={0} className='skeleton' />
      </div>
    </li>
  )
}
