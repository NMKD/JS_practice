const date = new Date()
const formatDate = new Intl.DateTimeFormat("ru-Ru", {
        dateStyle: 'full',
        timeStyle: 'short',
        timeZone: "Europe/Moscow",
}).format(date)
const isoDate = date.toISOString()
console.log(formatDate) // понедельник, 26 февраля 2024 г. в 14:13
console.log(isoDate) // 2024-02-26T11:13:03.823Z
console.log(new Intl.DateTimeFormat("ru-Ru").format(date)) // 26.02.2024

const dateFromISO = new Date(isoDate)
year = dateFromISO.getFullYear();
month = dateFromISO.getMonth()+1;
dt = dateFromISO.getDate();

if (dt < 10) {
    dt = '0' + dt;
  }
  if (month < 10) {
    month = '0' + month;
  }
  console.log(year+'-' + month + '-'+dt);
  console.log(new Intl.DateTimeFormat("ru-Ru").format(dateFromISO))
  console.log(dateFromISO.toISOString())