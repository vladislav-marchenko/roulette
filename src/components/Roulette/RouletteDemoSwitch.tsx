import { Switch } from '@/components/Switch'
import { RouletteContext } from '@/contexts/RouletteContext'
import type { RouletteValues } from '@/types/contexts'
import { useContext, type ChangeEvent } from 'react'
import { toast } from 'sonner'

export const RouletteDemoSwitch = () => {
  const {
    demo: { isDemo, setIsDemo },
    spin: { isPending },
    roulette: { isSpinning }
  } = useContext(RouletteContext) as RouletteValues

  const toggle = (event: ChangeEvent<HTMLInputElement>) => {
    if (isSpinning || isPending) {
      return toast.info(
        'You cannot change the demo mode while spinning is in progress.',
        { duration: 3000 }
      )
    }

    setIsDemo(event.target.checked)
  }

  return (
    <div className='flex items-center gap-2'>
      <h4>Demo</h4>
      <Switch name='demo' checked={isDemo} toggle={toggle} />
    </div>
  )
}
