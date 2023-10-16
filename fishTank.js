function fishTank(input) {

    let lenght = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]);

    let totalVolume = lenght * width * height;
    let volumeInLiters = totalVolume / 1000;

    let total = volumeInLiters * (1 - (percent / 100))

    console.log(total);
}

fishTank(["85 ", "75 ", "47 ", "17 "])