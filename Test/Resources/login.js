var l= Ti.UI.currentWindow;

var username=Titanium.UI.createTextField({
	color: 'black',
	top: 240,
	left: 90,
	width: 300,
	height: 60,
	hintText: 'Username'
});
l.add(username);

var password = Titanium.UI.createTextField({
	color:'black',
	top:40,
	left:90,
	width:300,
	height:60,
	hintText:'Password',
	passwordMask:true
});
l.add(password);

var loginBtn = Titanium.UI.createButton({
title:'Login',
	backgroundColor: '#ffd800',
	color: 'black',
	top:40,
	width:300,
	height:80,
	borderRadius:10
});
l.add(loginBtn);

var Cloud=	require("ti.cloud");

loginBtn.addEventListener('click', function(){
Cloud.Users.login({
    login: username.value,
    password: password.value,
}, function (e) {
    if (e.success) {
        var user = e.users[0];
		var profileWin = Titanium.UI.createWindow({
   		url: 'profile.js',
   		layout: 'vertical'
   	});
   		l.close();
   		profileWin.open();
    } else {
        alert('Unable to log you in:' + e.message);
    }
    });
});