// Generated from ISN.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by ISNParser.
function ISNListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

ISNListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
ISNListener.prototype.constructor = ISNListener;

// Enter a parse tree produced by ISNParser#registers.
ISNListener.prototype.enterRegisters = function(ctx) {
};

// Exit a parse tree produced by ISNParser#registers.
ISNListener.prototype.exitRegisters = function(ctx) {
};


// Enter a parse tree produced by ISNParser#register.
ISNListener.prototype.enterRegister = function(ctx) {
};

// Exit a parse tree produced by ISNParser#register.
ISNListener.prototype.exitRegister = function(ctx) {
};


// Enter a parse tree produced by ISNParser#user.
ISNListener.prototype.enterUser = function(ctx) {
};

// Exit a parse tree produced by ISNParser#user.
ISNListener.prototype.exitUser = function(ctx) {
};


// Enter a parse tree produced by ISNParser#info.
ISNListener.prototype.enterInfo = function(ctx) {
};

// Exit a parse tree produced by ISNParser#info.
ISNListener.prototype.exitInfo = function(ctx) {
};



exports.ISNListener = ISNListener;