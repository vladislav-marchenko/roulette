import { Star } from '@/components/Icons'

export const RoulettesItemSkeleton = () => {
  return (
    <div className='flex flex-col items-center gap-1 rounded-xl border border-neutral-700 bg-neutral-800 p-1.5'>
      <div className='skeleton mb-2 aspect-square w-full rounded-xl' />
      <div className='skeleton h-4 w-24' />
      <div className='flex items-center gap-1 rounded-full bg-neutral-600 px-2 py-0.5'>
        <span className='text-xs font-medium'>???</span>
        <Star size={12} />
      </div>
    </div>
  )
}
