// ADICIONANDO

let minhaArray = [1, 2, 3];
minhaArray.push(4);
console.log(minhaArray); // Output: [1, 2, 3, 4]

let minhaArray = [2, 3, 4];
minhaArray.unshift(1);
console.log(minhaArray); // Output: [1, 2, 3, 4]

let minhaArray = [1, 2];
let outraArray = [3, 4];
let combinada = minhaArray.concat(outraArray);
console.log(combinada); // Output: [1, 2, 3, 4]

// REMOVENDO

let minhaArray = [1, 2, 3, 4];
let removido = minhaArray.pop();
console.log(removido); // Output: 4
console.log(minhaArray); // Output: [1, 2, 3]

let minhaArray = [1, 2, 3, 4];
let removido = minhaArray.shift();
console.log(removido); // Output: 1
console.log(minhaArray); // Output: [2, 3, 4]

let minhaArray = [1, 2, 3, 4];
minhaArray.splice(1, 2); // Remove dois elementos a partir do índice 1
console.log(minhaArray); // Output: [1, 4]

// Adiciona novos elementos no lugar dos removidos
minhaArray.splice(1, 0, 5, 6); // Adiciona 5 e 6 a partir do índice 1
console.log(minhaArray); // Output: [1, 5, 6, 4]
