let aha =(function () {

    let protein = 0;
    let carbohydrates = 0;
    let fat = 0;
    let flavours = 0;

    function instructions(input) {
        if(input!=="report")
        {
           let [command,item,quantity] = input.split(" ");
            if(command==="restock")
            {
                switch (item)
                {
                    case "protein":
                    {
                        protein+=Number(quantity);
                        break;
                    }

                    case "carbohydrates":
                    {
                        carbohydrates+=Number(quantity);
                        break;
                    }

                    case "fat":
                    {
                        fat+=Number(quantity);
                        break;
                    }

                    case "flavours":
                    {
                        flavours+=Number(quantity);
                        break;
                    }
                }
            }
            else if(command==="prepare")
            {
                switch (item)
                {
                    case "Apple":
                    {
                        if(carbohydrates>=quantity*1 && flavours>=quantity*2)
                        {
                            carbohydrates-=quantity*1;
                            flavours-=quantity*2;
                            console.log("Success");
                        }
                        else console.log("error");
                        break;
                    }

                    case "Coke":
                    {
                        if(carbohydrates>=quantity*10 && flavours>=quantity*20)
                        {
                            carbohydrates-=quantity*10;
                            flavours-=quantity*20;
                            console.log("Success");
                        }
                        else console.log("error");
                        break;
                    }

                    case "Burger":
                    {
                        if(carbohydrates>=5*quantity && fat>=quantity*7 && flavours>=quantity*3)
                        {
                            carbohydrates-=5*quantity;
                            fat-=quantity*7;
                            flavours-=quantity*3;
                            console.log("Success");
                        }
                        else console.log("error");
                        break;
                    }

                    case "Omelet":
                    {
                        if(protein>=quantity*5 && fat>=quantity*1 && flavours>=quantity*1)
                        {
                            protein-=quantity*5;
                            fat-=quantity*1;
                            flavours-=quantity*1;
                            console.log("Success");
                        }
                        else console.log("error");
                        break;
                    }

                    case "Cheverme":
                    {
                        if(protein>=quantity*10 && carbohydrates>=quantity*10 && fat>=quantity*10 && flavours>=quantity*10)
                        {
                            protein-=quantity*10;
                            carbohydrates-=quantity*10;
                            fat-=quantity*10;
                            flavours-=quantity*10;
                            console.log("Success");
                        }
                        else console.log("error");
                        break;
                    }
                }
            }
        }
        else
        {
            console.log(`protein=${protein} carbohydrate=${carbohydrates} fat=${fat} flavour=${flavours}`);
        }
    }

    return instructions;
})();

console.log(aha("restock fat 5"));
console.log(aha("restock carbohydrates 3"));
console.log(aha("restock flavours 20"));
console.log(aha("restock fat 5"));
console.log(aha("prepare Apple 1"));