import { Error } from '../Error'
import { RouletteContent } from './RouletteContent'
import { getPrizes } from '@/services/api'
import { useQuery } from '@tanstack/react-query'
import type { FC } from 'react'

interface RouletteProps {
  offset: number
  isSpinning: boolean
}

export const Roulette: FC<RouletteProps> = ({ offset, isSpinning }) => {
  const { isError, error, refetch } = useQuery({
    queryKey: ['prizes'],
    queryFn: getPrizes
  })

  if (isError) {
    return <Error error={error} refetch={refetch} />
  }

  return <RouletteContent offset={offset} isSpinning={isSpinning} />
}
