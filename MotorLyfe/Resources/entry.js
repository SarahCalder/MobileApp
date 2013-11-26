var w=Titanium.UI.currentWindow;
var textfield=Ti.App.collectionName;
var id=Ti.App.Properties.getString('ID');

var Cloud=	require("ti.cloud");

function uploadPhoto( _source, _callback) {
	var onSuccess = function(e){
		if(e.media){
   			Cloud.Photos.create({
      			photo: e.media,
      			collection_name: Ti.App.Properties.getString('collectionName')
   			}, function (e) {
      			if (e.success) {
          			var photo = e.photo[0];
          			alert('Success:\\n' +
              		'id: ' + photo.id + '\\n' +
              		'url: ' + photo.url);
      			} else {
          			alert('Error:\\n' +
              			((e.error && e.message) || JSON.stringify(e)));
      			}
    			_callback && _callback(e);
   
   			});
  		}
 	};
 	
 	switch(_source){
 		case "CAMERA":
  			Ti.Media.showCamera({
  				animated: true,
  				allowEditing: true,
  				autohide: true,
  				mediaTypes: [Ti.Media.MEDIA_TYPE_PHOTO],
  				success: onSuccess,
  				error: function(e){ alert('Error:\\n' +
             		((e.error && e.message) || JSON.stringify(e)));}
  			});
  			break;
 		case "GALLERY":
  			Ti.Media.openPhotoGallery({
  				animated: true,
  				allowEditing: true,
  				autohide: true,
  				mediaTypes: [Ti.Media.MEDIA_TYPE_PHOTO],
  				success: onSuccess,
  				error: function(e){ alert('Error:\\n' +
             		((e.error && e.message) || JSON.stringify(e)));}
  			});
  			break;
 		default:
	}
}

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
	height: '20%',
	width: Ti.UI.FILL
});
w.add(entryv2);

var cameraUploadBtn=Ti.UI.createButton({
	id: 'camera',
	backgroundImage: 'camera.png',
	height: 100, width: 100,
	top: 10, left: 170,
	borderRadius: 10
});
entryv2.add(cameraUploadBtn);

cameraUploadBtn.addEventListener('click', function(e){
	uploadPhoto('CAMERA', function(e){
		alert("Picture Uploaded");
	});
});

var galleryUploadBtn=Ti.UI.createButton({
	id: 'gallery',
	backgroundImage: 'polaroid.png',
	height: 80, width: 80,
	top: 20, left: 60,
	borderRadius: 10
});
entryv2.add(galleryUploadBtn);

galleryUploadBtn.addEventListener('click', function(e){
	uploadPhoto('GALLERY', function(e){
		alert("Picture Uploaded");
	});
});

var entryv3=Ti.UI.createScrollView({
	height: '70%',
	width: Ti.UI.FILL
});
w.add(entryv3);

entryv3.addEventListener('click', function(e){
});

var the_img = Titanium.UI.createImageView({ 
image:"http://storage.cloud.appcelerator.com/ZqgmgOJqKUuo6Ew2o8UQYNStVpe8BWT9/photos/d9/48/5294ca8e6bc8e00b2400c3fd/tixhr3843842_small_240.jpeg",
top: 0,
left: 40
});
entryv3.add(the_img);

the_img.addEventListener('click', function(e){
	var bigImg= Titanium.UI.createImageView({
		image: "http://storage.cloud.appcelerator.com/ZqgmgOJqKUuo6Ew2o8UQYNStVpe8BWT9/photos/d9/48/5294ca8e6bc8e00b2400c3fd/tixhr3843842_medium_500.jpeg"
	});
	var view= Titanium.UI.createWindow({
		width: Ti.UI.FILL,
		height: Ti.UI.FILL
	});
	view.addEventListener('click', function(e){
		view.close();
	});
	view.add(bigImg);
	view.open();
});

var img3 = Titanium.UI.createImageView({ 
image:"http://storage.cloud.appcelerator.com/ZqgmgOJqKUuo6Ew2o8UQYNStVpe8BWT9/photos/3e/cc/5294ca807de0780b19000454/tixhr9798966_small_240.jpeg",
top: 200,
left: 40
});
entryv3.add(img3);

img3.addEventListener('click', function(e){
	var bigImg= Titanium.UI.createImageView({
		image: "http://storage.cloud.appcelerator.com/ZqgmgOJqKUuo6Ew2o8UQYNStVpe8BWT9/photos/3e/cc/5294ca807de0780b19000454/tixhr9798966_medium_500.jpeg"
	});
	var view= Titanium.UI.createWindow({
		width: Ti.UI.FILL,
		height: Ti.UI.FILL
	});
	view.addEventListener('click', function(e){
		view.close();
	});
	view.add(bigImg);
	view.open();
});

var img4 = Titanium.UI.createImageView({ 
image:"http://storage.cloud.appcelerator.com/ZqgmgOJqKUuo6Ew2o8UQYNStVpe8BWT9/photos/9e/03/5294ca76eadf8a0b510003a7/tixhr-333181991_small_240.jpeg",
top: 400,
left: 40
});
entryv3.add(img4);

img4.addEventListener('click', function(e){
	var bigImg= Titanium.UI.createImageView({
		image: "http://storage.cloud.appcelerator.com/ZqgmgOJqKUuo6Ew2o8UQYNStVpe8BWT9/photos/9e/03/5294ca76eadf8a0b510003a7/tixhr-333181991_medium_500.jpeg"
	});
	var view= Titanium.UI.createWindow({
		width: Ti.UI.FILL,
		height: Ti.UI.FILL
	});
	view.addEventListener('click', function(e){
		view.close();
	});
	view.add(bigImg);
	view.open();
});

var submit=Titanium.UI.createButton({
	title:'Submit',
	backgroundColor: '#ffd800',
	color: 'black',
	top:30,
	right:60,
	width:120,
	height:60,
	borderRadius:10
});
entryv2.add(submit);

submit.addEventListener('click', function(e){
	var p=Titanium.UI.createWindow({
		url: 'profile.js',
		layout: 'vertical'
	});
	p.open();
	w.close();
});








