function helpbox(){
    //if(!sbgetCookie("toolhelp")) {
    //    document.getElementById("pricebar_bubble").style.left=(document.getElementById("slider-range").offsetLeft+15)+"px";
    //    document.getElementById("pricebar_bubble").style.top=(document.getElementById("slider-range").offsetTop+15)+"px";
    //    document.getElementById("pricebar_bubble").style.display='block';
    //    setTimeout(function () {document.getElementById("pricebar_bubble").style.display="none"}, 8000);
    //}
}
function closethlp(){
    document.getElementById('pricebar_bubble').style.display="none";
    document.cookie = "toolhelp=1;path=/;";
}
function addlist(s,p){
	http_request = false;
	http_request = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
	if (!http_request) {
		alert('e1');
		return false;
	}

	http_request.onreadystatechange = function() {
	    if (http_request.readyState==4){
            if (http_request.status == 200) {
                if (http_request.responseText.length>10){
                    //alert ("會員專屬功能，請先登入。");
                    //location.href='http://reg.ezprice.com.tw/login.php?nu='+bcod(location.href);
                		logandjoin(bcod("addlist("+s+","+p+");"));
                }else{
          	        alert ("已加入想要清單，您可以至會員專區管理清單內容。");
          	    }
    		}
		}
	};

	http_request.open('POST', '/shoplist_act.php', true);
	http_request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	http_request.send("m=n&s="+s+"&p="+p);
}
function addlist_s(obj,s,p){
	http_request = false;
	http_request = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
	if (!http_request) {
		alert('e1');
		return false;
	}

	http_request.onreadystatechange = function() {
	    if (http_request.readyState==4){
            if (http_request.status == 200) {
                if (http_request.responseText.length>10){
                    //alert ("會員專屬功能，請先登入。");
                    //location.href='http://reg.ezprice.com.tw/login.php?nu='+bcod(location.href);
                    //$("#login").click();
                    logandjoin(bcod("addlist("+s+","+p+");"));
                }else{
          	        alert ("已加入想要清單，您可以至會員專區管理清單內容。");
          	        $(obj).html("已加入想要清單");
          	        $(obj.parentNode).attr('class','want_on');
          	        $(obj).attr('onclick','');
          	        if ($(".Rsidebar_open_v2").css('display')!='none') showTab(2);
          	    }
    		}
		}
	};

	http_request.open('POST', '/shoplist_act.php', true);
	http_request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	http_request.send("m=n&s="+s+"&p="+p);
}

function lwnotify(obj,s,p){
	http_request = false;
	http_request = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
	if (!http_request) {
		alert('e1');
		return false;
	}

	http_request.onreadystatechange = function() {
	    if (http_request.readyState==4){
            if (http_request.status == 200) {
                if (http_request.responseText.length>10){
                    //alert ("會員專屬功能，請先登入。");
                    location.href='http://reg.ezprice.com.tw/login.php?nu='+bcod(location.href);
                }else{
                    if (http_request.responseText=="Y"){
                		$("#emlrenew").fancybox({
                				'width'				: 650,
                				'height'			: 180,
                				'type'				:'iframe',
                				scrolling:"no",
                				autoDimensions:!1,
                				autoScale:!1,
                		});
                		$('#emlrenew').trigger('click');
                		/*sop = 1;
                    	$("body").click(function(e) {
                    			if(sop==1){
                    		  	if(e.target.name=="clk"){
                    		  		jQuery.fancybox.close();
                    		  		sop = 0;
                    		  	}
                    		  }
                    	});*/
              	        $(obj).html("已加入低價通知清單");
                    }else{
              	        alert ("已加入低價通知清單，您可以至會員專區管理清單內容。");
              	        $(obj).html("已加入低價通知清單");
              	        //$(obj.parentNode).attr('class','want_on');
              	    }
          	        $(obj).attr('onclick','');
          	    }
    		}
		}
	};

	http_request.open('POST', '/pdnotify_act.php', true);
	http_request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	http_request.send("m=n&s="+s+"&p="+p);
}

function bcod(data) {
  var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  var o1, o2, o3, h1, h2, h3, h4, bits, i = 0,
    ac = 0,
    enc = "",
    tmp_arr = [];

  if (!data) {
    return data;
  }

  do { 
    o1 = data.charCodeAt(i++);
    o2 = data.charCodeAt(i++);
    o3 = data.charCodeAt(i++);

    bits = o1 << 16 | o2 << 8 | o3;

    h1 = bits >> 18 & 0x3f;
    h2 = bits >> 12 & 0x3f;
    h3 = bits >> 6 & 0x3f;
    h4 = bits & 0x3f;

    tmp_arr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
  } while (i < data.length);

  enc = tmp_arr.join('');

  var r = data.length % 3;

  return (r ? enc.slice(0, r - 3) : enc) + '==='.slice(r || 3);

}

function logandjoin(nu){
	$.fancybox.open({
					href : 'http://reg.ezprice.com.tw/ezpd_login.php?nu='+nu,
					type : 'iframe',
					padding : 5,
					closeBtn: false,
					width					 :'602',
					height				 :'432',
					padding				 :'0',
					iframe : {
						scrolling : 'no',
						preload   : false
					},
	});

}