/*//////////////////////////////////////////////////////////////////////////////
                      _           _     _                             _       _ 
                     (_)___/\   /(_) __| | ___  ___   /\/\   ___   __| | __ _| |
                     | / __\ \ / / |/ _` |/ _ \/ _ \ /    \ / _ \ / _` |/ _` | |
                     | \__ \\ V /| | (_| |  __/ (_) / /\/\ \ (_) | (_| | (_| | |
                    _/ |___/ \_/ |_|\__,_|\___|\___/\/    \/\___/ \__,_|\__,_|_|
                   |__/  VERSION 1.0  -  BLACK LIVES MATTER  -  AUG 18, 2020
                         https://github.com/psydwannabe/jsVideoModal
                             
 NOTE: This JS snippet relies on separate CSS and HTML elements to function.
//////////////////////////////////////////////////////////////////////////////*/

var sgVideoModal = document.getElementById("sg-videoModal");
// This gets all the classes set above

// Function triggered when video link clicked
if(typeof sgVideoModalAction != 'function') {
	function sgVideoModalAction(e) {
	
	// First determine if we're on mobile.
	// Get the width of the window
	xWidth = null;
	if(window.screen != null) xWidth = window.screen.availWidth;
	if(window.innerWidth != null) xWidth = window.innerWidth;
	if(document.body != null) xWidth = document.body.clientWidth;
	
	// If it's smol, return true (pass YT through)
	if(xWidth <= 1024) return(true);
	

	
		// Get the href URL from the element
		var url=this.getAttribute('href');
		if(typeof url == undefined) { 
			if(typeof console.log == 'function'){console.log('VideoModal: Did this element have an href tag?.');}
			return(false);
		}
		
		// Now let's try to get a YouTube ID out of that url
		var ytid; // It will live here.
		
		// The method below was shamelessly stolen from StackOverflow here: 
		// https://stackoverflow.com/a/9102270/188571
		var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
		var match = url.match(regExp);
		if (match && match[2].length == 11) {
			ytid=match[2];
		}
		else {
			if(typeof console.log == 'function'){console.log('VideoModal: No YTID found');}
			return(false);
		}
		
		// Make it appear!
		sgVideoModal.classList.add("active");
		
		// Set the Embed URL
		sgVideoModal.getElementsByClassName('sg-video')[0].src ='https://www.youtube.com/embed/'+ytid+'?autoplay=1&modestbranding=1&showinfo=0';
		e.preventDefault();
		return(false);
	}
}

// Now we make all links with the class active!
var sgVideoModalLinks = document.getElementsByClassName('makeThisAVideoModal');
for (i = 0; i < sgVideoModalLinks.length; i++) {
	sgVideoModalLinks[i].onclick=sgVideoModalAction;
}



// Function to close things down
function sgVideoModalClose() {
	// Drop the iframe URL to stop the video
	sgVideoModal.getElementsByClassName('sg-video')[0].src = 'about:blank';
	
	// Remove the parent "active" class to hide everything
	sgVideoModal.classList.remove("active");
	return(false);
}

// Now we attach that to the background element!
sgVideoModal.getElementsByClassName('sg-backdrop')[0].onclick=sgVideoModalClose;


// Now a function to close things down when the escape key is pressed.
// The following was stolen shamelessly from Stackoverflow:
// https://stackoverflow.com/a/3369743/188571
document.onkeydown = function(evt) {
	evt = evt || window.event;
	var isEscape = false;
	if ("key" in evt) {
		isEscape = (evt.key === "Escape" || evt.key === "Esc");
	} else {
		isEscape = (evt.keyCode === 27);
	}
	if (isEscape) {
		sgVideoModalClose();
	}
};
