import Notebook from '@/apis/notebooks'
import { Message } from 'element-ui'
const state = {
    notebooks: []
}

const getters = {
    notebooks: state => state.notebooks
}

// 封装一些同步的操作
const mutations = {
    setNoteBooks(state, payload) {
        state.notebooks = payload.notebooks
    },
    addNoteBooks(state, payload) {
        state.notebooks.unshift(payload.notebook)
    },
    updateNotebooks(state, payload) {
        let notebook = state.notebooks.find(notebook => notebook.id === payload.notebookId) || {}
        notebook.title = payload.title
    },
    deleteNotebook(state, payload) {
        state.notebooks = state.notebooks.filter(notebook => notebook.id !== payload.notebookId)
    }
}
// 异步的再action中
const actions = {
    getNotebooks({ commit }) {
        Notebook.getAll()
            .then(res => {
                commit('setNoteBooks', {notebooks: res.data})
            })
    },
    addNotebooks( { commit }, payload) {
        Notebook.addNotebook({ title : payload.title })
            .then(res => {
                commit('addNoteBooks', { notebook : res.data})
                Message.success(res.msg)
            })
    },
    updateNotebooks({ commit }, payload) {
        Notebook.updateNotebook(payload.notebookId, { title : payload.title})
            .then(res => {
                commit('updateNotebooks', { notebookId : payload.notebookId, title : payload.title })
                Message.success(res.msg)
            })
    },
    deleteNotebooks( {commit }, payload) {
        Notebook.deleteNotebook(payload.notebookId).then(res => {
            commit('deleteNotebook', { notebookId : payload.notebookId })
            Message.success(res.msg)
        })
    }

}

export default {
    state,
    getters,
    mutations,
    actions
}