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

## Credits
Made by [Joe Fulgham](https://joefulgham.com/) for [Adventure For Hire](https://adventureforhire.com/)

GitHub: https://github.com/joefulgham/Sheet/

### Includes 
* populate.js - https://github.com/dannyvankooten/populate.js
* lz-string - https://github.com/pieroxy/lz-string

## Like this?
[Buy me a coffee](https://ko-fi.com/joefulgham) or [send with PayPal](https://paypal.me/joefulgham)
