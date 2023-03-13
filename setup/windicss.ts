import { resolve } from 'path'
import { defineWindiSetup } from '@slidev/types'

export default defineWindiSetup(() => ({
  extract: {
    include: [
      resolve(__dirname, '../**/*.{vue,ts}'),
    ],
  },
  shortcuts: {
    // custom the default background
    'bg-main': 'bg-black-and-royalty bg-cover bg-bottom-right bg-no-repeat',
  },
  theme: {
    extend: {
      backgroundImage: {
        'black-and-royalty': 'url("/bg.svg"), linear-gradient(180deg, #000000 0%, #232A52 100%)'
      },
      fontFamily: {
        paragraph: ['ATyp Display', 'sans-serif'],
        title: ['ATyp Display Bold', 'sans-serif'],
      },
    }
  }
}))
