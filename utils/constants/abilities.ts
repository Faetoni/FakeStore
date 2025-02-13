export const subjects = Object.freeze({
  PRODUCTS: 'Products'
})

export const abilities = Object.freeze({
  CAN_MANAGE_ANY_ROUTE: { action: 'manage', subject: 'AnyRoute' },

  CAN_READ_PRODUCTS: { action: 'read', subject: subjects.PRODUCTS }
})

const permissions = {
  PRODUCTS__READ: [abilities.CAN_READ_PRODUCTS]
}

export const buildAbilitiesFromPermissions = permissionCodes => {
  return permissionCodes?.reduce((acc, code) => {
    const permissionAbilities = Object.entries(permissions).find(_ => _?.[0] === code)?.[1]

    permissionAbilities?.length && acc.push(...permissionAbilities)

    return acc
  }, []) || []
}
