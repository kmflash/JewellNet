<?php
// much of this functionality from https://github.com/ykob/vue-form/blob/master/src/html/sendmail.php

// remove carriage return & line feed
function removeCRLF($str) {
    return str_replace(array("\r","\n"), array(" ", " "), $str);
}

// strip all HTML tags out
function removeHtml($str) {
    return strip_tags(trim($str));
}

// Only process POST reqeusts.
if ($_SERVER["REQUEST_METHOD"] != "POST") {
    // Not a POST request, set a 403 (forbidden) response code.
    http_response_code(403);
    echo "403 forbidden";
    exit;
}


// get POST values
$name = removeCRLF(removeHtml($_POST["name"]));
$email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);

$message = removeHtml($_POST['message']);

// Check that data was sent to the mailer.
if (
    empty($name) OR
    empty($message) OR
    !filter_var($email, FILTER_VALIDATE_EMAIL)
) {
    // Set a 400 (bad request) response code and exit.
    http_response_code(400);
    echo "400 bad request";
    exit;
}

// Vars

// where the email is originating from (has to be same domain)
$sendingAddress = "PHP Form Mailer <no-reply@davidjewell.nyc>";
$to = "contactform@davidjewell.nyc";
$subject = "New message from $name";

// headers
$headers = "Content-Type: text/plain; charset=\"UTF-8\"\n";
$headers .= "Content-Transfer-Encoding: 8bit\n";
$headers .= "From: $sendingAddress \r\n" ;

$email_content = "";
$email_content .= "Sender Name: $name\n";
$email_content .= "Sender Email: $email\n";
$email_content .= "----------\n\n";
$email_content .= wordwrap($message, 70, "\r\n");

if (
    mail($to, $subject, $email_content, $headers)
  ) {
    // Set a 200 (okay) response code.
    http_response_code(200);
    echo "200 OK";
  } else {
    // Set a 500 (internal server error) response code.
    http_response_code(500);
    echo "500 internal server error";
  }




?>
