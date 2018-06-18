function addItem() {
    let itemName=document.getElementById("newItemText").value;
    let itemValue=document.getElementById("newItemValue").value;

    let option=document.createElement("option");
    option.text=itemName;
    option.value=itemValue;

    document.getElementById("menu").appendChild(option);

    document.getElementById("newItemText").value="";
    document.getElementById("newItemValue").value="";
}