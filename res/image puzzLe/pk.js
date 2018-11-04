function random(){
 var images=new Array();
   images[1]="images/g1.png"
   images[2]="images/g1.png"
   images[3]="images/g1.png"
   images[4]="images/g1.png"
   images[5]="images/g1.png"
   images[6]="images/g1.png"
   images[7]="images/g1.png"
   images[8]="images/g1.png"
   images[9]="images/g1.png"
   images[10]="images/g1.png"
   images[11]="images/g1.png"
   images[12]="images/g1.png"
   var rnd=math.floor(math.random()*images.length);
   if(rnd==0)
   {
       rnd=1;
   }
   document.write('<img src="'+images[rnd]+'" border="0">');
}