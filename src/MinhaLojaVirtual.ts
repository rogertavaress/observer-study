import ISubject from "./model/ISubject";
import IObserver from "./model/IObserver";

export default class MinhaLojaVirtual implements ISubject {
  public produtoA: number = 0;
  public produtoB: number = 0;
  private observers: IObserver[] = [];

  public queroReceberNotificacao(observer: IObserver): void {
      const isExist = this.observers.includes(observer);
      if (isExist) {
          return console.log('Loja: Já tem um cliente cadastrado');
      }

      console.log('Loja: Cliente cadastrado.');
      this.observers.push(observer);
  }

  public naoQueroReceberNotificacao(observer: IObserver): void {
      const observerIndex = this.observers.indexOf(observer);
      if (observerIndex === -1) {
          return console.log('Loja: Não temos clientes para remover.');
      }

      this.observers.splice(observerIndex, 1);
      console.log('Loja: Cliente removido.');
  }

  public notificacao(): void {
      console.log('Loja: Notificando clientes...');
      for (const observer of this.observers) {
          observer.update(this);
      }
  }

  public chegouProdutos(): void {
      console.log('\nLoja: Temos uma alteração.');
      this.produtoA += 1;
      this.produtoB += 1;

      console.log(`Loja: Quantidade do produtoA: ${this.produtoA}`);
      console.log(`Loja: Quantidade do produtoB: ${this.produtoB}`);
      this.notificacao();
  }
}