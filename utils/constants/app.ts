const { iconTie, iconHanger, iconCpu, iconDiamond } = useIcons()

export const CATEGORIES = {
  JEWELERY: {
    value: 'jewelery',
    icon: iconDiamond
  },
  ELECTRONICS: {
    value: 'electronics',
    icon: iconCpu
  },
  MEN_S_CLOTHING: {
    value: 'men\'s clothing',
    icon: iconTie
  },
  WOMEN_S_CLOTHING: {
    value: 'women\'s clothing',
    icon: iconHanger
  }
}
