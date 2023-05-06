# Sheet
Tools to create RPG Character Sheets as HTML forms and save data in URI's hashtag for easy sharing/transporation

## What?
I play a lot of pen and paper roleplaying games that use printed character sheets that are fairly simple but easy to misplace. I wanted a cross-device way to make/save character sheets without mucking around with user accounts or even a database to store them in. The current URI length limit is 2038 characters, which when compressed is a lot of dataspace in a hashtag so I'm using it!

### How does this work?
For the pre-made sheets: Simply fill out your character and press "Save". The character data will be converted to a JSON string and then URI-safe compressed and placed in the hashtag. Load up that page with the hashtag and the script will decompress the JSON string from the hashtag and populate the form!

I use Google Chrome so once I bookmark a character they become available on every device I have!

Character sheets for new games can be made by creating an HTML form with the id "charSheet". Note: Each form element requires a unique Name attribute. Then simply include jQuery and charsheet.js and the script will take care of the rest!

## Current Working Sheets
* [Tales from the Loop](https://sheet.adventureforhire.com/loop/) 
* [Star-Crossed](https://sheet.adventureforhire.com/starcrossed)
* [Masks RPG](https://sheet.adventureforhire.com/masks/) - Core playbooks plus a Villain sheet!
* [Lasers & Feelings](https://sheet.adventureforhire.com/lf/) - initial sheet created, seems to be working
* [Monsterhearts 2](https://sheet.adventureforhire.com/monsterhearts) - seems to be working

These should be future-proof, but if I ever have to break the save/load formatting I'll make sure the old code is still available to load your characters. 

### Sample Characters
* [Webmaster](https://sheet.adventureforhire.com/masks/janus/#N4IgxgFghgTgclAtgUxALhAdWQI0VAZwBdkYQAaEGZKAGwRXRACkB7ZAAgDEBXWgc2iIK4aDAAKrGERhQAlkQCqAJQCSTCESIAHAmgD0+ghGTIiAOigATAG7IAdkR7UAZlIhzq5sK0T78BADWBPpy+PzIIfoA7rgBJDAAtABW7C58gkiJBNpyVqQErPZQ5sna-CIR9vkwBEz49iKyYKgYmB4kImC0rEQe9hUYOFJyAxzdvf0VlD7EPIwYcj72S+Osc4yUAYFM6bS0HFZyBPw8x6iUUDi0cjdEAJ4A8vbIj9pEckVMyqz5jmuOGCsWgiK63BT3AAq0VYTGGLw4VVIUA+RXIHDs9l86KkHFiODql2u4Ie0NYb1RjTauEJIDBd3uXDkdiYYW06wIcmunEQrBwJPuXTEABEoANSEwAAxC2BcahQHYYaUzMQAZSgNk+ZCVMpgqp42lIWqluoAsjxqmLWiAAMwiHBQMDBIhSJ4vJiqiBSIi0e4cKAuBIcVR4wgcflaBzhv1QDiyI6sR0fOyHMIOTlFOh43BgWTRWikdEujjEVjaDh9TgIABexwrEHlJBWY0QfpcMDkDisBHM9sdztdZKYkNYHECpnLrY47c71QIJYDnHbvg4NbkcbMHZwPEpvcoDqdpZgUIbpiYpr9vOE+-7R8ZrGcTDXBHR26IeK941gkQ-KPryD9PpRkCAB+PtDxdY8mRZDBIRMNs5EEd9nzxBQIA4TYQBcTxiBHCJK21EA4M4YVkG0Hd7kSU0oHuXFWBcf9xghABCbggUQVcoFrAhmKaZBaBRT57GMORtGea0+IEykRO0IcMBEUYXFoHgHBaOBekiJgRF5OxxOHEwOGooJtMIQJIXuQ0PQNI0pG01g7C4B9CNNW4rESBoXmoKw7LsVU5AADyYUVxSBHh53xEQ+RufhBKKPTYOQSASwNdlpEi4kYspOSQD8-gVmwsAxXfSYJUoKLENi+w4Ooa1xBo0Z+HDW5aFpAhEuoD4rHUkg6gwENChQD4UHnaAU2LIgFU4EgkoIFLvQ3ABHFTiHCjwCw4UZGMQPIrHW+jp0QzQGvDaxER4e4eMigjTXszSMAAQXsDhkH8mQoESI4UGEoSszoWcOAAHRAfFcygfNSCB8NEqQThHTAPIHAm-Y-Re9k2qsCtR1jJaivmONrDkSrnv8w0Oy+99kjC98wzYTheAEIRQ3nA0rEEsZK2J0m00cABycKaQUZBzA4YjDnuY6QbzAsYDWOhIhaDHRmLWM2u2xJtAgC6lizNwYA4sUMYjDhafRMJt2OjwOOiNCNqIecXCKwgPjAf1+TuTsewBmAAfsL2fewPAndIL8noIa2xgNit+LI+a6CKRr8QBF4wGkjhEkScNJg4Dx51YaInsjvp1k4IobheVi4LrQqnpwThkDQ4ONa1wqDlxTlEG0X1-Q4UmWneISSw8QNMY4EqZc7x0f01WMOdURxSBeCwRfgkP-Ra0crFHRO5hcBibnHCtOx75Ay3Wg1ewAXyAA) - My Masks: The New Generation Janus (and Spidersona)

### Sheets under construction
Note that I cannot guarantee saved characters on these will continue to work, so use at your own risk! These are here simply because I've planned to do them and have started in some fashion.

## To-Do and Requests
* I bought [Downfall](http://lessthanthreegames.com/downfall/) and want to try making a "shareable" set of sheets for it. Possible it'll work better with simply a shared Google Doc though.

## Credits
Made by [Joe Fulgham](https://joefulgham.com/) for [Adventure For Hire](https://adventureforhire.com/)

GitHub: https://github.com/joefulgham/Sheet/

### Includes 
* populate.js - https://github.com/dannyvankooten/populate.js
* lz-string - https://github.com/pieroxy/lz-string

## Like this?
[Buy me a coffee](https://ko-fi.com/joefulgham) or [send with PayPal](https://paypal.me/joefulgham)
