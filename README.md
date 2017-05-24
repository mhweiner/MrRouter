# router.js
A simple yet robust router for your javascript routing pleasure. Please route responsibly.

## Example Usage

```js
// Instantiate and initialize. binds to window.onhashchange
var router = new Router();

// Route by reading from page hash and finding a match in Router.routes.
router.route();

// Route to specified route, by key (calls the appropriate controller).
router.go2('Task', {id: 123});

// Change hash on page to specified route, but do not actually route (does not call the controller).
router.go2('Task', {id: 123}, true);

// Set routes
router.routes = {
  'Tasks': 'tasks',
  'Task': 'task/:id',
  'Search': 'search/:keyword/:sortBy'
};

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