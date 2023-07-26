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
* [Webmaster](https://sheet.adventureforhire.com/masks/janus/#N4IgxgFghgTgclAtgUxALhAdWQI0VAZwBdkYQAaEGZKAGwRXRACkB7ZAAgDEBXWgc2iIK4aDAAKrGERhQAlkQCqAJQCSTCESIAHAmgD0+ghGTIiAOigATAG7IAdkR7UAZlIhzq5sK0T78BADWBPpy+PzIIfoA7rgBJDAAtABW7C58gkiJBNpyVqQErPZQ5sna-CIR9vkwBEz49iKyYKgYmB4kImC0rEQe9hUYOFJyAxzdvf0VlD7EPIwYcj72S+Osc4yUAYFM6bS0HFZyBPw8x6iUUDi0cjdEAJ4A8vbIj9pEckVMyqz5jmuOGCsWgiK63BT3AAq0VYTGGLw4VVIUA+RXIHDs9l86KkHFiODql2u4Ie0NYb1RjTauEJIDBd3uXDkdiYYW06wIcmunEQrBwJPuXTEABEoANSEwAAxC2BcahQHYYaUzMQAZSgNk+ZCVMpgqp42lIWqluoAsjxqmLWiAAMwiHBQMDBIhSJ4vJiqiBSIi0e4cKAuBIcVR4wgcflaBzhv1QDiyI6sR0fOyHMIOTlFOh43BgWTRWikdEujjEVjaDh9TgIABexwrEHlJBWY0QfpcMDkDisBHM9sdztdZKYkNYHECpnLrY47c71QIJYDnHbvg4NbkcbMHZwPEpvcoDqdpZgUIbpiYpr9vOE+-7R8ZrGcTDX87FVjjckERES0VG-BL90QbQUQ8asCj7Q8XWPJkWQwEMwFgTgrgfIgOGQOxjyKTgAAo+hRDhjnsAByFDYzXABKEQXE8YgRwiSttRASETA4YVkG0Hd7kSU0oHuXFWBcetODACEAEJuCBRBVygWsCBEppkFoFFPnsYw5G0Z5rWUXBWF6eTFMpVTtCHDAAHEpH4L5KFGFxaB4BwWjgXpIm+bTekRMx50CLEnWQN8rFYaJ7HDHd3KIecD0CDgDVQ9C-Q+FB0RhaIAB0YGS+wQ38oiUL6UZIpDGQeGIDgzJgCz7HRbcUJMGASwUlxEmWKi-haf1qg4dlYlquskGk38RF5OwNOHZjuKCAbCECSF7kND0DSNKQBtYOwuAfBjTVuKxEgaF5qCsJa7FVOQAA8mFFcUgSK7McBEPkbn4JSimGjBIWQSASwNdlpFu4kHspYyQCO-gVio+D-kmCVKDuj9HvsJjqGtcQeN-cNbloWkCDe6gPisRySDqWCS18Mw03naAU2LIgFU4Eh3oIT7vQ3ABHOziHnaIPALfCgsrDhEDyKwuf46cP00FGHTfU57lk276NNZbnIwABBILkGOmQoESI4UBU5SszoWcOGSkB8VzKB81IY3QxfMBhL+Kn9j9NX2Uxt9i1jFmxScST4zkWHUOOw0Ox1lDkiKkj5zYTheAEIRrai7QrCUsZeedo0Q8I9maQUZBzA4JjOCse4UdNvMC1qnw6EiFo31Gd26v5xJtAgaWlizNwYEk19UZQqP0TCbcUY8SSfz6fCwunL3CA+MB-X5O5Ox7VL0uX+xsDwafSHGMUSx-MZu5IAsvpInoxnxAEXjAAyOESRJw0mDgPHnAKgoPr1MY4IobheMSmLrMHwycGQAoGqHUW6cnggcXEnJAK+n9B1UgLR3jKRLB4QMFZRwQ1qtoRSLR5yaljLzVQjhSAvAsBwEAABfIAA) - My Masks: The New Generation Janus (and Spidersona)
* [Chet Barker](https://sheet.adventureforhire.com/loop/#N4IgxgFghgTgQgewCYE8QC4QFYQBpzQwAqAppBiAEx4GwASJsALhTvpLALICWAdkhWrtCAZV6MA1oJocYAMQQwwJCgGYZhTggBuKzBthE+EkjAoBGAzAAKMBAHMYUALYUrAYSgAbMAFcvUEx6IB4IvExQYCz6wrDuhK6YlrEwADKMApjqKQCSvLoAzkzc9oHBoc4ADjAkECT8bikAolWBENwAXuUpAHIuwfEkTAAEcLAmZvhMKJXBRHa+AEZeJM5QEzRQ9sHmACw0Xr5gEgDy4hRhB0cSRADuCBe8V8dEEDXBl-iHxwq+ZpifEBIGDcXQUADiQ2GUFuUBQwwAZnZnMMIAhnCRhkwEMMCuihu1ePZhoshkEYAA6Ta8SCKCFOZxrYYAaRIXi8aHw1QQy1WFAAIlAkAByArQ3jQxa+AqgzHeMAINFebhgGjVbhIYKceERez2PjE5jDbhixyMEYACilI14POQ8LAUAlEltt2NTFFwwxAEoqfhNQUwCDKsVLpgRNA9fDnP4VkxcMMAGpOujeepYgC0BXaMHjwwAVoxeAUE2swAXIiZLbduEwIKiEMhvTQEVBCmF7BRUqC+MLhmFocNbHDTMMM6MBwApHTcGgSDWWTA8Ezw8c9EglCCLBB-BMIxQYmDDSoBFBrIJYuoSqXsnWwbZ511enW+bGU4YAVRpja8JNfFIA4YkAQEgxQVBBfzrA0xX3I8MVxBAAIpYZbmgIJdEpOcNWoTB+WuVdhgAHRAV5AhJWtIApYisKQdRwwVV8x2GAB1DcYCQP8RnnfgoGGcCvD3RRB2VJgmBWYZ9RgLw-RAeckH2GIQF4SowEXEBtSxRhIFHC1OHfZitnEGBvWNMU60xMIOU0yI6iPHJhhIDDhmVEwOIAMmGJ8TWNCVzIbApKlrbxxQ4+5eGFEZYRMYZfEqRFkRQtDHNHXhNyYNYalRTFvOgbQDRk5SwBwkATi8DjOCdbhhjobg7CYirNUvTFShgRYtkxSpxgTJ8nQcsBlHCEFy20LYnHCRKcSCdkxXggoyBqJgChoFUwhVWs+UwMZiQQBFcWqOFjygPgRgAaiEEB1ucNTlqCZxipu1Y6JCfBLoU56LtunBFPaTUd2iEBwVgNrtkOmAJGGCr7HEJgQXEEl70xC05qDKEFU1DMvAQY4SA4+oYadZQAEJm3wW0giW-QAF8gA) - My Tales From The Loop Troublemaker

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
