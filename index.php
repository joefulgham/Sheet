<!doctype html>
<html>
<head>
  <meta charset="utf-8"/>
  <title>Sheet - A JQuery script to save and load HTML form data to/from its URI hashtag for use as portable RPG character sheets</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0"/>
  <meta name="description" content="Responsive RPG Character Sheets">
  <meta name="author" content="Joe Fulgham">
  <link rel="shortcut icon" href="https://adventureforhire.com/wp-content/uploads/2016/11/cropped-header-hello.jpg"  />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="Responsive RPG Character Sheets" />
  <meta name="twitter:site" content="@joefulgham" />
  <meta name="twitter:description" content="A web based character sheet for role-playing games that stores and loads its data using the hashtag. Bookmark to save for later loading!" />
  <meta name="twitter:image" content="images/sheet-featured.jpg" />
  <meta name="twitter:image-alt" content="" >
  <meta property="og:image" content="images/sheet-featured.jpg">
  <link rel="stylesheet" href=""/>
  <style>
  body { font-family: apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; }
  </style>
</head>

<body>
  <header>
  </header>

  <div style="max-width: 46em; margin: 0 auto;">
    <?php
    include('lib/parsedown.php');
    $html = file_get_contents('README.md');
    $Parsedown = new Parsedown();
    echo $Parsedown->text($html);
    ?>
  </div>

  <footer>
  </footer>

  <script src=""></script>
</body>

</html>
