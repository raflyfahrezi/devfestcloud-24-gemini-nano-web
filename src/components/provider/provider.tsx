/*
 * This is Provider component.
 * Component description here...
 */

'use client'

import { FC, PropsWithChildren } from 'react'
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import { ThemeProvider } from 'next-themes'

const Provider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ChakraProvider value={defaultSystem}>
      <ThemeProvider attribute='class' forcedTheme='dark'>
        {children}
      </ThemeProvider>
    </ChakraProvider>
  )
}

export default Provider
