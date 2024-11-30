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
    if (!content) {
      return
    }

    setAlertStatus('Translating')

    const statusCanDetectLanguage = await checkCanDetectLanguage()

    if (statusCanDetectLanguage !== 'readily') {
      return
    }

    const detector = await window.translation.createDetector()

    await detector.ready

    const result = await detector.detect(content)
    const currentLanguage = result?.[0]?.detectedLanguage

    if (!currentLanguage) {
      setAlertStatus('Can detect current language')
      return
    }

    const browserLanguage = navigator.language.slice(0, 2)

    const statusCanTanslate = await checkCanTranslate(
      currentLanguage,
      browserLanguage
    )

    if (statusCanTanslate === 'no') {
      setAlertStatus('Cant translate the language')
      return
    }

    const translator = await window.translation.createTranslator({
      sourceLanguage: currentLanguage,
      targetLanguage: browserLanguage,
    })

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    translator.ondownloadprogress = (event: any) => {
      console.log(event)
    }

    const translateResult = await translator.translate(content)

    setAlertStatus(`Translated from ${currentLanguage} to ${browserLanguage}`)
    setTranslationText(translateResult)
  }

  return {
    alertStatus,
    translationText,
    translatePostHandler,
  }
}

export default useCard
