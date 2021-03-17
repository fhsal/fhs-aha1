# fhs-aha1

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
