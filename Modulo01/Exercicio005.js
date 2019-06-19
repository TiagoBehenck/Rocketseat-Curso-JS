var usuarios = [
    {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
];

function skills(usuarios) {
    //  Para percorrer um vetor utilizar a sintaxe for...of 
    // e para unir valores de um array
    // com um separador utilize o join.
    for (usuario of usuarios) {
        console.log(
            "O "
             + usuario.nome +
            " possui as habilidades: "
            + usuario.habilidades.join(", ")
        );
    }
}

skills(usuarios);