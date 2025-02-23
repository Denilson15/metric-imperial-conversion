/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
.tofixed(3) rounds the value 3 decimal places
*/
const inputEl = document.getElementById("input");
const lengthEl = document.getElementById("length");
const volumeEl = document.getElementById("volume");
const massEl = document.getElementById("mass");
const convertBtn = document.getElementById("convert");


function render(){
    const value = inputEl.value;
    convertValues(value, lengthEl);
    convertValues(value, volumeEl);
    convertValues(value, massEl);
}

convertBtn.addEventListener("click", function(){
    render();
})

function convertValues(input, unitEl){
    if(isNaN(input)){
        let message = `Invalid Entry! Please input a number value`;
        unitEl.textContent = message;
        return;
    }
    else{
        let unit;
        let unitAlt = "";
        let conversionValue;
        if(unitEl === lengthEl) {
            unit = "meters";
            unitAlt = "feet";
            conversionValue = 3.281;
        }
        if(unitEl === volumeEl){ 
            unit = "liters";
            unitAlt = "gallons";
            conversionValue = 0.264;
        }
        if(unitEl === massEl) {
            unit = "kilos";
            unitAlt = "pounds";
            conversionValue = 2.204;
        }
        
        const conversion1 = (Number(input) * conversionValue).toFixed(3);
        const conversion2 = (Number(input) / conversionValue).toFixed(3);
        
        let message = `${input} ${unit} = ${conversion1} ${unitAlt} | ${input} ${unitAlt} = ${conversion2} ${unit}`;
        
        unitEl.textContent = message;
    }
}




