document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("raffle-form");
  const nameInput = document.getElementById("name");
  const participantsList = document.getElementById("participants-list");
  const drawButton = document.getElementById("draw-button");
  const resetButton = document.getElementById("reset-button");
  const winnerDisplay = document.getElementById("winner");

  let participants = [];

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = nameInput.value.trim();
    if (name) {
      participants.push(name);
      const listItem = document.createElement("li");
      listItem.textContent = name;
      participantsList.appendChild(listItem);
      nameInput.value = "";
      nameInput.focus();
    }
  });

  drawButton.addEventListener("click", () => {
    if (participants.length > 0) {
      const randomIndex = Math.floor(Math.random() * participants.length);
      const winner = participants[randomIndex];
      winnerDisplay.textContent = `The winner is: ${winner}! 🎂🎉`;
    } else {
      winnerDisplay.textContent = "No participants to draw from!";
    }
  });

  resetButton.addEventListener("click", () => {
    participants = [];
    participantsList.innerHTML = "";
    winnerDisplay.textContent = "";
    nameInput.value = "";
    nameInput.focus();
  });
});
