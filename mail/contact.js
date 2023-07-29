<script>
  document.getElementById("contactForm").onsubmit = function (event) {
    event.preventDefault();

    // Get form data
    const formData = new FormData(event.target);
    const fullName = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    // Prepare the WhatsApp message
    const whatsappMessage = `Name: ${fullName}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`;

    // Replace the following WhatsApp number with your desired recipient's number
    const recipientNumber = "YOUR_RECIPIENT_PHONE_NUMBER";

    // Create the WhatsApp URL
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=${recipientNumber}&text=${encodeURIComponent(whatsappMessage)}`;

    // Open WhatsApp in a new tab to send the message
    window.open(whatsappUrl, "_blank");

    // Optionally, you can show a success message after sending the message
    const successDiv = document.getElementById("success");
    successDiv.innerHTML = "<p class='text-success'>Message sent successfully!</p>";

    // Optionally, you can clear the form fields after sending the message
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";
  };
</script>
