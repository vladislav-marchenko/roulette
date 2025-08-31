import { RouletteContent } from './RouletteContent'
import { Error } from '@/components/Error'
import { getRoulette } from '@/services/api'
import { useQuery } from '@tanstack/react-query'
import { useParams } from '@tanstack/react-router'

export const Roulette = () => {
  const { id } = useParams({ from: '/roulettes/$id' })
  const { isError, error, refetch } = useQuery({
    queryKey: ['roulette', id],
    queryFn: () => getRoulette(id),
    enabled: !!id
  })

  if (isError) {
    return <Error error={error as Error} refetch={refetch} />
  }

  return <RouletteContent />
}
