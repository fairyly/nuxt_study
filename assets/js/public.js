function add(num) {
  return num < 10 ? `0${num}` : num
}

export default {
  dateTrans: function(dateString) {
    const date = new Date(dateString)
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()
    return `${year}-${add(month)}-${add(day)} ${add(hour)}:${add(minute)}:${add(
      second
    )}`
  }
}
