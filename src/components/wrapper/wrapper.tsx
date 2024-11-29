/*
 * This is Wrapper component.
 * Component description here...
 */

import { FC, PropsWithChildren } from 'react'

const Wrapper: FC<PropsWithChildren> = ({ children }) => {
  return <div className='w-full max-w-3xl mx-auto'>{children}</div>
}

export default Wrapper
