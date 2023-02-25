

let pronoun = ['the', 'our', 'my', 'your'];
let adj = ['great', 'big', 'first','fast'];
let noun = ['jogger', 'racoon', 'domain','page'];

for (let word of pronoun) {
for (let word2 of adj) {
for(let word3 of noun){
    console.log(word + word2 + word3 + ".com")
    console.log(word + word2 + word3 + ".net")
}
}
}