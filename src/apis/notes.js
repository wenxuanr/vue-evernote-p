import request from '@/helpers/request';
import {friendlyDate} from "../helpers/util"

const URL = {
  GET : '/notes/from/:notebookId',
  ADD : '/notes/to/:notebookId',
  UPDATE : '/notes/:noteId',
  DELETE: '/notes/:noteId'
}
export default {
  getAll({notebookId}) {
    return new Promise((resolve, rej) => {
      request(URL.GET.replace(':notebookId', notebookId))
        .then(res => {
          res.data = res.data.map(note => {
            note.createdAtFriendly = friendlyDate(note.createdAt);
            note.updatedAtFriendly = friendlyDate(note.updatedAt);
            return note;
          }).sort((note1, note2) => {
            return note1.updatedAt < note2.updatedAt
          });

        console.log("res: " + res);
        resolve(res);
      })
    })
  },

  updateNotebook({noteId}, { title, content }) {
    return request(URL.UPDATE.replace(':noteId', noteId), 'PATCH', {title, content});
  },
  deleteNotebook({noteId}) {
    return request(URL.DELETE.replace(':noteId', noteId), 'DELETE')
  },
  addNotebook({notebookId}, {title = '', content = ''} = {title:'', content: ''}) {
    return new Promise((resolve, rej) => {
      request(URL.ADD.replace(':notebookId', notebookId), 'POST', {title, content}).then(res => {
        res.data.createdAtFriendly = friendlyDate(res.data.createdAt);
        res.data.updatedAtFriendly = friendlyDate(res.data.updatedAt);
        resolve(res)
      })
    }).catch(e => rej(e))
  }
}
