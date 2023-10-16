function repainting(input) {

    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let thinner = Number(input[2]);
    let neededHours = Number(input[3]);
    let bagPrice = 0.40;

    let nylonTotal = (nylon + 2) * 1.50;
    let paintTotal = (paint * 1.10) * 14.50;
    let thinnerTotal = thinner * 5;

    let expensesMaterials = nylonTotal + paintTotal + thinnerTotal + bagPrice;

    let expensesPeople = (expensesMaterials * 0.30) * neededHours;

    let total = expensesPeople + expensesMaterials;

    console.log(total);
}

repainting(["10 ", "11 ", "4 ", "8 "])