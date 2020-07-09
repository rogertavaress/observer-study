import IObserver from "./model/IObserver";
import ISubject from "./model/ISubject";
import MinhaLojaVirtual from "./MinhaLojaVirtual";

export class ClienteA implements IObserver {
  public update(loja: ISubject): void {
      if (loja instanceof MinhaLojaVirtual && (loja.produtoA > 0)) {
          console.log('ClienteA: Eu recebi uma notificação que o produtoA chegou no estoque.');
      }
  }
}

export class ClienteB implements IObserver {
  public update(loja: ISubject): void {
      if (loja instanceof MinhaLojaVirtual && (loja.produtoB > 0)) {
          console.log('ClienteB:  Eu recebi uma notificação que o produtoB chegou no estoque.');
      }
  }
}