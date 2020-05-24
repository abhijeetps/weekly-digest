module.exports = (day) => {
  if (typeof day === 'number' && day >= 0 && day < 7) {
    return day;
  }
  const longDay = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
  ];
  for (let i = 0; i < 7; i += 1) {
    if (longDay[i].includes(String(day).toLowerCase())) {
      return i;
    }
  }

  return undefined;
};
