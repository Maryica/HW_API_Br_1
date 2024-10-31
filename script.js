const classesData = [
    {
        title: "Занятие 1",
        time: "09:00",
        maxParticipants: 8,
        currentParticipants: 3,
    },
    {
        title: "Занятие 2",
        time: "10:00",
        maxParticipants: 10,
        currentParticipants: 10,
    },
    {
        title: "Занятие 3",
        time: "11:00",
        maxParticipants: 10,
        currentParticipants: 9,
    },
    {
        title: "Занятие 4",
        time: "12:00",
        maxParticipants: 10,
        currentParticipants: 8,
    },
    {
        title: "Занятие 5",
        time: "13:00",
        maxParticipants: 10,
        currentParticipants: 10,
    }
];

function loadClasses() {
    const container = document.getElementById("classes-container ");
    container.innerHTML = "";
    classesData.forEach((classData, index) => {
        const classElement = document.createElement("div");
        classElement.className = "class-card card";
        classElement.innerHTML = `
                <div class="card-body">
                    <h5 class="card-title">${classData.title}</h5>
                    <p class="card-text">Время: ${classData.time}</p>
                    <p class="card-text">Максимальное количество участников: ${classData.maxParticipants
            }</p>
                    <p class="card-text">Текущее количество участников: <span id="current-${index}">${classData.currentParticipants
            }</span></p>
                    <button class="btn btn-primary" id="join-${index}" ${classData.currentParticipants >= classData.maxParticipants
                ? "disabled"
                : ""
            }>Записаться</button>
                    <button class="btn btn-danger" id="cancel-${index}" ${classData.currentParticipants === 0 ? "disabled" : ""
            }>Отменить запись</button>
                </div>
            `;
        container.appendChild(classElement);

        document
            .getElementById(`join-${index}`)
            .addEventListener("click", () => joinClass(index));
        document
            .getElementById(`cancel-${index}`)
            .addEventListener("click", () => cancelClass(index));
    });
}

function joinClass(index) {
    if (
        classesData[index].currentParticipants <
        classesData[index].maxParticipants
    ) {
        classesData[index].currentParticipants++;
        updateClassDisplay(index);
    }
}

function cancelClass(index) {
    if (classesData[index].currentParticipants > 0) {
        classesData[index].currentParticipants--;
        updateClassDisplay(index);
    }
}

function updateClassDisplay(index) {
    document.getElementById(`current-${index}`).innerText =
        classesData[index].currentParticipants;
    document.getElementById(`join-${index}`).disabled =
        classesData[index].currentParticipants >=
        classesData[index].maxParticipants;
    document.getElementById(`cancel-${index}`).disabled =
        classesData[index].currentParticipants === 0;
}

window.onload = loadClasses;