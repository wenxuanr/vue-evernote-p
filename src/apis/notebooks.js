import request from '@/helpers/request';
import {friendlyDate} from "../helpers/util"

const URL = {
  GET : '/notebooks',
  ADD : '/notebooks',
  UPDATE : '/notebooks/:id',
  DELETE: '/notebooks/:id'
}
export default {
  getAll() {
    return new Promise((resolve, rej) => {
      request(URL.GET).then(res => {
        res.data = res.data.sort((notebook1, notebook2)=>{
          return notebook1.createdAt < notebook2.createdAt
        })
        console.log(res.data);
        res.data.forEach(obj => obj.friendlyCreatedAt = friendlyDate(obj.createdAt))
        resolve(res);
      }).catch(e => console.log(e))
    })
  },

  updateNotebook(notebookId, { title = '', } = {title : '' }) {
    return request(URL.UPDATE.replace(':id', notebookId), 'PATCH', {title : title});
  },
  deleteNotebook(notebookId) {
    return request(URL.DELETE.replace(':id', notebookId), 'DELETE')
  },
  addNotebook({title = ''} = {title : ''}) {
    console.log({title});
    console.log(title);
    return request(URL.ADD, 'POST', {title})
  }
}
