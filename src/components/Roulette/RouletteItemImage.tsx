import { useState, type FC } from 'react'

export const RouletteItemImage: FC<{ src: string }> = ({ src }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  return (
    <>
      <img
        src={src}
        onLoad={() => setIsImageLoaded(true)}
        className='w-3/4'
        alt=''
      />
      {!isImageLoaded && (
        <div className='h-[88px] w-full animate-pulse rounded-lg bg-neutral-600' />
      )}
    </>
  )
}
