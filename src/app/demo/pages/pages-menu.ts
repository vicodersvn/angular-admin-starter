import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'E-commerce',
    icon: 'shopping-cart-outline',
    link: '/demo/pages/dashboard',
    home: true
  },
  {
    title: 'IoT Dashboard',
    icon: 'home-outline',
    link: '/demo/pages/iot-dashboard'
  },
  {
    title: 'FEATURES',
    group: true
  },
  {
    title: 'Layout',
    icon: 'layout-outline',
    children: [
      {
        title: 'Stepper',
        link: '/demo/pages/layout/stepper'
      },
      {
        title: 'List',
        link: '/demo/pages/layout/list'
      },
      {
        title: 'Infinite List',
        link: '/demo/pages/layout/infinite-list'
      },
      {
        title: 'Accordion',
        link: '/demo/pages/layout/accordion'
      },
      {
        title: 'Tabs',
        pathMatch: 'prefix',
        link: '/demo/pages/layout/tabs'
      }
    ]
  },
  {
    title: 'Forms',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'Form Inputs',
        link: '/demo/pages/forms/inputs'
      },
      {
        title: 'Form Layouts',
        link: '/demo/pages/forms/layouts'
      },
      {
        title: 'Buttons',
        link: '/demo/pages/forms/buttons'
      },
      {
        title: 'Datepicker',
        link: '/demo/pages/forms/datepicker'
      }
    ]
  },
  {
    title: 'UI Features',
    icon: 'keypad-outline',
    link: '/demo/pages/ui-features',
    children: [
      {
        title: 'Grid',
        link: '/demo/pages/ui-features/grid'
      },
      {
        title: 'Icons',
        link: '/demo/pages/ui-features/icons'
      },
      {
        title: 'Typography',
        link: '/demo/pages/ui-features/typography'
      },
      {
        title: 'Animated Searches',
        link: '/demo/pages/ui-features/search-fields'
      }
    ]
  },
  {
    title: 'Modal & Overlays',
    icon: 'browser-outline',
    children: [
      {
        title: 'Dialog',
        link: '/demo/pages/modal-overlays/dialog'
      },
      {
        title: 'Window',
        link: '/demo/pages/modal-overlays/window'
      },
      {
        title: 'Popover',
        link: '/demo/pages/modal-overlays/popover'
      },
      {
        title: 'Toastr',
        link: '/demo/pages/modal-overlays/toastr'
      },
      {
        title: 'Tooltip',
        link: '/demo/pages/modal-overlays/tooltip'
      }
    ]
  },
  {
    title: 'Extra Components',
    icon: 'message-circle-outline',
    children: [
      {
        title: 'Calendar',
        link: '/demo/pages/extra-components/calendar'
      },
      {
        title: 'Progress Bar',
        link: '/demo/pages/extra-components/progress-bar'
      },
      {
        title: 'Spinner',
        link: '/demo/pages/extra-components/spinner'
      },
      {
        title: 'Alert',
        link: '/demo/pages/extra-components/alert'
      },
      {
        title: 'Calendar Kit',
        link: '/demo/pages/extra-components/calendar-kit'
      },
      {
        title: 'Chat',
        link: '/demo/pages/extra-components/chat'
      }
    ]
  },
  {
    title: 'Maps',
    icon: 'map-outline',
    children: [
      {
        title: 'Google Maps',
        link: '/demo/pages/maps/gmaps'
      },
      {
        title: 'Leaflet Maps',
        link: '/demo/pages/maps/leaflet'
      },
      {
        title: 'Bubble Maps',
        link: '/demo/pages/maps/bubble'
      },
      {
        title: 'Search Maps',
        link: '/demo/pages/maps/searchmap'
      }
    ]
  },
  {
    title: 'Charts',
    icon: 'pie-chart-outline',
    children: [
      {
        title: 'Echarts',
        link: '/demo/pages/charts/echarts'
      },
      {
        title: 'Charts.js',
        link: '/demo/pages/charts/chartjs'
      },
      {
        title: 'D3',
        link: '/demo/pages/charts/d3'
      }
    ]
  },
  {
    title: 'Editors',
    icon: 'text-outline',
    children: [
      {
        title: 'TinyMCE',
        link: '/demo/pages/editors/tinymce'
      },
      {
        title: 'CKEditor',
        link: '/demo/pages/editors/ckeditor'
      }
    ]
  },
  {
    title: 'Tables & Data',
    icon: 'grid-outline',
    children: [
      {
        title: 'Smart Table',
        link: '/demo/pages/tables/smart-table'
      },
      {
        title: 'Tree Grid',
        link: '/demo/pages/tables/tree-grid'
      }
    ]
  },
  {
    title: 'Miscellaneous',
    icon: 'shuffle-2-outline',
    children: [
      {
        title: '404',
        link: '/demo/pages/miscellaneous/404'
      }
    ]
  },
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/demo/auth/login'
      },
      {
        title: 'Register',
        link: '/demo/auth/register'
      },
      {
        title: 'Request Password',
        link: '/demo/auth/request-password'
      },
      {
        title: 'Reset Password',
        link: '/demo/auth/reset-password'
      }
    ]
  }
];
