var ref = new Firebase("https://paktutor.firebaseio.com");
var user;

var pImage;

function changeImage() {
	$("#changeImage").click(function() {
		$("body").append("\
		<div id='obstruction'>\
			<div id='imageChanger'>\
				<div id='uploadContainer'>\
					<img id='toUpload'src=''>\
				</div>\
				<div id='bottom'>\
					<form action='' method='post' enctype='multipart/form-data'>\
						<input type='file' name='fileToUpload' id='fileToUpload' style='visibility: hidden;'>\
						<input type='submit' value='Upload Image' id='submitFile' name='submit' style='visibility: hidden;'>\
					</form>\
					<input id='path' type='text' placeholder='Click here to select file'>\
					<div id='uploadButton'>\
						Upload\
					</div>\
				</div>\
			</div>\
		</div>");
		
		$("#obstruction").css({
			"position": "fixed",
			"z-index": "999",
			"top": "0px",
			"height": "100%",
			"width": "100%",
			
			"background-color": "rgba(50,50,50,0.6)",
		});
		
		$("#imageChanger").css({
			"position": "fixed",
			"height": "800px",
			"width": "1200px",
			"top": "50%",
			"left": "50%",
			"margin-top": "-400px",
			"margin-left": "-600px",
			
			"background-color": "white"
		});
		
		$("#uploadContainer").css({
			"height": "88%",
			"width": "100%",
			"text-align": "center",
			"background-image": "url('http://i153.photobucket.com/albums/s234/coasterfreak53/CARBONFIBER_zps5ae1bfc8.png')"
		});
		
		$("#toUpload").css({
			"height": "100%",
			"display": "inline-block"
		})
		
		$("#bottom").css({
			"position": "absolute",
			"bottom": "0px",
			"height": "12%",
			"width": "100%",
			
			"background-color": "rgb(220,220,220)",
		});
		
		$("#bottom input").css({
			"position": "absolute",
			"width": "75%",
			"height": "50%",
			"top": ($(this).height()/2 - 4).toString() + "px",
			"left": "3%",
			
			"text-align": "center",
			"font-size": "20px"
		});
		
		$("#uploadButton").css({
			"position": "absolute",
			"width": "15%",
			"height": "50%",
			"top": ($(this).height()/2).toString() + "px",
			"right": "3%",
			
			"color": "white",
			"text-align": "center",
			"line-height": $(this).height().toString() + "px",
			"font-size": "25px",
			
			"background-color": "rgb(40,147,180)",
		});
		$("form").attr("action", "image_upload" + "?uid=" + ref.getAuth().uid.replace(":", "-"));
		$("#obstruction").click(function() {
			$("#obstruction").remove();
		});
		
		$("#imageChanger").click(function(e) {
			e.stopPropagation();
		});
		
		$("#path").click(function() {
			$("#fileToUpload").click();
		});
		
		$("#fileToUpload").change(function () {
			$("#path").attr("value", $(this).val().split("/").pop().split("\\").pop());
		});
		
		$("#uploadButton").click(function() {
			$("#submitFile").click();
		});
	});
}

$(document).ready(function() {
	if (ref.getAuth() != null) {
		user = new Firebase("https://paktutor.firebaseio.com/users/" + ref.getAuth().uid);
		user.update({"image": "", "bio": "", "lessons": ""});
		if(ref.getAuth().provider == "google") {
			user.update({"image": ref.getAuth().google.profileImageURL});
		}
	} else {
		window.location = "index";
	}
	changeImage();
	
	user.once("value", function(snap) {
		pImage = snap.val()["image"];
		
		if (pImage != "" && pImage != null) {
			var shorterSide = $("#profileImage").width() > $("#profileImage").height() ? $("#profileImage").height(256) : $("#profileImage").width(256); 
			
			var extraWidth = $("#profileImage").width() > $("#piContainer").width();
			var extraHeight = $("#profileImage").height() > $("#piContainer").height();
			
			$("#profileImage").attr("src", pImage);
			$("#profileImage").css({
				"margin-left": extraWidth ? (-($("#profileImage").width() - $("#piContainer").width())/2).toString() + "px" : 0,
				"margin-top": extraHeight ? (-($("#profileImage").height() - $("#piContainer").height())/2).toString() + "px" : 0,
			});
		}
	});
});
