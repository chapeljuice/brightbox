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