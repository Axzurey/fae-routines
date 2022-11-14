import * as React from 'react'

import { ChakraProvider, useColorModeValue } from '@chakra-ui/react'
import theme, { colors } from './theme';
import { MainInterface } from './interface/main';

export default function App() {
  document.body.style.overflow = "hidden" //no more scrolly wolly
  document.body.style.height = '100%'

  const backgroundColor = useColorModeValue("gray.900", "gray.10");
  const primaryTextColor = useColorModeValue("gray.10", "gray.900");
  const primaryColor = useColorModeValue("blue.200", "blue.700");
  const hoverColor = useColorModeValue('blue.500', 'blue.900');
  const disabledColor = useColorModeValue("gray.10", "gray.900");

  colors.primary = primaryColor;
  colors.background = backgroundColor;
  colors.hover = hoverColor;
  colors.disabled = disabledColor;
  colors.primaryText = primaryTextColor;

  return (
    <ChakraProvider theme={theme}>
      <MainInterface/>
    </ChakraProvider>
  )
}