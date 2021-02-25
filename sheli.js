$(document).ready(function(){ 
    var prevpage=$(".prev").attr("href"); 
    var nextpage=$(".next").attr("href"); 
    $("body").keydown(function(event){ 
      if(event.keyCode==37 && prevpage!=undefined) location=prevpage; 
      if(event.keyCode==39 && nextpage!=undefined) location=nextpage; 
       
    }); 
 }); 


jQuery(document).ready(function($) {
$body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $("html") : $("body")) : $("html,body");
$("#shang").mouseover(function() {
up()
    }).mouseout(function() {
        clearTimeout(fq)
    }).click(function() {
        $body.animate({
            scrollTop: 0
        },
        400)
    });
    $("#xia").mouseover(function() {
        dn()
    }).mouseout(function() {
        clearTimeout(fq)
    }).click(function() {
        $body.animate({
            scrollTop: $(document).height()
        },
        400)
    });
    $("#comt").click(function() {
        $body.animate({
            scrollTop: $("#respond").offset().top
        },
        400)
    });
});
function up() {
    $wd = $(window);
    $wd.scrollTop($wd.scrollTop() - 3);
    fq = setTimeout(up, 0);
}
function dn() {
    $wd = $(window);
    $wd.scrollTop($wd.scrollTop() + 2);
    fq = setTimeout(dn, 50);
}

function plbq() {
var faceQqHtml,ja_face_hide,ja_face_path,faceQq=["微笑","呲牙","哈哈","可爱","可怜","抠鼻","惊讶","害羞","调皮","闭嘴","鄙视","爱你","流泪","偷笑","亲亲","生病","白眼","右哼哼","左哼哼","嘘","衰","委屈","吐","打哈欠","抱抱","发怒","疑问","拜拜","汗","困","睡觉","难过","快哭了","酷","色","鼓掌","晕","抓狂","糗大了","阴险","坏笑","怒骂","心","伤心","钱","猪头","敲打","大兵","炸弹","太阳","月亮","玫瑰","凋谢","邮件","购物","麦克","啤酒","菜刀","刀","饥饿","面条","米饭","咖啡","蛋糕","香蕉","电话","飞机","汽车","火车坐","火车中","火车右","多云","下雨","OK","NO","耶","赞","弱","来","抱拳","握手","发财","帅","招财猫","双喜","鞭炮","灯笼","气球","伞","钻戒","药","蜡烛","礼物","闹钟","飞吻","爱情"];ja_face_getPath();if(typeof window.jQuery=="undefined"||window.jQuery.fn.jquery<1.7){a=document.createElement("script");a.src="http://gouji.org/api/js/jquery/jquery-1.10.2.min.js";a.onload=a.onreadystatechange=function(){if(!this.readyState||this.readyState=="loaded"||this.readyState=="complete"){ja_face_init()}};document.getElementsByTagName("head")[0].appendChild(a)}else{ja_face_init()}function ja_face_init(){$(document).on("click",".ja_face_box li img",function(){$this=$(this),_key=$this.attr("title");ja_face_insert_face($(".ja_face_text")[0],"["+_key+"/]");ja_face_box_hide()}).on("focus","textarea",function(){ja_face_box_show($(this))}).on("blur","textarea",function(){ja_face_box_hide()});ja_face_replace()}function ja_face_box_show(a){if(ja_face_hide){clearTimeout(ja_face_hide)}if(!faceQqHtml){faceQqHtml=true;$("body:first").append(ja_face_get_html())}_top=a.offset().top,_left=a.offset().left+a.innerWidth();a.addClass("ja_face_text");$(".ja_face_box").css({top:_top,left:_left}).show()}function ja_face_box_hide($this){if(ja_face_hide){clearTimeout(ja_face_hide)}ja_face_hide=setTimeout(function(){$(".ja_face_box").hide();$(".ja_face_text").removeClass("ja_face_text")},100)}function ja_face_get_html(){html_='<sapn class="ja_face_box"><ul>';for(var i=0,l=faceQq.length;i<l;i++){html_+='<li><img title="'+faceQq[i]+'" src="'+ja_face_path+"img/face-qq/"+i+'.gif"/></li>'}html_+="</ul></sapn>";return html_}function ja_face_insert_face(obj,str){if(document.selection){var sel=document.selection.createRange();sel.text=str}else{if(typeof obj.selectionStart==="number"&&typeof obj.selectionEnd==="number"){var startPos=obj.selectionStart,endPos=obj.selectionEnd,cursorPos=startPos,tmpStr=obj.value;obj.value=tmpStr.substring(0,startPos)+str+tmpStr.substring(endPos,tmpStr.length);cursorPos+=str.length;obj.selectionStart=obj.selectionEnd=cursorPos}else{obj.value+=str}}}function ja_face_getPath(){var a=document.getElementsByTagName("script"),len=a.length,b=document.createElement("link");ja_face_path=a[len-1].src.replace(/^(.*)\/.*/,"$1/");b.href=ja_face_path+"style.css";b.rel="stylesheet";b.type="text/css";document.getElementsByTagName("head")[0].appendChild(b)}function ja_face_replace(){var str=document.body.innerHTML;for(var i=0,l=faceQq.length;i<l;i++){str=str.replace(eval("/\\["+faceQq[i]+"\\/\\]/g"),'<img title="'+faceQq[i]+'" src="'+ja_face_path+"img/face-qq/"+i+'.gif"/>')}document.body.innerHTML=str};
}

// 百度分享代码
function bdfx() {
document.writeln("<div class=\"bdsharebuttonbox\">");
document.writeln("<a title=\"分享到QQ空间\" href=\"#\" class=\"bds_qzone\" data-cmd=\"qzone\"></a>");
document.writeln("<a title=\"分享到新浪微博\" href=\"#\" class=\"bds_tsina\" data-cmd=\"tsina\"></a>");
document.writeln("<a title=\"分享到腾讯微博\" href=\"#\" class=\"bds_tqq\" data-cmd=\"tqq\"></a>");
document.writeln("<a title=\"分享到搜狐微博\" href=\"#\" class=\"bds_tsohu\" data-cmd=\"tsohu\"></a>");
document.writeln("<a title=\"分享到网易微博\" href=\"#\" class=\"bds_t163\" data-cmd=\"t163\"></a>");
document.writeln("<a title=\"分享到微信\" href=\"#\" class=\"bds_weixin\" data-cmd=\"weixin\"></a>");
document.writeln("<a title=\"分享到百度空间\" href=\"#\" class=\"bds_hi\" data-cmd=\"hi\"></a>");
document.writeln("<a title=\"分享到人人网\" href=\"#\" class=\"bds_renren\" data-cmd=\"renren\"></a>");
document.writeln("<a title=\"分享到美丽说\" href=\"#\" class=\"bds_meilishuo\" data-cmd=\"meilishuo\"></a>");
document.writeln("<a title=\"分享到天涯社区\" href=\"#\" class=\"bds_ty\" data-cmd=\"ty\"></a>");
document.writeln("<a title=\"分享到腾讯朋友\" href=\"#\" class=\"bds_tqf\" data-cmd=\"tqf\"></a>");
document.writeln("<a href=\"#\" class=\"bds_more\" data-cmd=\"more\"></a>");
document.writeln("</div>");
document.writeln("<script>window._bd_share_config={\"common\":{\"bdSnsKey\":{},\"bdText\":\"\",\"bdMini\":\"2\",\"bdMiniList\":false,\"bdPic\":\"\",\"bdStyle\":\"0\",\"bdSize\":\"24\"},\"share\":{}};with(document)0[(getElementsByTagName(\'head\')[0]||body).appendChild(createElement(\'script\')).src=\'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=\'+~(-new Date()/36e5)];</script>");
}


function bdfx32() {
document.writeln("<div class=\"bdsharebuttonbox\">");
document.writeln("<a title=\"分享到QQ空间\" href=\"#\" class=\"bds_qzone\" data-cmd=\"qzone\"></a>");
document.writeln("<a title=\"分享到新浪微博\" href=\"#\" class=\"bds_tsina\" data-cmd=\"tsina\"></a>");
document.writeln("<a title=\"分享到腾讯微博\" href=\"#\" class=\"bds_tqq\" data-cmd=\"tqq\"></a>");
document.writeln("<a title=\"分享到搜狐微博\" href=\"#\" class=\"bds_tsohu\" data-cmd=\"tsohu\"></a>");
document.writeln("<a title=\"分享到网易微博\" href=\"#\" class=\"bds_t163\" data-cmd=\"t163\"></a>");
document.writeln("<a title=\"分享到微信\" href=\"#\" class=\"bds_weixin\" data-cmd=\"weixin\"></a>");
document.writeln("<a title=\"分享到百度空间\" href=\"#\" class=\"bds_hi\" data-cmd=\"hi\"></a>");
document.writeln("<a title=\"分享到人人网\" href=\"#\" class=\"bds_renren\" data-cmd=\"renren\"></a>");
document.writeln("<a title=\"分享到美丽说\" href=\"#\" class=\"bds_meilishuo\" data-cmd=\"meilishuo\"></a>");
document.writeln("<a title=\"分享到天涯社区\" href=\"#\" class=\"bds_ty\" data-cmd=\"ty\"></a>");
document.writeln("<a title=\"分享到腾讯朋友\" href=\"#\" class=\"bds_tqf\" data-cmd=\"tqf\"></a>");
document.writeln("<a href=\"#\" class=\"bds_more\" data-cmd=\"more\"></a>");
document.writeln("</div>");
document.writeln("<script>window._bd_share_config={\"common\":{\"bdSnsKey\":{},\"bdText\":\"\",\"bdMini\":\"2\",\"bdMiniList\":false,\"bdPic\":\"\",\"bdStyle\":\"0\",\"bdSize\":\"32\"},\"share\":{}};with(document)0[(getElementsByTagName(\'head\')[0]||body).appendChild(createElement(\'script\')).src=\'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=\'+~(-new Date()/36e5)];</script>");
}

function openNav(){
nav = document.getElementById("m-left-nav");
if(nav.style.display == "none"){
nav.style.display = "block";}
else{
nav.style.display = "none";
}}

function ffz() {
function addCopyright() {
    var Original = "本文来源：" + location.href; //修改你的网站名称
    if ("function" == typeof window.getSelection) {
        var c = window.getSelection();
        if ("Microsoft Internet Explorer" == navigator.appName && navigator.appVersion.match(/MSIE ([\d.]+)/)[1] >= 10 || "Opera" == navigator.appName) {
            var g = c.getRangeAt(0),
            h = document.createElement("span");
            h.appendChild(g.cloneContents()),
            g.insertNode(h);
            var i = h.innerHTML.replace(/(?:\n|\r\n|\r)/gi, "").replace(/<\s*script[^>]*>[\s\S]*?<\/script>/gim, "").replace(/<\s*style[^>]*>[\s\S]*?<\/style>/gim, "").replace(/<!--.*?-->/gim, "").replace(/<!DOCTYPE.*?>/gi, "");
            try {
                document.getElementsByTagName("body")[0].removeChild(h)
            } catch(f) {
                h.style.display = "none",
                h.innerHTML = ""
            }
        } else var d = "" + c;
        var e = document.getElementsByTagName("body")[0],
        f = document.createElement("div");
        f.style.position = "absolute",
        f.style.left = "-99999px",
        e.appendChild(f),
        f.innerHTML = d.replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, "$1<br />$2") + "<br />" + Original,
        c.selectAllChildren(f),
        setTimeout(function() {
            e.removeChild(f)
        },
        0)
    } else if ("object" == typeof document.selection.createRange) {
        event.returnValue = !1;
        var c = document.selection.createRange().text;
        window.clipboardData.setData("Text", c + "\n" + Original)
    }
};
document.body.oncopy = addCopyright;
}