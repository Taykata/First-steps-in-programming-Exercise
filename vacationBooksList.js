function vacantionBookList(input) {

    let pages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let days = Number(input[2]);

    let neededTime = pages / pagesPerHour;

    let hoursPerDay = neededTime / days;

    console.log(hoursPerDay);
}

vacantionBookList(["212 ", "20 ", "2 "])