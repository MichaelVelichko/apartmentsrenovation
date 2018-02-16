function show(){
	var nav = document.getElementById('navigation');
	if (nav.style.display != 'block'){
		 nav.style.display = 'block';
	}
	else{
		nav.style.display = 'none';
	}

}

function showPhone(){
	var phone = document.getElementById('phone');
	phone.innerHTML = '<img src="/assets/images/numphone.png">'
}

function showEmail(){
	var email = document.getElementById('email');
	email.innerHTML = '<img src="/assets/images/colemail.png">'
}










