import { CoreConfig } from 'core/types';

export const coreConfig: CoreConfig = {
  app: {
    appName: 'KEEN',
    appTitle: 'KEEN.uz',
    appLogoImage: 'assets/images/logo/logo.png',
    appLanguage: 'uz',
  },
  layout: {
    skin: 'default',
    type: 'vertical',
    animation: 'none',
    enableAnimation: true,
    menu: {
      hidden: false,
      collapsed: true,
    },
    navbar: {
      hidden: false,
      type: 'fixed-top',
      background: 'navbar-light',
    },
    footer: {
      hidden: false,
      type: 'footer-static',
      background: 'footer-light',
    },
    enableLocalStorage: true,
    customizer: false,
    scrollTop: false,
    buyNow: false,
  }
};
