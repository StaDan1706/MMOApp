// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify, ThemeDefinition } from 'vuetify'

const myCustomLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#FAFAFA',
  }
}

const myCustomDarkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    background: '#212121',
  }
}



export default createVuetify({
  theme: {
    defaultTheme: 'myCustomDarkTheme',
    themes: {
      myCustomDarkTheme,
      myCustomLightTheme
    }
  }
})