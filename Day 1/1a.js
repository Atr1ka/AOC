let ins = inp.split("two1nine?eightwothree?abcone2threexyz?xtwone3four?4nineeightseven2?zoneight234?7pqrstsixteen"), x = 0
for (let i=0;i<ins.length; i++) {
    let a =  ins[i].match(new RegExp("[0-9]", "g"))
    x += Number(a[0] + a[a.length-1])
}
console.log(x)
