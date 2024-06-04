document.addEventListener("DOMContentLoaded", function() {
    var typed = new Typed(".text", {
        strings: ["Software Developer", "Web Developer"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });

    // Your other animations and JavaScript code go here
});



document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const form = event.target;
    const formData = new FormData(form);

    fetch('https://formspree.io/f/mpzvgjgk', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            // Show the success modal
            document.getElementById('successModal').style.display = 'flex';
            // Reset the form
            form.reset();
        } else {
            return response.json().then(data => {
                if (data.hasOwnProperty('errors')) {
                    alert(data["errors"].map(error => error["message"]).join(", "));
                } else {
                    alert('Something went wrong. Please try again.');
                }
            });
        }
    }).catch(error => {
        alert('Something went wrong. Please try again.');
    });
});

// Hide the modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('successModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

