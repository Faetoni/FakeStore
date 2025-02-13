import { Ability } from '@casl/ability'
import { abilitiesPlugin } from '@casl/vue'
import { buildAbilitiesFromPermissions } from '../utils/constants/abilities'

const ability = new Ability()

export const defineAbilitiesFor = user => {
  const abilities = []

  const permissionCodes = user?.permissions

  abilities.push(...buildAbilitiesFromPermissions(permissionCodes))

  ability.update(abilities)
}

export default defineNuxtPlugin(nuxtApp => {
  const { can, cannot } = ability

  nuxtApp.vueApp.use(abilitiesPlugin, ability, {
    useGlobalProperties: true
  })

  return {
    provide: {
      ability,
      can,
      cannot
    }
  }
})
