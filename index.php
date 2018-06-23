<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>pauwel.io { coming soon }</title>
  <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons">
  <link rel="stylesheet" href="css/global.css">
  <link rel="stylesheet" href="css/material_tabbar.css">
  <link rel="stylesheet" href="css/material_button.css">
  <link rel="stylesheet" href="css/material_card.css">
  <script src="external/vue.js"></script><!-- Vue.js -->
  <script src="external/sha256.min.js"></script><!-- SHA-256 hashing -->
  <script src="external/cryptico.browser.js"></script><!-- Cryptico (RSA keygen) -->
  <script>
    let globalBlockData = <?php echo file_get_contents("res/blockchain.json"); ?>;
  </script>
</head>
<body>
  <noscript>
    <strong>We're sorry but pauwel.io doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
  </noscript>
  <div id="app"></div>
  <script type="module" src="src/components/Block.js"></script>
  <script type="module" src="src/components/Blockchain.js"></script>
  <script type="module" src="src/components/Wallet.js"></script>
  <script type="module" src="src/components/Transaction.js"></script>
  <script type="module" src="src/components/material-design/MaterialButton.js"></script>
  <script type="module" src="src/App.js"></script>
</body>
</html>