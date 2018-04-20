function unixToDate(unix_time) {
    return new Date(unix_time*1000);
}

function getTimeString(unix_time) {
    const date = unixToDate(unix_time);
    const hours = ("0" + date.getHours()).slice(-2);
    const minutes = ("0" + date.getMinutes()).slice(-2);
    const seconds = ("0" + date.getSeconds()).slice(-2);
    return hours + ":" + minutes + ":" + seconds;
}

function getDateString(unix_time) {
    const date = unixToDate(unix_time);
    const day   = ("0" + date.getDay()).slice(-2);
    const month = ("0" + date.getMonth()).slice(-2);
    const year  = ("0" + date.getFullYear()).slice(-4);
    return year + "-" + month + "-" + day;
}

export default {
    getDateString,
    getTimeString
};