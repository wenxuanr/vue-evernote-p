//  实现信息的传递
import Vue from 'Vue'

export default new Vue()

/*
使用方法
import Bus from '@/helpers/bus'
Bus.$on('test', msg => {
  console.log(msg);
})
Bus.$emit('test','hello world')
 */
