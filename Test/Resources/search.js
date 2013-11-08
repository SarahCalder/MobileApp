var sw = Ti.UI.createWindow({
	backgroundColor: 'black',
	layout: 'vertical'
});

var v1 = Ti.UI.createView({
	backgroundColor: '#cccccc',
	opacity: .5,
	height: '10%',
	top: 10,
	width: Ti.UI.FILL,
	borderRadius: 10
});

var search = Titanium.UI.createSearchBar({
    barColor:'#000', 
    showCancel:false,
    height:60,
    hintText: 'Search MotorLyfe for...',
    width:240,
    right: 20,
    font: {fontSize: 20}
});

var back = Ti.UI.createButton ({
	height: 60,
	width: 115,
	left: 20,
	borderRadius: 10,
	backgroundColor: 'black',
	color: 'white',
	title: 'Back'
});
back.addEventListener('click',function(e)
{
   var win4 = Titanium.UI.createWindow({
   	backgroundColor: 'black',
   	layout: 'vertical',
   	title: 'Search MotorLyfe For...',
   	url: 'app.js'
   });
   win4.open();
});


var scrollView = Ti.UI.createScrollView({
  contentWidth: 'auto',
  contentHeight: 'auto',
  showVerticalScrollIndicator: true,
  showHorizontalScrollIndicator: false,
  height: '90%',
  width: Ti.UI.FILL,
  layout: 'vertical'
});

var sv1 = Ti.UI.createView ({
	backgroundColor:'#cccccc',
	borderRadius: 10,
	top: 10,
	height: 200,
	width: 'auto'
});

var sv2 = Ti.UI.createView ({
	backgroundColor:'#cccccc',
	borderRadius: 10,
	top: 10,
	height: 200,
	width: 'auto'
});

var sv3 = Ti.UI.createView ({
	backgroundColor:'#cccccc',
	borderRadius: 10,
	top: 10,
	height: 200,
	width: 'auto'
});

var sv4 = Ti.UI.createView ({
	backgroundColor:'#cccccc',
	borderRadius: 10,
	top: 10,
	height: 200,
	width: 'auto'
});

var sv5 = Ti.UI.createView ({
	backgroundColor:'#cccccc',
	borderRadius: 10,
	top: 10,
	height: 200,
	width: 'auto'
});

var sv6 = Ti.UI.createView ({
	backgroundColor:'#cccccc',
	borderRadius: 10,
	top: 10,
	height: 200,
	width: 'auto'
});

var sv7 = Ti.UI.createView ({
	backgroundColor:'#cccccc',
	borderRadius: 10,
	top: 10,
	height: 200,
	width: 'auto'
});

var sv8 = Ti.UI.createView ({
	backgroundColor:'#cccccc',
	borderRadius: 10,
	top: 10,
	height: 200,
	width: 'auto'
});




v1.add(back);
v1.add(search);
scrollView.add(sv1);
scrollView.add(sv2);
scrollView.add(sv3);
scrollView.add(sv4);
scrollView.add(sv5);
scrollView.add(sv6);
scrollView.add(sv7);
scrollView.add(sv8);
sw.add(v1);
sw.add(scrollView);
sw.open({fullscreen:true});

