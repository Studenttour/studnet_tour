function saveData() {
    // Get input values
    var data1 = document.getElementById('data1').value;
    var data2 = document.getElementById('data2').value;
    var data3 = document.getElementById('data3').value;
    var data4 = document.getElementById('data4').value;
    var data5 = document.getElementById('data5').value;
    var data6 = document.getElementById('data6').value;

    // Display values in console (for demonstration)
    console.log("Data 1:", data1);
    console.log("Data 2:", data2);
    console.log("Data 3:", data3);
    console.log("Data 4:", data4);
    console.log("Data 5:", data5);
    SendMail(data1 , data2, data3, data4, data5, data6 )
    // You can perform further operations with the data here
    // For now, we are just displaying them in the console
}


function SendMail(data1, data2, data3, data4, data5, data6 ){ // პარმეტრებს ვაწოდებ summ ფუნქციიდან


    var params={
            
        message: "სად გინდა წასვლა : " + data1+ 
        " ,  " + "რამდნი დღიანი ტური :"  + data2 + 
        " ,  "+ "მსურველები ? : "  + data3 + " "+
         ", " + " ბიუჯეტი 1 კაცზე : "  + data4 +
         " ,   " +"დამტებითი ინფო :"  + data5 +
         " ,   "+ "შენ შესახებ ? : " + data6
    }
    // აქ ემილის პარმეტრბი წერია , email.js მა რაც მომანიჭა იდ 
    emailjs.send("service-matchara_18", "template_0843m4r",params).then(function(res){
        
    console.log(data1,"es data1")
    })
}