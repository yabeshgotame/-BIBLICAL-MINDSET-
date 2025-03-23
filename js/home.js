const verses = [
  {
    text: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.",
    reference: "Jeremiah 29:11"
  },
  {
    text: "Trust in the Lord with all your heart and lean not on your own understanding.",
    reference: "Proverbs 3:5"
  },
  {
    text: "I can do all things through Christ who strengthens me.",
    reference: "Philippians 4:13"
  },
  {
    text: "The Lord is my shepherd; I shall not want.",
    reference: "Psalm 23:1"
  }
];

const verseText = document.getElementById('verse-text');
const verseReference = document.getElementById('verse-reference');

function displayRandomVerse() {
  const randomIndex = Math.floor(Math.random() * verses.length);
  verseText.textContent = `"${verses[randomIndex].text}"`;
  verseReference.textContent = `- ${verses[randomIndex].reference}`;
}

// Display a random verse on page load
displayRandomVerse();
