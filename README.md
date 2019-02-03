# Sheet
Tools to create RPG Character Sheets as HTML forms and save data in URI's hashtag for easy sharing/transporation

## What?
I play alot of pen and paper roleplaying games that use printed character sheets that are fairly simple but easy to misplace. I wanted a cross-device way to make/save character sheets without mucking around with user accounts or even a database to store them in. The current URI length limit is 2038 characters, which when compressed is a lot of dataspace in a hashtag so I'm using it!

### How does this work?
For the pre-made sheets: Simply fill out your character and press "Save". The character data will be converted to a JSON string and then URI-safe compressed and placed in the hashtag. Load up that page with the hashtag and the script will decompress the JSON string from the hashtag and populate the form!

Character sheets for new games can be made by creating an appropirate HTML form with the id "charSheet" and loading jQuery and charsheet.js

Created for Adventure For Hire - https://adventureforhire.com/ 
