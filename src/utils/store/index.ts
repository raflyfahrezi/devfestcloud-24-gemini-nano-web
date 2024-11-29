import { create } from 'zustand'

import { TPost, TComment } from '@/models'

type TStore = {
  posts: TPost[]
  comments: TComment[]
  addPost: (post: TPost) => void
  addComments: (comment: TComment) => void
}

export const store = create<TStore>((set) => ({
  posts: [],
  comments: [],
  addPost: (post) => set((state) => ({ posts: [...state.posts, post] })),
  addComments: (comment) =>
    set((state) => ({ comments: [...state.comments, comment] })),
}))
