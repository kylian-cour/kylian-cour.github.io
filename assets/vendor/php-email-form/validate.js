// EmailJS version – remplace totalement le script PHP d'origine

(function () {
  "use strict";

  emailjs.init("LnEvehtqlRPN2AAGH"); // Mets ton Public Key EmailJS ici

  let form = document.getElementById('contact-form');

  if (!form) return;

  let loading = form.querySelector('.loading');
  let errorMessage = form.querySelector('.error-message');
  let sentMessage = form.querySelector('.sent-message');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    loading.classList.add('d-block');
    errorMessage.classList.remove('d-block');
    sentMessage.classList.remove('d-block');

    emailjs.send("service_oyigoax", "TEMPLATE_ID_ICI", {
      name: form.name.value,
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value
    })
    .then(() => {
      loading.classList.remove('d-block');
      sentMessage.classList.add('d-block');
      form.reset();
    })
    .catch((error) => {
      loading.classList.remove('d-block');
      errorMessage.innerHTML = "Erreur : " + error.text;
      errorMessage.classList.add('d-block');
    });
  });

})();
