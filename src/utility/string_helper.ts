import { escape } from 'mysql';

/**
 * Helper function to reduce boilerplate code needed to
 * process stuff to strings or do string related stuff
 * in general
 *
 * Sign: Suraj
 *
 * ts: yes
 *
 */
export const strh = {
  /**
   * #### ES = Escape String, Escape an untrusted string to be used as a SQL value.
   *
   * Remember this automatically adds string single quotes around
   * the returned value so dont add single quotes in query
   * @param param escape any to string
   */
  es: (param: any) => escape(param),

  /**
   * #### EO = Escape Object, Escape all values inside the object key value pair
   *
   * eg: if x = {a: 20, b: 1.5, c: 'abc'}
   *
   * will return {a: '20', b:'1.5', c: 'abc'}
   *
   * @param param object that needs its values to be escaped
   */
  eo: (param: Object) => {
    let data = {};
    for (let [key, item] of Object.entries(param)) {
      if (typeof item === 'string') data = { ...data, [key]: item };
      else data = { ...data, [key]: escape(item) };
    }
    return data;
  },

  /**
   * #### CS = Clear String, clears string of any single quotes
   *
   * eg: if x = "'FF'"
   *
   * will return "FF"
   *
   * @param param string to replace
   */
  cs: (param: string) => param.replace(/'/g, ''),
};

// Test
// console.log(strh.eo({ a: 20, b: 'xyz', c: -40 }));
