document.getElementById('checklistForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const location = document.getElementById('location').value.trim();
    
    if (!name || !location) {
        alert('Please fill in all required fields.');
        return;
    }

    const checkedItems = [];
    const uncheckedItems = [];
    document.querySelectorAll('input[type="checkbox"]').forEach(item => {
        if (item.checked) {
            checkedItems.push(item.value);
        } else {
            uncheckedItems.push(item.value);
        }
    });

    const checklist = {
        name: name,
        location: location,
        checkedItems: checkedItems,
        uncheckedItems: uncheckedItems
    };

    sendEmail(checklist);
});

function sendEmail(checklist) {
    const emailAddresses = ['email1@example.com', 'email2@example.com']; // Add your email addresses here
    const subject = 'Fire Alarm Evacuation Checklist';
    const body = `Name: ${checklist.name}\nLocation: ${checklist.location}\nChecked Items: ${checklist.checkedItems.join(', ')}\nUnchecked Items: ${checklist.uncheckedItems.join(', ')}`;

    emailAddresses.forEach(email => {
        try {
            window.open(`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
        } catch (error) {
            console.error('Error sending email:', error);
        }
    });
}
