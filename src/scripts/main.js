const birthdayDate = new Date("11/07/2024");

function updateCountdown() {
    const now = new Date();
    const timeLeft = birthdayDate - now;

    const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hoursLeft = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Atualize o elemento HTML com o tempo restante
    document.getElementById("birthday").innerHTML = `
        <b>o meu aniversario começará em ${daysLeft}d ${hoursLeft}h ${minutesLeft}min ${secondsLeft}s</b>
    `;
}

setInterval(updateCountdown, 1000);
