<!doctype html>
<html>
<head>
  <meta charset="utf-8"/>
  <title></title>

  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0"/>
  <link rel="stylesheet" href=""/>
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
