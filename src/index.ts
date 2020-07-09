import ISubject from './model/ISubject';
import IObserver from './model/IObserver';
import MinhaLojaVirtual from './MinhaLojaVirtual';
import {ClienteA, ClienteB} from './Clientes';

const loja = new MinhaLojaVirtual();

const observer1 = new ClienteA();
loja.queroReceberNotificacao(observer1);

const observer2 = new ClienteB();
loja.queroReceberNotificacao(observer2);

loja.chegouProdutos();
loja.chegouProdutos();

loja.naoQueroReceberNotificacao(observer2);

loja.chegouProdutos();

loja.naoQueroReceberNotificacao(observer1);

loja.chegouProdutos();