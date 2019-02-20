# Sheet
Tools to create RPG Character Sheets as HTML forms and save data in URI's hashtag for easy sharing/transporation

## What?
I play a lot of pen and paper roleplaying games that use printed character sheets that are fairly simple but easy to misplace. I wanted a cross-device way to make/save character sheets without mucking around with user accounts or even a database to store them in. The current URI length limit is 2038 characters, which when compressed is a lot of dataspace in a hashtag so I'm using it!

### How does this work?
For the pre-made sheets: Simply fill out your character and press "Save". The character data will be converted to a JSON string and then URI-safe compressed and placed in the hashtag. Load up that page with the hashtag and the script will decompress the JSON string from the hashtag and populate the form!

I personally use Google Chrome for my bookmarks so once I bookmark a character they become available on every device I have!

Character sheets for new games can be made by creating an HTML form with the id "charSheet". Note: Each form element requires a unique Name attribute. Then simply include jQuery and charsheet.js and the script will take care of the rest!

## Current Working Sheets
* [Tales from the Loop](https://sheet.adventureforhire.com/loop/) 
* [Star-Crossed](https://sheet.adventureforhire.com/starcrossed) 

These should be future-proof, but if I ever have to break the save/load formatting I'll make sure the old code is still available to load your characters.

### Sheets under construction
Note that I cannot guarantee saved characters on these will continue to work, so use at your own risk! These are here simply because I've planned to do them and have started in some fashion.
* [Masks RPG](https://sheet.adventureforhire.com/masks/) - I started with "Beacon" and am now making my way through the individual playbooks as I have time. Already very happy with how they're working.

## To-Do and Requests
* Remainder of Masks playbooks
* I bought [Downfall](http://lessthanthreegames.com/downfall/) and want to try making a "shareable" set of sheets for it. Possible it'll work better with simply a shared Google Doc though.
* **Create check for overly-long hashcode**  
Test sheets are hitting a length of around 1000 characters which is about half the data-space so it's not vital, but there should be an "oops too much data" error display soon. Max URI length is 2038 -- I should be able to make a very specific "how long is the current URI" check so it can use as much space is possible no matter where the code goes.

## Credits
Made by [Joe Fulgham](https://joefulgham.com/) for [Adventure For Hire](https://adventureforhire.com/)

GitHub: https://github.com/joefulgham/Sheet/

### Includes 
* populate.js - https://github.com/dannyvankooten/populate.js
* lz-string - https://github.com/pieroxy/lz-string

## Like this?
[Buy me a coffee](https://ko-fi.com/joefulgham) or [send with PayPal](https://paypal.me/joefulgham)
