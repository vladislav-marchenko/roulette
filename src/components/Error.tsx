import DuckSad from '@/assets/lotties/duck-sad.json'
import { Button } from '@/components/Button'
import { cn } from '@/utils'
import Lottie from 'lottie-react'
import type { FC } from 'react'

interface ErrorProps {
  error: Error
  refetch?: () => void
  className?: string
}

export const Error: FC<ErrorProps> = ({ error, refetch, className }) => {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center gap-2',
        className
      )}
    >
      <Lottie animationData={DuckSad} className='w-full max-w-[160px]' />
      <h4 className='text-center'>
        Error: {error.message ?? 'Something went wrong'}
      </h4>
      {refetch && <Button onClick={refetch}>Try again</Button>}
    </div>
  )
}
