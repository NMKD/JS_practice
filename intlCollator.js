// const a = ["Offenbach", "Österreich", "Odenwald"];
// const collator = new Intl.Collator("en");
// console.log(collator.compare())
// a.sort(collator.compare);
// console.log(a.join(", ")); 

// const a = ["Congrès", "congres", "Assemblée", "poisson"];
// const collator = new Intl.Collator("fr", {
//   usage: "search",
//   sensitivity: "base",
// });
// const s = "congres";
// const matches = a.filter((v) => collator.compare(v, s) === 0);
// console.log(matches.join(", ")); // "Congrès, congres"

const b = ["Марина", "Вова"]
const collator = new Intl.Collator("ru", {
    usage: "search",
    sensitivity: "base"
})

const search = "марина"

const matches = b.filter((s) => collator.compare(s, search) === 0)
console.log(matches.join(", ")) 