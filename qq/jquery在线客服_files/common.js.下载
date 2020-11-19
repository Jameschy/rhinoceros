var popupHtml="<div id='popup' class='IE6PNG'><div class='popupFrame'><div class='popupBox'><a class='popupClose IE6PNG'></a><div class='popupContent'></div></div></div></div>";var userAgent=navigator.userAgent.toLowerCase();var is_opera=userAgent.indexOf('opera')!=-1&&opera.version();var is_moz=(navigator.product=='Gecko')&&userAgent.substr(userAgent.indexOf('firefox')+8,3);var is_ie=(userAgent.indexOf('msie')!=-1&&!is_opera)&&userAgent.substr(userAgent.indexOf('msie')+5,3);var is_safari=(userAgent.indexOf('webkit')!=-1||userAgent.indexOf('safari')!=-1);var Common=new Object();Common.htmlEncode=function(str)
{return str.replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
Common.trim=function(str)
{return str.replace(/(^\s*)|(\s*$)/g,"");}
Common.strlen=function(str){if(is_moz)
{Charset=document.characterSet;}
else
{Charset=document.charset;}
if(Charset.toLowerCase()=='utf-8')
{return str.replace(/[\u4e00-\u9fa5]/g,"***").length;}
else
{return str.replace(/[^\x00-\xff]/g,"**").length;}}
Common.init=function(){$(function(){$("#getphonecode").on("click",function(){var url='/account/getPhocode';var phone='';$.post(url,{mobile:phone},function(data){if(data.result){Almessage(data.result,data.message);getnextCode();}},'json');});$("#mobilecode").on("blur",function(){var code=$('#mobilecode').val();if(code.length==6){var url='/account/checkmobileCode'
$.post(url,{code:code},function(data){$('#codemessage').html(data.result);},'json');}});$('.menu').find('li').removeClass('on');var navsele=$('#navselect').val();$('#nav_'+navsele).addClass('on');$(".tab ul li:first-child").addClass("on");$(".box .BoxContent:first-child").addClass("on");$(".tab ul li").hover(function(){$(this).addClass("on").siblings().removeClass("on");var $box=$(this).closest(".tab").siblings(".box").find(".BoxContent");var index=$(this).index();$box.eq(index).show().siblings().hide();});});$(".tab ul li:first-child").addClass("on");$(".box .BoxContent:first-child").addClass("on");$(".tab ul li").hover(function(){$(this).addClass("on").siblings().removeClass("on");var $box=$(this).closest(".tab").siblings(".box").find(".BoxContent");var index=$(this).index();$box.eq(index).show().siblings().hide();});$(".suspend").mouseover(function(){$(this).stop();$(this).animate({width:160},400);})
$(".suspend").mouseout(function(){$(this).stop();$(this).animate({width:40},400);})
$(".headerAccount").mouseenter(function(){$(this).find(".headerAccountGuide").show();});$(".headerAccount").mouseleave(function(){$(this).find(".headerAccountGuide").hide();});topbar("#topbar");$(window).resize(function(){topbar("#topbar");});$(".bankChoice dd:lt(3)").show();$(".bankChoice .bankChoiceMore").click(function(){$(".bankChoice").css("height","auto");$(".bankChoice dd").show();});var chosebank=$("#chosebank").attr("value");$("#"+chosebank).siblings("span").css("border","1px solid #e15b54");$("#"+chosebank).attr("checked",true).parent("dd").prependTo(".bankChoice");;$(".bankChoice dd input[type=radio]").click(function(){$(this).parent("dd").prependTo(".bankChoice");$("#chosebank").val($(this).attr('id'));var span=$(this).siblings("span");span.css("border","1px solid #e15b54").parent("dd").siblings("dd").find("span").css("border","1px solid #cccccc")
$(".bankChoice").css("height","45px");$(".bankChoice dd:gt(2)").hide();});function centered(option){var loginWidth=$(option).width();var loginHeight=$(option).height();var marginTop=loginHeight/2;var marginLeft=loginWidth/2;$(option).css({"margin-top":-marginTop+"px","margin-left":-marginLeft+"px"});}
centered(".login");$(window).resize(function(){centered(".login");});$(".agreement").click(function(){$(this).siblings(".agreementBox").toggle(300);});centered(".detailsTable");$(window).resize(function(){centered(".detailsTable");});$(".details").click(function(){$(".detailsTable").show(200);});$(".closeDetailsTable").click(function(){$(".detailsTable").hide(200);});}
$(function(){var SliderPhoto=$(".Slider .SliderBox ul li").height();var len=$(".Slider .SliderBox ul li").length;var index=0;var picTimer;$(".SliderFocus span").mouseenter(function(){index=$(".SliderFocus span").index(this);showPics(index);}).eq(0).trigger("mouseenter");$(".Slider .prev").click(function(){index-=1;if(index==-1){index=len-1;}
showPics(index);});$(".Slider .next").click(function(){index+=1;if(index==len){index=0;}
showPics(index);});$(".Slider .SliderBox ul").css("height",SliderPhoto*(len));$(".Slider").hover(function(){clearInterval(picTimer);},function(){picTimer=setInterval(function(){showPics(index);index++;if(index==len){index=0;}},2800);}).trigger("mouseleave");function showPics(index){var nowTop=-index*SliderPhoto;$(".Slider .SliderBox ul").stop(true,false).animate({"top":nowTop},500);$(".SliderFocus span").stop(true,false).removeClass("on").eq(index).stop(true,false).addClass("on");}});$.fn.smartFloat=function(){var position=function(element){var top=element.position().top,pos=element.css("position");$(window).scroll(function(){var scrolls=$(this).scrollTop();if(scrolls>top){if(window.XMLHttpRequest){element.css({position:"fixed",top:0,"box-shadow":"0 0 8px #aaaaaa"});}else{element.css({top:scrolls});};}else{element.css({position:pos,top:top,"box-shadow":"none"});};});};return $(this).each(function(){position($(this));});};function suspension(suspension){var screenWidth=$(window).width();if(screenWidth>1200){$(suspension).smartFloat();}else{$(suspension).removeAttr("style");$(window).scroll(function(){$(suspension).removeAttr("style");});}}
suspension("#suspension");$(window).resize(function(){suspension("#suspension");});function topbar(topbar){var T=100,t=0,navVar=false;$(window).scroll(function(){var t=$(window).scrollTop();var screenWidth=$(window).width();if(screenWidth>1200){if(t<T){T=t+1;if(t<2){$(topbar).removeAttr("style");navVar=true;return;}
if(navVar)
return;else{$(topbar).css({position:"fixed",top:0,"box-shadow":"0 0 8px #aaaaaa"});navVar=true;}}else{T=t;if(!navVar)
return;else{$(topbar).removeAttr("style");navVar=false;}}}else{$(topbar).removeAttr("style");}});}
function Almessage(type,message,url){$("body").append(popupHtml).show();popupContent=$(".popupContent");var classname=type==1||type==6?'popupSucceed':'popupError';var etitle=type==1?'操作成功':'操作有误';etitle=type==3?'订单详情':etitle;etitle=type==6?'充值订单生成成功':etitle;var ohtml='';if(type==4){ohtml="<br /><a href="+url+" class='MarkedB'>点击进入>></a>"}
if(type==6){ohtml=""}
var html="<div class='popupReminder "+classname+"'><h3>"+etitle+"</h3><div>"+message+ohtml+"</div></div>";popupContent.html(html);centered(".popupFrame");$(window).resize(function(){centered(".popupFrame");});$(".popupClose").click(function(){$("#popup").remove().hide();});}
function redirect(url)
{if(url.lastIndexOf('/.')>0)
{url=url.replace(/\/(\.[a-zA-Z]+)([0-9]+)$/g,"/$2$1");}
else if(url.match(/\/([a-z]+).html([0-9]+)$/)){url=url.replace(/\/([a-z]+).html([0-9]+)$/,"/$1-$2.html");}
else if(url.match(/-.html([0-9]+)$/)){url=url.replace(/-.html([0-9]+)$/,"-$1.html");}
if(url.indexOf('://')==-1&&url.substr(0,1)!='/'&&url.substr(0,1)!='?')
url=$('base').attr('href')+url;location.href=url;}
function RegTest(reg,value){return reg.test(value);}
function badFloat(num,size){if(isNaN(num))
return true;num+='';if(-1==num.indexOf('.'))
return false;var f_arr=num.split('.');if(f_arr[1].length>size){return true;}
return false;}
function formatfloat(f,size,add){f=parseFloat(f);var conf=['100000','0.00001'];switch(size){case 2:conf=['100','0.01'];break;case 3:conf=['1000','0.001'];break;case 5:conf=['100000','0.00001'];break;default:conf=['100000','0.00001'];break;}
var ff=Math.floor(f*parseFloat(conf[0]))/parseFloat(conf[0]);if(add&&f>ff)
ff+=conf[1];return ff;}
function vNum(o,len){if(badFloat(o.value,len))
o.value=formatfloat(o.value,len,0);}
function clearNoNum(obj){obj.value=obj.value.replace(/[^\d.]/g,"");obj.value=obj.value.replace(/^\./g,"");obj.value=obj.value.replace(/\.{2,}/g,".");obj.value=obj.value.replace(".","$#$").replace(/\./g,"").replace("$#$",".");}
function getnextCode()
{secs=30;wait=secs*1000;$('#getphonecode').attr('disabled',true);for(i=1;i<=(wait/1000);i++){window.setTimeout("doUpdate("+i+")",i*1000);}
window.setTimeout("Timer()",wait);}
function doUpdate(num){if(num==(wait/1000)){$('#getphonecode').val("获取语音验证码");}else{wut=(wait/1000)-num;$('#getphonecode').val("等待("+wut+")");}}
function Timer(){$('#getphonecode').attr('disabled',false);}
function centered(option){var loginWidth=$(option).width();var loginHeight=$(option).height();var marginTop=loginHeight/2;var marginLeft=loginWidth/2;$(option).css({"margin-top":-marginTop+"px","margin-left":-marginLeft+"px"});}