// Toggle detail (sudah ada)
const cards = document.querySelectorAll('.tokoh-card');
cards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('open');
  });
});

// 🔍 Filter nama tokoh
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function () {
  const query = this.value.toLowerCase();
  const tokohCards = document.querySelectorAll(".tokoh-card");

  tokohCards.forEach(card => {
    const name = card.querySelector("h3").textContent.toLowerCase();
    card.style.display = name.includes(query) ? "block" : "none";
  });
});
