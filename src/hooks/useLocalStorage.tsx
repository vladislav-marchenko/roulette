import { useState } from 'react'

export const useLocalStorage = <Value,>(key: string, defaultValue: Value) => {
  const [state, setState] = useState<Value>(() => {
    try {
      const value = JSON.parse(localStorage.getItem(key) ?? '')
      return value ?? defaultValue
    } catch (error) {
      return defaultValue
    }
  })

  const setValue = (value: Value) => {
    localStorage.setItem(key, JSON.stringify(value))
    setState(value)
  }

  return [state, setValue] as const
}
