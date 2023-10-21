let n1=prompt("enter the number")
let n2=prompt("enter the number")

let temp
let num=(add,sub)=>{
    document.write(`before swapping n1=${add}n2=${sub}<br>`)  
    temp=add
    add=sub
    sub=temp 
    document.write(`after swapping n1=${add}n2=${sub}`)
}
(num(n1,n2));

