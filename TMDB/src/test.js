const fruit = [ 'pomme', 'fraise', 'banane' ]
console.log(fruit)


fruit.sort()
console.log(fruit)

const unFruit =  [ 'une pomme', 'la poire', 'une patate']
unFruit.sort()
console.log(unFruit)

const sortFruit =  [ {nom:'la pomme'},{nom:'un haricot'}, {nom:'la poire'}, {nom:'une patate'}]
sortFruit.sort(function compare(a,b) {
    if (a.nom < b.nom)
    return -1;
    if (a.nom > b.nom)
    return 1;
    return 0;
});
console.log(sortFruit)