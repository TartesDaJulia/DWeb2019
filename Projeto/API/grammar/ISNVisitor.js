// Generated from ISN.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by ISNParser.

function ISNVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

ISNVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
ISNVisitor.prototype.constructor = ISNVisitor;

// Visit a parse tree produced by ISNParser#registers.
ISNVisitor.prototype.visitRegisters = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ISNParser#register.
ISNVisitor.prototype.visitRegister = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ISNParser#user.
ISNVisitor.prototype.visitUser = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ISNParser#info.
ISNVisitor.prototype.visitInfo = function(ctx) {
  return this.visitChildren(ctx);
};



exports.ISNVisitor = ISNVisitor;