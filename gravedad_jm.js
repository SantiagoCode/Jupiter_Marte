  var planeta = prompt("Eligen un planeta. \n1 es para Marte y 2 es para Jupiter.");
  planeta = parseInt(planeta);
  var peso = prompt("Cuentame ¿Cuanto pesas en la tierra?");
  peso = parseFloat(peso);

  var g_tierra = 9.8;
  var g_marte = 3.7;
  var g_jupiter = 24.8;

  if (planeta == 1)
  {
      var peso_final;
      var planeta_nombre = "Marte";
      peso_final = peso * g_marte / g_tierra;
      peso_final = parseFloat(peso_final).toFixed(2);
  }
  else if (planeta == 2)
  {
    var peso_final;
    var planeta_nombre = "Jupiter";
    peso_final = peso * g_jupiter / g_tierra;
    peso_final = parseFloat(peso_final).toFixed(2);
  }
  else {
    var planeta_nombre = "Kriptón";
    peso_final = 10000000000
  }

  document.write("Tu peso en <strong>" + planeta_nombre + "</strong> sera de <strong>" + peso_final + "kg</strong>");
