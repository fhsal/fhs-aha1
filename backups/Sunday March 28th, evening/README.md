# fhs-aha1

var settings = {
  "url": "https://optum.aha.io/api/v1/custom_object_records/6886877617282213720",
  "method": "PUT",
  "timeout": 0,
  "headers": {
    "Authorization": "Bearer ccb58d0b3502a83d04c954c56414a55eb6b406f7eb9f0525bf4c9f6ee41d0a26",
    "Content-Type": "application/json",
    "Cookie": "_aha_t=6939905193101103465"
  },
  "data": JSON.stringify({"custom_object_record":{"custom_fields":{"milestone_percent_complete":"40.0"}}}),
};

$.ajax(settings).done(function (response) {
  console.log(response);
});






var settings = {
  "url": "https://optum.aha.io/api/v1/epics/6927699538893433328",
  "method": "GET",
  "timeout": 0,
  "headers": {
    "Authorization": "Bearer ccb58d0b3502a83d04c954c56414a55eb6b406f7eb9f0525bf4c9f6ee41d0a26",
    "Cookie": "_aha_t=6939905193101103465"
  },
};

$.ajax(settings).done(function (response) {
  console.log(response);
});


using Fetch 
=================

var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer ccb58d0b3502a83d04c954c56414a55eb6b406f7eb9f0525bf4c9f6ee41d0a26");
myHeaders.append("Cookie", "_aha_t=6939905193101103465");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://optum.aha.io/api/v1/epics/6902587825394629366", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
