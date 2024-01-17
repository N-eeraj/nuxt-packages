import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        tailwind: {
          primary: '#38bdf9',
          dark: '#0f172a',
        },
      },
    },
  },
}
