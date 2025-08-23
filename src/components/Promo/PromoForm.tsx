import { Button } from '@/components/Button'
import { activatePromocode } from '@/services/api'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState, type FormEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { toast } from 'sonner'

export const PromoForm = () => {
  const { t } = useTranslation()
  const [code, setCode] = useState('')

  const queryClient = useQueryClient()
  const { mutate, isPending } = useMutation({
    mutationFn: activatePromocode,
    onSuccess: () => {
      setCode('')
      queryClient.invalidateQueries({ queryKey: ['me'] })
      toast.success('Promocode activated')
    },
    onError: (error) => {
      toast.error(error.message)
    }
  })

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    mutate(code)
  }

  return (
    <form onSubmit={onSubmit} className='flex flex-col gap-4'>
      <div className='flex flex-col gap-1'>
        <h5>{t('profile.promo.input.label')}</h5>
        <input
          value={code}
          autoFocus
          onChange={(event) => setCode(event.target.value)}
          className='w-full rounded-lg border border-neutral-600 p-2'
          placeholder={t('profile.promo.input.placeholder')}
        />
      </div>
      <Button disabled={!code} isLoading={isPending}>
        {t('profile.promo.button')}
      </Button>
    </form>
  )
}
