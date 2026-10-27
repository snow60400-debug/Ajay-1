const searchInput = document.getElementById("gameSearch");
const filters = document.getElementById("filters");
const cards = [...document.querySelectorAll(".game-card")];
const count = document.getElementById("gameCount");
const noResults = document.getElementById("noResults");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const dialog = document.getElementById("gameDialog");
const dialogBackdrop = document.getElementById("dialogBackdrop");
let activeFilter = "All";

function filterGames() {
  const term = searchInput.value.trim().toLowerCase();
  let visible = 0;
  cards.forEach(card => {
    const matchesText = `${card.dataset.title} ${card.dataset.genre} ${card.dataset.description}`.toLowerCase().includes(term);
    const matchesFilter = activeFilter === "All" || card.dataset.genre === activeFilter;
    const show = matchesText && matchesFilter;
    card.hidden = !show;
    if (show) visible++;
  });
  count.textContent = String(visible).padStart(2, "0");
  noResults.hidden = visible !== 0;
}

filters.addEventListener("click", event => {
  const button = event.target.closest("button[data-filter]");
  if (!button) return;
  activeFilter = button.dataset.filter;
  filters.querySelectorAll(".filter-chip").forEach(chip => {
    const selected = chip === button;
    chip.classList.toggle("selected", selected);
    chip.setAttribute("aria-pressed", String(selected));
  });
  filterGames();
});
searchInput.addEventListener("input", filterGames);

document.addEventListener("keydown", event => {
  if (event.key === "/" && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
    event.preventDefault();
    searchInput.focus();
  }
  if (event.key === "Escape" && dialog.open) dialog.close();
});

menuToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.textContent = open ? "×" : "☰";
});
navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.textContent = "☰";
}));

function openDetails(card) {
  document.getElementById("dialogTitle").textContent = card.dataset.title;
  document.getElementById("dialogGenre").textContent = card.dataset.genre.toUpperCase();
  document.getElementById("dialogDescription").textContent = card.dataset.description;
  dialog.showModal();
}
cards.forEach(card => {
  const action = card.querySelector(".details-button");
  if (card.dataset.playLink) action.href = card.dataset.playLink;
  else if (action.tagName === "BUTTON") action.addEventListener("click", () => openDetails(card));
});
document.getElementById("dialogClose").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => {
  if (event.target === dialog) dialog.close();
});
document.getElementById("year").textContent = new Date().getFullYear();
filterGames();
