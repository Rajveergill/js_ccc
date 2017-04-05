function convert()
     {
         const from = document.getElementById("from").value;
         const to = document.getElementById("to").value;
         const xmlhttp = new XMLHttpRequest();
         const url = "http://api.fixer.io/latest?symbols=" + from + "," + to;
         xmlhttp.open("GET", url, true);
         xmlhttp.send();
         xmlhttp.onreadystatechange = function(){
         if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
         {
             const result = xmlhttp.responseText;
             const jsResult = JSON.parse(result);
             const oneUnit = jsResult.rates[to]/jsResult.rates[from];
             const amt = document.getElementById("fromAmount").value;
             document.getElementById("toAmount").value = (oneUnit*amt).toFixed(2);
         }
        }
    }