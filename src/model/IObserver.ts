import ISubject from './ISubject';

export default interface IObserver {
  // Receive update from subject.
  update(subject: ISubject): void;
}