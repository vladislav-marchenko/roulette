import { SettingsButton } from './SettingsButton'

export const GiftsAnimation = () => {
  return (
    <div className='flex items-center gap-2'>
      <SettingsButton>on</SettingsButton>
      <SettingsButton>off</SettingsButton>
    </div>
  )
}
