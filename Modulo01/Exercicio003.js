function temHabilidade (skills) {
    // Retorna o primeiro índicie me que o elemento a ser encontrado no array,
    // retorna -1 caso o mesmo não esteja presente
    return skills.indexOf("Javascript") !== -1;
}

var skills = ["Javascript", "ReactJS", "React Native"];
console.log(temHabilidade(skills));