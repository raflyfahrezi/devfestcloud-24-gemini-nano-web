/* eslint-disable @typescript-eslint/no-explicit-any */

/*
 * This is HomeModule component.
 * Component description here...
 */

'use client'

import { FC, useEffect } from 'react'

const HomeModule: FC = () => {
  const check = async () => {
    console.log(
      await window.translation.canTranslate({
        sourceLanguage: 'en',
        targetLanguage: 'es',
      })
    )

    // Create a translator that translates from English to French.
    const translator = await window.translation.createTranslator({
      sourceLanguage: 'en',
      targetLanguage: 'es',
    })

    translator.ondownloadprogress = (progressEvent: any) => {
      console.log(progressEvent.loaded, progressEvent.total)
    }

    const result = await translator.translate(
      'Where is the next bus stop, please?'
    )

    console.log('Where is the next bus stop, please?')
    console.log(result)
  }

  useEffect(() => {
    if (
      'translation' in self &&
      (('createTranslator' in self.translation) as unknown)
    ) {
      check()
    }
  }, [])

  return <div>HomeModule</div>
}

export default HomeModule
