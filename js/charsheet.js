/*! charsheet.js v1.0 by @joefulgham | MIT license */

		// Reset form to empty state
		function clearForm() {
			document.getElementById("charSheet").reset();
		}

		// Save form state to hashtag
		function putCharstuff() {
			//Grab all the form data and put it into an array.
			var result = { };
			$.each($('form').serializeArray(), function() {
    			result[this.name] = this.value;
			});
			// Convert array to JSON string which is then compressed to a text string that can be stored in the URI
			var charData = LZString.compressToEncodedURIComponent(JSON.stringify(result));
			// Put that string up into the hashtag 
			window.location.hash = charData;
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
		var autoExpand = function (field) {

			// Reset field height
			field.style.height = 'inherit';

			// Get the computed styles for the element
			var computed = window.getComputedStyle(field);

			// Calculate the height
			var height = parseInt(computed.getPropertyValue('border-top-width'), 10)
				     + parseInt(computed.getPropertyValue('padding-top'), 10)
				     + field.scrollHeight
				     + parseInt(computed.getPropertyValue('padding-bottom'), 10)
				     + parseInt(computed.getPropertyValue('border-bottom-width'), 10)
					- 20;

			field.style.height = height + 'px';

		};

		// Listen for input events to check for textarea resizing
		document.addEventListener('input', function (event) {
			if (event.target.tagName.toLowerCase() !== 'textarea') return;
			autoExpand(event.target);
		}, false);

		// Listen for window size change to trigger textarea resizing
		window.addEventListener('resize', function(event){
			  resizeBoxes();
		});

		function resizeBoxes() {
                        var inputs = document.getElementsByTagName('textarea');
                        for (var i = 0; i < inputs.length; i += 1) {
				autoExpand(inputs[i]);
			}
		}

		function initialStuff() { 
			// Load Character from hashtag
			loadCharstuff();
			// Expand textareas as needed for loading
			resizeBoxes();
		}
