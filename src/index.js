import rm from '../vendor/ba-routematcher'

function Router() {

  let onHashChangeUserSuppliedCallback = null,
    ignoreHashChange = false,
    controllers = {},
    routes = [];

  /**
   * @returns {*}
   */
  function getHash(){
    if (window.location.hash) {
      return window.location.hash.substring(1);
    } else {
      return false;
    }
  }

  /**
   * @param id
   * @param params
   * @private
   */
  function _callControllerFromObj(id, params) {
    if (controllers[id]) {
      controllers[id].call(undefined, params);
    } else {
      throw("router: controller[" + id + '] does not exist.');
    }
  }

  /**
   * Returns a hash string from a route ID and parameter map. If id does not exist, throws an Exception.
   * @param id
   * @param params
   * @returns {*|String}
   * @private
   */
  function _getHashFromObj(id, params) {
    let hash = routes[id];
    if (!hash) {
      throw("Undefined route '" + id + "'");
    }
    let matched = rm(hash);
    return matched.stringify(params || {});
  }

  /**
   * Returns an object with the id and params object {id:[String],params:{}} from a hash string. Returns false if no
   * match was found.
   * @param hash
   * @returns {*}
   */
  function getObjFromHash(hash) {
    if (!hash) {
      return false;
    }

    for (let k in routes) {
      if (routes.hasOwnProperty(k)) {
        let rm = rm(routes[k]);
        let p = rm.parse(hash);
        if (p !== null) {
          return {id:k, params:p};
        }
      }
    }

    return false;
  }

  /**
   * onHashChange event handler.
   */
  function onHashChange() {

    let o = getObjFromHash(getHash());
    if (o) {

      if(ignoreHashChange){
        //ignore just once, then reset.
        ignoreHashChange = false;
        return;
      }

      if(typeof onHashChangeUserSuppliedCallback === 'function'){
        if(!onHashChangeUserSuppliedCallback()){
          //halt if callback returns false, and go back to the previous route
          ignoreHashChange = true;
          window.history.go(-1);
          return;
        }
      }

      _callControllerFromObj(o.id, o.params);
      return true;
    } else {
      return false;
    }
  }

  /**
   * Returns an object which represents the current hash.
   * @return {*}
   */
  function status() {
    return getObjFromHash(getHash());
  }

  /**
   * Changes the hash, which then is handled by onHashChange, which calls the controller.
   * @param id
   * @param params
   * @param {boolean=} doNotRoute //change the hash without actually routing
   */
  function go2(id, params, doNotRoute) {

    let new_hash = _getHashFromObj(id, params || {});
    ignoreHashChange = doNotRoute;

    //if the hashes are the same, just ignore.
    if(new_hash === window.location.hash.replace('#','')){
      return;
    }

    window.location.hash = new_hash;
  }

  /**
   * Routes based on current hash. Returns true if a match was found, false otherwise.
   * NavigateAwayCallback is ignored.
   * @return boolean
   */
  function route() {
    let o = status(); //get current hash object.
    if (o) {
      _callControllerFromObj(o.id, o.params);
      return true;
    } else {
      return false;
    }
  }

  /**
   * Bind onhashchange to window
   */
  function init() {
    window.onhashchange = onHashChange;
  }

  function setRoutes(map) {
    Object.assign(routes, map);
  }

  function getRoutes() {
    return routes;
  }

  function setControllers(map) {
    Object.assign(controllers, map);
  }

  function getControllers() {
    return controllers;
  }

  function clearRoutes() {
    routes = [];
  }

  function clearControllers() {
    controllers = [];
  }

  function setOnHashChange(fn) {
    onHashChangeUserSuppliedCallback = fn;
  }

  init();

  return {
    route,
    status,
    go2,
    getObjFromHash,
    setRoutes,
    getRoutes,
    setControllers,
    getControllers,
    clearRoutes,
    clearControllers,
    setOnHashChange
  };

}

function setup() {

  console.log('ROUTER BEING DEFINED');

  /* This creates a singleton, instantiating on window (window). */

  //do not bind twice
  if (window.MrRouter) return window.MrRouter;

  console.log('ROUTER BEING INSTANTIATED');

  window.MrRouter = new Router();

}

setup();

export default window.MrRouter