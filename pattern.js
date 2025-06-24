// write a function printSquare(n) that enters a square of n*n asterisks
 
//square
n=5;
for(let i=0; i<n; i++){
    x = ''
    for(let j=0; j<n; j++)
        x+=" *"
    console.log(x)
}
console.log('\n')

//triangle facing right
for(let i=0; i<n; i++){
    x = ''
    for(let j=0; j<i+1; j++)
        x+=" *"
    console.log(x)
}
console.log('\n')

//triangle facing left
for(let i=n; i>=1; i--){
    x=''
    for(let j=1; j<=i; j++)
        x+=" *"
        console.log(x)
}
console.log('\n')

//upward pyramid
for( let i=1; i<=n; i++){
    x=''
    for(let j=1; j<=n-i; j++){
        x+=" "
    }
    for(let k=1; k<=i; k++){
        x+=" *"
    }
    console.log(x)
}  
console.log('\n')


//downward pyramid
for(let i=n; i>=1;i--){
    x=''
    for(let j=1; j<n-i+1; j++){
        x+=" "
    }
    for(let k=1; k<=i; k++){
        x+=" *"
    }
    console.log(x)
}
console.log('\n')


//diamond
for( let i=1; i<n; i++){
    x=''
    for(let j=1; j<n-i+1; j++){
        x+=" "
    }
    for(let k=1; k<=i; k++){
        x+=" *"
    }
    console.log(x)
}
for(let i=n; i>=1;i--){
    x=''
    for(let j=1; j<n-i+1; j++){
        x+=" "
    }
    for(let k=1; k<=i; k++){
        x+=" *"
    }
    console.log(x)
}

// pyramid with nos

for(let i=1; i<=n; i++){
    x=''
    for(let j=1; j<n-i+1; j++){
        x+=" "
    }
    for(let k=1;k<=i; k++){
         x+=" "
         x+= (i)
    }
    console.log(x)
}
  
// pascals Triangle


for(let i=1; i<=n; i++){
    x=''
    for(let j=0; j<=n; j++){
        x+=" "
    }
    for(let k=0;k<=i; k++){
         x+=" "
         x+= (i+i)^k
    }
    console.log(x)
}
  


