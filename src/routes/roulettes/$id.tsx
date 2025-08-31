import { PrizeOverlay } from '@/components/PrizeOverlay/PrizeOverlay'
import { Prizes } from '@/components/Prizes/Prizes'
import { Roulette } from '@/components/Roulette/Roulette'
import { RouletteButton } from '@/components/Roulette/RouletteButton'
import { RouletteDemoSwitch } from '@/components/Roulette/RouletteDemoSwitch'
import { RouletteTitle } from '@/components/Roulette/RouletteTitle'
import { RouletteContextProvider } from '@/contexts/RouletteContext'
import { useBackButton } from '@/hooks/useBackButton'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/roulettes/$id')({
  component: App
})

function App() {
  const [isSwitchDisplayed] = useLocalStorage('demoModeSwitch', true)

  useBackButton()

  return (
    <RouletteContextProvider>
      <div className='flex flex-col gap-4'>
        <div className='flex items-start justify-between gap-4'>
          <RouletteTitle />
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
