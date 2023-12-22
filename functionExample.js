function fullName(a, b) {
    let name = a.toUpperCase();
    let lastName = b;

    let completeName = name + " " + lastName;

    return completeName;
}

console.log(fullName('123','456'));
console.log(fullName('Erwin','Aguero'));

let human = fullName('Miriam','Perez');


