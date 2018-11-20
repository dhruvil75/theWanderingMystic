function getProducts() {
  $.ajax({
    url: "/product",
    type: "GET",
    dataType: "json",
    success: data => {
      if (data) {
        var len = data.length;
        var txt = "";
        if (len > 0) {
          for (var i = 0; i < len; i++) {
            if (data[i].name) {
              txt +=
                "<tr><td>" +
                data[i].name +
                "</td><td>" +
                data[i].description +
                "</td></tr>";
            }
          }
          if (txt != "") {
            $("#tableBody").append(txt);
          }
        }
      }
    }
  });
  return false;
}

function addProduct() {
  $.ajax({
    url: "/product",
    type: "POST",
    dataType: "json",
    data: $("#productAdd").serialize(),
    success: () => {
      alert("Successfully added product");
    }
  });
  return false;
}

function updateProduct() {
  $.ajax({
    url: "/product",
    type: "PUT",
    dataType: "json",
    data: $("#productAdd").serialize(),
    success: () => {
      alert("Successfully added product");
    }
  });
  return false;
}

function deleteProduct(id) {
  $.ajax({
    url: "/product/" + id,
    type: "DELETE",
    dataType: "xml",
    success: function(xml) {
      console.log(xml);
      $(xml)
        .find("User")
        .each(function() {
          $(this)
            .find("id")
            .each(function() {
              var id = $(this).text();
              console.log(id);
              alert("Deleted the user with id " + id);
            });
        });
    }
  });
}

function getPackages() {
  $.ajax({
    url: "/package",
    type: "GET",
    dataType: "json",
    success: data => {
      if (data) {
        var len = data.length;
        var txt = "";
        if (len > 0) {
          for (var i = 0; i < len; i++) {
            if (data[i].name) {
              txt +=
                "<tr><td>" +
                data[i].name +
                "</td><td>" +
                data[i].description +
                "</td></tr>";
            }
          }
          if (txt != "") {
            $("#tableBody").append(txt);
          }
        }
      }
    }
  });
  return false;
}

function addPackage() {
  $.ajax({
    url: "/package",
    type: "POST",
    dataType: "json",
    data: $("#packageAdd").serialize(),
    success: () => {
      alert("Successfully added product");
    }
  });
  return false;
}

function updatePackage() {
  $.ajax({
    url: "/product",
    type: "PUT",
    dataType: "json",
    data: $("#packageAdd").serialize(),
    success: () => {
      alert("Successfully added product");
    }
  });
  return false;
}

function deletePackage(id) {
  $.ajax({
    url: "/product/" + id,
    type: "DELETE",
    dataType: "xml",
    success: function(xml) {
      console.log(xml);
      $(xml)
        .find("User")
        .each(function() {
          $(this)
            .find("id")
            .each(function() {
              var id = $(this).text();
              console.log(id);
              alert("Deleted the user with id " + id);
            });
        });
    }
  });
}

function getOrders() {
  $.ajax({
    url: "/orders",
    type: "GET",
    dataType: "json",
    success: data => {
      if (data) {
        var len = data.length;
        var txt = "";
        if (len > 0) {
          for (var i = 0; i < len; i++) {
            if (data[i].name) {
              txt +=
                "<tr><td>" +
                data[i].name +
                "</td><td>" +
                data[i].description +
                "</td></tr>";
            }
          }
          if (txt != "") {
            $("#tableBody").append(txt);
          }
        }
      }
    }
  });
  return false;
}

function getInquiries() {
  $.ajax({
    url: "/inquiries",
    type: "GET",
    dataType: "json",
    success: data => {
      if (data) {
        var len = data.length;
        var txt = "";
        if (len > 0) {
          for (var i = 0; i < len; i++) {
            if (data[i].name) {
              txt +=
                "<tr><td>" +
                data[i].name +
                "</td><td>" +
                data[i].description +
                "</td></tr>";
            }
          }
          if (txt != "") {
            $("#tableBody").append(txt);
          }
        }
      }
    }
  });
  return false;
}

function deleteInquiry(id) {
  $.ajax({
    url: "/inquiries/" + id,
    type: "DELETE",
    dataType: "xml",
    success: function(xml) {
      console.log(xml);
      $(xml)
        .find("User")
        .each(function() {
          $(this)
            .find("id")
            .each(function() {
              var id = $(this).text();
              console.log(id);
              alert("Deleted the user with id " + id);
            });
        });
    }
  });
}
