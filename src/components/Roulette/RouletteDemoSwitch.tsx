import { Switch } from '@/components/Switch'
import { RouletteContext } from '@/contexts/RouletteContext'
import type { RouletteValues } from '@/types/contexts'
import { useContext } from 'react'

export const RouletteDemoSwitch = () => {
  const {
    demo: { isDemo, setIsDemo }
  } = useContext(RouletteContext) as RouletteValues

  return (
    <div className='flex items-center gap-2'>
      <h4>Demo</h4>
      <Switch
        name='demo'
        checked={isDemo}
        toggle={(event) => setIsDemo(event.target.checked)}
      />
    </div>
  )
}
