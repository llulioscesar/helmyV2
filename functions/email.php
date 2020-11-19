<?php


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
class email {

  public function sendEmail($email, $url, $type, $subject){
    
 
// Load Composer's autoloader
require '../phpmailer/vendor/autoload.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
try {
    //Server settings
    $mail->SMTPDebug = false;
    $mail->isSMTP();                                            // Set mailer to use SMTP
    $mail->Host       = 'smtp.gmail.com';  // Specify main and backup SMTP servers
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'soporthelmy@gmail.com';                     // SMTP username
    $mail->Password   = 'solerandres321';                               // SMTP password
    $mail->SMTPSecure = 'tls';                                  // Enable TLS encryption, `ssl` also accepted
    $mail->Port       = 587;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom('soporthelmy@gmail.com', 'Helmy');
    $mail->addAddress($email);     // Add a recipient

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = $subject;
    if($type === "CONFIRM"){
        $mail->Body = '<!DOCTYPE html>
        <html style="font-family: sans-serif;">
          <head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
            <title>Design Company</title>
            <style>
              /*=== Media Query For Mobiles ===*/
        
              @media only screen and (max-width: 620px) {
                table[class="body"] h1 {
                  font-size: 28px !important;
                  margin-bottom: 10px !important;
                }
        
                table[class="body"] p,
                table[class="body"] ul,
                table[class="body"] ol,
                table[class="body"] td,
                table[class="body"] span,
                table[class="body"] a {
                  font-size: 16px !important;
                }
        
                table[class="body"] .wrapper,
                table[class="body"] .article {
                  padding: 10px !important;
                }
        
                table[class="body"] .content {
                  padding: 0 !important;
                }
        
                table[class="body"] .container {
                  padding: 0 !important;
                  width: 100% !important;
                }
        
                table[class="body"] .main {
                  border-left-width: 0 !important;
                  border-radius: 0 !important;
                  border-right-width: 0 !important;
                }
        
                table[class="body"] .img-responsive {
                  height: auto !important;
                  max-width: 100% !important;
                  width: auto !important;
                }
              }
            </style>
          </head>
        
          <body
            class=""
            style="background-color: #f6f6f6; font-family: sans-serif; -webkit-font-smoothing: antialiased; font-size: 14px; line-height: 1.4; margin: 0; padding: 0; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"
          >
            <span
              class="preheader"
              style="color: transparent; display: none; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; visibility: hidden; width: 0;"
            ></span>
            <table
              role="presentation"
              border="0"
              cellpadding="0"
              cellspacing="0"
              class="body"
              style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f6f6f6; width: 100%;"
              width="100%"
              bgcolor="#f6f6f6"
            >
              <tr>
                <td
                  style="font-family: sans-serif; font-size: 14px; vertical-align: top;"
                  valign="top"
                >
                  &nbsp;
                </td>
                <td
                  class="container"
                  style="font-family: sans-serif; font-size: 14px; vertical-align: top; display: block; max-width: 580px; padding: 10px; width: 580px; margin: 0 auto;"
                  width="580"
                  valign="top"
                >
                  <div
                    class="content"
                    style="box-sizing: border-box; display: block; margin: 0 auto; max-width: 580px; padding: 10px;"
                  >
                    <!-- START CENTERED WHITE CONTAINER -->
                    <table
                      role="presentation"
                      class="main"
                      style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background: #ffffff; border-radius: 3px; width: 100%; box-shadow: 10px 10px 70px rgba(0,0,0,.05) "
                      width="100%"
                    >
                      <!-- START MAIN CONTENT AREA -->
                      <tr>
                        <td
                          class="wrapper"
                          style="font-family: sans-serif; font-size: 14px; vertical-align: top; box-sizing: border-box; padding: 20px;"
                          valign="top"
                        >
                          <table
                            role="presentation"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;"
                            width="100%"
                          >
                            <tr>
                              <td
                                style="font-family: sans-serif; font-size: 14px; vertical-align: top;"
                                valign="top"
                              >
                                <h2
                                  style="color: #000;font-weight: bold;border-bottom: 1px solid #000;padding-bottom: 5px;display: inline-block;border-top: 1px solid #000;padding-top: 5px"
                                >
                                  Helmy
                                </h2>
                                <p
                                  style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;"
                                ></p>
                                <p>
                                  Ya estas a un paso por favor confirma tu correo.
                                </p>
                                <table
                                  role="presentation"
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="btn btn-primary"
                                  style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; box-sizing: border-box; width: 100%;"
                                  width="100%"
                                >
                                  <tbody>
                                    <tr>
                                      <td
                                        align="left"
                                        style="font-family: sans-serif; font-size: 14px; vertical-align: top; padding-bottom: 15px;"
                                        valign="top"
                                      >
                                        <table
                                          role="presentation"
                                          border="0"
                                          cellpadding="0"
                                          cellspacing="0"
                                          style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: auto;"
                                        >
                                          <tbody>
                                            <tr>
                                              <td
                                                style="font-family: sans-serif; font-size: 14px; vertical-align: top; border-radius: 5px; text-align: center; background-color: #ffffff;"
                                                valign="top"
                                                align="center"
                                                bgcolor="#000"
                                              >
                                                <a
                                                  href="'.$url.'"
                                                  target="_blank"
                                                  style="border: solid 1px #ffffff; border-radius: 5px; box-sizing: border-box; cursor: pointer; display: inline-block; font-size: 14px; font-weight: bold; margin: 0; padding: 12px 25px; text-decoration: none; text-transform: capitalize; background-color: #000; border-color: #000; color: #ffffff;"
                                                  >Confirma tu correo &rarr;</a
                                                >
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
        
                                <table
                                  role="presentation"
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: auto;"
                                >
                                  <tbody>
                                    <tr>
                                      <td>
                                        <p
                                          style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;"
                                        >
                                        Si eso no funciona, copie y pegue el siguiente enlace en su navegador.
                                          <a
                                            >'.$url.'</a
                                          >
                                        </p>
                                        <p
                                          style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px; color: #000;"
                                        >
                                          Helmy.
                                        </p>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
            </table>
          </body>
        </html>
        ';
    } else if($type === "FORGOT"){
        $mail->Body = '<!DOCTYPE html>
        <html style="font-family: sans-serif;">
          <head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
            <title>Design Company</title>
            <style>
              /*=== Media Query For Mobiles ===*/
        
              @media only screen and (max-width: 620px) {
                table[class="body"] h1 {
                  font-size: 28px !important;
                  margin-bottom: 10px !important;
                }
        
                table[class="body"] p,
                table[class="body"] ul,
                table[class="body"] ol,
                table[class="body"] td,
                table[class="body"] span,
                table[class="body"] a {
                  font-size: 16px !important;
                }
        
                table[class="body"] .wrapper,
                table[class="body"] .article {
                  padding: 10px !important;
                }
        
                table[class="body"] .content {
                  padding: 0 !important;
                }
        
                table[class="body"] .container {
                  padding: 0 !important;
                  width: 100% !important;
                }
        
                table[class="body"] .main {
                  border-left-width: 0 !important;
                  border-radius: 0 !important;
                  border-right-width: 0 !important;
                }
        
                table[class="body"] .img-responsive {
                  height: auto !important;
                  max-width: 100% !important;
                  width: auto !important;
                }
              }
            </style>
          </head>
        
          <body
            class=""
            style="background-color: #f6f6f6; font-family: sans-serif; -webkit-font-smoothing: antialiased; font-size: 14px; line-height: 1.4; margin: 0; padding: 0; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"
          >
            <span
              class="preheader"
              style="color: transparent; display: none; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; visibility: hidden; width: 0;"
            ></span>
            <table
              role="presentation"
              border="0"
              cellpadding="0"
              cellspacing="0"
              class="body"
              style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f6f6f6; width: 100%;"
              width="100%"
              bgcolor="#f6f6f6"
            >
              <tr>
                <td
                  style="font-family: sans-serif; font-size: 14px; vertical-align: top;"
                  valign="top"
                >
                  &nbsp;
                </td>
                <td
                  class="container"
                  style="font-family: sans-serif; font-size: 14px; vertical-align: top; display: block; max-width: 580px; padding: 10px; width: 580px; margin: 0 auto;"
                  width="580"
                  valign="top"
                >
                  <div
                    class="content"
                    style="box-sizing: border-box; display: block; margin: 0 auto; max-width: 580px; padding: 10px;"
                  >
                    <!-- START CENTERED WHITE CONTAINER -->
                    <table
                      role="presentation"
                      class="main"
                      style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background: #ffffff; border-radius: 3px; width: 100%; box-shadow: 10px 10px 70px rgba(0,0,0,.05) "
                      width="100%"
                    >
                      <!-- START MAIN CONTENT AREA -->
                      <tr>
                        <td
                          class="wrapper"
                          style="font-family: sans-serif; font-size: 14px; vertical-align: top; box-sizing: border-box; padding: 20px;"
                          valign="top"
                        >
                          <table
                            role="presentation"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;"
                            width="100%"
                          >
                            <tr>
                              <td
                                style="font-family: sans-serif; font-size: 14px; vertical-align: top;"
                                valign="top"
                              >
                                <h2
                                  style="color: #000;font-weight: bold;border-bottom: 1px solid #000;padding-bottom: 5px;display: inline-block;border-top: 1px solid #f000;padding-top: 5px"
                                >
                                  Helmy
                                </h2>
                                <p
                                  style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;"
                                ></p>
                                <p>
                                Hemos recibido una solicitud. Olvido su contraseña.
                                si realmente lo hizo, haga click a continuacion para restablecer su contraseña
                                </p>
                                <table
                                  role="presentation"
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="btn btn-primary"
                                  style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; box-sizing: border-box; width: 100%;"
                                  width="100%"
                                >
                                  <tbody>
                                    <tr>
                                      <td
                                        align="left"
                                        style="font-family: sans-serif; font-size: 14px; vertical-align: top; padding-bottom: 15px;"
                                        valign="top"
                                      >
                                        <table
                                          role="presentation"
                                          border="0"
                                          cellpadding="0"
                                          cellspacing="0"
                                          style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: auto;"
                                        >
                                          <tbody>
                                            <tr>
                                              <td
                                                style="font-family: sans-serif; font-size: 14px; vertical-align: top; border-radius: 5px; text-align: center; background-color: #ffffff;"
                                                valign="top"
                                                align="center"
                                                bgcolor="#000"
                                              >
                                                <a
                                                  href="'.$url.'"
                                                  target="_blank"
                                                  style="border: solid 1px #000; border-radius: 5px; box-sizing: border-box; cursor: pointer; display: inline-block; font-size: 14px; font-weight: bold; margin: 0; padding: 12px 25px; text-decoration: none; text-transform: capitalize; background-color: #000; border-color: #000; color: #ffffff;"
                                                  >Rest Password &rarr;</a
                                                >
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <p
                                  style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;"
                                >
                                Si eso no funciona, copie y pegue el siguiente
                                enlace en su navegador.
                                  <a
                                    >'.$url.'</a
                                  >
                                </p>
                                <p
                                  style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;"
                                >
                                  Helmy.
                                </p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
        
                      <!-- END MAIN CONTENT AREA -->
                    </table>
        
                    <!-- END CENTERED WHITE CONTAINER -->
        
                    <!-- START FOOTER -->
                    <div
                      class="footer"
                      style="clear: both; margin-top: 10px; text-align: center; width: 100%;"
                    >
                      <table
                        role="presentation"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;"
                        width="100%"
                      >
                        <tr>
                          <td
                            class="powered-by"
                            style="font-family: sans-serif; vertical-align: top; padding-bottom: 10px; padding-top: 10px; color: #999999; font-size: 12px; text-align: center;"
                            valign="top"
                            align="center"
                          ></td>
                        </tr>
                      </table>
                    </div>
                    <!-- END FOOTER -->
                  </div>
                </td>
                <td
                  style="font-family: sans-serif; font-size: 14px; vertical-align: top;"
                  valign="top"
                >
                  &nbsp;
                </td>
              </tr>
            </table>
          </body>
        </html>
        ';
    }


    $mail->send();
    return true;
} catch (Exception $e) {
    return false;
}
     

   }

}

?>