/*Eleanor Maritsa Maharani
 *2502014210
 */

function confirmation(){
    let emailuser = document.getElementById('emailuser').value;
    let pass = document.querySelector('#pass').value;
    let anotherpass = document.querySelector('#anotherpass').value;
    let email_valid = document.querySelector('#blankEmail');
    let pass_valid = document.querySelector('#blankPass');
    let status_conf = document.querySelector('#blankConfirm');

	/*jika user belum mengisi email namun sudah klik cofirm maka akan ada tulisan warning berwarna merah dan box akan berwarna merah*/
    if(emailuser == ""){
		document.getElementById("emailuser").style.borderColor = "red";
        email_valid.innerHTML = "Please enter your email.";
        email_valid.style.color = "red";
	/*namun jika user sudah mengisi dan sudah klik confirm button maka box akan seperti awal lagi*/
    }else{
		document.getElementById("emailuser").style.borderColor = "#ccc";
		email_valid.innerHTML = "";
	}
	
	/*jika user belum mengisi password namun sudah klik cofirm maka akan ada tulisan warning berwarna merah dan box akan berwarna merah*/
    if(pass == ""){
		document.querySelector('#pass').style.borderColor = "red";
        pass_valid.innerHTML = "Please enter your password.";
        pass_valid.style.color = "red";
	/*namun jika user sudah mengisi dan sudah klik confirm button maka box akan seperti awal lagi*/
    }else{
		document.querySelector('#pass').style.borderColor = "#ccc";
		pass_valid.innerHTML = "";
	}

	/*jika user belum mengisi password konfirmasi namun sudah klik cofirm maka akan ada tulisan warning berwarna merah dan box akan berwarna merah*/
	if(anotherpass == ""){
		document.querySelector('#anotherpass').style.borderColor = "red";
        status_conf.innerHTML = "Please enter your password.";
        status_conf.style.color = "red";
		
	
	/*jika user mengisi password namun tidak sama dengan password sebelumnya sudah klik cofirm maka akan ada tulisan warning berwarna merah dan box akan berwarna merah*/
    }else if(!anotherpass.match(pass)){
		document.querySelector('#anotherpass').style.borderColor = "red";
        status_conf.innerHTML = "Password does not match.";
        status_conf.style.color = "red";
	/*namun jika user sudah mengisi dan sudah klik confirm button maka box akan seperti awal lagi*/
    }else{
		document.querySelector('#anotherpass').style.borderColor = "#ccc";
		status_conf.innerHTML = "";
	}
}