grammar analizador;

//Reglas sintácticas

juego		: 'juego' VARIABLE '{' escenas '}' ;

escenas	: escena* ;

escena		: 'escena' VARIABLE '{' acciones+ '}';

acciones	: ( imprimir
		| leer
		| condición
		| asignacion
		| saltar) ;

saltar      : 'saltar' VARIABLE ';' ;

imprimir	: 'mostrar' TEXTO  ';' ;

leer		: 'leer' VARIABLE ';' ;

condición 	: 'si' comparación saltar ;

comparación	: VARIABLE '==' VALOR ;

asignacion	:  VARIABLE '=' (VALOR|leer)';' ;

//Reglas léxicas

VARIABLE	: [a-zA-Z_][a-zA-Z_0-9] + ;

//Fragmentos

TEXTO		: '"' (~["])* '"' ;

VALOR		: [0-9] + ;

WS		: [ \t\r\n] + -> skip ;