window.onload = function () {

    var obanner = document.getElementsByClassName('banner')[0]  //大图轮播的占位框
    var obanner_pic = document.getElementById('banner_pic')
    var obanner_pic_li = obanner_pic.getElementsByTagName('li')  //大图轮播中的每一个画框
    var oleft = document.getElementById('left')
    var oright = document.getElementById('right')
    var ool = document.getElementsByTagName('ol')
    var ool_li = ool[0].getElementsByTagName('li')
    var index = 0   //大图轮播效果所需要的数组下标
    obanner.onmouseover = function () {
        clearInterval(timer)
        oleft.style.display = "block"
        oright.style.display = "block"

    }
    obanner.onmouseout = function () {
        autoplay();
        oleft.style.display = "none"
        oright.style.display = "none"
    }
    oright.onclick = function () {
        for (i = 0; i < obanner_pic_li.length; i++) {
            obanner_pic_li[i].style.display = "none"
            ool_li[i].className = ""
        }
        index++
        if (index > obanner_pic_li.length - 1) {
            index = 0
        }
        obanner_pic_li[index].style.display = "block"
        ool_li[index].className = "yuandian_bg"
    }
    oleft.onclick = function () {
        for (i = 0; i < obanner_pic_li.length; i++) {
            obanner_pic_li[i].style.display = "none"
            ool_li[i].className = ""
        }
        index--
        if (index < 0) {
            index = obanner_pic_li.length - 1
        }
        obanner_pic_li[index].style.display = "block"
        ool_li[index].className = "yuandian_bg"
    }
    // 大图轮播自动切换开始
    function autoplay() {
        timer = setInterval(function () { //创建计时器，每隔一秒实现图片的切换效果
            for (i = 0; i < obanner_pic_li.length; i++) {
                obanner_pic_li[i].style.display = "none"
                ool_li[i].className = ""
            }
            index++
            if (index == obanner_pic_li.length) {
                index = 0
            }
            obanner_pic_li[index].style.display = "block"
            ool_li[index].className = "yuandian_bg"
        }, 3000)
    }
    autoplay();



    var nav = document.getElementsByClassName('nav-ul')[0]
    var banner = document.getElementsByClassName('banner')[0]
    window.onscroll = function () {
        //console.log('页面可以滚动')
        var scrolltop = document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset   //页面向上卷去距离的兼容性表达
        if (scrolltop > banner.offsetTop) {
            nav.className = "nav-flow"
            // console.log('ok');
        } else {
            nav.className = "nav-ul"
        }

    }
}
// 大图轮播自动切换结束
