// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage

 $(document).ready(function(){
    CKEDITOR.addCss('.cke_editable { font-size: 15px; padding: 2em; }');

	 CKEDITOR.replace('editor', {
      toolbar: [{
          name: 'document',
          items: ['Print']
        },
        {
          name: 'clipboard',
          items: ['Undo', 'Redo']
        },
        {
          name: 'styles',
          items: ['Format', 'Font', 'FontSize']
        },
        {
          name: 'colors',
          items: ['TextColor', 'BGColor']
        },
        {
          name: 'align',
          items: ['JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock']
        },
        '/',
        {
          name: 'basicstyles',
          items: ['Bold', 'Italic', 'Underline', 'Strike', 'RemoveFormat', 'CopyFormatting']
        },
        {
          name: 'links',
          items: ['Link', 'Unlink']
        },
        {
          name: 'paragraph',
          items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote']
        },
        {
          name: 'insert',
          items: ['Image', 'Table']
        },
        {
          name: 'tools',
          items: ['Maximize']
        },
        {
          name: 'editing',
          items: ['Scayt']
        }
      ],

      extraAllowedContent: 'h3{clear};h2{line-height};h2 h3{margin-left,margin-top}',

      // Adding drag and drop image upload.
      extraPlugins: 'print,format,font,colorbutton,justify,uploadimage',
      uploadUrl: url+'admin/upload_file?command=QuickUpload&type=Files&responseType=json',

      // Configure your file manager integration. This example uses CKFinder 3 for PHP.
      filebrowserBrowseUrl: url,
      filebrowserUploadUrl: url+'admin/upload_file?command=QuickUpload&type=Files',
      filebrowserImageUploadUrl: url+'admin/upload_file?command=QuickUpload&type=Images',

      height: 560,

      removeDialogTabs: 'image:advanced;link:advanced'
    });


   $( function() {
          $( "#accordion" ).accordion({
              collapsible: true,
              active: false
            });
        } );

    $(document).on('change', '#confirm_password',function(){
      validatePassword()
    });

    $(document).on('click', '#btn-create-admin',function(){
      validateCampos();
    });

    validateToast();
  });

 

  

  function validatePassword(){
    var password = document.getElementById("password")
    , confirm_password = document.getElementById("confirm_password");

    if(password.value == confirm_password.value) {
      $('#btn-create-admin').removeAttr("disabled")
      confirm_password.setCustomValidity("Passwords Don't Match");
    } else {
      confirm_password.setCustomValidity('');
      alert("Las contraseñas no coinciden");
      $( "#btn-create-admin" ).prop( "disabled", true);
    }
  }

  function validateCampos() {
    var user = document.getElementById("user");
    var password = document.getElementById("password")
    var confirm_password = document.getElementById("confirm_password");

    if (user.value ==="" || password.value==="" || confirm_password.value ==="") {
      alert("Debe llenar todos los campos")
    }
  }

  function validateToast() {
    var toast = document.getElementById("snackbar").innerHTML
    console.log(toast);
    if (toast!== '') {
      console.log('lleno',toast);
        mytoast();
    }
    if (toast === '') {
      $("#snackbar").hide();
      console.log('bacio',toast);
    } 
  }

  function mytoast() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }

/*
  password.onchange = validatePassword;
  confirm_password.onkeyup = validatePassword; */


