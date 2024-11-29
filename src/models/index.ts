export type TTranslationStatus = 'readily' | 'after-download' | 'no'

export type TPost = {
  id: string
  content: string
  createdDate: Date
}

export type TComment = {
  id: string
  idPost: string
  content: string
  createdDate: Date
}
