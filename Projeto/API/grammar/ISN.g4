grammar ISN;

//Lexer
DATA    : [0-9][0-9][0-9][0-9]'-'[0-9][0-9]'-'[0-9][0-9] ;
INT     : [0-9][0-9]*;
TEXT    : '"'~('"')*'"';
WS      : [ \t\n\r] + -> skip ;
AT      : '@';
DOT     : '.';
COLON   : ':';
COMMA   : ',';
SEMI    : ';';
LPAREN  : '(';
RPAREN  : ')';
LBRACKET: '[';
RBRACKET: ']';
QUOTE   : '"';

//Parser

registers   : 'Registers' LBRACKET (register)+ RBRACKET
            ;

register    : INT LPAREN user RPAREN
            ;

user        : info COMMA info COMMA info COMMA info COMMA info COMMA info COMMA info
            ;

info        :   TEXT
            |   DATA
            ;