//import { setInterval } from "timers";

let numero: number = 5;
let m: string = "el ordenador explotará en ";
let n: string = " segundos";
function conteo() {
  console.log(m, numero, n);
  numero--;
  if (numero === 0) {
    clearInterval(explosion);
  }
}

let explosion = setInterval(conteo, 1000);

describe("conteo", () => {
  it("debería mostrar el mensaje correcto", () => {
    const logSpy = jest.spyOn(console, "log");

    conteo();

    expect(logSpy).toHaveBeenCalledWith(
      "el ordenador explotará en ",
      5,
      " segundos"
    );
  });

  it("debería detener el intervalo cuando el número alcanza 0", () => {
    const clearIntervalSpy = jest.spyOn(global, "clearInterval");

    for (let i = 0; i < 5; i++) {
      jest.runOnlyPendingTimers();
      expect(clearIntervalSpy).not.toHaveBeenCalled();
    }

    jest.runOnlyPendingTimers();
    expect(clearIntervalSpy).toHaveBeenCalled();
  });
});
