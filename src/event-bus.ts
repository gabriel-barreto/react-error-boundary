import { TinyEmitter } from 'tiny-emitter';

export type Event = { type: string; payload: any };

function makeTogglerEventBuzz(eventId: string) {
  const name = `event::${eventId}`;
  const bus = new TinyEmitter();

  function propagate({ type, payload }: Event) {
    bus.emit(name, { type, payload });
  }

  function off() {
    bus.off(name);
  }

  function turnOn() {
    propagate({ type: 'TURN_ON', payload: true });
  }

  function turnOff() {
    propagate({ type: 'TURN_OFF', payload: false });
  }

  function onToggle(callback: (event: Event) => void) {
    bus.on(name, callback);
  }

  return { off, turnOn, turnOff, onToggle };
}

export default { loading: makeTogglerEventBuzz('loading') };
