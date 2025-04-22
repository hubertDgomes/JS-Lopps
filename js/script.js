let namta = 3

for(let i=1 ; i<=10 ; i++){
    console.log(namta + " " + "X" + " " + i + "=" + " " + (namta*i));
}

let members = ["Hubert", "Dhrubo", "Gomes"]
console.log(members);

let det = {
    name : "Hubert",
    age : 22,
    area : "Dhaka Cantonment"
}

console.log("My name is " + det.name);
console.log("My age is "+det.age);
console.log("I live in "+det.area);

let memberDet = {
    hubert: {
        name: "Hubert Gomes",
        age : 22,
        area : "Dhaka"
    },
    omuk: {
        name: "Omuk",
        age : 23,
        area : "Barishal"
    },
    tomuk:{
        name: "Tomuk",
        age : 25,
        area : "Ctg"
    }
}

console.log(memberDet.hubert.name);

