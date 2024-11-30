/*
 * This is useCard hook
 * Hook description here...
 */

import { useState } from 'react'

import { checkCanTranslate, checkCanDetectLanguage } from '@/utils'

const useCard = () => {
  const [translationText, setTranslationText] = useState<string | undefined>(
    undefined
  )

  const [alertStatus, setAlertStatus] = useState<string>('')

  const translatePostHandler = async (content?: string) => {
    //
  }

  return {
    alertStatus,
    translationText,
    translatePostHandler,
  }
}

export default useCard
