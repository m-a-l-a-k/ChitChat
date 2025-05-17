export default function getTime(dateString) {
    const date = new Date(dateString);
    const hours = padZero(date.getHours());
    const minutes = padZero(date.getMinutes());
    return `${hours}:${minutes}`
}

// helper function to convert single-digits to double digits
// e.g 7:00 to 07:00
function padZero(number) {
    return number.toString().padStart(2, "0");
}