import http from './../../../base/api/public'
import querystring from 'querystring'
let sysConfig = require('@/../config/sysConfig')
let apiUrl = sysConfig.xcApiUrlPre;
export const page_list = (page,size,params) => {
  //将json对象转成key/value对
  let query = querystring.stringify(params)
  return http.requestQuickGet(apiUrl+'/cms/page/list/'+page+'/'+size+'/?'+query);
  //return http.requestQuickGet(apiUrl+'/cms/page/list/'+page+'/'+size);
};
export  const  page_add = params => {
  return http.requestPost(apiUrl + '/cms/page/add',params)
};
export const page_get = id =>{
  return http.requestQuickGet(apiUrl + '/cms/page/get/' + id)
};
export const page_edit = (pageId,pageForm) =>{
  return http.requestPut(apiUrl + '/cms/page/edit/' + pageId,pageForm)
};
export const  page_del = pageId => {
  return http.requestDelete(apiUrl + '/cms/page/delete/' + pageId)
}
/*发布页面*/
export const page_postPage = pageId => {
  return http.requestPost(apiUrl+'/cms/page/postPage/'+ pageId)
}


