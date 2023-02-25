

let pronoun = ['the', 'our', 'my', 'your'];
let adj = ['great', 'big', 'first','fast'];
let noun = ['jogger', 'racoon', 'domain','page'];
let extesions = ['.com','.net','.es','.pt']

for (let word of pronoun) {
for (let word2 of adj) {
for(let word3 of noun){
for(let word4 of extesions){
    console.log(word + word2 + word3 + word4)
}
}
}
}