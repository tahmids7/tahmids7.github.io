const contactForm = document.getElementById('contact-form');

if (contactForm && window.emailjs) {
    emailjs.init({
        publicKey: "ETgr4c3PBWg0Ubndo",
    });

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const nameAlias = document.getElementById('name-alias');
        const emailAlias = document.getElementById('email-alias');

        if (nameInput && nameAlias) {
            nameAlias.value = nameInput.value;
        }

        if (emailInput && emailAlias) {
            emailAlias.value = emailInput.value;
        }

        emailjs.sendForm('service_v3p06tb', 'template_ekuultg', this)
            .then(function(response) {
                alert('Message sent successfully!');
                console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
                const details = error && (error.text || error.message || JSON.stringify(error));

                alert(`Failed to send the message. ${details || 'Please try again later.'}`);
                console.error('FAILED...', error);
            });
    });
}
