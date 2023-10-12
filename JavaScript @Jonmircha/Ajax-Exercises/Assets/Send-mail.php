<?php
  if (isset($_POST)) {
    error_reporting(0);

    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $comments = $_POST['comments'];
    
    $domain = $_SERVER['HTTP_HOST'];
    $to = 'jesushome1404@gmail.com';
    $subject = "Contacto desde el formulario del sitio $domain: $subject";
    $message = "
    <p>
      Datos Enviados Desde el Formulario del Sitio <b>$domain</b>
      <ul>
        <li>Nombre: <b>$name</b></li>
        <li>Email: <b>$email</b></li>
        <li>Asunto: <b>$subject</b></li>
        <li>Comentarios: <b>$comments</b></li>
      </ul>
    </p>
    ";
    $headers = "MIME-Version: 1.0\r\n"."Content-Type: text/html; charset=utf8\r\n". "From: Envio Automatico No Responder <no-reply@$domain>";

    $send_mail = mail($to,$subject,$message,$headers);
    if ($send_mail) {
      $res = [
        "err"=> false,
        "message"=> "Tus Datos han Sido Enviados"
      ];
    } else{
      $res = [
        "err"=> true,
        "message"=> "Error al enviar tus datos, intenta nuevamente"
      ];
    }
    header("Access-Control-Allow-Origin: *");
    // header("Access-Control-Allow-Origin: https//jonmircha.com");
    header("Content-type: application/json");
    echo json_encode ($res);
  }
  exit;
?>
<!-- Mime Type =  Tipo de Contenido Enviado -->