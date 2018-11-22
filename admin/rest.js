function signIn() {
  let signInForm = ($("#signIn").serializeArray());
  let user = {};
  for (let obj in signInForm) {
    let key = signInForm[obj].name;
    let val = signInForm[obj].value;
    user[key] = val;
  }
  $.ajax({
    url: "http://192.168.43.115:2018/signIn",
    type: "POST",
    dataType: "json",
    data: JSON.stringify(user),
    contentType: "application/json",
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    success: data => {
      if (data) {
        window.location.replace("index.jsp");
      }

    },
    error: (xhr, status, err) => {
      console.log(xhr);
      var err = eval("(" + xhr.responseText + ")");
      alert(err.Message);
    }
  });
  return false;
}


function getProducts() {
  let table = $('#table tbody');
  $.ajax({
    url: "http://192.168.43.115:2018/products",
    type: "GET",
    dataType: "json",
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    success: data => {
      if (data) {
        var len = data.length;
        var txt = "";
        if (len > 0) {
          for (var i = 0; i < len; i++) {
            if (data[i]) {
              let featureArray = data[i].features;
              let featureString = "";
              for (let featureObj of featureArray) {
                featureString += featureObj.feature + ",";
              }
              txt +=
                "<tr>" +
                "<td>" +
                data[i].name +
                "</td>" +
                "<td>" +
                data[i].description.substr(0, 40) + "..." +
                "</td>" +
                "<td>" +
                data[i].price +
                "</td>" +
                "<td>" +
                data[i].rating +
                "</td>" +
                "<td>" +
                data[i].stock +
                "<td><a href=" + data[i].imageUrl + " target=\"_blank\">" + "View Image" +
                "</a></td>" +
                "<td>" +
                featureString +
                "</td>" +
                "<td>" +
                "<button onclick=\"deleteProduct(" + data[i].id + ")\">Delete</button>" +
                "</td>"
              "</tr>";
            }
          }
          if (txt != "") {
            table.append(txt);
          }
        }
      }
    },
    error: (xhr, status, err) => {
      console.log(xhr);
      var err = eval("(" + xhr.responseText + ")");
      alert(err.Message);
    }
  });
  return false;
}

function addProduct() {
  let addProductForm = ($("#productAdd").serializeArray());
  let product = {};
  let images = [],
    features = [];
  for (let obj in addProductForm) {
    let key = addProductForm[obj].name;
    let val = addProductForm[obj].value;
    if (key == "image") {
      let obj = {};
      obj['image'] = val;
      images.push(obj);
      continue;
    }
    if (key === "features") {
      let featuresList = val.split(',');
      for (let feature of featuresList) {
        let obj = {};
        obj["feature"] = feature;
        features.push(obj);
      }
      continue;
    }
    if (key === "price" || key === "stock" || key === "rating") {
      product[key] = parseInt(val);
      continue;
    }

    product[key] = val;
  }
  console.log(product);
  $.ajax({
    url: "http://192.168.43.115:2018/products",
    type: "POST",
    dataType: "json",
    contentType: "application/json",
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    data: JSON.stringify(product),
    success: (data) => {
      alert("Successfully added product");
      addProductFeatures(data.id, features, images);
    },
    error: (xhr, status, err) => {
      alert(xhr + " ::: " + status + " ::: " + err);
      console.log(xhr);
      console.log(xhr + " ::: " + status + " ::: " + err);
      return false;
    }
  });
  return false;
}

function addProductFeatures(productId, features, images) {
  $.ajax({
    url: "http://192.168.43.115:2018/products/" + productId + "/featureArray",
    type: "POST",
    dataType: "json",
    contentType: "application/json",
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    data: JSON.stringify(features),
    success: (data) => {
      console.log(data);
      alert("Successfully added features");
      addProductImages(productId, images);
    },
    error: (xhr, status, err) => {
      console.log(xhr);
      alert(xhr + " ::: " + status + " ::: " + err);
      return false;
    }
  });
}

function addProductImages(productId, images) {
  console.log(images);
  $.ajax({
    url: "http://192.168.43.115:2018/product/" + productId + "/imageArray",
    type: "POST",
    dataType: "json",
    contentType: "application/json",
    data: JSON.stringify(images),
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    success: (data) => {
      console.log(data);
      alert("Successfully added images");
    },
    error: (xhr, status, err) => {
      console.log("=========" + xhr);
      alert(xhr + " ::: " + status + " ::: " + err);
      console.log(xhr + " ::: " + status + " ::: " + err);
      return false;
    }
  });
}

function updateProduct(id) {
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
    url: "http://192.168.43.115:2018/products/" + id,
    type: "DELETE",
    dataType: "json",
    contentType: "application/json",
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    success: (data) => {
      console.log(data);
      alert("Successfully deleted package " + id);
    }
  });
}


function getPackages() {
  let table = $('#table tbody');
  $.ajax({
    url: "http://192.168.43.115:2018/packages",
    type: "GET",
    dataType: "json",
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    success: data => {
      if (data) {
        var len = data.length;
        var txt = "";
        if (len > 0) {
          for (var i = 0; i < len; i++) {
            if (data[i].title) {
              txt +=
                "<tr>" +
                "<td>" +
                data[i].title + " : " + data[i].subtitle +
                "</td>" +
                "<td>" +
                data[i].description.substr(0, 40) + "..." +
                "</td>" +
                "<td>" +
                data[i].price +
                "</td>" +
                "<td>" +
                "Days: " +
                data[i].days + ", Nights: " + data[i].nights +
                "</td>" +
                "<td>" +
                data[i].accommodation +
                "</td>" +
                "<td>" +
                "<a href=\"#\">View Itinerary</a>" +
                "</td>" +
                "<td><a href=" + data[i].imageUrl + " target=\"_blank\">" + data[i].imageUrl +
                "</a></td>" +
                "<td>" +
                "<button onclick=\"deletePackage(" + data[i].id + ")\">Delete</button>" +
                "</td>"
              "</tr>";
            }
          }
          if (txt != "") {
            table.append(txt);
          }
        }
      }
    },
    error: (xhr, status, err) => {
      var err = eval("(" + xhr.responseText + ")");
      alert(err.Message);
    }
  });
  return false;
}


function addPackage() {
  alert("Adding package");
  let addPackageForm = ($("#packageAdd").serializeArray());
  let package = {};
  let itin = [],
    images = [];
  for (let obj in addPackageForm) {
    let key = addPackageForm[obj].name;
    let val = addPackageForm[obj].value;
    if (key == "itinerary") {
      let byDays = val.split(",");
      let dayCount = 1;
      for (let dayDetails of byDays) {
        let obj = {};
        obj.day = dayCount;
        obj.details = dayDetails;
        itin.push(obj);
        dayCount++;
      }
      continue;
    }
    if (key == "image") {
      let obj = {};
      obj['image'] = val;
      images.push(obj);
      continue;
    }
    package[key] = val;
  }
  console.log(package);
  console.log(images);
  let stringified = JSON.stringify(package);
  console.log(stringified);
  $.ajax({
    url: "http://192.168.43.115:2018/packages",
    type: "POST",
    dataType: "json",
    contentType: "application/json",
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    data: JSON.stringify(package),
    success: (data) => {
      console.log(data);
      alert("Successfully added package");
      addPackageItineraries(data.id, itin, images);
    },
    error: (xhr, status, err) => {
      alert(xhr + " ::: " + status + " ::: " + err);
      console.log(xhr);
      console.log(xhr + " ::: " + status + " ::: " + err);
      return false;
    }
  });
  return false;
}

function addPackageItineraries(packageId, itinerary, images) {
  console.log(itinerary);
  $.ajax({
    url: "http://192.168.43.115:2018/package/" + packageId + "/itineraryArray",
    type: "POST",
    dataType: "json",
    contentType: "application/json",
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
      'Access-Control-Allow-Headers': 'Authorization'
    },
    data: JSON.stringify(itinerary),
    success: (data) => {
      console.log(data);
      alert("Successfully added itineraries");
      addPackageImages(packageId, images);
    },
    error: (xhr, status, err) => {
      alert(xhr + " ::: " + status + " ::: " + err);
      return false;
    }
  });
}

function addPackageImages(packageId, images) {
  console.log(images);
  console.log(JSON.stringify(images));
  $.ajax({
    url: "http://192.168.43.115:2018/package/" + packageId + "/imageArray",
    type: "POST",
    dataType: "json",
    contentType: "application/json",
    data: JSON.stringify(images),
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    success: (data) => {
      console.log(data);
      alert("Successfully added images");
    },
    error: (xhr, status, err) => {
      alert(xhr + " ::: " + status + " ::: " + err);
      console.log(xhr + " ::: " + status + " ::: " + err);
      return false;
    }
  });
}

function updatePackage(id) {
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
    url: "http://192.168.43.115:2018/packages/" + id,
    type: "DELETE",
    dataType: "json",
    contentType: "application/json",
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    success: (data) => {
      console.log(data);
      alert("Successfully deleted package " + id);
    }
  });
}

function getOrders() {
  let table = $('#table tbody');
  $.ajax({
    url: "http://192.168.43.115:2018/products",
    type: "GET",
    dataType: "json",
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    success: data => {
      if (data) {
        var len = data.length;
        var txt = "";
        if (len > 0) {
          for (var i = 0; i < len; i++) {
            if (data[i]) {
              let featureArray = data[i].features;
              let featureString = "";
              for (let featureObj of featureArray) {
                featureString += featureObj.feature + ",";
              }
              txt +=
                "<tr>" +
                "<td>" +
                data[i].name +
                "</td>" +
                "<td>" +
                data[i].description.substr(0, 40) + "..." +
                "</td>" +
                "<td>" +
                data[i].price +
                "</td>" +
                "<td>" +
                data[i].rating +
                "</td>" +
                "<td>" +
                data[i].stock +
                "<td><a href=" + data[i].imageUrl + " target=\"_blank\">" + "View Image" +
                "</a></td>" +
                "<td>" +
                featureString +
                "</td>" +
                "<td>" +
                "<button onclick=\"deleteOrder(" + data[i].id + ")\">Delete</button>" +
                "</td>"
              "</tr>";
            }
          }
          if (txt != "") {
            table.append(txt);
          }
        }
      }
    },
    error: (xhr, status, err) => {
      console.log(xhr);
      var err = eval("(" + xhr.responseText + ")");
      alert(err.Message);
    }
  });
  return false;
}

function getInquiry() {
  let table = $('#table tbody');
  console.log(table);
  $.ajax({
    url: "http://192.168.43.115:2018/inquiryform",
    type: "GET",
    dataType: "json",
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    success: data => {
      if (data) {
        var len = data.length;
        var txt = "";
        console.log("LEN =" + len);
        if (len > 0) {
          for (var i = 0; i < len; i++) {
            if (data[i].name) {
              txt +=
                "<tr>" +
                "<td>" +
                data[i].name +
                "</td>" +
                "<td>" +
                data[i].number +
                "</td>" +
                "<td>" +
                data[i].email +
                "</td>" +
                "<td>" +
                data[i].destination +
                "</td>" +
                "<td>" +
                data[i].message +
                "</td>" +
                "<td>" +
                data[i].headCount +
                "<td>" +
                data[i].dateOfTravel +
                "</td>" +
                "<td>" +
                "<button onclick=\"deleteInquiry(" + data[i].id + ")\">Delete</button>" +
                "</td>"
              "</tr>";
            }
          }
          if (txt != "") {
            table.append(txt);
          }
        }
      }
    },
    error: (xhr, status, err) => {
      console.log(xhr);
      var err = eval("(" + xhr.responseText + ")");
      alert(err.Message);
    }
  });
  return false;
}

function deleteInquiry(id) {
  $.ajax({
    url: "http://192.168.43.115:2018/inquiryform/" + id,
    type: "DELETE",
    dataType: "json",
    success: function (data) {
      console.log(data);
      alert("Successfully deleted inquiry");
    }
  });
}