(()=>{const e=document.querySelector(".hamburger"),t=document.querySelector(".search"),c=document.querySelector(".nav-menu"),n=document.querySelectorAll(".nav-link"),s=document.querySelector(".content");let o=document.getElementsByClassName("subnav-content-link");function l(e){e.preventDefault()}e.addEventListener("click",(function(){e.classList.toggle("active"),c.classList.toggle("active"),s.classList.toggle("active-content")})),n.forEach((e=>e.addEventListener("click",l))),t.addEventListener("click",(function(){c.classList.toggle("active")}));for(let e=0,t=o.length;e<t;e++)o[e].onclick=function(e){e.preventDefault(),alert("Congratulations! You have clicked the subnav link!")};window.onscroll=function(){r()};const a=document.getElementById("navbar");let i=a.offsetTop;const r=()=>{window.pageYOffset>=i?(a.classList.add("sticky"),c.classList.add("sticky")):(a.classList.remove("sticky"),c.classList.remove("sticky"))}})();
//# sourceMappingURL=script.js.map