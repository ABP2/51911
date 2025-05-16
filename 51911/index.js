import antlr4, { CharStreams, CommonTokenStream } from "antlr4";
import analizadorLexer from "./generated/analizadorLexer.js";
import analizadorParser from "./generated/analizadorParser.js";
import readline from "readline";
import fs from "fs";

function preguntar(pregunta) {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  return new Promise(resolve => rl.question(pregunta, ans => { rl.close(); resolve(ans); }));
}

class CustomVisitor extends antlr4.tree.ParseTreeVisitor {
  visitJuego(ctx) {
    const escenas = {};
    for (const esc of ctx.escenas().escena()) {
      escenas[esc.VARIABLE().getText()] = this.visitEscena(esc);
    }
    return escenas;
  }
  visitEscena(ctx) {
    return ctx.acciones().map(a => {
      if (a.imprimir()) return { tipo: 'imprimir', texto: a.imprimir().TEXTO().getText().slice(1, -1) };
      if (a.leer()) return { tipo: 'leer', variable: a.leer().VARIABLE().getText() };
      if (a.asignacion()) {
        const as = a.asignacion();
        if (as.VALOR()) return { tipo: 'asignacion', variable: as.VARIABLE().getText(), valor: parseInt(as.VALOR().getText(), 10) };
        return { tipo: 'asignacionLeer', variable: as.VARIABLE().getText() };
      }
      if (a.condición()) {
        const c = a.condición();
        return { tipo: 'condicion', variable: c.comparación().VARIABLE().getText(), valor: parseInt(c.comparación().VALOR().getText(), 10), destino: c.saltar().VARIABLE().getText() };
      }
      if (a.saltar()) return { tipo: 'saltar', destino: a.saltar().VARIABLE().getText() };
      throw new Error('Acción desconocida');
    });
  }
}

function generarCodigoJS(escenas) {
  const lines = [];
  lines.push("(async function(){");
  lines.push("const vars = {};\nlet escena = '" + Object.keys(escenas)[0] + "';");
  lines.push("while(escena){");
  lines.push("  switch(escena){");
  for (const [nombre, acciones] of Object.entries(escenas)) {
    lines.push(`    case '${nombre}':`);
    acciones.forEach(a => {
      if (a.tipo === 'imprimir') lines.push(`      console.log(\`${a.texto}\`);`);
      if (a.tipo === 'leer') lines.push(`      vars['${a.variable}'] = await preguntar('> ${a.variable}: ');`);
      if (a.tipo === 'asignacion') lines.push(`      vars['${a.variable}'] = ${a.valor};`);
      if (a.tipo === 'asignacionLeer') lines.push(`      vars['${a.variable}'] = await preguntar('> ${a.variable}: ');`);
      if (a.tipo === 'condicion') lines.push(`      if(vars['${a.variable}'] == ${a.valor}) { escena = '${a.destino}'; break; }`);
      if (a.tipo === 'saltar') lines.push(`      escena = '${a.destino}'; break;`);
    });
    lines.push("      escena = null;");
    lines.push("      break;");
  }
  lines.push("    default: escena = null; break;");
  lines.push("  }");
  lines.push("}");
  lines.push("console.log('*** Fin del juego ***');");
  lines.push("})();");
  return lines.join("\n");
}

async function main() {
  try {
    const input = fs.readFileSync("input.txt", "utf8");
    const chars = CharStreams.fromString(input);
    const lexer = new analizadorLexer(chars);
    const tokens = new CommonTokenStream(lexer);
    const parser = new analizadorParser(tokens);
    const tree = parser.juego();

    if (parser._syntaxErrors > 0) {
      console.error("Errores de sintaxis");
      return;
    }

    // Mostrar el árbol de derivación
    console.log("\n=== Árbol de derivación ===\n");
    function printParseTree(tree, level = 0) {
      if (!tree.children || tree.children.length === 0) {
        console.log("  ".repeat(level) + tree.getText());
        return;
      }
      console.log("  ".repeat(level) + tree.constructor.name);
      for (const child of tree.children) {
        printParseTree(child, level + 1);
      }
    }
    printParseTree(tree);

    const visitor = new CustomVisitor();
    const escenas = visitor.visitJuego(tree);

    // Generar y mostrar código JavaScript traducido
    console.log("\n=== Código JavaScript traducido ===\n");
    const jsCode = generarCodigoJS(escenas);
    console.log(jsCode);

    // Ejecutar el código generado
    globalThis.preguntar = preguntar;
    await eval(jsCode);
  } catch (err) {
    console.error(err);
  }
}

main();
