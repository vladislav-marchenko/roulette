import { getInvoiceLink } from '@/services/api'
import type { Action } from '@/types/api'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import WebApp from '@twa-dev/sdk'
import { useTranslation } from 'react-i18next'
import { toast } from 'sonner'

export const useInvoice = (onSettled?: () => void) => {
  const { t } = useTranslation()

  const queryClient = useQueryClient()
  const { mutate, isPending } = useMutation({
    mutationFn: getInvoiceLink,
    onSuccess: handleInvoice,
    onError: (error) => toast.error(error.message || 'Something went wrong...'),
    onSettled
  })

  function handleInvoice({ invoiceLink }: Pick<Action, 'invoiceLink'>) {
    if (!invoiceLink) return

    WebApp.openInvoice(invoiceLink, (status) => {
      switch (status) {
        case 'paid':
          toast.success(t('balance.deposit.statuses.paid'))
          break
        case 'pending':
          toast.info(t('balance.deposit.statuses.pending'))
          break
        case 'cancelled':
          toast.info(t('balance.deposit.statuses.cancelled'))
          break
        case 'failed':
          toast.error(t('balance.deposit.statuses.failed'))
          break
      }

      setTimeout(() => {
        queryClient.invalidateQueries({ queryKey: ['me'] })
        queryClient.invalidateQueries({ queryKey: ['actions'] })
      }, 1000)
    })
  }

  return { openInvoiceLink: mutate, isPending, handleInvoice }
}
