<?php
    $to = 'mail@sobisalon.com';  // Please change to your email address
    $headers = 'From: Contact Form';   // Please change to your contact form name

    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $comment = $_POST['comment'];
    $body = " Name: $name\n E-Mail: $email\n Subject: $subject\n Comment: $comment\n";

    $answer = $_POST['answer'];
    if ($_POST['submit'] && $answer == '7') {          // Please change to your answer
        if (mail ($to, $subject, $body, $headers)) {
        echo '<p class="contact-success">Thank you for contacting us.</p>';
    } else {
        echo '<p class="contact-error">Something went wrong. Please try again.</p>';
    }
    } else if ($_POST['submit'] && $answer != '7') {   // Please change to your answer
    echo '<p class="contact-error">Please enter the Correct verification number.</p>';
    }

// Spam Prevention http://tangledindesign.com/how-to-create-a-contact-form-using-html5-css3-and-php/
?>
