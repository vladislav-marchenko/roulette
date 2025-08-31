import { useState, type FC, type HTMLAttributes } from 'react'

interface ImageProps extends HTMLAttributes<HTMLDivElement> {
  src?: string
}

export const Image: FC<ImageProps> = ({ src, ...props }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  return (
    <div {...props}>
      <img
        src={src}
        onLoad={() => setIsImageLoaded(true)}
        className='h-full w-full'
        hidden={!isImageLoaded}
        alt=''
      />
      {!isImageLoaded && (
        <div className='skeleton aspect-square w-full rounded-lg' />
      )}
    </div>
  )
}
