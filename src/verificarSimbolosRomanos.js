import { BadRequestError } from "./apiError.js";

function verificarSimbolosRomanos(array, path) {
    array.forEach((l, i) => {
        if (["V", "L", "D"].includes(l)) {
            if (array[i + 1] === array[i]) {
                throw new BadRequestError(
                    "Numero ingresado incorrecto, los simbolos V, L y D no se pueden agrupar de a dos(2)",
                    path
                );
            }
        } else if (["I", "X", "C", "M"].includes(l)) {
            if (
                array[i] === array[i + 1] &&
                array[i] === array[i + 2] &&
                array[i] === array[i + 3]
            ) {
                throw new BadRequestError(
                    "Numero ingresado incorrecto, los simbolos I, X, C y M no se pueden agrupar de a cuatro(4)",
                    path
                );
            }
        }
    });
}

export default verificarSimbolosRomanos;
