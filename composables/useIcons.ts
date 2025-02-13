import {
  IconUserHexagon,
  IconList,
  IconMenu2,
  IconPencil,
  IconTrash,
  IconX,
  IconPlus,
  IconChevronDown,
  IconChevronUp,
  IconCircleDot,
  IconCircle,
  IconPin,
  IconPinFilled,
  IconChevronRight,
  IconCaretDown,
  IconCaretRight,
  IconUser,
  IconCpu,
  IconDiamond,
  IconTie,
  IconHanger,
  IconArticle,
  IconMail,
  IconShoppingCart
} from '@tabler/icons-vue'

const buildIcon = icon => {
  return h(icon, { stroke: '1.5' })
}

export const useIcons = () => {
  const iconUserHexagon = buildIcon(IconUserHexagon)
  const iconList = buildIcon(IconList)
  const iconMenu2 = h(IconMenu2, { stroke: '1.7' })
  const iconEdit = buildIcon(IconPencil)
  const iconTrashX = buildIcon(IconTrash)
  const iconX = buildIcon(IconX)
  const iconPlus = buildIcon(IconPlus)
  const iconChevronDown = buildIcon(IconChevronDown)
  const iconChevronUp = buildIcon(IconChevronUp)
  const iconCircle = buildIcon(IconCircle)
  const iconCircleDot = buildIcon(IconCircleDot)
  const iconPin = buildIcon(IconPin)
  const iconPinFilled = buildIcon(IconPinFilled)
  const iconChevronRight = buildIcon(IconChevronRight)
  const iconCaretDown = buildIcon(IconCaretDown)
  const iconCaretRight = buildIcon(IconCaretRight)
  const iconUser = buildIcon(IconUser)
  const iconCpu = h(IconCpu, { stroke: '1.7', size: 40 })
  const iconDiamond = h(IconDiamond, { stroke: '1.7', size: 40 })
  const iconTie = h(IconTie, { stroke: '1.7', size: 40 })
  const iconHanger = h(IconHanger, { stroke: '1.7', size: 40 })
  const iconArticle = buildIcon(IconArticle)
  const iconMail = buildIcon(IconMail)
  const iconShoppingCart = h(IconShoppingCart, { stroke: '1.7', size: 40 })

  return {
    iconUserHexagon,
    iconList,
    iconMenu2,
    iconEdit,
    iconTrashX,
    iconX,
    iconPlus,
    iconChevronDown,
    iconChevronUp,
    iconCircle,
    iconCircleDot,
    iconPin,
    iconPinFilled,
    iconChevronRight,
    iconCaretDown,
    iconCaretRight,
    iconUser,
    iconCpu,
    iconDiamond,
    iconTie,
    iconHanger,
    iconArticle,
    iconMail,
    iconShoppingCart
  }
}
