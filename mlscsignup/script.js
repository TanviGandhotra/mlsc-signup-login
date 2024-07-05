document.addEventListener('DOMContentLoaded', function() {
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');

    const targetDate = new Date().getTime() + 90 * 60 * 60 * 1000;

    function updateCountdown() {
        const now = new Date().getTime();
        const timeRemaining = targetDate - now;

        if (timeRemaining < 0) {
            daysElement.innerHTML = hoursElement.innerHTML = minutesElement.innerHTML = secondsElement.innerHTML = '00';
        } else {
            const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            daysElement.innerHTML = days.toString().padStart(2, '0');
            hoursElement.innerHTML = hours.toString().padStart(2, '0');
            minutesElement.innerHTML = minutes.toString().padStart(2, '0');
            secondsElement.innerHTML = seconds.toString().padStart(2, '0');
        }
    }
    updateCountdown();
    setInterval(updateCountdown, 1000);
});
