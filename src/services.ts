import eventBus from './event-bus';

export function brokenPromise() {
  eventBus.loading.turnOn();
  return new Promise((_, reject) => {
    setTimeout(() => {
      eventBus.loading.turnOff();
      reject(new Error('Deu ruim aqui pae!'));
    }, 3000);
  });
}
