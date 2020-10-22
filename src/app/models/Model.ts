export interface ModelInterface {
  bind(options: any, keep_function?): void;
}

class Model implements ModelInterface {
  bind(options = {}, keep_function = false) {
    // tslint:disable-next-line:forin
    for (const k in options) {
      const v = options[k];
      if (typeof v === 'function') {
        if (keep_function === true) {
          this[k] = v;
        }
        continue;
      }

      if (v !== null && v !== undefined) {
        if (typeof this[k] === 'function') {
          this[k] = this[k](v);
        } else {
          this[k] = v;
        }
      }
      Object.getOwnPropertyNames(this).forEach(property => {
        if (options[property] === null || options[property] === undefined) {
          delete this[property];
        } else {
          const proto = Object.getPrototypeOf(this);
          const method = this.camelCase('get_' + property);
          proto[method] = function() {
            return this[property];
          };
        }
      });
    }
  }

  camelCase(string): any {
    string = string.toLowerCase();
    string = string.replace(/[^a-z0-9]/g, ' ');
    string = string.replace(/\s{2}/g, '');
    string = string.replace(/\w+/g, function(match) {
      return match.replace(/\b./, item => item.toUpperCase());
    });
    string = string.replace(/\s/g, '');
    string = string.replace(/\b./, item => item.toLowerCase());
    return string;
  }
}

export default Model;
