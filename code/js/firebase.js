var ref = new Firebase("https://paktutor.firebaseio.com");

ref.authWithOAuthRedirect("google", function(error) {
  if (error) {
    console.log("Authentication Failed!", error);
  } else {
    // We'll never get here, as the page will redirect on success.
  }
});