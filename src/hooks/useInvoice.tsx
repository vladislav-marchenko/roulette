import { getInvoiceLink } from '@/services/api'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import WebApp from '@twa-dev/sdk'
import { toast } from 'sonner'

export const useInvoice = (onSettled?: () => void) => {
  const queryClient = useQueryClient()
  const { mutate, isPending } = useMutation({
    mutationFn: getInvoiceLink,
    onSuccess: handleInvoice,
    onError: (error) => toast.error(error.message ?? 'Something went wrong...'),
    onSettled
  })

  function handleInvoice({ invoiceLink }: { invoiceLink: string }) {
    WebApp.openInvoice(invoiceLink, (status) => {
      switch (status) {
        case 'paid':
          toast.success('Deposit successful!')
          break
        case 'pending':
          toast.success('Deposit pending...')
          break
        case 'cancelled':
          toast.info('You can complete your deposit from the actions history')
          break
        case 'failed':
          toast.error('Deposit failed!')
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
