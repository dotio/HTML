<?php
	if(isset($_POST['email'])){
		//email info
		$admin_email = 'fake@mail.com';
		$name = $_POST['name'];
		$email = $_POST['email'];
		$phone = $_POST['phone'];
		$message = $_POST['message'];

		//send
		mail($admin_email, 'New message', $message . ' - ' . $phone, 'From' . $email);
		header('location: ./sucsess.html');
	}