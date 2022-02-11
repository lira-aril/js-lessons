let lines = Number(prompt());
let m = [];

for (let i = 0; i < lines; i++) {
    m.push([])
    for (let j = 0; j < lines; j++) {
        m[i].push(' ')
    }

}

console.log(m)

for (let i = 0; i < m.length; i++) {
    m[i][0] = '*'
    m[i][m.length] = '*'
}

for (let j = 0; j < m.length / 2 + 1; j++) {
    m[j][j] = '*'
    m[j][m.length - j] = '*'
}

// for (let k = 0; k < 4; k++) {
//     m[k][m.length - k] = '*'
// }

// for (let l = 0; l < m.length; l++) {
//     m[l][m.lenth] = '*'
// }

let output;

for(let n = 0; n < m.length; n++) {
    output = ''
    for (let o = 0; o < m[n].length; o++) {
        output += m[n][o]
    }
    console.log(output)
}