/**
 * Created by Administrator on 2018/9/13.
 */
$(function () {
//轮播图
    let img = $(".banner .ban-pic .pict");
    let dots = $(".item");
    let leftBtn = $(".leftBtn");
    let rightBtn = $(".rightBtn");
    let banner = $(".banner");
    let now = 0;
    img.first().css("opacity", 1);
    dots.eq(0).addClass("active");
    setInterval(move, 3000);
    function move() {
        now++;
        if (now == img.length) {
            now = 0;
        }
        img.css("opacity", 0).eq(now).css("opacity", 1);
        dots.removeClass("active").eq(now).addClass("active");
    }

    function movel() {
        now--;
        if (now < 0) {
            now = img.length - 1;
        }
        img.css("opacity", 0).eq(now).css("opacity", 1);
        dots.removeClass("active").eq(now).addClass("active");
    }

    leftBtn.click(function () {
        movel();
    })
    //点击右箭头
    rightBtn.click(function () {
        move();
    })
    dots.click(function () {
        $(this).addClass("active");

    })


//侧边选项卡
    let lis = $(".outer");
    lis.mouseenter(function () {
        $(".bn-choose").css("display", "none");
        $(this).children(".bn-choose").css("display", "flex");
    })
    lis.mouseleave(function () {
        $(this).children(".bn-choose").css("display", "none");
    })


//小米闪购轮播
    let btn1=$(".flash .control button")[0];
    let btn2=$(".flash .control button")[1];
    let lists=$(".mi_list");
    let widths=lists.width()/2;
    let times=0;
    $(btn2).click(function () {
        times++;
        if (times==2){
            times=1;
        }
        $(lists).css("transform",`translate(${(-widths*times)}px)`);
    })
    $(btn1).click(function () {
        times--;
        if (times<0){
            times=0;
        }
        $(lists).css("transform",`translate(${(-widths*times)}px)`)
    })





    //闪购倒计时
    let span = document.querySelectorAll(".flash .rush .time span");
    setDate();
    setInterval(setDate, 1000);//创建时间函数，使时间变成动态的
    function setDate() {
        let arr = fn();
        //arr与span一一对应
        span.forEach((v, index) => {
            v.innerHTML = arr[index];
        })
    }

    function fn() {
        let arr = [];
        let date = new Date();
        let date1 = new Date(2018, 12, 1);
        let time = (date1.getTime() - date.getTime()) / 1000;
        let hour = Math.floor(time / (24 * 60 * 60));
        arr.push(hour);
        let minute = Math.floor(time % (24 * 60 * 60) / (60 * 60));
        arr.push(minute);
        let second = Math.floor(time % (24 * 60 * 60) % (60 * 60) % 60);
        arr.push(second);
        return arr;
    }




    //为你推荐
    let button1=$("button1")[0];
    let button2=$("button1")[1];
    let miList1=$(".list");
    let w1=$(miList1).width()/2;
    let times1=0;
    $(button1).click(function () {
        times1--;//次数
        if(times1 < 0){
            times1=0;
        }
        $(miList1).css("transform",`translate(${(-w1*times1)}px)`);

    })
    $(button2).click(function () {
        times1++;
        if(times1==2){
            times1=1;
        }
        $(miList1).css("transform",`translate(${(-w1*times1)}px)`);
    })




    //家电
    let parent = $(".house .container .shang .top-right .title span1");
    let son = $(".house .right .kuai ul");
    let title = $(".house .container .shang .top-right .title span1");
//son不是parent的子元素，因为没有移出效果，所以不能用上述方法
    parent.mouseenter(function () {
        //获取索引值
        let i = $(this).index();
        title.first().css("active");
        son.css("display", "none").eq(i).css("display", "flex");
        title.removeClass("active").eq(i).addClass("active");
    })
//等同于初始化
    parent.triggerHandler('mouseenter');



    //内容轮播图
    //第一个  图书
    let imgs1=document.querySelectorAll(".con-desc1");
    let point1=document.querySelectorAll(".pin1");
    let leftbtn1=document.querySelector(".con-leftBtn1");
    let rightbtn1=document.querySelector(".con-rightBtn1");
    // console.log(imgs,point,leftbtn,rightbtn);
    let widths1=parseInt(getComputedStyle(imgs1[0],null).width);
    // console.log(widths);
    contentBn(imgs1,point1,leftbtn1,rightbtn1,widths1);


    //第二个  MIUI
    let imgs2=document.querySelectorAll(".con-desc2");
    let point2=document.querySelectorAll(".pin2");
    let leftbtn2=document.querySelector(".con-leftBtn2");
    let rightbtn2=document.querySelector(".con-rightBtn2");
    // console.log(imgs,point,leftbtn,rightbtn);
    let widths2=parseInt(getComputedStyle(imgs2[0],null).width);
    // console.log(widths);
    contentBn(imgs2,point2,leftbtn2,rightbtn2,widths2);


    //第三个  游戏
    let imgs3=document.querySelectorAll(".con-desc3");
    let point3=document.querySelectorAll(".pin3");
    let leftbtn3=document.querySelector(".con-leftBtn3");
    let rightbtn3=document.querySelector(".con-rightBtn3");
    // console.log(imgs,point,leftbtn,rightbtn);
    let widths3=parseInt(getComputedStyle(imgs3[0],null).width);
    // console.log(widths);
    contentBn(imgs3,point3,leftbtn3,rightbtn3,widths3);



    //第四个  应用
    let imgs4=document.querySelectorAll(".con-desc4");
    let point4=document.querySelectorAll(".pin4");
    let leftbtn4=document.querySelector(".con-leftBtn4");
    let rightbtn4=document.querySelector(".con-rightBtn4");
    // console.log(imgs,point,leftbtn,rightbtn);
    let widths4=parseInt(getComputedStyle(imgs4[0],null).width);
    // console.log(widths);
    contentBn(imgs4,point4,leftbtn4,rightbtn4,widths4);




//返回顶部
    let back = $(".back");
    // console.log(back);
    back.click(function () {
        $(document.body).animate({scrollTop: 0}, 600);
        $(document.documentElement).animate({scrollTop: 0}, 600);
    })


//侧边栏
    $(window).scroll(function () {
        let gd = document.body.scrollTop || document.documentElement.scrollTop;
        let bar = $(".sidebar");
        if (gd > 1800) {
            bar.css({opacity: 1});
        } else {
            bar.css({opacity: 0});
        }
    })


})











