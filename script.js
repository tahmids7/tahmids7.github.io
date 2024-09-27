emailjs.init("ETgr4c3PBWg0Ubndo");

// Listen for form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('service_v3p06tb', 'template_ekuultg', this)
        .then(function(response) {
            alert('Message sent successfully!');
            console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
            alert('Failed to send the message. Please try again later.');
            console.log('FAILED...', error);
        });
});
