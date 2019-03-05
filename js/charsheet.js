/*! charsheet.js v1.3 by @joefulgham
    Copyright 2019 Joe Fulgham - Javascript: MIT license | HTML/CSS: Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
	https://sheet.adventureforhire.com
	https://joefulgham.com
*/

/* Include external libraries for faster loading */
/* LZ-String - from http://pieroxy.net/blog/pages/lz-string/index.html */
var LZString=function(){function o(o,r){if(!t[o]){t[o]={};for(var n=0;n<o.length;n++)t[o][o.charAt(n)]=n}return t[o][r]}var r=String.fromCharCode,n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",t={},i={compressToBase64:function(o){if(null==o)return"";var r=i._compress(o,6,function(o){return n.charAt(o)});switch(r.length%4){default:case 0:return r;case 1:return r+"===";case 2:return r+"==";case 3:return r+"="}},decompressFromBase64:function(r){return null==r?"":""==r?null:i._decompress(r.length,32,function(e){return o(n,r.charAt(e))})},compressToUTF16:function(o){return null==o?"":i._compress(o,15,function(o){return r(o+32)})+" "},decompressFromUTF16:function(o){return null==o?"":""==o?null:i._decompress(o.length,16384,function(r){return o.charCodeAt(r)-32})},compressToUint8Array:function(o){for(var r=i.compress(o),n=new Uint8Array(2*r.length),e=0,t=r.length;t>e;e++){var s=r.charCodeAt(e);n[2*e]=s>>>8,n[2*e+1]=s%256}return n},decompressFromUint8Array:function(o){if(null===o||void 0===o)return i.decompress(o);for(var n=new Array(o.length/2),e=0,t=n.length;t>e;e++)n[e]=256*o[2*e]+o[2*e+1];var s=[];return n.forEach(function(o){s.push(r(o))}),i.decompress(s.join(""))},compressToEncodedURIComponent:function(o){return null==o?"":i._compress(o,6,function(o){return e.charAt(o)})},decompressFromEncodedURIComponent:function(r){return null==r?"":""==r?null:(r=r.replace(/ /g,"+"),i._decompress(r.length,32,function(n){return o(e,r.charAt(n))}))},compress:function(o){return i._compress(o,16,function(o){return r(o)})},_compress:function(o,r,n){if(null==o)return"";var e,t,i,s={},p={},u="",c="",a="",l=2,f=3,h=2,d=[],m=0,v=0;for(i=0;i<o.length;i+=1)if(u=o.charAt(i),Object.prototype.hasOwnProperty.call(s,u)||(s[u]=f++,p[u]=!0),c=a+u,Object.prototype.hasOwnProperty.call(s,c))a=c;else{if(Object.prototype.hasOwnProperty.call(p,a)){if(a.charCodeAt(0)<256){for(e=0;h>e;e++)m<<=1,v==r-1?(v=0,d.push(n(m)),m=0):v++;for(t=a.charCodeAt(0),e=0;8>e;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1}else{for(t=1,e=0;h>e;e++)m=m<<1|t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t=0;for(t=a.charCodeAt(0),e=0;16>e;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1}l--,0==l&&(l=Math.pow(2,h),h++),delete p[a]}else for(t=s[a],e=0;h>e;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1;l--,0==l&&(l=Math.pow(2,h),h++),s[c]=f++,a=String(u)}if(""!==a){if(Object.prototype.hasOwnProperty.call(p,a)){if(a.charCodeAt(0)<256){for(e=0;h>e;e++)m<<=1,v==r-1?(v=0,d.push(n(m)),m=0):v++;for(t=a.charCodeAt(0),e=0;8>e;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1}else{for(t=1,e=0;h>e;e++)m=m<<1|t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t=0;for(t=a.charCodeAt(0),e=0;16>e;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1}l--,0==l&&(l=Math.pow(2,h),h++),delete p[a]}else for(t=s[a],e=0;h>e;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1;l--,0==l&&(l=Math.pow(2,h),h++)}for(t=2,e=0;h>e;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1;for(;;){if(m<<=1,v==r-1){d.push(n(m));break}v++}return d.join("")},decompress:function(o){return null==o?"":""==o?null:i._decompress(o.length,32768,function(r){return o.charCodeAt(r)})},_decompress:function(o,n,e){var t,i,s,p,u,c,a,l,f=[],h=4,d=4,m=3,v="",w=[],A={val:e(0),position:n,index:1};for(i=0;3>i;i+=1)f[i]=i;for(p=0,c=Math.pow(2,2),a=1;a!=c;)u=A.val&A.position,A.position>>=1,0==A.position&&(A.position=n,A.val=e(A.index++)),p|=(u>0?1:0)*a,a<<=1;switch(t=p){case 0:for(p=0,c=Math.pow(2,8),a=1;a!=c;)u=A.val&A.position,A.position>>=1,0==A.position&&(A.position=n,A.val=e(A.index++)),p|=(u>0?1:0)*a,a<<=1;l=r(p);break;case 1:for(p=0,c=Math.pow(2,16),a=1;a!=c;)u=A.val&A.position,A.position>>=1,0==A.position&&(A.position=n,A.val=e(A.index++)),p|=(u>0?1:0)*a,a<<=1;l=r(p);break;case 2:return""}for(f[3]=l,s=l,w.push(l);;){if(A.index>o)return"";for(p=0,c=Math.pow(2,m),a=1;a!=c;)u=A.val&A.position,A.position>>=1,0==A.position&&(A.position=n,A.val=e(A.index++)),p|=(u>0?1:0)*a,a<<=1;switch(l=p){case 0:for(p=0,c=Math.pow(2,8),a=1;a!=c;)u=A.val&A.position,A.position>>=1,0==A.position&&(A.position=n,A.val=e(A.index++)),p|=(u>0?1:0)*a,a<<=1;f[d++]=r(p),l=d-1,h--;break;case 1:for(p=0,c=Math.pow(2,16),a=1;a!=c;)u=A.val&A.position,A.position>>=1,0==A.position&&(A.position=n,A.val=e(A.index++)),p|=(u>0?1:0)*a,a<<=1;f[d++]=r(p),l=d-1,h--;break;case 2:return w.join("")}if(0==h&&(h=Math.pow(2,m),m++),f[l])v=f[l];else{if(l!==d)return null;v=s+s.charAt(0)}w.push(v),f[d++]=s+v.charAt(0),h--,s=v,0==h&&(h=Math.pow(2,m),m++)}}};return i}();"function"==typeof define&&define.amd?define(function(){return LZString}):"undefined"!=typeof module&&null!=module&&(module.exports=LZString);

/*! populate.js v1.0.2 by @dannyvankooten | MIT license */
!function(e){var t=function(e,o,n){for(var a in o)if(o.hasOwnProperty(a)){var i=a,r=o[a];if(void 0===r&&(r=""),null===r&&(r=""),void 0!==n&&(i=n+"["+a+"]"),r.constructor===Array)i+="[]";else if("object"==typeof r){t(e,r,i);continue}var c=e.elements.namedItem(i);if(c)switch(c.type||c[0].type){default:c.value=r;break;case"radio":case"checkbox":if(c.length)for(var l=0;l<c.length;l++)c[l].checked=r.indexOf(c[l].value)>-1;else c.checked=r.indexOf(c.value)>-1;break;case"select-multiple":for(var f=r.constructor==Array?r:[r],s=0;s<c.options.length;s++)c.options[s].selected|=f.indexOf(c.options[s].value)>-1;break;case"select":case"select-one":c.value=r.toString()||r;break;case"date":c.value=new Date(r).toISOString().split("T")[0]}}};"function"==typeof define&&"object"==typeof define.amd&&define.amd?define(function(){return t}):"undefined"!=typeof module&&module.exports?module.exports=t:e.populate=t}(this);

// Reset form to empty state
function clearForm() {
    document.getElementById("charSheet").reset();
}

// Put Character name at the start of the page title.
function setTitle() {
    var current_title = $(document).attr('title');
    if(current_title.indexOf(" -- ") >=0) {
    	var n = current_title.indexOf(" -- ");
    	var orig_title = current_title.substring(n + 4);
    }
    else {
    	var orig_title = current_title;
    }
    var new_title = $( "#charName" ).val() + " -- " + orig_title;
    $(document).attr("title", new_title);
}

// Save form state to hashtag
function putCharstuff() {
    //Grab all the form data and put it into an array.
    var result = {};
    $.each($('form').serializeArray(), function() {
        result[this.name] = this.value;
    });
    // Convert array to JSON string which is then compressed to a text string that can be stored in the URI
    var charData = LZString.compressToEncodedURIComponent(JSON.stringify(result));

    // Check total data length to make sure we're not going over the 2038 limit
    var totalLength = location.href.replace(location.hash,"").length + charData.length;
    if (totalLength > 2036) {
        alert("Length of " + totalLength + " exceeds maximum 2038. Remove some text and re-save to ensure your bookmark works!");
    }

    // Put that string up into the hashtag 
    window.location.hash = charData;
    setTitle();
}

// Read the hashtag data and use to populate form
function loadCharstuff() {
    // Load the hashtag into variable
    var charHashtag = window.location.hash.substr(1);
    // Decompress hashtag to json string
    var charData = LZString.decompressFromEncodedURIComponent(charHashtag);
    // Parse JSON data
    var data = JSON.parse(charData);
    // Set your containing element
    var formElement = document.getElementById('charSheet');
    // populate the form with our JSON object
    populate(formElement, data);
}

// Autoexpand textareas to fit contents
var autoExpand = function(field) {

    // Reset field height
    field.style.height = 'inherit';

    // Get the computed styles for the element
    var computed = window.getComputedStyle(field);

    // Calculate the height
    var height = parseInt(computed.getPropertyValue('border-top-width'), 10) +
        parseInt(computed.getPropertyValue('padding-top'), 10) +
        field.scrollHeight +
        parseInt(computed.getPropertyValue('padding-bottom'), 10) +
        parseInt(computed.getPropertyValue('border-bottom-width'), 10) -
        20;

    field.style.height = height + 'px';

};

// URL confirmation - security and sometimes people don't know what an image link is.
function is_url(str)
{
  regexp =  /(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/;
        if (regexp.test(str))
        {
          return true;
        }
        else
        {
          return false;
        }
}

// Listen for input events to check for textarea resizing
document.addEventListener('input', function(event) {
    if (event.target.tagName.toLowerCase() !== 'textarea') return;
    autoExpand(event.target);
}, false);

// Listen for window size change to trigger textarea resizing
window.addEventListener('resize', function(event) {
    resizeBoxes();
});

// Resize textareas to fit contents
function resizeBoxes() {
    var inputs = document.getElementsByTagName('textarea');
    for (var i = 0; i < inputs.length; i += 1) {
        autoExpand(inputs[i]);
    }
}

function displayButtons() {
	$( "#charSheet" ).after( "<div class='charSheetButtons' style='text-align: center;''><button type='button' value='Save'  onclick='putCharstuff();' style='margin: 0 auto;'>Save</button> <button type='button' value='Load' onclick='loadCharstuff();' style='margin: 0 auto;'>Load</button> <button type='button' value='Clear' onclick='clearForm()'>Clear</button></div>" );
}

function changePortrait() {
	var newPortrait = $("#charPortraitURI").val();
	var charPortraitinput = $("input#charPortraitURI");
	if (is_url(newPortrait)) { 
		$("#charImage").attr("src", newPortrait );
	}
	else {
		charPortraitinput.val(charPortraitinput.data("original-value"));
		$("#charImage").attr("src", charPortraitinput.data("original-value") );
	}
}

function initialStuff() {
    // Load Character from hashtag
    loadCharstuff();
    // Expand textareas as needed for loading
    resizeBoxes();
    // Show load/save buttons at the end of the form
    displayButtons();
    //	Run sheet-specific post-load scripts 
    if (typeof charLoaded == 'function') {
            charLoaded(); 
	}
	// Change image in case it's different from default after propagation
	changePortrait();

	// Set title to character name
	if ($("#charName").val()) { 
        setTitle();
    }
	// Queue new Portrait checker
	$( "#charPortraitURI" ).blur(function() {
		changePortrait();
	});
}

$( document ).ready(function() {
    initialStuff();
});