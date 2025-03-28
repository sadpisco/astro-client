import { ChakraProvider as ChakraUIProvider } from '@chakra-ui/react'
import type { ReactNode } from 'react'

export default function ChakraProvider({ children }: { children: ReactNode }) {
    return (
        <ChakraUIProvider>
            {children}
        </ChakraUIProvider>
    )
} 