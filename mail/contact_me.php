<?php
// Check for empty fields
if(empty($_POST['name'])      ||
   empty($_POST['email'])     ||
   empty($_POST['phone'])     ||
   empty($_POST['message'])   ||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
     echo "No arguments Provided!";
     return false;
   }

$name = strip_tags(htmlspecialchars($_POST['name']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
$phone = strip_tags(htmlspecialchars($_POST['phone']));
$message = strip_tags(htmlspecialchars($_POST['message']));

/* Create the email and send the message */

// 送信先Emailアドレス
$to = 'orezigokusyounenn@gmail.com';

//標題(件名)
$email_subject = "Website Contact Form:  $name";

//本文
$email_body = "You have received a new message from your website contact form.\n\n"."Here are the details:\n\nName: $name\n\nEmail: $email_address\n\nPhone: $phone\n\nMessage:\n$message";

//送信元Emailアドレス
//Line Api使用したりチャットワーク使用してもいいな
$headers = "From: harmonicsprogram@gmail.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";

mail($to,$email_subject,$email_body,$headers);
return true;

?>
