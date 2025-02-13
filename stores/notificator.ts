import { defineStore } from 'pinia'
import type { NotificatorOptionsInterface } from '../interfaces/Notificator'

export const useNotificatorStore = defineStore('notificator', {
  state: () => {
    return {
      open: <Boolean>false,
      options: <NotificatorOptionsInterface>{
        color: 'error',
        timeout: 4000,
        text: "Something's gone wrong, sorry."
      }
    }
  },

  actions: {
    notifyError (text: string) {
      this.options.text = text
      this.options.color = 'error'
      this.open = true
    },

    notifySuccess (text: string) {
      this.options.text = text
      this.options.color = 'success'
      this.open = true
    }
  }
})
