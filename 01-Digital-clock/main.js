let hrs = document.getElementById('hrs');
let min = document.getElementById('mins');
let sec = document.getElementById('secs');

let date = document.getElementById('dt');
let month = document.getElementById('mon');
let year = document.getElementById('yr');

let day = document.getElementById('day'); 




setInterval(()=>{
    let currentTime = new Date();
    console.log(currentTime);
    hrs.innerHTML = (currentTime.getHours() < 10 ? "0" :  "" )+ currentTime.getHours();
    min.innerHTML = (currentTime.getMinutes() < 10 ? "0" :  "" )+ currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds() < 10 ? "0" :  "" )+ currentTime.getSeconds();

    date.innerHTML = (currentTime.getDate() < 10 ? "0" :  "" )+ currentTime.getUTCDate();
    month.innerHTML = (currentTime.getMonth() + 1 < 10 ? "0" :  "" )+ (currentTime.getMonth() + 1);
    year.innerHTML =  currentTime.getFullYear();

    // Array of day names
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    day.innerHTML = days[currentTime.getDay()]; // Displaying the day of the week

},1000)