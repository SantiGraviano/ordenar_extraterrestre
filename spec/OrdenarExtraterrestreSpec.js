describe('OrdenarExtraterrestre', function() {
	it('Shoud return true', function() {
		var desordenadas = ['gato', 'arbol', 'jirafa', 'usurero'],
			orden_alfabeto = 'gnjadyu';
		expect(ordenar_extraterrestre(desordenadas, orden_alfabeto)).toEqual(['gato', 'jirafa', 'arbol', 'usurero']);
	});
});