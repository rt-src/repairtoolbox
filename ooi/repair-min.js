confirm=e=>{debug;var t=new XMLHttpRequest;t.open("POST",`${API}/api/files/confirm/${e}`,!0),t.onreadystatechange=function(){4==t.readyState&&200==t.status&&t.response&&(resp=JSON.parse(t.response),debug,resp.success&&("undefined"!=typeof gtag&&gtag("event","repairing_file_start"),document.getElementById("progress-text").innerText=0,document.getElementById("label_upload").setAttribute("hidden",!0),document.getElementById("label_repair").removeAttribute("hidden"),document.getElementById("progress-bar").classList.add("bg-success"),setRepairProgress(0),setTimeout(getInfo,1e3,e)))},t.send()},getInfo=e=>{debug;var t=new XMLHttpRequest;t.open("GET",`${API}/api/repair/info/${e}`,!0),t.onreadystatechange=function(){4==t.readyState&&200==t.status&&t.response&&(resp=JSON.parse(t.response),debug,resp&&(resp&&resp.percent>=0&&(setRepairProgress(resp.percent),document.getElementById("progress-text").innerText=resp.percent),resp.complete?(setRepairProgress(100),"undefined"!=typeof gtag&&gtag("event","repairing_file_finish"),document.getElementById("progress-text").innerText=100,resp.success?window.location=`${nextBasePage}/${nextPage}?id=${e}`:window.location=`${nextBasePage}/fail.html?id=${e}`):setTimeout(getInfo,1e3,e)))},t.onload=function(){4!=t.readyState||200==t.status||secondTry||(secondTry=!0,setTimeout(getInfo,1e3,e))},t.send()};