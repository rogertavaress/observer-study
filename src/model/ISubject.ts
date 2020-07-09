import IObserver from './IObserver';

export default interface Subject {
  // Attach an observer to the subject.
  queroReceberNotificacao(observer: IObserver): void;

  // Detach an observer from the subject.
  naoQueroReceberNotificacao(observer: IObserver): void;

  // Notify all observers about an event.
  notificacao(): void;
}