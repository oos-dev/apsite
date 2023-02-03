function run(){
    alert("Hola Mundo");
}

function getData(){
    $.ajax({
      type: 'POST',
      data: {
      "email":"Oscar",
      "Start":0,
      "Length":5,
      "program":"null"
      },
      url: 'http://localhost:64766/Pagos/Prorroga/Prorrogas',
      dataType: 'json',
      success: function(data) {
        console.log(data)
      }
    });
    }