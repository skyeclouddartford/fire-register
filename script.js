// script.js
function sendEmail() {
    let register = [];
    document.querySelectorAll('.person').forEach(person => {
        let name = person.querySelector('span').textContent;
        let status = person.querySelector('input:checked') ? person.querySelector('input:checked').value : "No Selection";
        register.push(`${name}: ${status}`);
    });

    let subject = "Fire Evacuation Register";
    let body = encodeURIComponent(`Evacuation Register:\n\n${register.join("\n")}`);

    // Open default email client (Outlook, etc.)
    window.location.href = `mailto:fire-evac@skye-cloud.com?subject=${subject}&body=${body}`;
}
