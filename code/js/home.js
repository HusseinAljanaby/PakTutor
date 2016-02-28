var ref = new Firebase("https://paktutor.firebaseio.com");
var user;

$(document).ready(function() {
	if (ref.getAuth() != null) {
		user = new Firebase("https://paktutor.firebaseio.com/users/" + ref.getAuth().uid);
		user.update({"image": "", "bio": "", "lessons": ""});
	} else {
		window.location = "index.html"
	}
});