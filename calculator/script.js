const num1 = document.querySelector("#num1")
const num2 = document.querySelector("#num2")
const result = document.querySelector("#result")
const add = document.querySelector("#add")
const sub = document.querySelector("#sub")
const mul = document.querySelector("#mul")
const div = document.querySelector("#div")


const calculator = {
    add: function(n1, n2){
     return n1 + n2
    },
    sub: function(){
    return this.n1 - this.n2
    },
    mul:function(n1,n2){
        return n1 * n2
    },
    div:function(){
        if(n2==0){
            return "cannot divided by 0"
        }else{
            return this.n1 / this.n2
        }
    }
}

add.addEventListener("click" ,()=>{
    n1=Number(num1.value)
    n2=Number(num2.value)
result.innerHTML=calculator.add(n1,n2)
})

sub.addEventListener("click",()=>{
    calculator.n1= Number(num1.value)
    calculator.n2= Number(num2.value)
result.innerHTML=calculator.sub()
})

mul.addEventListener("click",()=>{
    n1=Number(num1.value)
    n2=Number(num2.value)
    result.innerHTML=calculator.mul(n1,n2)
})

div.addEventListener("click",()=>{
    calculator.n1=Number(num1.value)
    calculator.n2=Number(num2.value)
    result.innerHTML=calculator.div()
})