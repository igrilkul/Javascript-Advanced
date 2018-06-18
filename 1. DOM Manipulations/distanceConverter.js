function attachEventsListeners() {
// TODO: attach click event to convert button




    // console.log()

    let button=document.getElementById("convert");
    button.addEventListener('click',function () {
        let val=document.getElementById("inputDistance").value;
        let inputUnits = document.getElementById("inputUnits").value;
        let outputUnits = document.getElementById("outputUnits").value;
        let output = document.getElementById("outputDistance");
        val=Number(val);
        converter(val,inputUnits,outputUnits,output);
    });

    function converter(val,inputUnits,outputUnits,output) {

        console.log(val);
        console.log(inputUnits);
        //convert to meters
        switch (inputUnits)
        {
            case "km":
            {
                val=val*1000;
                break;
            }

            case "m":
            {
                val=val;
                break;
            }

            case "cm":
            {
                val=val/100;
                break;
            }

            case "mm":
            {
                val=val/1000;
                break;
            }

            case "mi":
            {
                val=val*1609.34;
                break;
            }

            case "yrd":
            {
                val=val*0.9144;
                break;
            }

            case "ft":
            {
                val=val*0.3048;
                break;
            }

            case "in":
            {
                val=val*0.0254;
                break;
            }
        }

        //convert from meters to desired units
        switch (outputUnits)
        {
            case "km":
            {
                output.value=val/1000;
                break;
            }

            case "m":
            {
                output.value=val;
                break;
            }

            case "cm":
            {
                output.value=val*100;
                break;
            }

            case "mm":
            {
                output.value=val*1000;
                break;
            }

            case "mi":
            {
                output.value=val/1609.34;
                break;
            }

            case "yrd":
            {
                output.value=val/0.9144;
                break;
            }

            case "ft":
            {
                output.value=val/0.3048;
                break;
            }

            case "in":
            {
                output.value=val/0.0254;
                break;
            }
        }
    }



}