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

## Route matching

For more details on how we match routes to/from hashes, please [see the documentation for RouteMatcher](https://github.com/cowboy/javascript-route-matcher).