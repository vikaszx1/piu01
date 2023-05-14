let profilePic = document.getElementById("profile-pic");
let inputFile = document.getElementById('input-file');

inputFile.onchange = function(){
profilePic.src = URL.createObjectURL(inputFile.files[0]);}

  function processData(form) {
         v = document.getElementById("input").value;
         console.log(v);
         // msg = v.run();
              document.getElementById("time").innerHTML = v;

              let timez = v;

              // console.log(timez);

              if (document.getElementById("time").innerHTML = v) {
                setTimeout("location.reload(true);", timez);
              }
         }
