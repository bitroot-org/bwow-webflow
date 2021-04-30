function submitForm() {
  console.log('form submit called');
  const form = document.getElementById('registerForm1');
  const data = Object.fromEntries(new FormData(form).entries());
  console.log(data);
  var data1 = new FormData();
  data1.append("name", `${data.firstName} ${data.lastName}`);
  data1.append("mobile_number", data.mobile);
  data1.append("description", data.Message);
  data1.append("email", data.Email);

  var settings = {
    "url": "https://core.bwow.fit/api/v1/website/inquiryForm",
    "method": "POST",
    "timeout": 0,
    "processData": false,
    "mimeType": "multipart/form-data",
    "contentType": false,
    "data": data1
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
    const res = JSON.parse(response);
    if (res.success == true) {
      $("#submitEroorForm").hide();
      $("#submitSuccessForm").show();
      setTimeout(() => {
        $("#submitSuccessForm").hide();
      }, 3000);
      form.reset();
    } else {
      $("#submitEroorForm").show();
    }
  });
}