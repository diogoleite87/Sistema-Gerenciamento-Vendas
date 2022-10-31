export const formatDate = (date: Date) => {
    var date = new Date(date)
    var day = date.getDate().toString().padStart(2, '0')
    var month = (date.getMonth() + 1).toString().padStart(2, '0')
    var year = date.getFullYear()
    return day + "-" + month + "-" + year;
}