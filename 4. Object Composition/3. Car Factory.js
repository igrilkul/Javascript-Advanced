function carMake(car) {

    let newPower;
    let volume;
    let power=car.power;
    if(power<=90)
    {
        newPower=90;
        volume=1800;
    }
    else if(power<=120)
    {
        newPower=120;
        volume=2400;
    }
    else
    {
        newPower=200;
        volume=3500;
    }

    let newWheels;
    if(car.wheelsize%2===0)
    {
        newWheels=car.wheelsize-1;
    }
    else newWheels=car.wheelsize;

    let wheels=[newWheels,newWheels,newWheels,newWheels];

    return{
        model:car.model,
        engine:{
            power:newPower,
            volume:volume
        },
        carriage:{
            type:car.carriage,
            color:car.color
        },
        wheels:wheels
    };
}