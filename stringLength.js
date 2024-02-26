// Выведите две не пустых строки.

// Первая строка должна быть длиннее 42 символов.

// Вторая строка должна быть короче 24 символов.

function range (size, start = 0) {
    return [...Array(size).keys()].map(i => i + start)
}

function getString(num) {
   const s = range(num).join('')
   return num < 24 ? s.slice(1, 24) : num > 42 ? range(num).join('') : "Ваша строка должна быть короче 24 символов или должна быть длиннее 42 символов"
}
console.log(`${getString(23)}\n${getString(43)}`)