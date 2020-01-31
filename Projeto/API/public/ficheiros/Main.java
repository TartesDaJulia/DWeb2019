import org.antlr.v4.runtime.CharStreams;
import org.antlr.v4.runtime.CommonTokenStream;
import org.antlr.v4.runtime.CharStreams;
import org.antlr.v4.runtime.ParserRuleContext;

import java.io.IOException;

public class Main {
    public static void main(String[] args) {
        BinaryLexer lexer;
        {
            try {
                lexer = new BinaryLexer(CharStreams.fromFileName("C:\\Users\\Henrique\\IdeaProjects\\Gramaticas\\tpc1\\Exercício Binário\\Linguagem\\testes\\1.txt"));
                CommonTokenStream tokens = new CommonTokenStream(lexer);
                BinaryParser parser= new  BinaryParser(tokens);
                ParserRuleContext ctx = parser.binnum();
                System.out.println("END");
            } catch(IOException e)
            {
                e.printStackTrace();
            }
        }
    }
}