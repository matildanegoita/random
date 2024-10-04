const participantInput = document.getElementById("participant-input");
const addParticipantButton = document.getElementById("add-participant");
const participantList = document.getElementById("participant-list");
const chooseWinnerButton = document.getElementById("choose-winner");
const winnerDisplay = document.getElementById("winner-name");

let participants = []; 

addParticipantButton.addEventListener("click", () => {
    const participantName = participantInput.value.trim();

    if (participantName !== "" && !participants.includes(participantName)) {
        participants.push(participantName);
        participantInput.value = "";

        renderParticipantList();

        chooseWinnerButton.disabled = participants.length < 2;
    }
});


function renderParticipantList() {
    participantList.innerHTML = "";

    participants.forEach(participant => {
        const li = document.createElement("li");
        li.textContent = participant;
        participantList.appendChild(li);
    });
}

chooseWinnerButton.addEventListener("click", () => {
    if (participants.length >= 2) {
        const randomIndex = Math.floor(Math.random() * participants.length);
        const winner = participants[randomIndex];

        winnerDisplay.textContent = winner;
    }
});
