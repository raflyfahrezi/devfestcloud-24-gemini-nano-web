import { TPost, TComment } from '@/models'

export const seedPosts: TPost[] = [
  {
    id: 'f8cfcaa1-7b22-40bf-b794-05db7ca21f07',
    createdDate: new Date(),
    content: `Kamu bisa belajar Computational Thinking dan basic coding dengan lebih fun lewat app namanya Scratch, dan gak perlu install coding tools apapun.

Tool yang gue rasa ideal juga buat dikenalin ke anak SD. Scratch ini seru karena banyak topik programming yang bisa terekspose dengan interaktif.`,
  },
  {
    id: '9556c62f-fb2f-47bd-b57b-be28e1428a53',
    createdDate: new Date(),
    content: `Competitive programming itu mostly computational thinking. Computational thinking itu elemennya 4:

💭 Problem abstraction: fokus ke masalah yang penting

"Budi punya 2 semangka, dan Agus punya 5 semangka. Berapa total semangka Budi dan Agus?"

Problem abstraction itu mengubah dari statement di atas menjadi

"2 + 5 = ??"`,
  },
  {
    id: '2928fe29-d530-414f-a222-1a4c3d5108ca',
    createdDate: new Date(),
    content: `iShowSpeed shares his thoughts on if streaming is harder than working a 9-5 job 

“I was a server… let me tell you this no… it was way harder, it was draining mentally… I don’t get how streamers even say that”`,
  },
]

export const seedComment: TComment[] = [
  {
    id: '07855953-5f15-4e61-be50-83a1b0acfd7d',
    idPost: 'f8cfcaa1-7b22-40bf-b794-05db7ca21f07',
    content:
      'Im totally agree, we can learn computational thinking using Scratch',
    createdDate: new Date(),
  },
  {
    id: '20165685-0cc6-44bd-9af5-527264126469',
    idPost: 'f8cfcaa1-7b22-40bf-b794-05db7ca21f07',
    content: 'This opinion is gold, thank you for sharing',
    createdDate: new Date(),
  },
  {
    id: 'eaa9dfc3-7ff1-44fc-9ce0-db22a020a7ab',
    idPost: 'f8cfcaa1-7b22-40bf-b794-05db7ca21f07',
    content: 'I have the same opinion with him',
    createdDate: new Date(),
  },
]
