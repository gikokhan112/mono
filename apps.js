// apps.js
document.addEventListener("DOMContentLoaded", () => {
    const appList = document.getElementById("app-list");

    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            data.apps.forEach(app => {
                const appItem = document.createElement("div");
                appItem.className = "app-item";
                appItem.innerHTML = `
                    <h2>${app.name}</h2>
                    <p>${app.description}</p>
                    <a href="${app.link}" download>Download</a>
                `;
                appList.appendChild(appItem);
            });
        })
        .catch(error => {
            appList.innerHTML = `<p>Failed to load apps. Please try again later.</p>`;
            console.error("Error fetching app data:", error);
        });
});
