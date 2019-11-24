grammar Binary;

@members {double val = 0;
         }

WS : [ \t\r\n] -> skip;
ZERO: '0';
UM : '1';


binnum
    : b1=bit[0] (b2=bit[$b1.posOut]
        {
            $b1.val += $b2.val;
            $b1.posOut = $b2.posOut;
        }
    )*
        {
            System.out.println("Valor decimal é: " + $b1.val);
        }
    ;

bit [int posIn] returns [int posOut, double val]
    : ZERO
        {
            val = posIn * 2;
            posOut = posIn +1;
        }
    | UM
        {
            val = (posIn * 2) + 1;
            posOut = posIn + 1;
        }
    ;
