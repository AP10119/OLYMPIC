var canva_canva=document.getElementById("canvas10");
var twodshapes=canva_canva.getContext("2d");
twodshapes.beginPath();
twodshapes.strokeStyle="blue";
twodshapes.lineWidth= 5;
twodshapes.arc(150,150,40,0,2*Math.PI);
twodshapes.stroke();

twodshapes.beginPath();
twodshapes.strokeStyle="black";
twodshapes.lineWidth= 5;
twodshapes.arc(250,150,40,0,2*Math.PI);
twodshapes.stroke();

twodshapes.beginPath();
twodshapes.strokeStyle="red";
twodshapes.lineWidth= 5;
twodshapes.arc(350,150,40,0,2*Math.PI);
twodshapes.stroke();

twodshapes.beginPath();
twodshapes.strokeStyle="yellow";
twodshapes.lineWidth= 5;
twodshapes.arc(200,190,40,0,2*Math.PI);
twodshapes.stroke();

twodshapes.beginPath();
twodshapes.strokeStyle="green";
twodshapes.lineWidth= 5;
twodshapes.arc(300,190,40,0,2*Math.PI);
twodshapes.stroke();