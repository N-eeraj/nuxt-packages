import techStack from '@/data/tech-stack.json'
import packageCategoriesIcons from '@/data/package-categories-icons.json'

// demo raw files
import autoAnimateDemo from '@/data/demos/auto-animate.txt?raw'
import colorModeDemo from '@/data/demos/color-mode.txt?raw'
import deviceDemo from '@/data/demos/device.txt?raw'
import googleFontsDemo from '@/data/demos/google-fonts.txt?raw'
import headlessUIDemo from '@/data/demos/headless-ui.txt?raw'
import i18nDemo from '@/data/demos/i18n.txt?raw'
import imageDemo from '@/data/demos/image.txt?raw'
import marqueeDemo from '@/data/demos/marquee.txt?raw'
import nuxtIconDemo from '@/data/demos/nuxt-icon.txt?raw'
import nuxtIconsDemo from '@/data/demos/nuxt-icons.txt?raw'
import piniaDemo from '@/data/demos/pinia.txt?raw'
import swiperDemo from '@/data/demos/swiper.txt?raw'
import tailwindDemo from '@/data/demos/tailwind.txt?raw'
import unoCSSDemo from '@/data/demos/uno-css.txt?raw'
import veeValidateDemo from '@/data/demos/vee-validate.txt?raw'

const useDemoCode = () => {
  return {
    autoAnimateDemo,
    colorModeDemo,
    deviceDemo,
    googleFontsDemo,
    headlessUIDemo,
    i18nDemo,
    imageDemo,
    marqueeDemo,
    nuxtIconDemo,
    nuxtIconsDemo,
    piniaDemo,
    swiperDemo,
    tailwindDemo,
    unoCSSDemo,
    veeValidateDemo,
  }
}

export {
  techStack,
  packageCategoriesIcons,
  useDemoCode,
}
