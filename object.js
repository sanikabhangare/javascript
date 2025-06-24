//  object 

let student ={
    Name: "Sanika",
    age: 21,
    grade: 8.33
}
console.log(student);
student.subject="Math"
console.log(student);
student.grade=9.5
console.log(student);
delete student.age
console.log(student);


// nested onject

let book ={
    title: "Too Good to be True",
    author:"Prajkta Koli",
    details :{
        pages: 320,
        genre: "Contemporary Romance",
        released_on: "Jan 13, 2025",
        publisher: "HarperCollins India",
    }
}
console.log(book);


// loop through an object

let product={
    Name: "XProduct",
    Price: 5699,
    Stock: true
}
console.log(product)
for(v in product){
    console.log(v)
}
console.log("****************")
for(v in product){
    console.log(product[v])
}




// add calculater


let calculater={
    add: function(n1,n2){
        return n1+n2
    },
    sub: function(n1,n2){
        return n1-n2
    },
    mul: function(n1,n2){
        return n1*n2
    }
}

console.log("****************")
console.log(calculater.add(45,18));
console.log(calculater.sub(45,18));
console.log(calculater.mul(45,18));
 

// compare object

let person_1 ={
    Name: "Sanika",
    Age: 21
}

let person_2 ={
    Name: "Kajal",
    Age: 20
}

if(person_1.Name == person_2.Name){
    console.log("both have same names");
}else{
    console.log(`${person_1.Name} and ${person_2.Name} have different names`);
}

if(person_1.Age == person_2.Age){
    console.log("both have same age");
}if (person_1.Age > person_2.Age) {
    console.log(`${person_1.Name} (${person_1.Age}) is older than ${person_2.Name} (${person_2.Age})`)
} else {
    console.log(`${person_1.Name} (${person_1.Age}) is younger than ${person_2.Name} (${person_2.Age})`);
}