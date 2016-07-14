$(document).ready(
  function() {
    $("#cryptojs-encrypt-button").on("click", readSingleFile);
    function readSingleFile(event) {
      var file = $('#files')[0].files[0];
      if (file) {
	var reader = new FileReader();
	reader.onload = function(file) {
	  // grab the password the user supplied
	  var key = $('#encrypt-password').val();
          // encrypt using the supplied password
          var encrypted = CryptoJS.AES.encrypt(reader.result, key);
	  // put the values on the page for later use
	  $("#cryptojs-encrypted").text(encrypted);
	};
	reader.onerror = function(event) {
	  console.error("File could not be read! Code "+ event.target.error.code);
	};
	reader.readAsBinaryString(file);
      }
    }
    $("#sjcl-encrypt-button").on("click", readSJCLFile);
    function readSJCLFile(event) {
      var file = $('#files')[0].files[0];
      if (file) {
	var reader = new FileReader();
	reader.onload = function(file) {
	  // grab the password the user supplied
	  var key = $('#encrypt-password').val();
          // encrypt using the supplied password
          var encrypted = sjcl.encrypt(key, reader.result);
	  // put the values on the page for later use
	  $("#sjcl-encrypted").text(encrypted);
	};
	reader.onerror = function(event) {
	  console.error("File could not be read! Code "+ event.target.error.code);
	};
	reader.readAsBinaryString(file);
      }
    }
    $("#cryptojs-decrypt-button").click( function () {
      var encrypted_contents = $("#cryptojs-encrypted").text();
      var unlock_key = $("#encrypt-password").val();
      var decrypted = CryptoJS.AES.decrypt(encrypted_contents, unlock_key)
      var contents = decrypted.toString(CryptoJS.enc.Utf8);

      var blob = new Blob([contents], {type : 'application/octet-stream'});
      var objectURL = URL.createObjectURL(blob);

      a = $('a#cryptojs-decrypted-link');
      a.attr('href',''+objectURL);
      a.attr('download', 'file');
      a.attr('data-downloadurl','application/octet-stream:blah.txt:'+objectURL);

      $('a#cryptojs-decrypted-link').text("Click to download CryptoJS decrypted file");
    });
    $("#sjcl-decrypt-button").click( function () {
      var encrypted_contents = $("#sjcl-encrypted").text();
      var unlock_key = $("#encrypt-password").val();
      var decrypted = sjcl.decrypt(unlock_key, encrypted_contents);

      var blob = new Blob([decrypted], {type : 'application/octet-stream'});
      var objectURL = URL.createObjectURL(blob);

      a = $('a#sjcl-decrypted-link');
      a.attr('href',''+objectURL);
      a.attr('download', 'file');
      a.attr('data-downloadurl','application/octet-stream:blah.txt:'+objectURL);

      $('a#sjcl-decrypted-link').text("Click to download SJCL decrypted file");
    });
  }

);
