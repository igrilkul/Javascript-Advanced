function attachEventsListeners() {
// TODO: attach click events to all buttons

    let daysButton=document.getElementById("daysBtn");
    let hoursButton=document.getElementById("hoursBtn");
    let minutesButton=document.getElementById("minutesBtn");
    let secondsButton=document.getElementById("secondsBtn");

    function calculator(id,value)
    {
        value=Number(value);
        switch (id)
        {
            case "daysBtn":
            {
                document.getElementById("hours").value=value*24;
                document.getElementById("minutes").value=value*1440;
                document.getElementById("seconds").value=value*86400;
                console.log(id);
                break;
            }

            case "hoursBtn":
            {
                document.getElementById("days").value=value/24;
                document.getElementById("minutes").value=value*60;
                document.getElementById("seconds").value=value*3600;
                break;
            }

            case "minutesBtn":
            {
                document.getElementById("days").value=value/1440;
                document.getElementById("hours").value=value/60;
                document.getElementById("seconds").value=value*60;
                break;
            }

            case "secondsBtn":
            {
                document.getElementById("days").value=value/86400;
                document.getElementById("hours").value=value/3600;
                document.getElementById("minutes").value=value/60;
                break;
            }
        }
    }
    daysButton.addEventListener('click',function (){calculator(daysButton.id,document.getElementById("days").value)});
    hoursButton.addEventListener('click',function (){calculator(hoursButton.id,document.getElementById("hours").value)});
    minutesButton.addEventListener('click',function (){calculator(minutesButton.id,document.getElementById("minutes").value)});
    secondsButton.addEventListener('click',function (){calculator(secondsButton.id,document.getElementById("seconds").value)});


}