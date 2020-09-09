# jsVideoModal v1.0
## Introduction
jsVideoModal is a snippet which turns HTML links like this one:
`<a href="https://www.youtube.com/watch?v=K-A76sS15HY" target="_blank">Modern Pirates</a>`
into an accessible pop-over window video modal, with failover for compatibility with mobile devices (view windows 1024px wide or less), simply by adding `class="makeThisAVideoModal"`.

This "script snippet" was written in a combination of HTML, CSS and base JavaScript for a focus on full browser compatability, ease of portibility, and minimum overhead.

## Installation
### Script-Snippet (CMS, or "the easy way"):
* Copy and paste the contents of "code-snippet.txt" into a global template or content-asset near the bottom of the page, such as a footer or legal text block.
		
### Separate File Inclusion
* Add jsVideoModal.min.css to your global includes
* Add jsVideoModal.min.css to your global includes _in the footer._
* Add the following HTML somewhere in your global HTML _in the footer:_
```
<!-- START jsVideoModal - V1.1 - https://github.com/psydwannabe/jsVideoModal -->
<div id="sg-videoModal">
	<div class="sg-backdrop"></div>
	<div class="sg-videoContainer">
		<button class="sg-closeButton" aria-label="Close">x</button>
		<iframe class="sg-video" src="about:blank"  frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	</div>
</div>
<!-- END jsVideoModal - V1.1 - https://github.com/psydwannabe/jsVideoModal -->
```

## Usage
* Use class "makeThisAVideoModal" in any `<a>` element with a Youtube URL as the `href` attribute.
 * `<a class="makeThisAVideoModal" href="<YouTube Video URL>" target="_blank">Video</a>`
* That's it!


## Requirements
* None.