import * as React from 'react'

import { ChakraProvider, useColorModeValue } from '@chakra-ui/react'
import theme, { colors } from './theme';
import { MainInterface } from './interface/main';

export default function App() {
  document.body.style.overflow = "hidden" //no more scrolly wolly
  document.body.style.height = '100%'

  const backgroundColor = useColorModeValue("gray.10", "blackAlpha.600");
  const primaryColor = useColorModeValue("orange.300", "orange.200");
  const hoverColor = useColorModeValue('gray.500', 'grey.500')

  colors.primary = primaryColor;
  colors.background = backgroundColor;
  colors.hover = hoverColor;

  return (
    <ChakraProvider theme={theme}>
      <MainInterface/>
    </ChakraProvider>
  )
}