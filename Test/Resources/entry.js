var w=Titanium.UI.currentWindow;

var entryv1=Ti.UI.createView({
	backgroundColor: '#cccccc',
	opacity: .5,
	height: '10%',
	top: 10,
	width: Ti.UI.FILL,
	borderRadius: 10
});
w.add(entryv1);

var entryTitle=Ti.UI.createLabel({
	color: 'black',
	font: {fontSize: 35, fontWeight: 'bold'},
	text: 'Create New Project',
  textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
});
entryv1.add(entryTitle);

var entryv2=Ti.UI.createView({
	height: '80%',
	width: Ti.UI.FILL
});
w.add(entryv2);
