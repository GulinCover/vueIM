export {
    timeTools,
}

function timeTools(date) {
    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds().toString().length === 1 ? `0${date.getSeconds()}` : date.getSeconds()}`;
}