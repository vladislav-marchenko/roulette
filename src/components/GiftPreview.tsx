import Lottie from 'lottie-react'
import type { FC } from 'react'

export const GiftPreview: FC<{ lottie: unknown }> = ({ lottie }) => {
  return (
    <Lottie
      animationData={lottie}
      className='mx-auto max-w-64 rounded-xl bg-neutral-700 p-2'
    />
  )
}
