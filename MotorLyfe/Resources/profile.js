Titanium.UI.setBackgroundImage('default_bg.png');

var profile = Ti.UI.currentWindow;
var id = Ti.App.Properties.getString('ID');
var Cloud=	require("ti.cloud");

var v2 = Ti.UI.createView({
	backgroundColor: '#cccccc',
	height: '10%',
	top: 10,
	width: Ti.UI.FILL,
	borderRadius: 10
});

var v2name=Ti.UI.createLabel({
	text: 'Welcome to MotorLyfe',
	font: {fontSize: 40, fontWeight: 'bold'},
	color: 'black'
});

var v3= Ti.UI.createView({
	height: '15%',
	top: 10,
	width: Ti.UI.FILL,
	borderRadius: 10
});

var entryBtn= Ti.UI.createButton({
	title: 'Create New Project',
	width: 130, height: 80,
	left: 100,
	backgroundColor: '#ffd800',
	color: 'black',
	borderRadius: 10
});
entryBtn.addEventListener('click',function(e)
{
   var win2 = Titanium.UI.createWindow({
   	backgroundImage: 'default_bg.png',
   	layout: 'vertical',
   	title: 'Create A New Entry',
   	url: 'entry.js'});
   	var textfield= Ti.UI.createTextField();
   	var dialog= Ti.UI.createAlertDialog({
   		title: 'Name Your Project',
   		androidView: textfield,
   		buttonNames: ['OK', 'Cancel']
      });
   dialog.addEventListener('click', function(e){
   	Cloud.PhotoCollections.create({
   		name: textfield.value
   	}, function(e) {
   		if (e.success) {
   			var collection= e.collections[0];
   			alert('Project Name Saved: ' + textfield.value);
   			Ti.App.Properties.setString('collectionName', textfield.value);
   		} else {
   			alert('Error:\n' + ((e.error && e.message) || JSON.stringify(e)));
   			}
   		});
   	});
   win2.open();
   dialog.show();
   });


var searchBtn= Ti.UI.createButton({
	backgroundColor: '#ffd800',
	width: 130, height: 80,
	left: 250,
	title: 'Search MotorLyfe',
	color: 'black',
	borderRadius: 10
});
searchBtn.addEventListener('click',function(e)
{
   var win3 = Titanium.UI.createWindow({
   	layout: 'vertical',
   	url: 'search.js'
   });
   win3.open();
   profile.close();
});

var v4= Titanium.UI.createView({
	width: Ti.UI.FILL,
	height: '75%'
});

v4.addEventListener('click', function(e){
	Cloud.PhotoCollections.search({
    user_id: id
}, function (e) {
    if (e.success) {
        alert('Success:\n' +
            'Count: ' + e.collections.length);
        for (var i = 0; i < e.collections.length; i++) {
            var collection = e.collections[i];
            Cloud.PhotoCollections.show({
    			collection_id: collection.id
				}, function (e) {
				    if (e.success) {
				        var collection = e.collections[0];
				        alert('Success:\n' +
				            'id: ' + collection.id + '\n' +
				            'name: ' + collection.name + '\n' +
				            'count: ' + collection.counts.total_photos);
				    } else {
				        alert('Error:\n' +
				            ((e.error && e.message) || JSON.stringify(e)));
				    }
				});
        }
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
    }
});
	});
	

v3.add(searchBtn);
v3.add(entryBtn);
v2.add(v2name);
profile.add(v2);
profile.add(v3);
profile.add(v4);
