import { SettingsButton } from './SettingsButton'
import { useLocalStorage } from '@/hooks/useLocalStorage'

export const GiftsAnimation = () => {
  const [isAnimationEnabled, setIsAnimationEnabled] = useLocalStorage(
    'giftsAnimation',
    true
  )

  return (
    <div className='flex items-center gap-2'>
      <SettingsButton
        isActive={isAnimationEnabled}
        onClick={() => setIsAnimationEnabled(true)}
      >
        on
      </SettingsButton>
      <SettingsButton
        isActive={!isAnimationEnabled}
        onClick={() => setIsAnimationEnabled(false)}
      >
        off
      </SettingsButton>
    </div>
  )
}
