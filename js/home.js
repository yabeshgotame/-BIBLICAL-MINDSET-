const verses = [
  {
    text: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future",
    reference: "Jeremiah 29:11"
  },
  {
    text: "Trust in the Lord with all your heart and lean not on your own understanding",
    reference: "Proverbs 3:5"
  }
];

function showDailyVerse() {
  const today = new Date().getDate();
  const verseIndex = today % verses.length;
  document.getElementById('verse-text').textContent = `"${verses[verseIndex].text}"`;
  document.getElementById('verse-reference').textContent = `- ${verses[verseIndex].reference}`;
}

showDailyVerse();
