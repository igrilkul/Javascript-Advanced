function timer() {
    // TODO

    //clearInterval(timer);

    let start=$('#start-timer');
    let stop=$('#stop-timer');
    let seconds = $('#seconds');
    let minutes = $('#minutes');
    let hours = $('#hours');

    start.on('click',function () {
    start.attr('disabled','true');
      interval = setInterval(step, 1000)
    });
    //start.on('click',setInterval(step, 1000));

    stop.on('click',function () {
        start.removeAttr('disabled');
        clearInterval(interval);
        // seconds.text('00');
        // minutes.text('00');
        // hours.text('00');
    });
    function step() {
    let sec=seconds.text();
    let mins=minutes.text();
    let hrs=hours.text();

    if(sec<59)
    seconds.text(`0${+sec + 1}`.slice(-2));
    else
    {
        seconds.text('00');
        if(+mins===59)
        {
            minutes.text('00');
            hours.text(`0${+hrs+1}`.slice(-2));
        }
        else
        {
            minutes.text(`0${+mins+1}`.slice(-2));
        }
    }
    }
}
