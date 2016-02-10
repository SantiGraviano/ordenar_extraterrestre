function categorizar(palabra, orden_alfabeto) {
	return orden_alfabeto.indexOf(palabra.charAt(0));
}

function ordenar_extraterrestre(desordenadas, orden_alfabeto){
  var array = desordenadas.sort(function(a, b) {
  	a = categorizar(a, orden_alfabeto);
  	b = categorizar(b, orden_alfabeto);

  	if (a === b) return 0;

  	return (a < b) ? -1 : 1;
  });

  return array;
}