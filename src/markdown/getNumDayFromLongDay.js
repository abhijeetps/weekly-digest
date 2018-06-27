module.exports = (day) => {
  if (typeof day === 'number' && day >= 0 && day < 7) {
    return day
  } else {
    const longDay = [
      'sunday',
      'monday',
      'tuesday',
      'wednesday',
      'thursday',
      'friday',
      'saturday'
    ]
    for (var i = 0; i < 7; i++) {
      if (longDay[i].includes(String(day).toLowerCase())) {
        return i
      }
    }
  }
  return -1
}
