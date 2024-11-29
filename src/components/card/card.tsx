/*
 * This is Card component.
 * Component description here...
 */

import { FC } from 'react'
import { Card as BaseCard } from '@chakra-ui/react'

import { TPost } from '@/models'

type TCard = {
  //
} & Partial<TPost>

const Card: FC<TCard> = ({ content, createdDate }) => {
  return (
    <BaseCard.Root>
      <BaseCard.Body>
        <p>{content}</p>
        {createdDate && (
          <p className='text-sm text-gray-600'>
            Created at {createdDate?.toDateString()}
          </p>
        )}
      </BaseCard.Body>
    </BaseCard.Root>
  )
}

export default Card
