var GrammarVisitor =require('./ISNVisitor').ISNVisitor;

function Visitor () {
  ISNVisitor.call(this);
  return this;
};

Visitor.prototype = Object.create(ISNVisitor.prototype);
Visitor.prototype.constructor = Visitor;
Visitor.prototype.visitRegisters = function(ctx) {
    // implement logic to determine which function to visit
    // then call next function and with the right context
    this.visitBlock(ctx.block());

};