document.addEventListener("DOMContentLoaded", () => {
    const board = document.getElementById("game-board");
    let numbers = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6];
    let flippedCards = [];
    let matchedPairs = 0;

    numbers.sort(() => Math.random() - 0.5);

    numbers.forEach(num => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.textContent = num;
        card.dataset.value = num;
        board.appendChild(card);
    });

    const cards = document.querySelectorAll(".card");

    setTimeout(() => {
        cards.forEach(card => {
            card.textContent = "★";
            card.dataset.hidden = "true";
        });
    }, 5000);

    cards.forEach(card => {
        card.addEventListener("click", () => {
            if (flippedCards.length < 2 && card.dataset.hidden === "true") {
                card.textContent = card.dataset.value;
                card.dataset.hidden = "false";
                flippedCards.push(card);

                if (flippedCards.length === 2) {
                    setTimeout(() => {
                        let [card1, card2] = flippedCards;

                        if (card1.dataset.value === card2.dataset.value) {
                            matchedPairs++;
                        } else {
                            card1.textContent = "★";
                            card2.textContent = "★";
                            card1.dataset.hidden = "true";
                            card2.dataset.hidden = "true";
                        }

                        flippedCards = [];

                        if (matchedPairs === numbers.length / 2) {
                            setTimeout(() => alert("You win!"), 300);
                        }
                    }, 1000);
                }
            }
        });
    });
});
