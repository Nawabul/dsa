function observeMethods(instance) {
  return new Proxy(instance, {
    get(target, prop, receiver) {
      const value = Reflect.get(target, prop, receiver)

      if (typeof value === 'function') {
        return function (...args) {
          console.log(`[CALL] ${String(prop)}`, args)
          return value.apply(this, args)
        }
      }

      return value
    },
  })
}


class Carbon {
  constructor() {
    return observeMethods(this)
  }

  addDays(days) {
    return this
  }

  format(pattern) {
    return 'formatted'
  }
}
