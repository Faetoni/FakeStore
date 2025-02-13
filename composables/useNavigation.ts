import { subjects } from '@/utils/constants/abilities'

export const useNavigation = () => {
  const { can } = useCasl()

  const URLS = {
    PRODUCTS: '/products',
    PRODUCT: '/product/:id'
  }

  const { iconArticle } = useIcons()

  const sections = [
    {
      title: 'Каталог',
      items: [
        {
          icon: iconArticle,
          title: 'Продукты',
          to: URLS.PRODUCTS,
          action: 'read',
          subject: subjects.PRODUCTS
        }
      ]
    }
  ]

  const paddingByDepth = depth => {
    const padding = depth === 1 ? 8 : 8 + ((depth - 1) * 23)

    return `padding-inline-start: ${padding}px !important;`
  }

  const canViewNavMenu = item => {
    if (!item.children?.length) {
      return can(item.action, item.subject)
    }

    let hasAnyVisibleChild = false

    const findAnyVisibleChild = item => {
      if (item.children?.some(i => can(i.action, i.subject)) === true) {
        hasAnyVisibleChild = true

        return
      }

      item.children.forEach(child => {
        child?.children && findAnyVisibleChild(child)
      })
    }

    findAnyVisibleChild(item)

    if (!(item.action && item.subject)) {
      return hasAnyVisibleChild
    }

    return can(item.action, item.subject) && hasAnyVisibleChild
  }

  return {
    sections,
    URLS,
    paddingByDepth,
    canViewNavMenu
  }
}
