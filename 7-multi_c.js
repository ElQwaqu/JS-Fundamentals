const x = parseInt(process.argv[2]);

if (isNaN(x) || x <= 0) {

    if (x <= 0) return;
    console.log("Missing number of occurrences");
} else {
    for (let i = 0; i < x; i++) {
        console.log("C is fun");
    }
}
