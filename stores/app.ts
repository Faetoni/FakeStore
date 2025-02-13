import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => {
    return {
      rail: <boolean>true,
      drawer: <boolean>true,
      breadcrumb: <Array<string>>[]
    }
  }
})
