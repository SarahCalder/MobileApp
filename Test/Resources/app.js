var mainWin = Ti.UI.createWindow({
	backgroundImage: 'default_bg.png',
	layout: 'vertical'
});

var banner = Ti.UI.createView({
	height: '20%',
	top: 10,
	width: Ti.UI.FILL,
	borderRadius: 10
});
mainWin.add(banner);

var bannerLabel=Ti.UI.createLabel({
	text: 'Welcome to MotorLyfe!',
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	font: {fontSize: 40, fontWeigh: 'bold'}
});
banner.add(bannerLabel);

var bodyView=Ti.UI.createView({
	height: '80%',
	top: 10,
	width: Ti.UI.FILL,
	borderRadius: 10
});
mainWin.add(bodyView);

var regBtn= Ti.UI.createButton({
	backgroundColor: '#ffd800',
	width: 300, height: 80,
	top: 40,
	left: 80,
	title: 'Register',
	color: 'black',
	borderRadius: 10
});
regBtn.addEventListener('click',function(e)
{
   var winReg = Titanium.UI.createWindow({
   	backgroundImage: 'default_bg.png',
   	layout: 'vertical',
   	url: 'registration.js'
   });
   mainWin.close();
   winReg.open();
});

var loginBtn= Ti.UI.createButton({
	backgroundColor: '#ffd800',
	width: 300, height: 80,
	top: 150,
	left: 80,
	title: 'Login',
	color: 'black',
	borderRadius: 10
});
loginBtn.addEventListener('click',function(e)
{
   var winLogin = Titanium.UI.createWindow({
   	backgroundImage: 'default_bg.png',
   	layout: 'vertical',
   	url: 'login.js'
   });
   mainWin.close();
   winLogin.open();
});

bodyView.add(loginBtn);
bodyView.add(regBtn);
mainWin.open();
