export function getPastVerses() {
  const article = [
    { date: "2019-6-30", day: "Monday", verse: "MRK.4.1", id: 1 },
    { date: "2019-6-29", day: "Monday", verse: "MRK.4.2", id: 2 },
    { date: "2019-6-28", day: "Monday", verse: "MRK.4.3", id: 3 },
    { date: "2019-6-27", day: "Monday", verse: "MRK.4.4", id: 4 },
    { date: "2019-6-26", day: "Monday", verse: "MRK.4.5", id: 5 },
    { date: "2019-6-25", day: "Monday", verse: "MRK.4.6", id: 6 },
    { date: "2019-6-24", day: "Monday", verse: "MRK.4.7", id: 7 },
    { date: "2019-6-23", day: "Monday", verse: "MRK.4.8", id: 8 },
    { date: "2019-6-22", day: "Monday", verse: "MRK.4.9", id: 9 },
    { date: "2019-6-21", day: "Tuesday", verse: "MRK.4.10", id: 10 },
    { date: "2019-6-20", day: "Tuesday", verse: "MRK.4.11", id: 11 },
    { date: "2019-6-19", day: "Tuesday", verse: "MRK.4.12", id: 12 },
    { date: "2019-6-18", day: "Tuesday", verse: "MRK.4.13", id: 13 },
    { date: "2019-6-17", day: "Tuesday", verse: "MRK.4.14", id: 14 },
    { date: "2019-6-16", day: "Tuesday", verse: "MRK.4.15", id: 15 },
    { date: "2019-6-15", day: "Tuesday", verse: "MRK.4.16", id: 16 },
    { date: "2019-6-14", day: "Tuesday", verse: "MRK.4.17", id: 17 },
    { date: "2019-6-13", day: "Tuesday", verse: "MRK.4.18", id: 18 },
    { date: "2019-6-12", day: "Tuesday", verse: "MRK.4.19", id: 19 },
    { date: "2019-6-11", day: "Wednesday", verse: "MRK.4.20", id: 20 },
    { date: "2019-6-10", day: "Wednesday", verse: "MRK.4.21", id: 21 },
    { date: "2019-6-9", day: "Wednesday", verse: "MRK.4.22", id: 22 },
    { date: "2019-6-8", day: "Wednesday", verse: "MRK.4.23", id: 23 },
    { date: "2019-6-7", day: "Wednesday", verse: "MRK.4.24", id: 24 },
    { date: "2019-6-8", day: "Wednesday", verse: "MRK.4.25", id: 25 },
    { date: "2019-6-7", day: "Wednesday", verse: "MRK.4.26", id: 26 },
    { date: "2019-6-6", day: "Wednesday", verse: "MRK.4.10", id: 27 },
    { date: "2019-6-5", day: "Wednesday", verse: "MRK.4.10", id: 28 },
    { date: "2019-6-4", day: "Wednesday", verse: "MRK.4.10", id: 29 },
    { date: "2019-6-3", day: "Wednesday", verse: "MRK.4.1", id: 30 },
    { date: "2019-5-30", day: "Wednesday", verse: "MRK.4.2", id: 31 },
    { date: "2019-5-29", day: "Wednesday", verse: "MRK.4.3", id: 32 },
    { date: "2019-5-28", day: "Wednesday", verse: "MRK.4.4", id: 33 },
    { date: "2019-5-27", day: "Wednesday", verse: "MRK.4.5", id: 34 },
    { date: "2019-5-26", day: "Wednesday", verse: "MRK.4.6", id: 35 },
    { date: "2019-5-25", day: "Wednesday", verse: "MRK.4.7", id: 36 },
    { date: "2019-5-23", day: "Wednesday", verse: "MRK.4.8", id: 37 },
    { date: "2019-5-22", day: "Wednesday", verse: "MRK.4.9", id: 38 },
    { date: "2019-5-21", day: "Wednesday", verse: "MRK.4.10", id: 39 },
    { date: "2019-5-20", day: "Wednesday", verse: "MRK.4.11", id: 40 },
    { date: "2019-5-19", day: "Sunday", verse: "MRK.4.12", id: 41 },
    { date: "2019-5-18", day: "Sunday", verse: "MRK.4.13", id: 42 },
    { date: "2019-5-17", day: "Sunday", verse: "MRK.4.14", id: 43 },
    { date: "2019-5-16", day: "Sunday", verse: "MRK.4.15", id: 44 },
    { date: "2019-5-15", day: "Sunday", verse: "MRK.4.16", id: 45 },
    { date: "2019-5-14", day: "Sunday", verse: "MRK.4.17", id: 46 },
    { date: "2019-5-13", day: "Sunday", verse: "MRK.4.18", id: 47 },
    { date: "2019-5-12", day: "Sunday", verse: "MRK.4.19", id: 48 },
    { date: "2019-5-11", day: "Sunday", verse: "MRK.4.20", id: 49 },
    { date: "2019-5-10", day: "Sunday", verse: "MRK.4.21", id: 50 },
    { date: "2019-5-9", day: "Sunday", verse: "MRK.4.22", id: 51 },
    { date: "2019-5-8", day: "Sunday", verse: "MRK.4.23", id: 52 },
    { date: "2019-5-7", day: "Sunday", verse: "MRK.4.24", id: 53 },
    { date: "2019-5-6", day: "Sunday", verse: "MRK.4.25", id: 54 },
    { date: "2019-5-5", day: "Saturday", verse: "MRK.4.26", id: 55 },
    { date: "2019-5-4", day: "Saturday", verse: "MRK.4.10", id: 56 },
    { date: "2019-5-3", day: "Saturday", verse: "MRK.4.10", id: 57 },
    { date: "2019-5-1", day: "Saturday", verse: "MRK.4.10", id: 58 }
  ];
  return article;
}

export function getSingleVerse(date) {
  const article = getPastVerses();
  if (!date) return article[article.length - 1];
  const verse = article.filter(function(verses) {
    return verses.date === date;
  });
  return verse[0];
}
