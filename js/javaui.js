 function hide_show() {

     var s = document.getElementById('add');
     if (s.style.display === "none") {
         s.style.display = "block";
         document.getElementById('active-depo').style.backgroundColor = "rgb(34 87 191)";

     } else {
         s.style.display = "none";
         document.getElementById('active-depo').style.backgroundColor = "";
     } //for add money 

 } //as a var function
 var hide = function my_show() {

         var get = document.getElementById('withd');
         if (get.style.display === "none") {
             get.style.display = "block";
             document.getElementById('active-with').style.backgroundColor = "rgb(34 87 191)";


         } else {
             get.style.display = "none";
             document.getElementById('active-with').style.backgroundColor = "";
         }

     } //withdrwal-money



 var add = function my_ac() {
         var name = document.getElementById('addname').Value;
         var ba = document.getElementById('addac').value;
         var bc = document.getElementById('adddeposite').value;

         document.getElementById('acnumber').innerText = ba;
         document.getElementById('name').innerText = name;
         document.getElementById('Deposite').innerText = bc;
         document.getElementById('header').style.display = "none";
         document.getElementById('section').style.display = "none";
         document.getElementById('d-re').innerText = bc;
         var z = document.getElementById('article');
         if (z.style.display === "none") {
             z.style.display = "block";
         } else {
             z.style.display = "k";
         }

     } //add-ac popup//

 function add_de() {

     var x = document.getElementById('deposite-val').value;
     var l = document.getElementById('Withdrawal_amnt').value;


     if (x > l || x < l || x == l) {
         var n = ((x - l));
         document.getElementById('remain').innerText = "Total Bal Is:" + n;
         document.getElementById('addmore').innerText = l;
     } else {
         alert('Transation Faield');
     }
 }

 function mony() {
     var sh = document.getElementById('deposite-val').value;
     var dm = document.getElementById('Deposite_amnt').value;
     if (sh > dm || sh < dm || sh == dm) {

         var j = (sh + dm);
         alert(j);

     }
 }