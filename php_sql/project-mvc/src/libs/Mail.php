<?php
namespace Libs;

// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

class Mail{
	public static function send($to, $subject, $msg, $file = null){
		extract( (require __DIR__ . '/../settings.php')['mail'] );
		$mail = new PHPMailer(true);

		try {
		    //Server settings
		    //$mail->SMTPDebug = SMTP::DEBUG_SERVER;                    // Enable verbose debug output
		    $mail->isSMTP();                                            // Send using SMTP
		    $mail->Host       = $host;                    				// Set the SMTP server to send through
		    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
		    $mail->Username   = $username;                 				// SMTP username
		    $mail->Password   = $password;                           	// SMTP password
		    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
		    $mail->Port       = $port;                                  // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

		    //Recipients
		    $mail->setFrom($sender_email, $sender);
		    $mail->addAddress($to);     								// Add a recipient

		    /*if($file){
			    // Attachments
			    $mail->addAttachment('/var/tmp/file.tar.gz');         	// Add attachments
			    $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    	// Optional name
			}*/

		    // Content
		    $mail->isHTML(true);                                  		// Set email format to HTML
		    $mail->Subject = $subject;
		    $mail->Body    = $msg;

		    $mail->send();
		    //echo 'Message has been sent';
		} catch (Exception $e) {
		    //echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
		}
	}//send()
	public static function sendMail($to, $subject, $msg){
		$headers = 'Content-type: text/html';
		mail($to, $subject, $msg);
	}
}//class Mail