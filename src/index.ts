let asientos: number[] = new Array(9);
asientos = [1, 1, 1, 0, 0, 0, 0, 1, 1];

function BuscarButacasLibres(asientos: number[]): boolean {
  let contador: number = 0;
  for (let i = 0; i < asientos.length; i++) {
    if (asientos[i] === 0) {
      console.log("El asiento de la posición " + [i] + " está libre");
      contador++;
    }
    console.log(`La cantidad de asientos desocupados es : ${contador}`);
  } //fin for
  return true;
} //Fin funcion
console.log(BuscarButacasLibres(asientos));
