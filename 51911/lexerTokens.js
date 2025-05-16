import analizadorLexer from "./generated/analizadorLexer.js";
import { CharStreams, CommonTokenStream, Token } from "antlr4";
import fs from "fs";

function imprimirTablaLexemasTokens(tokens, vocab) {

  const rows = tokens
    .filter(t => t.type !== Token.EOF)
    .map(t => ({
      Lexema: t.text,
      Token: vocab[t.type] || `UNKNOWN_${t.type}`
    }));
  console.table(rows);
}

function main() {
  let input;
  try {
    input = fs.readFileSync("input.txt", "utf8");
  } catch (err) {
    console.error("No pude leer input.txt", err);
    process.exit(1);
  }

 
  const chars = CharStreams.fromString(input);
  const lexer = new analizadorLexer(chars);

  const tokens = [];
  let token;
  do {
    token = lexer.nextToken();
    tokens.push(token);
  } while (token.type !== Token.EOF);

 
  const vocab = [];
  const symbolic = analizadorLexer.symbolicNames;
  const literal = analizadorLexer.literalNames;
  for (let i = 0; i < symbolic.length; i++) {
   
    vocab[i] = symbolic[i] || literal[i] || `UNKNOWN_${i}`;
  }

  console.log("\nTabla de Lexemas - Tokens:");
  imprimirTablaLexemasTokens(tokens, vocab);
}

main();