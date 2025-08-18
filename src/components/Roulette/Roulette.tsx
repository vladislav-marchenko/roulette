import { RouletteContent } from './RouletteContent'
import { Error } from '@/components/Error'
import { getPrizes } from '@/services/api'
import { useQuery } from '@tanstack/react-query'

export const Roulette = () => {
  const { isError, error, refetch } = useQuery({
    queryKey: ['prizes'],
    queryFn: getPrizes
  })

  if (isError) {
    return <Error error={error} refetch={refetch} />
  }

  return <RouletteContent />
}
