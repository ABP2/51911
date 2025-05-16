// Generated from c:/Users/agusb/OneDrive/Desktop/VS Code/51911/analizador.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import analizadorListener from './analizadorListener.js';
import analizadorVisitor from './analizadorVisitor.js';

const serializedATN = [4,1,15,78,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,1,0,1,0,1,0,1,0,1,0,1,0,1,1,5,1,
28,8,1,10,1,12,1,31,9,1,1,2,1,2,1,2,1,2,4,2,37,8,2,11,2,12,2,38,1,2,1,2,
1,3,1,3,1,3,1,3,1,3,3,3,48,8,3,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,6,1,6,1,
6,1,6,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,3,9,74,8,9,1,9,1,9,
1,9,0,0,10,0,2,4,6,8,10,12,14,16,18,0,0,74,0,20,1,0,0,0,2,29,1,0,0,0,4,32,
1,0,0,0,6,47,1,0,0,0,8,49,1,0,0,0,10,53,1,0,0,0,12,57,1,0,0,0,14,61,1,0,
0,0,16,65,1,0,0,0,18,69,1,0,0,0,20,21,5,1,0,0,21,22,5,12,0,0,22,23,5,2,0,
0,23,24,3,2,1,0,24,25,5,3,0,0,25,1,1,0,0,0,26,28,3,4,2,0,27,26,1,0,0,0,28,
31,1,0,0,0,29,27,1,0,0,0,29,30,1,0,0,0,30,3,1,0,0,0,31,29,1,0,0,0,32,33,
5,4,0,0,33,34,5,12,0,0,34,36,5,2,0,0,35,37,3,6,3,0,36,35,1,0,0,0,37,38,1,
0,0,0,38,36,1,0,0,0,38,39,1,0,0,0,39,40,1,0,0,0,40,41,5,3,0,0,41,5,1,0,0,
0,42,48,3,10,5,0,43,48,3,12,6,0,44,48,3,14,7,0,45,48,3,18,9,0,46,48,3,8,
4,0,47,42,1,0,0,0,47,43,1,0,0,0,47,44,1,0,0,0,47,45,1,0,0,0,47,46,1,0,0,
0,48,7,1,0,0,0,49,50,5,5,0,0,50,51,5,12,0,0,51,52,5,6,0,0,52,9,1,0,0,0,53,
54,5,7,0,0,54,55,5,13,0,0,55,56,5,6,0,0,56,11,1,0,0,0,57,58,5,8,0,0,58,59,
5,12,0,0,59,60,5,6,0,0,60,13,1,0,0,0,61,62,5,9,0,0,62,63,3,16,8,0,63,64,
3,8,4,0,64,15,1,0,0,0,65,66,5,12,0,0,66,67,5,10,0,0,67,68,5,14,0,0,68,17,
1,0,0,0,69,70,5,12,0,0,70,73,5,11,0,0,71,74,5,14,0,0,72,74,3,12,6,0,73,71,
1,0,0,0,73,72,1,0,0,0,74,75,1,0,0,0,75,76,5,6,0,0,76,19,1,0,0,0,4,29,38,
47,73];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class analizadorParser extends antlr4.Parser {

    static grammarFileName = "analizador.g4";
    static literalNames = [ null, "'juego'", "'{'", "'}'", "'escena'", "'saltar'", 
                            "';'", "'mostrar'", "'leer'", "'si'", "'=='", 
                            "'='" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, "VARIABLE", "TEXTO", 
                             "VALOR", "WS" ];
    static ruleNames = [ "juego", "escenas", "escena", "acciones", "saltar", 
                         "imprimir", "leer", "condición", "comparación", 
                         "asignacion" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = analizadorParser.ruleNames;
        this.literalNames = analizadorParser.literalNames;
        this.symbolicNames = analizadorParser.symbolicNames;
    }



	juego() {
	    let localctx = new JuegoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, analizadorParser.RULE_juego);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 20;
	        this.match(analizadorParser.T__0);
	        this.state = 21;
	        this.match(analizadorParser.VARIABLE);
	        this.state = 22;
	        this.match(analizadorParser.T__1);
	        this.state = 23;
	        this.escenas();
	        this.state = 24;
	        this.match(analizadorParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	escenas() {
	    let localctx = new EscenasContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, analizadorParser.RULE_escenas);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 29;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===4) {
	            this.state = 26;
	            this.escena();
	            this.state = 31;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	escena() {
	    let localctx = new EscenaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, analizadorParser.RULE_escena);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 32;
	        this.match(analizadorParser.T__3);
	        this.state = 33;
	        this.match(analizadorParser.VARIABLE);
	        this.state = 34;
	        this.match(analizadorParser.T__1);
	        this.state = 36; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 35;
	            this.acciones();
	            this.state = 38; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 5024) !== 0));
	        this.state = 40;
	        this.match(analizadorParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	acciones() {
	    let localctx = new AccionesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, analizadorParser.RULE_acciones);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 47;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 7:
	            this.state = 42;
	            this.imprimir();
	            break;
	        case 8:
	            this.state = 43;
	            this.leer();
	            break;
	        case 9:
	            this.state = 44;
	            this.condición();
	            break;
	        case 12:
	            this.state = 45;
	            this.asignacion();
	            break;
	        case 5:
	            this.state = 46;
	            this.saltar();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	saltar() {
	    let localctx = new SaltarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, analizadorParser.RULE_saltar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 49;
	        this.match(analizadorParser.T__4);
	        this.state = 50;
	        this.match(analizadorParser.VARIABLE);
	        this.state = 51;
	        this.match(analizadorParser.T__5);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	imprimir() {
	    let localctx = new ImprimirContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, analizadorParser.RULE_imprimir);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 53;
	        this.match(analizadorParser.T__6);
	        this.state = 54;
	        this.match(analizadorParser.TEXTO);
	        this.state = 55;
	        this.match(analizadorParser.T__5);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	leer() {
	    let localctx = new LeerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, analizadorParser.RULE_leer);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 57;
	        this.match(analizadorParser.T__7);
	        this.state = 58;
	        this.match(analizadorParser.VARIABLE);
	        this.state = 59;
	        this.match(analizadorParser.T__5);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condición() {
	    let localctx = new CondiciónContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, analizadorParser.RULE_condición);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 61;
	        this.match(analizadorParser.T__8);
	        this.state = 62;
	        this.comparación();
	        this.state = 63;
	        this.saltar();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	comparación() {
	    let localctx = new ComparaciónContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, analizadorParser.RULE_comparación);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 65;
	        this.match(analizadorParser.VARIABLE);
	        this.state = 66;
	        this.match(analizadorParser.T__9);
	        this.state = 67;
	        this.match(analizadorParser.VALOR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	asignacion() {
	    let localctx = new AsignacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, analizadorParser.RULE_asignacion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 69;
	        this.match(analizadorParser.VARIABLE);
	        this.state = 70;
	        this.match(analizadorParser.T__10);
	        this.state = 73;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 14:
	            this.state = 71;
	            this.match(analizadorParser.VALOR);
	            break;
	        case 8:
	            this.state = 72;
	            this.leer();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 75;
	        this.match(analizadorParser.T__5);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

analizadorParser.EOF = antlr4.Token.EOF;
analizadorParser.T__0 = 1;
analizadorParser.T__1 = 2;
analizadorParser.T__2 = 3;
analizadorParser.T__3 = 4;
analizadorParser.T__4 = 5;
analizadorParser.T__5 = 6;
analizadorParser.T__6 = 7;
analizadorParser.T__7 = 8;
analizadorParser.T__8 = 9;
analizadorParser.T__9 = 10;
analizadorParser.T__10 = 11;
analizadorParser.VARIABLE = 12;
analizadorParser.TEXTO = 13;
analizadorParser.VALOR = 14;
analizadorParser.WS = 15;

analizadorParser.RULE_juego = 0;
analizadorParser.RULE_escenas = 1;
analizadorParser.RULE_escena = 2;
analizadorParser.RULE_acciones = 3;
analizadorParser.RULE_saltar = 4;
analizadorParser.RULE_imprimir = 5;
analizadorParser.RULE_leer = 6;
analizadorParser.RULE_condición = 7;
analizadorParser.RULE_comparación = 8;
analizadorParser.RULE_asignacion = 9;

class JuegoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_juego;
    }

	VARIABLE() {
	    return this.getToken(analizadorParser.VARIABLE, 0);
	};

	escenas() {
	    return this.getTypedRuleContext(EscenasContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterJuego(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitJuego(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitJuego(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EscenasContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_escenas;
    }

	escena = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EscenaContext);
	    } else {
	        return this.getTypedRuleContext(EscenaContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterEscenas(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitEscenas(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitEscenas(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EscenaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_escena;
    }

	VARIABLE() {
	    return this.getToken(analizadorParser.VARIABLE, 0);
	};

	acciones = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AccionesContext);
	    } else {
	        return this.getTypedRuleContext(AccionesContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterEscena(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitEscena(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitEscena(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AccionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_acciones;
    }

	imprimir() {
	    return this.getTypedRuleContext(ImprimirContext,0);
	};

	leer() {
	    return this.getTypedRuleContext(LeerContext,0);
	};

	condición() {
	    return this.getTypedRuleContext(CondiciónContext,0);
	};

	asignacion() {
	    return this.getTypedRuleContext(AsignacionContext,0);
	};

	saltar() {
	    return this.getTypedRuleContext(SaltarContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterAcciones(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitAcciones(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitAcciones(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SaltarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_saltar;
    }

	VARIABLE() {
	    return this.getToken(analizadorParser.VARIABLE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterSaltar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitSaltar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitSaltar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ImprimirContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_imprimir;
    }

	TEXTO() {
	    return this.getToken(analizadorParser.TEXTO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterImprimir(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitImprimir(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitImprimir(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LeerContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_leer;
    }

	VARIABLE() {
	    return this.getToken(analizadorParser.VARIABLE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterLeer(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitLeer(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitLeer(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CondiciónContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_condición;
    }

	comparación() {
	    return this.getTypedRuleContext(ComparaciónContext,0);
	};

	saltar() {
	    return this.getTypedRuleContext(SaltarContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterCondición(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitCondición(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitCondición(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ComparaciónContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_comparación;
    }

	VARIABLE() {
	    return this.getToken(analizadorParser.VARIABLE, 0);
	};

	VALOR() {
	    return this.getToken(analizadorParser.VALOR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterComparación(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitComparación(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitComparación(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AsignacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_asignacion;
    }

	VARIABLE() {
	    return this.getToken(analizadorParser.VARIABLE, 0);
	};

	VALOR() {
	    return this.getToken(analizadorParser.VALOR, 0);
	};

	leer() {
	    return this.getTypedRuleContext(LeerContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterAsignacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitAsignacion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitAsignacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




analizadorParser.JuegoContext = JuegoContext; 
analizadorParser.EscenasContext = EscenasContext; 
analizadorParser.EscenaContext = EscenaContext; 
analizadorParser.AccionesContext = AccionesContext; 
analizadorParser.SaltarContext = SaltarContext; 
analizadorParser.ImprimirContext = ImprimirContext; 
analizadorParser.LeerContext = LeerContext; 
analizadorParser.CondiciónContext = CondiciónContext; 
analizadorParser.ComparaciónContext = ComparaciónContext; 
analizadorParser.AsignacionContext = AsignacionContext; 
