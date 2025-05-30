//2.1
type Status = 'carregando' | 'sucesso' | 'erro';

export function mostrarStatus(status: Status): Status {
  return status;
}

//2.2
let dinamic: string | number = 'teste';

function typeOfDinamicVariable(variable: string | number): string {
  return typeof variable == 'string' ? 'string' : 'number';
}

typeOfDinamicVariable(dinamic);
