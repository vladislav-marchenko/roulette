import { RouletteContent } from './RouletteContent'
import { Error } from '@/components/Error'
import { RouletteContext } from '@/contexts/RouletteContext'
import type { RouletteValues } from '@/types/contexts'
import { useContext } from 'react'

export const Roulette = () => {
  const {
    prizes: { isError, error, refetch }
  } = useContext(RouletteContext) as RouletteValues

  if (isError) {
    return <Error error={error as Error} refetch={refetch} />
  }

  return <RouletteContent />
}
