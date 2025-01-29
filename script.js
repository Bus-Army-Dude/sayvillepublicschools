document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('jobApplicationForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(form);
        const data = {};

        formData.forEach((value, key) => {
            data[key] = value;
        });

        fetch('https://api.github.com/repos/Bus-Army-Dude/sayvillepublicschools/dispatches', {
            method: 'POST',
            headers: {
                'Accept': 'application/vnd.github.v3+json',
                'Authorization': `token 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`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                event_type: 'submit-application',
                client_payload: data
            })
        })
        .then(response => response.json())
        .then(result => {
            alert('Application submitted successfully!');
            form.reset();
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred while submitting the application.');
        });
    });
});
