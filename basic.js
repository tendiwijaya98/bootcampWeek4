const bilangan = []

for (let x = 0; x < 100; x++) {
    bilangan.push(Math.floor(Math.random(x) * 50) + 1)
}
console.log("Array Bilangan")
console.log(bilangan)

const bilGenap = []
const bilGanjil = []
let arrayLength = bilangan.length

for (let i = 0; i < arrayLength; i++) {
    if([i] % 2 == 0) {
        bilGenap.push(bilangan[i])
     }
     else if ([i] % 2 == 1){
         bilGanjil.push(bilangan[i])
     }
}
console.log("\nArray Genap")
console.log(bilGenap)
console.log("\nArray Ganjil")
console.log(bilGanjil)

function nilaiMax(namaArray){
    let max = namaArray[0]
    for (let j = 0; j < namaArray.length; j++) {
        if (namaArray[j] > max) { max = namaArray[j]; }
    }
    return max
}

function nilaiMin(namaArray){
    let min = namaArray[0]
    for (let g = 0; g < namaArray.length; g++) {
        if (namaArray[g] < min) { min = namaArray[g]; }
    }
    return min
}

let total = 0
function jumlahBilangan(namaArray){
    for (let s = 0; s < namaArray.length; s++) {
        total += namaArray[s]
    }
    return total
}

let totalAvg = 0
function rataBilangan(namaArray) {
    for (let a = 0; a < namaArray.length; a++) {
        totalAvg += namaArray[a]
    }
    let avg = totalAvg / namaArray.length
    return avg
}

let sumGenap = jumlahBilangan(bilGenap)
let rataGenap = rataBilangan(bilGenap)
let maxGenap = nilaiMax(bilGenap)
let minGenap = nilaiMin(bilGenap)

console.log("\nBilangan Genap")
console.log("Sum : " + sumGenap)
console.log("Avg : " + rataGenap)
console.log("Max : " + maxGenap)
console.log("Min : " + minGenap)

total=0
totalAvg = 0

let sumGanjil = jumlahBilangan(bilGanjil)
let rataGanjil = rataBilangan(bilGanjil)
let maxGanjil = nilaiMax(bilGanjil)
let minGanjil = nilaiMin(bilGanjil)

console.log("\nBilangan Ganjil")
console.log("Sum : " + sumGanjil)
console.log("Avg : " + rataGanjil)
console.log("Max : " + maxGanjil)
console.log("Min : " + minGanjil)

if (sumGenap > sumGanjil) {
    console.log("\nTotal Genap lebih besar dari Total Ganjil")
} else if (sumGenap < sumGanjil) {
    console.log("\nTotal Ganjil lebih besar dari Total Genap")
} else if (sumGenap == sumGanjil) {
    console.log("\nTotal Ganjil sama dengan Total Genap")
}

if (rataGenap > rataGanjil) {
    console.log("Rata Genap lebih besar dari Rata Ganjil")
} else if (rataGenap < rataGanjil) {
    console.log("Rata Ganjil lebih besar dari Rata Genap")
} else if (rataGenap == rataGanjil) {
    console.log("Rata Ganjil sama dengan Total Genap")
}

if (maxGenap > maxGanjil) {
    console.log("Max Genap lebih besar dari Max Ganjil")
} else if (maxGanjil > maxGenap) {
    console.log("Max Ganjil lebih besar dari Max Genap")
} else if (maxGenap == maxGanjil) {
    console.log("Max Ganjil sama dengan Max Genap")
}

if (minGenap > minGanjil) {
    console.log("Min Genap lebih besar dari Min Ganjil")
} else if (minGanjil > minGenap) {
    console.log("Min Ganjil lebih besar dari Min Genap")
} else if (minGenap == minGanjil) {
    console.log("Min Genap sama dengan Min Ganjil")
}