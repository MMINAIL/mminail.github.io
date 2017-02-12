// Creates a cookie storage device
function setCookie(cookieName, cookieValue, cookiePath, cookieExpires)
{
   cookieValue = escape(cookieValue);

   if (cookieExpires == "")
   {
      var nowDate = new Date();
      nowDate.setMonth(nowDate.getMonth() + 6);
      cookieExpires = nowDate.toGMTString();
   }

   if (cookiePath != "")
   {
      cookiePath = ";Path=" + cookiePath;
   }

   document.cookie = cookieName + "=" + cookieValue + 
      ";expires=" + cookieExpires + cookiePath;
}

setCookie("Name","Bob","","");
setCookie("Age","101","","");
setCookie("FirstVisit","10 May 2000","","");

alert(document.cookie);