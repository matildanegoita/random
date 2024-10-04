// Selectează elementele HTML necesare
const participantInput = document.getElementById("participant-input");
const addParticipantButton = document.getElementById("add-participant");
const participantList = document.getElementById("participant-list");
const chooseWinnerButton = document.getElementById("choose-winner");
const winnerDisplay = document.getElementById("winner-name");

let participants = []; // Lista participanților

// Funcție pentru adăugarea unui participant în listă
addParticipantButton.addEventListener("click", () => {
    const participantName = participantInput.value.trim();

    if (participantName !== "" && !participants.includes(participantName)) {
        // Adaugă participantul în lista și resetează câmpul de input
        participants.push(participantName);
        participantInput.value = "";

        // Actualizează lista de participanți în HTML
        renderParticipantList();

        // Activează butonul "Alege Cine Plătește!" dacă există cel puțin 2 participanți
        chooseWinnerButton.disabled = participants.length < 2;
    }
});

// Funcție pentru a afișa lista de participanți în HTML
function renderParticipantList() {
    participantList.innerHTML = ""; // Golește lista

    // Adaugă fiecare participant ca un element `<li>`
    participants.forEach(participant => {
        const li = document.createElement("li");
        li.textContent = participant;
        participantList.appendChild(li);
    });
}

// Funcție pentru a alege un câștigător aleatoriu
chooseWinnerButton.addEventListener("click", () => {
    if (participants.length >= 2) {
        // Selectează aleatoriu un participant din listă
        const randomIndex = Math.floor(Math.random() * participants.length);
        const winner = participants[randomIndex];

        // Afișează numele câștigătorului
        winnerDisplay.textContent = winner;
    }
});
