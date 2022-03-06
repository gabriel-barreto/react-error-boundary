import eventBuzz from './event-buzz';

export function brokenPromise() {
  eventBuzz.loading.turnOn();
  return new Promise((_, reject) => {
    setTimeout(() => {
      eventBuzz.loading.turnOff();
      reject(new Error('Deu ruim aqui pae!'));
    }, 3000);
  });
}
