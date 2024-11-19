let dateNow = new Date ();
let hours = dateNow.getHours();
let minute = dateNow.getMinutes();
let seconds = dateNow.getSeconds();

const headerText = document.getElementById('header-text');
const today = document.getElementById('today');
const leftUntilToYear = document.getElementById('left-until');


function getDay () {
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    return "Сегодня: " + days[dateNow.getDay()];
}

function currentTime() {
    let date = new Date(); 
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let ampm = 'AM';
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    if (hour >= 12) {
        hour = hour % 12;
        ampm = 'PM';
    }
    document.getElementById("curent-time").innerText = 'Текущее время: ' + hour + ':' + min + ':' + sec + ' '+ ampm; 
    let t = setTimeout(function(){ currentTime() }, 1000);
  }
  
  function updateTime(k) {
    if (k < 10) {
      return "0" + k;
    }
    else {
      return k;
    }
  }
  
  currentTime();

function daysLeftNewYear () {
    nextDate = new Date("January 1, 2025");
    msPerDay = 24*60*60*1000;
    daysLeft = Math.round((nextDate.getTime() - dateNow.getTime())/msPerDay);
    dayname=""
    ds = "" +daysLeft
    dd = parseInt(ds.substr(ds.length-1))
    if(daysLeft>4&&daysLeft<21)dayname = " дней"
    else if(dd==1)dayname = " день"
    else if(dd==2||dd==3||dd==4)dayname = " дня"
    else dayname = " дней"
    return 'До Нового года осталось: ' + daysLeft + dayname;
}

function timeOfDay () {
    
    if (hours <= 6) {
        return 'Доброй ночи';
    } 
    else if (hours <= 12) {
        return'Доброе утро'
    } 
    else if (hours <= 18) {
        return'Добрый день'
    } 
    else { 
        return'Добрый вечер'
    }
}

headerText.textContent = timeOfDay();
today.textContent = getDay();
leftUntilToYear.textContent = daysLeftNewYear();


