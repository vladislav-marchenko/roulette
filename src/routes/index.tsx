import { PrizeOverlay } from '@/components/PrizeOverlay/PrizeOverlay'
import { Prizes } from '@/components/Prizes/Prizes'
import { Roulette } from '@/components/Roulette/Roulette'
import { RouletteButton } from '@/components/Roulette/RouletteButton'
import { RouletteDemoSwitch } from '@/components/Roulette/RouletteDemoSwitch'
import { RouletteContextProvider } from '@/contexts/RouletteContext'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { createFileRoute } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'

export const Route = createFileRoute('/')({
  component: App
})

function App() {
  const [isSwitchDisplayed] = useLocalStorage('demoModeSwitch', true)
  const { t } = useTranslation()

  return (
    <RouletteContextProvider>
      <div className='flex flex-col gap-4'>
        <div className='flex items-center justify-between'>
          <h1 className='text-[28px] leading-none font-bold md:text-center'>
            {t('play.title')}
          </h1>
          {isSwitchDisplayed && <RouletteDemoSwitch />}
        </div>
        <Roulette />
        <RouletteButton />
        <Prizes />
        <PrizeOverlay />
      </div>
    </RouletteContextProvider>
  )
}
