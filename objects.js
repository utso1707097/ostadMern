var billGates = {shirt:true,color:"offWhite",sweater:true,smile:true};

var billGatesPro = {
    shirt:{
        color:"offWhite",
        quality:"Wool",
        price:"200USD"
    },
    sweater:{
        color:"Gray",
        price:"300USD",
        warm:"best"
    },
    face:{
        smilling:true,
        glass:{
            color:"Black",
            lens:"Blue Cart"

        },
        teeth:"White",
        age:57,
    }
}

//How to get back the value of the object

console.log(billGates.color);
console.log(billGates.sweater);

//nested objects
console.log(billGatesPro['sweater']['price']);
console.log(billGatesPro['face']['glass']['lens']);