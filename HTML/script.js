let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ' ]').classList.add('active');
            })
        }
    })
}
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


      const form = document.getElementById('contactForm');

      form.addEventListener('submit', function(event) {
          event.preventDefault(); 

          fetch(form.action, {
              method: form.method,
              body: new FormData(form),
          }).then(response => {
              if (response.ok) {

                  form.reset();
                  alert('Message sent successfully!');
              } else {
                  alert('Failed to send message. Please try again.');
              }
          }).catch(error => {
              alert('Error: ' + error.message);
          });
      });


      