
const vocabulary = new Map();
 vocabulary.set('cat','кіт')
 vocabulary.set('dog','собака')
 vocabulary.set('eat','їсти')
 vocabulary.set('meat','мясо')


 function translater (str,vocabulary){
    const wordArray = str.toLowerCase().split(' ')
    console.log(wordArray);
    const resArray=[];
    for (const i of wordArray) {
        if (vocabulary.has(i))
        resArray.push(vocabulary.get(i))
        else {resArray.push(i)}
    }
    return resArray.join (' ');
 }

 translater('Dog Eat  etettete Cat',vocabulary)