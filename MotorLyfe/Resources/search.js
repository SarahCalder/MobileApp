var sw = Titanium.UI.currentWindow;
var name=Ti.App.collectionName;

var v1 = Ti.UI.createView({
	backgroundColor: '#cccccc',
	opacity: .5,
	height: '10%',
	top: 10,
	width: Ti.UI.FILL,
	borderRadius: 10
});

var title= Ti.UI.createLabel({
	text: 'Search MotorLyfe',
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	font: {fontSize: 40, fontWeight: 'bold'},
	color: 'black'
});

var search = Titanium.UI.createSearchBar({
    barColor:'#ffd800', 
    color: 'black',
    showCancel:false,
    height:60,
    top: 20,
    hintText: 'Search Projects for...',
    width:240,
    right: 40,
    font: {fontSize: 20}
});

var back = Ti.UI.createButton ({
	height: 60,
	width: 115,
	left: 40,
	top: 20,
	borderRadius: 10,
	backgroundColor: '#ffd800',
	color: 'black',
	title: 'Back'
});
back.addEventListener('click',function(e)
{
   var win4 = Titanium.UI.createWindow({
   	layout: 'vertical',
   	url: 'profile.js'
   });
   win4.open();
});

var v2 = Ti.UI.createView ({
	borderRadius: 10,
	height: '90%',
	width: 'auto'
});

sw.add(v1);
sw.add(v2);
v1.add(title);
v2.add(search);
v2.add(back);


