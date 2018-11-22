<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
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
          Admin
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