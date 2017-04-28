	//Regional开始
    var flag = 0;
    var flag1 = 0;
    var flag2 = 0;
    var flag3 = 0;
$(document).ready(function(){
    $(".Regional").click(function(){
        reset();
        api.setFrameAttr({
            name: api.winName+'_body',
            bounces: false
        });
        //document.getElementsByClassName("bg")[0].addEventListener("touchmove",function(e){
        //    e.preventDefault();
        //});
        if (flag ==0){
            document.getElementById('main').style.display ='none';

            document.getElementsByClassName("bg")[0].style.display = "block";
            var i = -450;
            var time = setInterval(function(){
                if(i >= 0){
                    i = 0;
                    clearInterval(time);
                    return;
                }
                i+=75;
                document.getElementsByClassName("grade-eject")[0].style.left = i+'px';
            },10)
            flag =1;
        }else {
            api.setFrameAttr({
                name: api.winName+'_body',
                bounces: true
            });
            document.getElementById('main').style.display ='block';
            document.getElementsByClassName("grade-eject")[0].style.left = -450+'px';
            document.getElementsByClassName("bg")[0].style.display = "none";
            flag =0;
        }



    });
});
//点击遮罩
$(".bg").click(function(){
	reset();
});
$(document).ready(function(){
//  $(".grade-w>li").click(function(){
        $(".grade-t")
            .css("left","50%");
//  });
});
var mores = document.getElementsByClassName("moreul")[0]||document.getElementsByClassName("Moreul")[0];
function reset(){
    api.setFrameAttr({
        name: api.winName+'_body',
        bounces: true
    });
    document.getElementById('main').style.display ='block';
	document.getElementsByClassName("bg")[0].style.display = "none";
	document.getElementsByClassName("Brandul")[0].style.left = -450+"px";
    document.getElementsByClassName("grade-eject")[0].style.left = -450+"px";
    document.getElementsByClassName("moreul")[0].style.left = -450+"px";
    document.getElementsByClassName("Sortul")[0].style.left = -450+"px";
}
    function empty() {
        var bigBox =document.getElementsByClassName("moreul")[0];
        var liS = bigBox.getElementsByTagName("li");
        for (var i =0;i<liS.length;i++){
            liS[i].className = "";
        }
        pageParm.auctionType = 0;
        pageParm.buyType = 0;
        pageParm.status = 0;
        pageParm.houseSourceType = 0;
        pageParm.decorateType = 0;
    }

//总价
document.getElementsByClassName("Brand")[0].onclick = function(){
    reset();
    api.setFrameAttr({
        name: api.winName+'_body',
        bounces: false
    });
if (flag1 == 0){
    document.getElementById('main').style.display ='none';
    document.getElementsByClassName("bg")[0].style.display = "block";
    var i = -450;
    var time = setInterval(function(){
        if(i >= 0){
            i = 0;
            clearInterval(time);
            return;
        }
        i+=75;
        document.getElementsByClassName("Brandul")[0].style.left = i+'px';
    },10);
    flag1 =1;
}else{
    api.setFrameAttr({
        name: api.winName+'_body',
        bounces: true
    });
    document.getElementById('main').style.display ='block';
    document.getElementsByClassName("bg")[0].style.display = 'none';
    document.getElementsByClassName("Brandul")[0].style.left = -450+'px';
    flag1 = 0;
}

	
};
//户型
    document.getElementsByClassName("Sort")[0].onclick = function(){
        reset();
        api.setFrameAttr({
            name: api.winName+'_body',
            bounces: false
        });
        document.getElementById('main').style.display ='none';
        if (flag2 == 0) {
            document.getElementsByClassName("bg")[0].style.display = "block";
                var i = -450;
                var time=setInterval(function(){
                    if(i >= 0){
                        i = 0;
                        clearInterval(time);
                        return;
                    }
                    i+=75;
                    document.getElementsByClassName("Sortul")[0].style.left = i+'px';

                },10);
            flag2 = 1;
        } else{
            document.getElementById('main').style.display ='block';
            api.setFrameAttr({
                name: api.winName+'_body',
                bounces: true
            });
            document.getElementsByClassName("bg")[0].style.display = 'none';
            document.getElementsByClassName("Sortul")[0].style.left = -450+'px';
            flag2 = 0;
        }


    }
	/*****************点击户型的弹出框效果**************/
//更多
document.getElementsByClassName("more")[0].onclick = function(){
    reset();
    api.setFrameAttr({
        name: api.winName+'_body',
        bounces: false
    });

    if(flag3 ==0){
        document.getElementById('main').style.display ='none';
        document.getElementsByClassName("bg")[0].style.display = "block";
        var i = -450;
        var time = setInterval(function(){
            if(i >= 0){
                i = 0;
                clearInterval(time);
                return;
            }
            i+=75;
            mores.style.left = i+'px';
        },10)
        flag3 =1;
    }else {
        api.setFrameAttr({
            name: api.winName+'_body',
            bounces: true
        });
        document.getElementById('main').style.display ='block';
        document.getElementsByClassName("bg")[0].style.display = 'none';
        document.getElementsByClassName("more")[0].style.left = -450+'px';
        flag3 = 0;
    }

}

//判断页面是否有弹出

$(document).ready(function(){
    $(".Regional").click(function(){
        if ($('.Sort-eject').hasClass('grade-w-roll')){
            $('.Sort-eject').removeClass('grade-w-roll');
        };
    });
});
$(document).ready(function(){
    $(".Brand").click(function(){
        if ($('.Sort-eject').hasClass('grade-w-roll')){
            $('.Sort-eject').removeClass('grade-w-roll');
        };
    });
});
$(document).ready(function(){
    $(".Brand").click(function(){
        if ($('.grade-eject').hasClass('grade-w-roll')){
            $('.grade-eject').removeClass('grade-w-roll');
        };
    });
});
$(document).ready(function(){
    $(".Sort").click(function(){
        if ($('.Category-eject').hasClass('grade-w-roll')){
            $('.Category-eject').removeClass('grade-w-roll');
        };
    });
});
$(document).ready(function(){
    $(".Sort").click(function(){
        if ($('.grade-eject').hasClass('grade-w-roll')){
            $('.grade-eject').removeClass('grade-w-roll');
        };

    });
});


//js点击事件监听开始
function grade1(wbj){
    var arr = document.getElementById("gradew").getElementsByTagName("li");
    for (var i = 0; i < arr.length; i++){
        var a = arr[i];
        a.style.background = "";
    };
    wbj.style.background = "#eee"
}

function gradet(tbj){
    var arr = document.getElementById("gradet").getElementsByTagName("li");
    for (var i = 0; i < arr.length; i++){
        var a = arr[i];
        a.style.background = "";
    };
    tbj.style.background = "#fff"
}

function grades(sbj){
    var arr = document.getElementById("grades").getElementsByTagName("li");
    for (var i = 0; i < arr.length; i++){
        var a = arr[i];
        a.style.borderBottom = "";
    };
    sbj.style.borderBottom = "solid 1px #ff7c08"
}

function Categorytw(wbj){
    var arr = document.getElementById("Categorytw").getElementsByTagName("li");
    for (var i = 0; i < arr.length; i++){
        var a = arr[i];
        a.style.background = "";
    };
    wbj.style.background = "#eee"
}

function Categoryt(tbj){
    var arr = document.getElementById("Categoryt").getElementsByTagName("li");
    for (var i = 0; i < arr.length; i++){
        var a = arr[i];
        a.style.background = "";
    };
    tbj.style.background = "#fff"
}

function Categorys(sbj){
    var arr = document.getElementById("Categorys").getElementsByTagName("li");
    for (var i = 0; i < arr.length; i++){
        var a = arr[i];
        a.style.borderBottom = "";
    };
    sbj.style.borderBottom = "solid 1px #ff7c08"
}

function Sorts(sbj){
    var arr = document.getElementById("Sort-Sort").getElementsByTagName("li");
    for (var i = 0; i < arr.length; i++){
        var a = arr[i];
        a.style.borderBottom = "";
    };
    sbj.style.borderBottom = "solid 1px #ff7c08"
}
