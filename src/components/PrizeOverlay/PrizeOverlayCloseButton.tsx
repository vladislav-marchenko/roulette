import { AiOutlineClose } from 'react-icons/ai'

export const PrizeOverlayCloseButton = () => {
  return (
    <button className='absolute top-4 right-4 z-30 flex cursor-pointer items-center justify-center rounded-full border border-neutral-500/50 bg-neutral-600 p-1 transition-colors duration-200 hover:bg-neutral-700'>
      <AiOutlineClose size={20} />
    </button>
  )
}
