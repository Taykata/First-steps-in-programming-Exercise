function basketballEquipment(input) {

    let tax = Number(input[0]);

    let shoes = tax * 0.60;
    let clothes = shoes * 0.80;
    let ball = clothes / 4;
    let other = ball / 5;

    let totalSum = tax + shoes + clothes + ball + other;

    console.log(totalSum);
}

basketballEquipment(["365"])