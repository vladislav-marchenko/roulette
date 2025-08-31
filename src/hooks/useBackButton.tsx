import { useRouter } from '@tanstack/react-router'
import WebApp from '@twa-dev/sdk'
import { useEffect } from 'react'

export const useBackButton = () => {
  const { history } = useRouter()

  const back = () => history.back()

  useEffect(() => {
    WebApp.BackButton.show()
    WebApp.BackButton.onClick(back)

    return () => {
      WebApp.BackButton.hide()
      WebApp.BackButton.offClick(back)
    }
  }, [])
}
