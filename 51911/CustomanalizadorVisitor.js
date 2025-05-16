import antlr4 from "antlr4";

export class CustomanalizadorVisitor extends antlr4.tree.ParseTreeVisitor {
  visitJuego(ctx) {
    const escenas = {};
    for (const escenaCtx of ctx.escenas().escena()) {
      const nombre = escenaCtx.VARIABLE().getText();
      escenas[nombre] = this.visitEscena(escenaCtx);
    }
    return { nombreJuego: ctx.VARIABLE().getText(), escenas };
  }

  visitEscena(ctx) {
    const acciones = [];
    for (const accionCtx of ctx.acciones()) {
      if (accionCtx.imprimir()) {
        acciones.push({
          tipo: "imprimir",
          texto: accionCtx.imprimir().TEXTO().getText().slice(1, -1),
        });
      } else if (accionCtx.leer()) {
        acciones.push({
          tipo: "leer",
          variable: accionCtx.leer().VARIABLE().getText(),
        });
      } else if (accionCtx.asignacion()) {
        const a = accionCtx.asignacion();
        if (a.VALOR()) {
          acciones.push({
            tipo: "asignacion",
            variable: a.VARIABLE().getText(),
            valor: a.VALOR().getText(),
          });
        } else {
          acciones.push({
            tipo: "asignacionLeer",
            variable: a.VARIABLE().getText(),
          });
        }
      } else if (accionCtx.condición()) {
        const c = accionCtx.condición();
        acciones.push({
          tipo: "condicion",
          variable: c.comparación().VARIABLE().getText(),
          valor: c.comparación().VALOR().getText(),
          destino: c.saltar().VARIABLE().getText(),
        });
      } else if (accionCtx.saltar()) {
        acciones.push({
          tipo: "saltar",
          destino: accionCtx.saltar().VARIABLE().getText(),
        });
      }
    }
    return acciones;
  }

  // Anulamos el dispatch automático
  visitChildren() {
    return null;
  }
}
