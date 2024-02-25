let num = 125315421
let lost = String(num)
console.log(num)
if (lost[lost.length -1] == 0 || 
    lost[lost.length -1] == 2 ||
    lost[lost.length -1] == 4 ||
    lost[lost.length -1] == 6 ||
    lost[lost.length -1] == 8 ) {console.log('Чётное число')
    
} else {console.log('Нечётное число')
}
