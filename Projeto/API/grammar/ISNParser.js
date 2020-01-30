// Generated from ISN.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var ISNListener = require('./ISNListener').ISNListener;
var ISNVisitor = require('./ISNVisitor').ISNVisitor;

var grammarFileName = "ISN.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0011)\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0003\u0002\u0003\u0002\u0003\u0002\u0006",
    "\u0002\u000e\n\u0002\r\u0002\u000e\u0002\u000f\u0003\u0002\u0003\u0002",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0002\u0002\u0006\u0002",
    "\u0004\u0006\b\u0002\u0003\u0004\u0002\u0004\u0004\u0006\u0006\u0002",
    "%\u0002\n\u0003\u0002\u0002\u0002\u0004\u0013\u0003\u0002\u0002\u0002",
    "\u0006\u0018\u0003\u0002\u0002\u0002\b&\u0003\u0002\u0002\u0002\n\u000b",
    "\u0007\u0003\u0002\u0002\u000b\r\u0007\u000f\u0002\u0002\f\u000e\u0005",
    "\u0004\u0003\u0002\r\f\u0003\u0002\u0002\u0002\u000e\u000f\u0003\u0002",
    "\u0002\u0002\u000f\r\u0003\u0002\u0002\u0002\u000f\u0010\u0003\u0002",
    "\u0002\u0002\u0010\u0011\u0003\u0002\u0002\u0002\u0011\u0012\u0007\u0010",
    "\u0002\u0002\u0012\u0003\u0003\u0002\u0002\u0002\u0013\u0014\u0007\u0005",
    "\u0002\u0002\u0014\u0015\u0007\r\u0002\u0002\u0015\u0016\u0005\u0006",
    "\u0004\u0002\u0016\u0017\u0007\u000e\u0002\u0002\u0017\u0005\u0003\u0002",
    "\u0002\u0002\u0018\u0019\u0005\b\u0005\u0002\u0019\u001a\u0007\u000b",
    "\u0002\u0002\u001a\u001b\u0005\b\u0005\u0002\u001b\u001c\u0007\u000b",
    "\u0002\u0002\u001c\u001d\u0005\b\u0005\u0002\u001d\u001e\u0007\u000b",
    "\u0002\u0002\u001e\u001f\u0005\b\u0005\u0002\u001f \u0007\u000b\u0002",
    "\u0002 !\u0005\b\u0005\u0002!\"\u0007\u000b\u0002\u0002\"#\u0005\b\u0005",
    "\u0002#$\u0007\u000b\u0002\u0002$%\u0005\b\u0005\u0002%\u0007\u0003",
    "\u0002\u0002\u0002&\'\t\u0002\u0002\u0002\'\t\u0003\u0002\u0002\u0002",
    "\u0003\u000f"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'Registers'", null, null, null, null, "'@'", 
                     "'.'", "':'", "','", "';'", "'('", "')'", "'['", "']'", 
                     "'\"'" ];

var symbolicNames = [ null, null, "DATA", "INT", "TEXT", "WS", "AT", "DOT", 
                      "COLON", "COMMA", "SEMI", "LPAREN", "RPAREN", "LBRACKET", 
                      "RBRACKET", "QUOTE" ];

var ruleNames =  [ "registers", "register", "user", "info" ];

function ISNParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

ISNParser.prototype = Object.create(antlr4.Parser.prototype);
ISNParser.prototype.constructor = ISNParser;

Object.defineProperty(ISNParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

ISNParser.EOF = antlr4.Token.EOF;
ISNParser.T__0 = 1;
ISNParser.DATA = 2;
ISNParser.INT = 3;
ISNParser.TEXT = 4;
ISNParser.WS = 5;
ISNParser.AT = 6;
ISNParser.DOT = 7;
ISNParser.COLON = 8;
ISNParser.COMMA = 9;
ISNParser.SEMI = 10;
ISNParser.LPAREN = 11;
ISNParser.RPAREN = 12;
ISNParser.LBRACKET = 13;
ISNParser.RBRACKET = 14;
ISNParser.QUOTE = 15;

ISNParser.RULE_registers = 0;
ISNParser.RULE_register = 1;
ISNParser.RULE_user = 2;
ISNParser.RULE_info = 3;


function RegistersContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ISNParser.RULE_registers;
    return this;
}

RegistersContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RegistersContext.prototype.constructor = RegistersContext;

RegistersContext.prototype.LBRACKET = function() {
    return this.getToken(ISNParser.LBRACKET, 0);
};

RegistersContext.prototype.RBRACKET = function() {
    return this.getToken(ISNParser.RBRACKET, 0);
};

RegistersContext.prototype.register = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(RegisterContext);
    } else {
        return this.getTypedRuleContext(RegisterContext,i);
    }
};

RegistersContext.prototype.enterRule = function(listener) {
    if(listener instanceof ISNListener ) {
        listener.enterRegisters(this);
	}
};

RegistersContext.prototype.exitRule = function(listener) {
    if(listener instanceof ISNListener ) {
        listener.exitRegisters(this);
	}
};

RegistersContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ISNVisitor ) {
        return visitor.visitRegisters(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ISNParser.RegistersContext = RegistersContext;

ISNParser.prototype.registers = function() {

    var localctx = new RegistersContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, ISNParser.RULE_registers);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 8;
        this.match(ISNParser.T__0);
        this.state = 9;
        this.match(ISNParser.LBRACKET);
        this.state = 11; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 10;
            this.register();
            this.state = 13; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===ISNParser.INT);
        this.state = 15;
        this.match(ISNParser.RBRACKET);
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
};


function RegisterContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ISNParser.RULE_register;
    return this;
}

RegisterContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RegisterContext.prototype.constructor = RegisterContext;

RegisterContext.prototype.INT = function() {
    return this.getToken(ISNParser.INT, 0);
};

RegisterContext.prototype.LPAREN = function() {
    return this.getToken(ISNParser.LPAREN, 0);
};

RegisterContext.prototype.user = function() {
    return this.getTypedRuleContext(UserContext,0);
};

RegisterContext.prototype.RPAREN = function() {
    return this.getToken(ISNParser.RPAREN, 0);
};

RegisterContext.prototype.enterRule = function(listener) {
    if(listener instanceof ISNListener ) {
        listener.enterRegister(this);
	}
};

RegisterContext.prototype.exitRule = function(listener) {
    if(listener instanceof ISNListener ) {
        listener.exitRegister(this);
	}
};

RegisterContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ISNVisitor ) {
        return visitor.visitRegister(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ISNParser.RegisterContext = RegisterContext;

ISNParser.prototype.register = function() {

    var localctx = new RegisterContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, ISNParser.RULE_register);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 17;
        this.match(ISNParser.INT);
        this.state = 18;
        this.match(ISNParser.LPAREN);
        this.state = 19;
        this.user();
        this.state = 20;
        this.match(ISNParser.RPAREN);
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
};


function UserContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ISNParser.RULE_user;
    return this;
}

UserContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UserContext.prototype.constructor = UserContext;

UserContext.prototype.info = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(InfoContext);
    } else {
        return this.getTypedRuleContext(InfoContext,i);
    }
};

UserContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ISNParser.COMMA);
    } else {
        return this.getToken(ISNParser.COMMA, i);
    }
};


UserContext.prototype.enterRule = function(listener) {
    if(listener instanceof ISNListener ) {
        listener.enterUser(this);
	}
};

UserContext.prototype.exitRule = function(listener) {
    if(listener instanceof ISNListener ) {
        listener.exitUser(this);
	}
};

UserContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ISNVisitor ) {
        return visitor.visitUser(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ISNParser.UserContext = UserContext;

ISNParser.prototype.user = function() {

    var localctx = new UserContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, ISNParser.RULE_user);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 22;
        this.info();
        this.state = 23;
        this.match(ISNParser.COMMA);
        this.state = 24;
        this.info();
        this.state = 25;
        this.match(ISNParser.COMMA);
        this.state = 26;
        this.info();
        this.state = 27;
        this.match(ISNParser.COMMA);
        this.state = 28;
        this.info();
        this.state = 29;
        this.match(ISNParser.COMMA);
        this.state = 30;
        this.info();
        this.state = 31;
        this.match(ISNParser.COMMA);
        this.state = 32;
        this.info();
        this.state = 33;
        this.match(ISNParser.COMMA);
        this.state = 34;
        this.info();
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
};


function InfoContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ISNParser.RULE_info;
    return this;
}

InfoContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InfoContext.prototype.constructor = InfoContext;

InfoContext.prototype.TEXT = function() {
    return this.getToken(ISNParser.TEXT, 0);
};

InfoContext.prototype.DATA = function() {
    return this.getToken(ISNParser.DATA, 0);
};

InfoContext.prototype.enterRule = function(listener) {
    if(listener instanceof ISNListener ) {
        listener.enterInfo(this);
	}
};

InfoContext.prototype.exitRule = function(listener) {
    if(listener instanceof ISNListener ) {
        listener.exitInfo(this);
	}
};

InfoContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ISNVisitor ) {
        return visitor.visitInfo(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ISNParser.InfoContext = InfoContext;

ISNParser.prototype.info = function() {

    var localctx = new InfoContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, ISNParser.RULE_info);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 36;
        _la = this._input.LA(1);
        if(!(_la===ISNParser.DATA || _la===ISNParser.TEXT)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
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
};


exports.ISNParser = ISNParser;
