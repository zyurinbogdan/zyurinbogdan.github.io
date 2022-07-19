let humsters = 100;
let counter = 0;
for (humsters; humsters > 0; ) {
    let attempt = +prompt ('достань хомяков');
    humsters -= attempt;
    counter += 1;
    if (attempt > 100) {
        alert ('столько нет');
        humsters = 100;
    } else if (humsters === 0) {
        alert (`вы победили, попыток: ${counter}`);
    } else if (humsters < 0) {
        humsters = 100;
    }
}


