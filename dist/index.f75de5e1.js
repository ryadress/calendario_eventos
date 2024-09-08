const birthdayDate = new Date("11/07/2024");
function updateCountdown() {
    const now = new Date();
    const timeLeft = birthdayDate - now;
    const daysLeft = Math.floor(timeLeft / 86400000);
    const hoursLeft = Math.floor(timeLeft % 86400000 / 3600000);
    const minutesLeft = Math.floor(timeLeft % 3600000 / 60000);
    const secondsLeft = Math.floor(timeLeft % 60000 / 1000);
    // Atualize o elemento HTML com o tempo restante
    document.getElementById("birthday").innerHTML = `
        <b>o meu aniversario come\xe7ar\xe1 em ${daysLeft}d ${hoursLeft}h ${minutesLeft}min ${secondsLeft}s</b>
    `;
}
setInterval(updateCountdown, 1000);

//# sourceMappingURL=index.f75de5e1.js.map
