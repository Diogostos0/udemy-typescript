//4.1
type Coordenadas = readonly [X: number, Y: number];
let ponto: Coordenadas = [10, 2];

// 4.2
enum Direcao {
  Norte = 'Norte',
  Sul = 'Sul',
  Leste = 'Leste',
  Oeste = 'Oeste',
}

export function mover(direction: Direcao): string {
  return `Movendo para ${direction}`;
}
