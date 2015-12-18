'use strict'
import Api from '../api'

export const Get_Intheaters = 'Get_Intheaters'

/*
 * action 创建函数
 */
let actions = {
  //异步函数
  getIntheatersSync() {
      return async function(dispatch) {
        // return Biz.add(file).then(res => {
        //   if(res.ok)
        //     dispatch(actions.addFile(file))
        // })
        let data = await Api.getIntheaters()
        dispatch(actions.getIntheaters(data))
      }
    },

    //无状态action
    getIntheaters(data) {
      return {
        type: Get_Intheaters,
        data
      }
    }
}

export default actions
