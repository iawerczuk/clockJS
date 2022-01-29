function showTime () {
    const fullDate= new Date();

    let hour= fullDate.getHours();
    let minute=fullDate.getMinutes();
    let second=fullDate.getSeconds();

    hour=(hour < 10) ? "0" + hour : hour;
    minute=(minute < 10) ? "0" + minute : minute;
    second=(second < 10) ? "0" + second : second;

    let time=`${hour}:${minute}:${second}`;

   document.querySelector("#time").innerText=time;
   setTimeout(showTime, 1000);
   
}

function showDate () {
    const fullDate =new Date();
    const monthsList=["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "LIpiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];

    let year=fullDate.getFullYear();
    let month=monthsList[fullDate.getMonth()];
    let date=fullDate.getDate();

    let today=`${date} ${month} ${year}`;

    today=document.querySelector("#date").innerText;
}

showTime(); showDate();
