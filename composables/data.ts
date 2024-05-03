import techStack from '@/data/tech-stack.json'
import packageCategoriesIcons from '@/data/package-categories-icons.json'

// raw description files
import aboutDescription from '@/data/descriptions/about.txt?raw'
import siteDescription from '@/data/descriptions/index.txt?raw'
import packagesDescription from '@/data/descriptions/packages.txt?raw'

// raw demo files
import aosDemo from '@/data/demos/aos.txt?raw'
import autoAnimateDemo from '@/data/demos/auto-animate.txt?raw'
import bootstrapIconsDemo from '@/data/demos/bootstrap-icons.txt?raw'
import colorModeDemo from '@/data/demos/color-mode.txt?raw'
import dayJsDemo from '@/data/demos/day-js.txt?raw'
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
import snackbarDemo from '@/data/demos/snackbar.txt?raw'
import tailwindDemo from '@/data/demos/tailwind.txt?raw'
import unoCSSDemo from '@/data/demos/uno-css.txt?raw'
import vCalendarDemo from '@/data/demos/vcalendar.txt?raw'
import veeValidateDemo from '@/data/demos/vee-validate.txt?raw'
import vitePWADemo from '@/data/demos/vite-pwa.txt?raw'
import vueUseOnLongPressDemo from '@/data/demos/vue-use/browser/on-long-press.txt?raw'
import vueUseUseClipboardDemo from '@/data/demos/vue-use/browser/use-clipboard.txt?raw'
import vueUseImageDemo from '@/data/demos/vue-use/browser/use-image.txt?raw'
import vueUseUseDocumentVisibilityDemo from '@/data/demos/vue-use/elements/use-document-visibility.txt?raw'
import vueUseUseFetchDemo from '@/data/demos/vue-use/network/use-fetch.txt?raw'
import vueUseCreateGlobalStateDemo from '@/data/demos/vue-use/state/create-global-state.txt?raw'
import vueUseUseDateFormatDemo from '@/data/demos/vue-use/time/use-date-format.txt?raw'
import vueUseUseTimeAgoDemo from '@/data/demos/vue-use/time/use-time-ago.txt?raw'
import vueUseGetDemo from '@/data/demos/vue-use/utilities/get.txt?raw'
import vueUseSetDemo from '@/data/demos/vue-use/utilities/set.txt?raw'
import vueUseUseClonedDemo from '@/data/demos/vue-use/utilities/use-cloned.txt?raw'
import vueUseUseToggleDemo from '@/data/demos/vue-use/utilities/use-toggle.txt?raw'

const useDescription = () => {
  return {
    aboutDescription,
    siteDescription,
    packagesDescription,
  }
}

const useDemoCode = () => {
  return {
    aosDemo,
    autoAnimateDemo,
    colorModeDemo,
    bootstrapIconsDemo,
    dayJsDemo,
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
    snackbarDemo,
    tailwindDemo,
    unoCSSDemo,
    vCalendarDemo,
    veeValidateDemo,
    vitePWADemo,
    vueUseDemos: {
      browser: {
        onLongPress: vueUseOnLongPressDemo,
        useClipboard: vueUseUseClipboardDemo,
        useImage: vueUseImageDemo,
      },
      elements: {
        useDocumentVisibility: vueUseUseDocumentVisibilityDemo
      },
      network: {
        useFetch: vueUseUseFetchDemo,
      },
      state: {
        createGlobalState: vueUseCreateGlobalStateDemo,
      },
      time: {
        useDateFormat: vueUseUseDateFormatDemo,
        useTimeAgo: vueUseUseTimeAgoDemo,
      },
      utilities: {
        get: vueUseGetDemo,
        set: vueUseSetDemo,
        useCloned: vueUseUseClonedDemo,
        useToggle: vueUseUseToggleDemo,
      },
    },
  }
}

export {
  techStack,
  packageCategoriesIcons,
  useDescription,
  useDemoCode,
}
