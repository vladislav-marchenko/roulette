import EmptyFolder from '@/assets/lotties/empty-folder.json'
import { cn } from '@/utils'
import Lottie from 'lottie-react'
import type { FC } from 'react'

interface EmptyProps {
  title?: string
  className?: string
}

export const Empty: FC<EmptyProps> = ({ title, className }) => {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center gap-2',
        className
      )}
    >
      <Lottie animationData={EmptyFolder} className='w-full max-w-[160px]' />
      <h4 className='text-center'>{title ?? 'No data found'}</h4>
    </div>
  )
}
