(function () {
    emailjs.init("MSW38GozzD5WvNdLS");

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const message = document.getElementById('message').value;

        const templateParams = {
            from_name: name,
            message: message
        };

        emailjs.send('service_ub33iqw', 'template_utas26l', templateParams)
            .then(function(response) {
                alert('Pesan terkirim yeee!!');
            }, function(error) {
                alert('Gagal mengirim pesan. Silakan coba lagi nanti.');
            });
    });
})();
