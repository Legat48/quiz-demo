import axios from 'axios'

export const state = () => ({
  name: '',
  phone: '',
  loaded: false,
  lang: 'ru',
  dialogOpen: false,
  dialogComponent: '',
  statusApp: 1 // этапы работы приложения

})

export const getters = {
  getLang (state) {
    return state.lang
  },
  getName (state) {
    return state.name
  },
  getPhone (state) {
    return state.phone
  },
  getDialogOpen (state) {
    return state.dialogOpen
  },
  getDialogComponent (state) {
    return state.dialogComponent
  },
  getStatusApp (state) {
    return state.statusApp
  }

}

export const mutations = {
  setLoaded (state, value) {
    state.loaded = value
  },
  setLang (state, value) {
    state.lang = value
  },
  setName (state, value) {
    state.name = value
  },
  setPhone (state, value) {
    state.phone = value
  },
  toggleDialogOpen (state) {
    state.dialogOpen ? state.dialogOpen = false : state.dialogOpen = true
  },
  setDialogComponent (state, value) {
    state.countries = value
  },
  setStatusApp (state, value) {
    state.statusApp = value
  }
}

export const actions = {
  async submit ({ state }) {
    const bodyFormData = new FormData()
    bodyFormData.append('name', state.name)
    bodyFormData.append('phone', state.phone)
    const config = {
      method: 'post',
      // тут нужно разместить адрес куда отправить данные клиента
      url: 'https://mobile.ranks.pro/',
      data: bodyFormData
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    await axios(config).then((response) => {
      return true
    })
      .catch(function (error) {
        console.error(error)
        return false
      })
  }
}
