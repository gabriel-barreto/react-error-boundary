import { TinyEmitter } from 'tiny-emitter';

export type Event = { type: string; payload: any };

function makeTogglerEventBuzz(eventId: string) {
  const name = `event::${eventId}`;
  const buzz = new TinyEmitter();

  function propagate({ type, payload }: Event) {
    buzz.emit(name, { type, payload });
  }

  function off() {
    buzz.off(name);
  }

  function turnOn() {
    propagate({ type: 'TURN_ON', payload: true });
  }

  function turnOff() {
    propagate({ type: 'TURN_OFF', payload: false });
  }

  function onToggle(callback: (event: Event) => void) {
    buzz.on(name, callback);
  }

  return { off, turnOn, turnOff, onToggle };
}

export default { loading: makeTogglerEventBuzz('loading') };
