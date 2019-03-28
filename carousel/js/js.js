/*
* @Author: name
* @Date:   2019-03-28 10:19:12
* @Last Modified by:   name
* @Last Modified time: 2019-03-28 14:01:34
*/

(function(w, el) {
    let prev = el.querySelector(".prev"),
        next = el.querySelector(".next"),
        index = 0
    prev.addEventListener("click", e => {
        let lis = el.querySelectorAll("ul li"),
            len = lis.length,
            i = 0
        ++ index
        for(; i < len; ++i) {
            lis[i].style.transform = "rotateX(" + index * 90 + "deg)"
        }
    }, false)
    next.addEventListener("click", e => {
        let lis = el.querySelectorAll("ul li"),
            len = lis.length,
            i = 0
        -- index
        for(; i < len; ++i) {
            lis[i].style.transform = "rotateX(" + index * 90 + "deg)"
        }
    }, false)
})(window, document)