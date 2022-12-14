import request from '@/utils/request'

/* ð¼
æéç®¡çç¸å³çAPIè¯·æ±å½æ°
*/
const api_name = '/admin/acl/permission'

export default {

  /*
  è·åæé(èå/åè½)åè¡¨
  */
  getPermissionList() {
    return request({
      url: `${api_name}`,
      method: 'get'
    })
  },

  /*
  å é¤ä¸ä¸ªæéé¡¹
  */
  removePermission(id) {
    return request({
      url: `${api_name}/remove/${id}`,
      method: 'delete'
    })
  },

  /*
  ä¿å­ä¸ä¸ªæéé¡¹
  */
  addPermission(permission) {
    return request({
      url: `${api_name}/save`,
      method: 'post',
      data: permission
    })
  },

  /*
  æ´æ°ä¸ä¸ªæéé¡¹
  */
  updatePermission(permission) {
    return request({
      url: `${api_name}/update`,
      method: 'put',
      data: permission
    })
  },

  /*
  æ¥çæä¸ªè§è²çæéåè¡¨
  */
  toAssign(roleId) {
    return request({
      url: `${api_name}/toAssign/${roleId}`,
      method: 'get'
    })
  },

  /*
  ç»æä¸ªè§è²ææ
  */
  doAssign(roleId, permissionId) {
    return request({
      url: `${api_name}/doAssign`,
      method: 'post',
      params: { roleId, permissionId }
    })
  }
}
