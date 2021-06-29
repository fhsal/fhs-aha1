function() {
   $.ajax({
        url: 'ajax/r1.php',
        method: 'get'
   }).done(function(response1) {
       console.log('After r1.php\n');
       console.log(response1);

       $.ajax({
            url: 'ajax/r2.php',
            method: 'get'
       }).done(function(response2) {
           console.log('After r2.php\n');
           console.log('response1:' + response1);
           console.log(response2);

           $.ajax({
                url: 'ajax/r3.php',
                method: 'get'
           }).done(function(response3) {
               console.log('After r3.php\n');
               console.log('response1:' + response1);
               console.log('response2:' + response2);
               console.log(response3);
           });

       });
   });