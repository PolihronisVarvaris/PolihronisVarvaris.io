<?php
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

    if(!empty($email) && !empty($message)){
        if(filter_var($email, FILTER_VALIDATE_EMAIL)){
            $receiver = "polihronisv@gmail.com";
            $subject = "From: $name <$email>";
            $body = "Name: $name\nEmail: $email\n\nMessage: $message";
            $sender = "From: $email";
            if(mail($receiver, $sumbject, $body, $sender)){
                echo "Your message has been sent";
            }
        }else{
            echo "Enter a valid email address!";
        }
    }else{
        echo "Email and Name field is required";
    }
    echo "Your message has been sent. Thank you!";
?>