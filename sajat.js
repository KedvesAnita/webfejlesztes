function kalkulator() {
    var checkboxes = document.getElementsByName("szolgaltatas");
    var vegosszeg = 0;
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        vegosszeg = vegosszeg + parseInt(checkboxes[i].value, 10);
      }
    }
    document.getElementById("vegosszege").innerText= vegosszeg;
  }

  