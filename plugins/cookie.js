export function setCookie(cname,cvalue,exdays) {
      var d = new Date();
      d.setTime(d.getTime()+((exdays?exdays:1)*24*60*60*1000));
      var expires = "expires="+d.toGMTString();
      document.cookie = cname + "=" + cvalue + "; " + expires;
}
export function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++)
  {
    var c = ca[i].trim();
    if (c.indexOf(name)==0) return c.substring(name.length,c.length);
  }
  return "";
}
export function checkCookie(cname,params) {
  let param = params.split(';');
  let count = '';
  for (let i in param){
     if( param[i].split('=')[0] == cname){
       count = param[i].split('=')[1]
       break;
     }
  }
  return count
}
