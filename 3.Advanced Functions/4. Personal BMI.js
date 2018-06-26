function result(name,age,weight,height) {
    let bmi=Math.round(Number(weight)/Math.pow(Number(height)/100,2));
    let status="";
    if(18.5>bmi)
    {
        status="underweight";
    }
    else if(bmi<25 && bmi>=18.5)
    {
        status="normal";
    }
    else if(bmi>=25 && bmi<30)
    {
        status="overweight";
    }
    else status = "obese";

    let patient={
        name:name,
        personalInfo:{
            age:age,
            weight:weight,
            height:height
        },
        BMI:bmi,
        status:`${status}`
    };

    if(status==="obese")
    {
        patient.recommendation="admission required";
    }

    return patient;

}

var chart = result('Peter', 29, 75, 182);
console.log(chart);