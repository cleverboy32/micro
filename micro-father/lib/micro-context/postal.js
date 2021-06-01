function createCustomEvent() {
  if (typeof window.CustomEvent === "function") {
    return window.CustomEvent;
  }

  class CustomEvent extends window.Event {
    constructor(eventName, params) {
      super(eventName, params);

      const p = params || {
        bubbles: false, // do not bubble by default
        cancelable: false, // Cannot cancel the default event by default
        detail: undefined,
      };

      const event = document.createEvent("Events");
      let bubbles = true;

      /* eslint-disable */
      for (const name in p) {
        name === "bubbles"
          ? (bubbles = Boolean(params[name]))
          : (event[name] = params[name]);
      }

      event.initEvent(eventName, bubbles, true);

      return event;
    }
  }

  return CustomEvent;
}

export function publish(topic, value) {
  const CustomEvent = createCustomEvent();
  console.log(333);
  window.dispatchEvent(new CustomEvent(topic, { detail: value || {} }));
}

// export function publish(topic) {
//   emitEvent(topic, value);
// }

export function subscribe(topic, callback) {
  window.addEventListener(topic, callback);
  return function unsubscribe() {
    window.removeEventListener(topic, callback);
  };
}
