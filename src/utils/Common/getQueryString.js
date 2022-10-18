// 用JS获取地址栏参数的方法（超级简单）
const getQueryString = (search, name) => {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  var r = search.substr(1).match(reg);
  if (r != null) {
    return decodeURI(r[2]);
  } else {
    return null;
  }
};

export default getQueryString;
