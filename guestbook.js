fetch("guestbook.json")
    .then(response => response.json())
    .then(entries => {

        const container = document.getElementById("entries");

        container.innerHTML = "";

        entries.reverse().forEach(entry => {

            const item = document.createElement("div");

            item.className = "guest-entry";

            item.innerHTML = `
                <h3>${entry.name}</h3>
                <p>${entry.message}</p>
                <small>${entry.date}</small>
            `;

            container.appendChild(item);

        });

    })
    .catch(error => {
        document.getElementById("entries").innerHTML =
        "Unable to load guestbook.";
        console.error(error);
    });
