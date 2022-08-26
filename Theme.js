import { extendTheme } from '@chakra-ui/react'

const breakpoints = {
    xxs: '20rem',
    xs: '30rem',
    sm: '40rem',
    md: '48rem',
    base: '64rem',
    xl: '80rem',
    '2xl': '96rem',
}

const theme = extendTheme({ ...breakpoints }, {
    fonts: {
        heading: `'Syne', sans-serif`,
        body: `'Fira Sans', sans-serif`,
        button: `'IBM Plex Sans', sans-serif`
    },
    styles: {
        global: {
            body: {
                bg: '#000'
            }
        }
    }
})

export default theme