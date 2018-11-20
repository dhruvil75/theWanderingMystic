<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>The Wandering Mystic | Package</title>
  <!-- Tell the browser to be responsive to screen width -->
  <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
  <link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/css/select2.min.css" rel="stylesheet" />

  <!-- Bootstrap 3.3.7 -->

  <link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.min.css">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="bower_components/font-awesome/css/font-awesome.min.css">
  <!-- Ionicons -->
  <link rel="stylesheet" href="bower_components/Ionicons/css/ionicons.min.css">
  <!-- jvectormap -->
  <link rel="stylesheet" href="bower_components/jvectormap/jquery-jvectormap.css">
  <!-- Theme style -->
  <link rel="stylesheet" href="dist/css/AdminLTE.min.css">
  <!-- AdminLTE Skins. Choose a skin from the css/skins
       folder instead of downloading all of them to reduce the load. -->
  <link rel="stylesheet" href="dist/css/skins/_all-skins.min.css">

  <script src="plugins/ckeditor/ckeditor.js"></script>
  <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
  <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
  <!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
  <![endif]-->

  <!-- Google Font -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic">
  <script src="rest.js"></script>
</head>

<body class="hold-transition skin-blue sidebar-mini">
  <div class="wrapper">


    <header class="main-header">

      <!-- Logo -->
      <a href="index.jsp" class="logo">
        <!-- mini logo for sidebar mini 50x50 pixels -->
        <span class="logo-mini"><b>T</b>WM</span>
        <!-- logo for regular state and mobile devices -->
        <span class="logo-lg"><b>The</b> Wandering Mystic</span>
      </a>

      <!-- Header Navbar: style can be found in header.less -->
      <nav class="navbar navbar-static-top">
        <!-- Sidebar toggle button-->
        <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
          <span class="sr-only">Toggle navigation</span>
        </a>
        <!-- Navbar Right Menu -->
        <div class="navbar-custom-menu">
          <ul class="nav navbar-nav">
            <!-- User Account: style can be found in dropdown.less -->
            <li class="dropdown user user-menu">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                <img src="dist/img/user2-160x160.jpg" class="user-image" alt="User Image">
                <span class="hidden-xs">
                  User Name</span>
              </a>
              <ul class="dropdown-menu">
                <!-- User image -->
                <li class="user-header">
                  <img src="dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">

                  <p>
                    User Name
                    <small>
                      Admin</small>
                  </p>
                </li>
                <!-- Menu Body -->
                <li class="user-body">
                  <div class="row">
                    <div class="col-xs-12 text-center">
                      <a href="changepassword.jsp">Change Password</a>
                    </div>
                  </div>
                  <!-- /.row -->
                </li>
                <!-- Menu Footer-->
                <li class="user-footer">
                  <div class="pull-left">
                    <a href="profile.jsp" class="btn btn-default btn-flat">Profile</a>
                  </div>
                  <div class="pull-right">
                    <a href="logout.jsp" class="btn btn-default btn-flat">Sign out</a>
                  </div>
                </li>
              </ul>
            </li>
            <!-- Control Sidebar Toggle Button -->
            <!-- <li>
            <a href="#" data-toggle="control-sidebar"><i class="fa fa-gears"></i></a>
          </li> -->
          </ul>
        </div>

      </nav>
    </header>
    <!-- Left side column. contains the logo and sidebar -->
    <aside class="main-sidebar">
      <!-- sidebar: style can be found in sidebar.less -->
      <section class="sidebar">
        <!-- Sidebar user panel -->
        <div class="user-panel">
          <div class="pull-left image">
            <img src="dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">
          </div>
          <div class="pull-left info">
            <p>
              User Name
            </p>
            <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
          </div>
        </div>
        <!-- sidebar menu: : style can be found in sidebar.less -->
        <ul class="sidebar-menu" data-widget="tree">
          <li class="header">NAVIGATION</li>
          <li class="active">
            <a href="index.jsp">
              <i class="fa fa-files-o"></i> <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a href="inquiryDisplay.jsp">
              <i class="fa fa-user-plus"></i> <span>View Inquiries</span>
            </a>
          </li>
          <li class="treeview">
            <a href="#">
              <i class="fa fa-paper-plane"></i>
              <span>Tour</span>
              <span class="pull-right-container">
                <i class="fa fa-angle-left pull-right"></i>
              </span>
            </a>
            <ul class="treeview-menu">
              <li><a href="packageAdd.jsp"><i class="fa fa-circle-o"></i>Add Packages</a></li>
              <li><a href="packageDisplay.jsp"><i class="fa fa-circle-o"></i>View Packages</a></li>
            </ul>
          </li>
          <li class="treeview">
            <a href="#">
              <i class="fa fa-diamond"></i>
              <span>Products</span>
              <span class="pull-right-container">
                <i class="fa fa-angle-left pull-right"></i>
              </span>
            </a>
            <ul class="treeview-menu">

              <li><a href="productAdd.jsp"><i class="fa fa-circle-o"></i>Add Product</a></li>

              <li><a href="productDisplay.jsp"><i class="fa fa-circle-o"></i>View Products</a></li>


            </ul>
          </li>
          <li>
            <a href="orderDisplay.jsp">
              <i class="fa fa-shopping-cart"></i><span>View Orders</span>
            </a>
          </li>
        </ul>
      </section>
      <!-- /.sidebar -->
    </aside>
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <!-- Main content -->
      <section class="content">
        <!-- Main row -->
        <div class="row">
          <!-- Left col -->
          <!-- /.col -->
          <div class="col-md-6">
            <!-- general form elements -->
            <div class="box box-primary">
              <div class="box-header with-border">
                <h3 class="box-title">Tour Package</h3>
              </div>
              <form onsubmit="addPackage()" method="POST" enctype="multipart/form-data">
                <!-- /.box-header -->
                <div class="box-body">
                  <!-- form start -->

                  <div class="form-group">
                    <label for="pkg_name">Package Name</label>
                    <input type="text" class="form-control" name="pkg_name" id="package_name" placeholder="Enter name of the Package"
                      required>
                  </div>

                  <div class="form-group">
                    <label for="pkg_price">Package Price</label>
                    <input type="number" class="form-control" name="pkg_price" id="package_price" placeholder="Enter price of the package"
                      pattern="[0-9.]+" required>
                  </div>

                  <div class="form-group">
                    <label for="pkg_discount">Available Discount</label>
                    <input type="number" class="form-control" name="pkg_discount" id="package_discount" placeholder="Enter discount if any">
                  </div>

                  <div class="form-group">
                    <label>Catagory</label>
                    <select class="js-example-basic-single" name="pkg_category" style="width:100%;" required>

                    </select>
                  </div>

                  <div class="form-group">
                    <label>Places</label>
                    <input type="text" class="form-control" name="places" id="package_price" placeholder="Enter places you want to visit"
                      required>
                  </div>

                  <div class="form-group">
                    <label>Add Itinerary</label>
                    <div id="htmldata1" style="border: 1px solid;color : #999; padding : 5px; border-color : #d2d6de;"
                      data-toggle="modal" data-target="#modalAddBrand1">
                    </div>
                    <div class="modal fade" id="modalAddBrand1" tabindex="-1" role="dialog" aria-labelledby="modalAddBrandLabel1"
                      aria-hidden="true">
                      <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                          <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            <h4 class="modal-title" id="modalAddBrandLabel1">add</h4>
                          </div>
                          <div class="modal-body">
                            <textarea name="myeditor1" id="myeditor1" rows="10" cols="80" placeholder="Enter text Here"
                              required></textarea>
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                            <button id="AddBrandButton1" type="button" class="btn btn-primary" data-dismiss="modal">Save</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="form-group">
                    <label>Add Package Includes</label>
                    <div class="form-group" id="htmldata2" style="border: 1px solid;color : #999; padding : 5px; border-color : #d2d6de;"
                      data-toggle="modal" data-target="#modalAddBrand2">
                    </div>
                    <div class="modal fade" id="modalAddBrand2" tabindex="-2" role="dialog" aria-labelledby="modalAddBrandLabel2"
                      aria-hidden="true">
                      <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                          <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            <h4 class="modal-title" id="modalAddBrandLabel2">add</h4>
                          </div>
                          <div class="modal-body">
                            <textarea name="myeditor2" id="myeditor2" rows="20" cols="80" placeholder="Enter text Here"></textarea>
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                            <button id="AddBrandButton2" type="button" class="btn btn-primary" data-dismiss="modal">Save</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="form-group">
                    <label>Add Package Excludes</label>
                    <div id="htmldata3" style="border: 1px solid;color : #999; padding : 5px; border-color : #d2d6de;"
                      data-toggle="modal" data-target="#modalAddBrand3">
                    </div>
                    <div class="modal fade" id="modalAddBrand3" tabindex="-1" role="dialog" aria-labelledby="modalAddBrandLabe3"
                      aria-hidden="true">
                      <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                          <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            <h4 class="modal-title" id="modalAddBrandLabel3">add</h4>
                          </div>
                          <div class="modal-body">
                            <textarea name="myeditor3" id="myeditor3" rows="10" cols="80" placeholder="Enter text Here">=</textarea>
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                            <button id="AddBrandButton3" type="button" class="btn btn-primary" data-dismiss="modal">Save</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div class="form-group">
                    <label>Add Notes</label>
                    <div id="htmldata4" style="border: 1px solid;color : #999; padding : 5px; border-color : #d2d6de;"
                      data-toggle="modal" data-target="#modalAddBrand4">
                    </div>
                    <div class="modal fade" id="modalAddBrand4" tabindex="-1" role="dialog" aria-labelledby="modalAddBrandLabe4"
                      aria-hidden="true">
                      <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                          <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            <h4 class="modal-title" id="modalAddBrandLabel4">add</h4>
                          </div>
                          <div class="modal-body">
                            <textarea name="myeditor4" id="myeditor4" rows="10" cols="80" placeholder="Enter text Here"></textarea>
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                            <button id="AddBrandButton4" type="button" class="btn btn-primary">Save</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="form-group">
                    <label for="customFile">Images</label>
                    <div class="custom-file">
                      <input type="file" name="image[]" class="custom-file-input" id="customFile" accept="image/*"
                        multiple>
                      <label class="custom-file-label" for="customFile">
                      </label>
                    </div>
                  </div>

                </div>
                <div class="box-footer ">
                  <input type="submit" class="btn btn-primary pull-right" name="submit" value="Submit">
                </div>


              </form>
            </div>

          </div>
          <!-- /.row -->
      </section>
      <!-- /.content -->
    </div>
    <!-- /.content-wrapper -->

  </div>
  <!-- ./wrapper -->

  <!-- jQuery 3 -->
  <script src="bower_components/jquery/dist/jquery.min.js"></script>
  <!-- Bootstrap 3.3.7 -->
  <script src="bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
  <!-- FastClick -->
  <script src="bower_components/fastclick/lib/fastclick.js"></script>
  <!-- AdminLTE App -->
  <script src="dist/js/adminlte.min.js"></script>
  <!-- Sparkline -->
  <script src="bower_components/jquery-sparkline/dist/jquery.sparkline.min.js"></script>
  <!-- jvectormap  -->
  <script src="plugins/jvectormap/jquery-jvectormap-1.2.2.min.js"></script>
  <script src="plugins/jvectormap/jquery-jvectormap-world-mill-en.js"></script>
  <!-- SlimScroll -->
  <script src="bower_components/jquery-slimscroll/jquery.slimscroll.min.js"></script>
  <!-- ChartJS -->
  <script src="bower_components/chart.js/Chart.js"></script>
  <!-- AdminLTE dashboard demo (This is only for demo purposes) -->
  <script src="dist/js/pages/dashboard2.js"></script>
  <!-- AdminLTE for demo purposes -->
  <script src="dist/js/demo.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/js/select2.min.js"></script>

  <script type="text/javascript">
    CKEDITOR.replace('myeditor1');

    $(document).ready(function () {

      $('input:file').change(
        function (e) {
          console.log(e.target);
          var files = e.target.files;
          var filenames = "";
          if (files.length > 4) {
            alert('Maximum 4 File allowed.');
            e.target.value = '';
          } else {
            filenames = files[0].name;
            var i;
            for (i = 1; i < files.length; i++) {
              // do something with `substr[i]`
              filenames = filenames + ", " + files[i].name;
            }
          }
          $(this).siblings("label").html(filenames);
        });

      $.fn.modal.Constructor.prototype.enforceFocus = function () {
        modal_this1 = this
        $(document).on('focusin.modal', function (e) {
          if (modal_this1.$element[0] !== e.target && !modal_this1.$element.has(e.target).length
            // add whatever conditions you need here:
            &&
            !$(e.target.parentNode).hasClass('cke_dialog_ui_input_select') && !$(e.target.parentNode).hasClass(
              'cke_dialog_ui_input_text')) {
            modal_this1.$element.focus()
          }
        })
      };
    });

    // Get the modal
    var modal1 = document.getElementById('modalAddBrand1');

    // Get the button that opens the modal
    var btn1 = document.getElementById("AddBrandButton1");

    // Get the <span> element that closes the modal
    var span1 = document.getElementById("htmldata1");

    // When the user clicks on the button, open the modal
    btn1.onclick = function () {

      $('#modalAddBrand1').modal('hide');
      var att1 = document.createAttribute("value"); // Create a "class" attribute
      att1.value = CKEDITOR.instances.myeditor1.getData(); // Set the value of the class attribute
      span1.setAttributeNode(att1);
      span1.innerHTML = CKEDITOR.instances.myeditor1.getData();
    }

    // When the user clicks on <span> (x), close the modal
    span1.onclick = function () {
      modal1.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal1) {
        modal1.style.display = "none";
      }
    }

    CKEDITOR.replace('myeditor2');

    $(document).ready(function () {

      $.fn.modal.Constructor.prototype.enforceFocus = function () {
        modal_this2 = this
        $(document).on('focusin.modal', function (e) {
          if (modal_this2.$element[0] !== e.target && !modal_this2.$element.has(e.target).length
            // add whatever conditions you need here:
            &&
            !$(e.target.parentNode).hasClass('cke_dialog_ui_input_select') && !$(e.target.parentNode).hasClass(
              'cke_dialog_ui_input_text')) {
            modal_this2.$element.focus()
          }
        })
      };
    });

    // Get the modal
    var modal2 = document.getElementById('modalAddBrand2');

    // Get the button that opens the modal
    var btn2 = document.getElementById("AddBrandButton2");

    // Get the <span> element that closes the modal
    var span2 = document.getElementById("htmldata2");

    // When the user clicks on the button, open the modal
    btn2.onclick = function () {
      $('#modalAddBrand2').modal('hide');
      var att2 = document.createAttribute("value"); // Create a "class" attribute
      att2.value = CKEDITOR.instances.myeditor2.getData(); // Set the value of the class attribute
      span2.setAttributeNode(att2);
      span2.innerHTML = CKEDITOR.instances.myeditor2.getData();
    }

    // When the user clicks on <span> (x), close the modal
    span2.onclick = function () {
      modal2.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal2) {
        modal2.style.display = "none";
      }
    }

    CKEDITOR.replace('myeditor3');

    $(document).ready(function () {

      $.fn.modal.Constructor.prototype.enforceFocus = function () {
        modal_this3 = this
        $(document).on('focusin.modal', function (e) {
          if (modal_this3.$element[0] !== e.target && !modal_this3.$element.has(e.target).length
            // add whatever conditions you need here:
            &&
            !$(e.target.parentNode).hasClass('cke_dialog_ui_input_select') && !$(e.target.parentNode).hasClass(
              'cke_dialog_ui_input_text')) {
            modal_this3.$element.focus()
          }
        })
      };
    });

    // Get the modal
    var modal3 = document.getElementById('modalAddBrand3');

    // Get the button that opens the modal
    var btn3 = document.getElementById("AddBrandButton3");

    // Get the <span> element that closes the modal
    var span3 = document.getElementById("htmldata3");

    // When the user clicks on the button, open the modal
    btn3.onclick = function () {
      $('#modalAddBrand3').modal('hide');
      var att3 = document.createAttribute("value"); // Create a "class" attribute
      att3.value = CKEDITOR.instances.myeditor3.getData(); // Set the value of the class attribute
      span3.setAttributeNode(att3);
      span3.innerHTML = CKEDITOR.instances.myeditor3.getData();
    }

    // When the user clicks on <span> (x), close the modal
    span3.onclick = function () {
      modal3.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal3) {
        modal3.style.display = "none";
      }
    }

    CKEDITOR.replace('myeditor4');

    $(document).ready(function () {

      $.fn.modal.Constructor.prototype.enforceFocus = function () {
        modal_this4 = this
        $(document).on('focusin.modal', function (e) {
          if (modal_this4.$element[0] !== e.target && !modal_this4.$element.has(e.target).length
            // add whatever conditions you need here:
            &&
            !$(e.target.parentNode).hasClass('cke_dialog_ui_input_select') && !$(e.target.parentNode).hasClass(
              'cke_dialog_ui_input_text')) {
            modal_this4.$element.focus()
          }
        })
      };
    });

    // Get the modal
    var modal4 = document.getElementById('modalAddBrand4');

    // Get the button that opens the modal
    var btn4 = document.getElementById("AddBrandButton4");

    // Get the <span> element that closes the modal
    var span4 = document.getElementById("htmldata4");

    // When the user clicks on the button, open the modal
    btn4.onclick = function () {
      $('#modalAddBrand4').modal('hide');
      var att4 = document.createAttribute("value"); // Create a "class" attribute
      att4.value = CKEDITOR.instances.myeditor4.getData(); // Set the value of the class attribute
      span4.setAttributeNode(att4);
      span4.innerHTML = CKEDITOR.instances.myeditor4.getData();
    }

    // When the user clicks on <span> (x), close the modal
    span4.onclick = function () {
      modal4.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal4) {
        modal4.style.display = "none";
      }
    }

    $(document).ready(function () {
      $('.js-example-basic-single').select2({
        placeholder: 'Tour Package',
        width: 'resolve'
      });
    });
  </script>
  <!-- InputMask -->
  <script src="plugins/input-mask/jquery.inputmask.js"></script>
  <script src="plugins/input-mask/jquery.inputmask.date.extensions.js"></script>
  <script src="plugins/input-mask/jquery.inputmask.extensions.js"></script>
  <script type="text/javascript">
    $(function () {
      //Datemask yyyy/mm/dd
      $('#datemask').inputmask('yyyy/mm/dd', {
        'placeholder': 'yyyy/mm/dd'
      })
      $('[data-mask]').inputmask()
    });
  </script>

</body>

</html>