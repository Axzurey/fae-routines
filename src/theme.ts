import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
    initialColorMode: 'system',
    useSystemColorMode: false,
}

const theme = extendTheme({ config })

type colorsV = 'primary' | 'disabled' | 'hover' | 'background'

export const colors: Record<colorsV, string> = {
    primary: 'grey.10',
    disabled: 'grey.10',
    hover: 'grey.10',
    background: 'grey.10'
}

export default theme