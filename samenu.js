function makeSelect(){function getText(el){return el.textContent||el.innerText}var div,link,links,uls;var navPrimary=document.getElementById("navPrimary");var sel=document.createElement("select");sel.onchange=function(){if(this.selectedIndex>0){window.location=this.value}};sel.options[0]=new Option("菜单选项（注册与登录）","");sel.options[0].setAttribute("selected","");div=document.getElementById("brdmenu");uls=div.getElementsByTagName("ul");for(var i=0,iLen=uls.length;i<iLen;i++){links=uls[i].getElementsByTagName("a");for(var j=0,jLen=links.length;j<jLen;j++){link=links[j];sel.appendChild(new Option(getText(link),link.href))}}if(navPrimary){navPrimary.appendChild(sel)}}window.onload=function(){makeSelect()};