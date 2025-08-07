export const RouletteBlackout = () => {
  return (
    <div className='absolute top-0 left-0 z-10 flex h-full w-full justify-between'>
      <div className='h-full w-1/12 bg-gradient-to-r from-neutral-900 to-transparent' />
      <div className='h-full w-1/12 bg-gradient-to-r from-transparent to-neutral-900' />
    </div>
  )
}
