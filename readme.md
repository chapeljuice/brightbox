## Brightbox README ##

### A lightweight jquery plugin for adding a lightbox feature to your site ###

#### How it works: ####

What you need:
* Image thumbnails (that users will click on)
* Large images (that appear in the brightbox)
* jQuery included in your project

Your thumbnail code should follow the following format:
`<img src="" data-largeSrc="" data-largeWidth="" data-largeHeight="" class="brightbox-thumb" />`

Definitions:
* "src" is the path to your thumbnail image
* "data-largeSrc" is the path to the image you want to appear when the user clicks on that image element
* "data-largeWidth" is the width (without units) of the image to appear in the brightbox
* "data-largeHeight" is the height (without units) of the image to appear in the brightbox
* "class='brightbox-thumb'" is needed, although you can add your own classes to this as well"

Then all you need to do is include `brightbox.min.js` and `brightbox.min.css` and you're all good!

#### Live Brightbox Demo: ####
<a href="http://ryanchapel.com/brightbox/" target="_blank">http://ryanchapel.com/brightbox/</a>

#### Browser Support: ####
Pretty much supported everywhere! It is 100% tested and functional in:
* Chrome (works best in this browser, since i'm using `filter: drop-shadow()`)
* Firefox
* Safari
* Opera
* Internet Explorer 7+ (I don't have access to an IE6 browser, so not sure about that)
* iOS 4+ (Safari & Chrome)
* Android 2.2+ (Stock browser, Chrome, Firefox, Opera Mobile, Dolphin)
* Windows Phone 7.5+ (Internet Explorer)

Note: If you plan on supporting IE7 & 8, you'll need to include conditional html comments in your page, as outlined in the <a href="http://www.html5boilerplate.com" target="_blank">HTML5 Boilerplate</a>. The brightbox css looks for the .ie7 and .ie8 classes and uses a different background than modern browsers. See below for details:

`<!--[if lt IE 7 ]><html lang="en" class="ie ie6"><![endif]-->`
`<!--[if IE 7 ]><html lang="en" class="ie ie7"><![endif]-->`
`<!--[if IE 8 ]><html lang="en" class="ie ie8"><![endif]-->`
`<!--[if IE 9 ]><html lang="en" class="ie ie9"><![endif]-->`
`<!--[if (gt IE 9)|!(IE)]><!--><html lang="en"><!--<![endif]-->`


#### To-do's ####
* Add arrows so you can navigate through the images without closing and clicking the next image.
* Possibility of adding support for any element (div, video, etc.), not just images.
* More to come. Have any suggestions? Let me hear them! Email me at <a href="mailto:chaprtc@gmail.com?subject=Brightbox%20Suggestions">chaprtc@gmail.com</a>