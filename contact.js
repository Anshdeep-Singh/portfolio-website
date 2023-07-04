// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior
  
    // Get form field values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Perform any desired validation or processing here
    // For demonstration purposes, we'll simply log the form data
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
  
    // Reset the form
    document.getElementById('contact-form').reset();
  }
  
  // Add event listener to the form submit event
  document.getElementById('contact-form').addEventListener('submit', handleSubmit);
  