const t={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]"),body:document.querySelector("body")};let e=null;function n(){const e=`#${Math.floor(16777215*Math.random()).toString(16)}`;t.body.style.backgroundColor=e}t.startBtn.addEventListener("click",(function(){e=setInterval(n,1e3),t.startBtn.setAttribute("disabled",!0)})),t.stopBtn.addEventListener("click",(function(){clearInterval(e),t.startBtn.removeAttribute("disabled")}));
//# sourceMappingURL=01-color-switcher.61064c79.js.map