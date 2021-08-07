const clockTitle = document.querySelector("#clockTitle")

function getTime() {
    const today = new Date();
    const Month = String(today.getMonth()+1).padStart(2,"0");
    const date = String(today.getDate()).padStart(2,"0");
    const hours = String(today.getHours()).padStart(2,"0");
    const minuets = String(today.getMinutes()).padStart(2, "0");
    const seconds = String(today.getSeconds()).padStart(2, "0");
    clockTitle.innerText = `${Month}. ${date} 
    ${hours}h ${minuets}m ${seconds}s`
}

getTime();
setInterval(getTime, 1000);