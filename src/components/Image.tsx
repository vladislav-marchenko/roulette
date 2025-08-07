import { cn } from '@/utils'
import { useState, type FC } from 'react'

interface ImageProps {
  src: string
  className?: string
}

export const Image: FC<ImageProps> = ({ src, className }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  return (
    <div className={cn('aspect-square', className)}>
      <img
        src={src}
        onLoad={() => setIsImageLoaded(true)}
        className='h-full w-full'
        hidden={!isImageLoaded}
        alt=''
      />
      {!isImageLoaded && (
        <div className='h-full w-full animate-pulse rounded-lg bg-neutral-600' />
      )}
    </div>
  )
}
