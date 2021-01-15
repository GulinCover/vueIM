export {
    timeTools,
}

function timeTools(date) {
    return `${date.getHours()}:${date.getMinutes().toString().length === 1 ? `0${date.getMinutes().toString()}` : date.getMinutes().toString() }:${date.getSeconds().toString().length === 1 ? `0${date.getSeconds()}` : date.getSeconds()}`;
}