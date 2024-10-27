// Array of Shiva quotes
const shivaQuotes = [
    "In the depth of silence, Shiva’s wisdom whispers.",
    "Patience and perseverance bring divine blessings.",
    "Peace is found in the stillness of your soul, where Shiva resides.",
    "Detach from the outcome; embrace the journey, for Shiva leads you.",
    "True power is not in control but in surrendering to the flow of life."
  ];
  
  // Function to display a random quote and play the chant audio
  function showRandomQuote() {
    const randomQuote = shivaQuotes[Math.floor(Math.random() * shivaQuotes.length)];
    const quoteElement = document.getElementById("shiva-quote");
    const audioElement = document.getElementById("chant-audio");
  
    quoteElement.innerText = `"${randomQuote}"`;  // Display random quote
    audioElement.play();  // Play chant audio
  }
  
  function addWish() {
    const wishInput = document.getElementById("wish-input");
    const wishText = wishInput.value.trim();
    
    if (wishText) {
      const wishList = document.getElementById("wish-list");
      const listItem = document.createElement("li");
      listItem.className = "wish-item";
      listItem.innerText = wishText;
      wishList.appendChild(listItem);
      wishInput.value = "";  // Clear the input
    }
  }
  
  function grantWishes() {
    const wishItems = document.querySelectorAll(".wish-item");
    wishItems.forEach(item => {
      if (!item.innerText.includes("🌠 (Coming Soon!)")) {
        item.style.backgroundColor = "#ffe600";  // Change to a glowing color
        item.innerText += " 🌠 (Coming Soon!)";
      }
    });
  }
  