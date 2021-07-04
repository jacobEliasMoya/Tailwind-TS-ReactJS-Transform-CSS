<?php
    //first PHP program :)
    if(isset($_POST['submit'])){
        $name = $_POST['name'];
        $subject = $_POST['subject'];
        $mailFrom = $_POST['mail'];
        $message = $_POST['message'];


        $mailTo = "yankees_jem7204@icloud.com";
        $headers = "From: ".$mailFrom;
        $txt = "You have receieved an e-mail from ".$name.".\n\n".$message; 



        // function declaration (3 necessary perameters)
        //email sent to, 
        //subject
        //message
        mail($mailTo,$subject,$txt,$headers);
        header("Location: index.html?mailsend");
    }
?>