<!doctype html>
<html>
<head>
  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-87348180-2"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-87348180-2');
  </script>

  <meta charset="utf-8"/>
  <title>Sheet - JQuery RPG character sheets saved as bookmarks</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0"/>
  <meta name="description" content="JQuery RPG character sheets saved as bookmarks">
  <meta name="author" content="Joe Fulgham">
  <link rel="shortcut icon" href="https://adventureforhire.com/wp-content/uploads/2016/11/cropped-header-hello.jpg"  />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="JQuery RPG character sheets saved as bookmarks" />
  <meta name="twitter:site" content="@joefulgham" />
  <meta name="twitter:description" content="Web based character sheets for role-playing games that store and load their data using the hashtag. Bookmark to save for later loading!" />
  <meta name="twitter:image" content="https://sheet.adventureforhire.com/images/sheet-featured.jpg" />
  <meta name="twitter:image-alt" content="" >
  <meta property="og:image" content="https://sheet.adventureforhire.com/images/sheet-featured.jpg">
  <link rel="stylesheet" href=""/>
  <style>
  body { font-family: apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; }
  </style>
</head>

<body>
  <header style="max-width: 46em; margin: 0 auto;">
    <img src="https://sheet.adventureforhire.com/images/sheet-featured.jpg" style="max-width: 100%" />
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
