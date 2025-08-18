import { SettingsButton } from './SettingsButton'
import { useLocalStorage } from '@/hooks/useLocalStorage'

export const DemoModeSwitch = () => {
  const [isSwitchDisplayed, setIsSwitchDisplayed] = useLocalStorage(
    'demoModeSwitch',
    true
  )

  return (
    <div className='flex items-center gap-2'>
      <SettingsButton
        isActive={isSwitchDisplayed}
        onClick={() => setIsSwitchDisplayed(true)}
      >
        on
      </SettingsButton>
      <SettingsButton
        isActive={!isSwitchDisplayed}
        onClick={() => setIsSwitchDisplayed(false)}
      >
        off
      </SettingsButton>
    </div>
  )
}
