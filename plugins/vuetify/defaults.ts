import { IconX } from '@tabler/icons-vue'

const iconClose = h(IconX, { stroke: '1.5' })

export default {
  IconBtn: {
    icon: true,
    color: 'default',
    variant: 'text',
    density: 'comfortable',
    VIcon: {
      size: 22
    }
  },
  VAlert: {
    density: 'comfortable',
    VBtn: {
      color: undefined
    }
  },
  VBadge: {
    // set v-badge default color to primary
    color: 'primary'
  },
  VBtn: {
    // set v-btn default color to primary
    color: 'primary',
    variant: 'flat'
  },
  VCard: {
    elevation: 10
  },
  VChip: {
    size: 'small'
  },
  VExpansionPanel: {
    expandIcon: 'tabler-chevron-right',
    collapseIcon: 'tabler-chevron-right'
  },
  VExpansionPanelTitle: {
    expandIcon: 'tabler-chevron-right',
    collapseIcon: 'tabler-chevron-right'
  },
  VList: {
    density: 'comfortable',
    VCheckboxBtn: {
      density: 'compact'
    }
  },
  VPagination: {
    activeColor: 'primary',
    density: 'compact',
    variant: 'flat'
  },
  VTabs: {
    // set v-tabs default color to primary
    color: 'primary',
    density: 'comfortable',
    VSlideGroup: {
      showArrows: true
    }
  },
  VTooltip: {
    // set v-tooltip default location to top
    location: 'top'
  },
  VCheckboxBtn: {
    color: 'primary'
  },
  VCheckbox: {
    // set v-checkbox default color to primary
    color: 'primary',
    density: 'comfortable',
    hideDetails: 'auto'
  },
  VRadioGroup: {
    color: 'primary',
    density: 'comfortable',
    hideDetails: 'auto'
  },
  VRadio: {
    density: 'comfortable',
    hideDetails: 'auto'
  },
  VSelect: {
    variant: 'outlined',
    density: 'compact',
    color: 'primary',
    hideDetails: 'auto',
    clearIcon: iconClose,
    VChip: {
      color: 'primary',
      label: true
    }
  },
  VRangeSlider: {
    // set v-range-slider default color to primary
    color: 'primary',
    trackColor: 'rgb(var(--v-theme-on-surface),0.4)',
    trackSize: 4,
    thumbSize: 16,
    density: 'comfortable',
    thumbLabel: true,
    hideDetails: 'auto'
  },
  VRating: {
    // set v-rating default color to primary
    color: 'warning'
  },
  VProgressCircular: {
    // set v-progress-circular default color to primary
    color: 'primary'
  },
  VProgressLinear: {
    height: 12,
    roundedBar: true,
    rounded: true,
    bgColor: 'rgb(var(--v-theme-on-surface))'
  },
  VSlider: {
    // set v-slider default color to primary
    color: 'primary',
    trackColor: 'rgb(var(--v-theme-on-surface),0.06)',
    hideDetails: 'auto',
    thumbSize: 7,
    trackSize: 6
  },
  VTextField: {
    variant: 'outlined',
    density: 'compact',
    color: 'primary',
    hideDetails: 'auto',
    clearIcon: iconClose
  },
  VDateInput: {
    variant: 'outlined',
    density: 'compact',
    color: 'primary',
    hideDetails: 'auto',
    clearable: true,
    clearIcon: iconClose
  },
  VAutocomplete: {
    variant: 'outlined',
    color: 'primary',
    density: 'compact',
    hideDetails: 'auto',
    clearIcon: iconClose,
    VChip: {
      color: 'primary',
      label: true
    }
  },
  VCombobox: {
    variant: 'outlined',
    density: 'compact',
    color: 'primary',
    hideDetails: 'auto',
    clearIcon: iconClose,
    VChip: {
      color: 'primary',
      label: true
    }
  },
  VFileInput: {
    variant: 'outlined',
    density: 'compact',
    color: 'primary',
    hideDetails: 'auto',
    clearIcon: iconClose
  },
  VTextarea: {
    variant: 'outlined',
    density: 'compact',
    color: 'primary',
    hideDetails: 'auto'
  },
  VSwitch: {
    // set v-switch default color to primary
    density: 'compact',
    color: 'primary',
    hideDetails: 'auto'
  },
  VTimeline: {
    lineThickness: 1
  },
  VDataTable: {
    VDataTableFooter: {
      VBtn: {
        density: 'comfortable',
        color: 'default'
      }
    }
  }
}
