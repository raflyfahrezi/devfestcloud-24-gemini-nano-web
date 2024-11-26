import { TTranslationStatus } from '@/models'

export const checkCanTranslate = async (
  sourceLanguage: string,
  targetLanguage: string
): Promise<TTranslationStatus> => {
  return await window.translation.canTranslate({
    sourceLanguage,
    targetLanguage,
  })
}
