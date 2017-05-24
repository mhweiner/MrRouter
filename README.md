# router.js
A simple yet robust router for your javascript routing pleasure. Please route responsibly.

## Example Usage

```js
// Instantiate and initialize. binds to window.onhashchange
var router = new Router();

// Set routes
router.routes = {
  'Tasks': 'tasks',
  'Task': 'task/:id',
  'Search': 'search/:keyword/:sortBy'
};

// Set controllers
router.controllers = {
  'Tasks': function(map){ ... },
  'Task': function(map){ ... },
  'Search': function(map){ ... }
};

// Route to specified route, by key (calls the appropriate controller).
router.go2('Task', {id: 123});

// Change hash on page to specified route, but do not actually route (does not call the controller).
router.go2('Task', {id: 123}, true);

// Route by reading from page hash and finding a match in Router.routes.
router.route();

// Register a callback when hash changes
router.navigateAwayCallback = function(){
  return confirm('Are you sure you want to leave?');
};

// Un-register callback
router.navigateAwayCallback = null;

// Get route object from hash, if match is found
router.getObjFromHash('task/123'); //returns {id: 'Task', params: {id: 123}}

```

## Installation

router.js requires Ben Alman's RouteMatcher (https://github.com/cowboy/javascript-route-matcher), which is included
in this repo at ba-routematcher.js. There are no other dependencies.

```
<script src="ba-routematcher.js"></script>
<script src="router.js"></script>

var router = new Router();
router.route();
```

## API

### route()

Routes based on current hash. Returns true if a match was found, false otherwise. `navigateAwayCallback` is ignored.
Returns true if there was a match, false otherwise.

### status()

Returns an object which represents the current hash.

### go2(id {string}, params {object}, doNotRoute {boolean=})

Changes the hash, which then is handled by onHashChange, which calls the controller.
- `doNotRoute` is optional. If true, the hash is changed **without** calling any matching controller, and `navigateAwayCallback` is ignored.

### getObjFromHash(hash {string})

Given the specified hash string, if a match was found in Router.routes, it returns an object, ex: `{id: 'blah', params:{}}`. Returns false if no
match was found.

## Properities

### routes {object}
### controllers {object}
### navigateAwayCallback {function}

## Route matching

For more details on how we match routes to/from hashes, please [see the documentation for RouteMatcher](https://github.com/cowboy/javascript-route-matcher).