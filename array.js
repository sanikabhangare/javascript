arr1 = []
console.log(typeof(arr1));

colors = ["Blue","Red","Green"]
console.log(colors, "colors array")
// can store diff datatype

user = ["Oggy","12312312309",10,["Paris","France"]]
console.log(user,"user array")

console.log(colors[1],"value of i=0 in colors array");
console.log(user[3],"value of i=3 in user array");

// to add element at the end of array
colors.push('Yellow')
console.log(colors,"push");

// to delete the ele 
colors.pop()
console.log(colors,"pop");

// to add ele at starting
colors.unshift('Purple')
console.log(colors,"unshift");

// to delete ele
colors.shift()
console.log(colors,"shift");

// slice
s = colors.slice(0,2)
console.log(s, "slice");

// splice
colors.splice(1,0,"Yellow")
console.log(colors, "splice");

// indexOf
d = colors.indexOf("Red")
console.log(d,"indexOf");

// includes
r = colors.includes("Red")
console.log(r,"includes");

// for loops
for(i=0;i<colors.length;i++){
    console.log(colors[i]);
}
console.log("************")

// of for
for(x of colors){
    console.log(x)
}
console.log("************")

// in for
for(i in colors){
    console.log(i)
}

console.log("************")

numArray =[1,2,3,4,5,6,7,8,9,10]
marks =[79,60,57,38,96]

// sum of array element
total=0
for(i=0;i<marks.length;i++){
     total +=marks[i];
}
console.log(total);


console.log("************")
// highest 

highestMarks = 0

console.log(marks)

for(i=0; i<=marks.length; i++){
    if(highestMarks < marks[i]){
      highestMarks = marks[i]
    }
}
console.log(highestMarks);


console.log("************")
// foreach

colors.forEach(element => {
    console.log(element)
});

marks.forEach((x)=>{
    console.log(x+4)
})



console.log("************")
// map

graceMarks = marks.map((x)=>{
    return x+5
})
console.log(graceMarks);

console.log(numArray)


cubeNum1 = numArray.map((num1)=>{
    return num1*num1*num1
})
console.log(cubeNum1)


cubeNum = numArray.map((num)=>num**3)
console.log(cubeNum);

 

console.log("************")
// filter

oddArray = numArray.filter((odn)=>{
    if(odn%2 != 0){
        return odn
    }
})
console.log(oddArray)



console.log("************")
// find index no. of 57
console.log(marks);



console.log("************")
// manually
for(i=0; i<marks.length; i++){
    if(marks[i] == 57){
        ind57 = i
    }
}
console.log("index of 57 is",ind57);


console.log("************")
// by method
i8 = numArray.findIndex((c)=> c==8)
    console.log("index of 8 is",i8)




console.log("************")
// reverse array manually

console.log(numArray);

revArray = []
l = numArray.length

for(i=l-1; i>=0; i--){
    revArray.push(numArray[i]);
}
console.log(revArray);















// temp = 0
// l = marks.length
// for(let i=0;i<=l;i++){
//     if(marks[i]>marks[i+1]){
//         temp = marks[i];
//         marks[i] = marks[i+1];
//         marks[i+1] = temp;
//     }

// }
//  let sec_largest = marks[l-1]
//  console.log(sec_largest);