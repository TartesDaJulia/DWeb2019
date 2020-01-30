var antlr4 = require('antlr4');
var ISNLexer = require('./ISNLexer').ISNLexer;
var ISNParser = require('./ISNParser').ISNParser;
var ISNListener = require('./ISNListener').ISNListener;
var ISNVisitor = require('./ISNVisitor').ISNVisitor;
var Visitor = require('./Visitor.js');

var input = "your text to parse here"
var chars = new antlr4.InputStream(input);
var lexer = new ISNLexer(chars);
var tokens  = new antlr4.CommonTokenStream(lexer);
var parser = new ISNParser(tokens);
var visitor = new Visitor.Visitor();

parser.buildParseTrees = true;
var tree = parser.enterRule();