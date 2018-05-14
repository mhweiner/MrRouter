# Mr. Router
A simple and lightweight router for use in the browser. Great with React or other front-end application frameworks. Supports callbacks for navigating away from hash changes to prevent change from occurring, and more.

Built using Ben "Cowboy" Allman's super awesome [JavaScript Basic Route Matcher](https://github.com/cowboy/javascript-route-matcher).

## Example Usage

```javascript
// Set routes
mr.setRoutes({
  Tasks: 'tasks',
  Task: 'task/:id',
  Search: 'search/:keyword/:sortBy'
});

// Set controllers
mr.setControllers({
  Tasks: function(map){ ... },
  Task: function(map){ ... },
  Search: function(map){ ... }
});

// Route to specified route, by key (calls the appropriate controller).
mr.go2('Task', {id: 123});

// Change hash on page to specified route, but do not actually route (does not call the controller).
mr.go2('Task', {id: 123}, true);

// Route by reading from page hash and finding a match in Router.routes.
mr.route();

// Register a callback when hash changes
mr.setOnHashChange(confirm('Are you sure you want to leave?'));

// Un-register callback
mr.setOnHashChange(null);

// Get route object from hash, if match is found
mr.getObjFromHash('task/123'); //returns {id: 'Task', params: {id: 123}}
```

## Installation

```bash
npm i mr-router
```

Then import to include in your webpack build:

```javascript
import mr from 'mr-router'

//do things with mr here
mr.route();
```

### Manual Installation

See the [Releases](https://github.com/mhweiner/mr-router/releases).

```html
<script src="mr-router.production.min.js">
```
```javascript
MrRouter.route(); //or whatever's clever
```

## API

### `route()`

Routes based on current hash. Returns true if a match was found, false otherwise. `navigateAwayCallback` is ignored.
Returns true if there was a match, false otherwise.

### `status()`

Returns an object which represents the current hash.

### `go2(id {string}, params {object}, doNotRoute {boolean=})`

Changes the hash, which then is handled by onHashChange, which calls the controller.
- `doNotRoute` is optional. If true, the hash is changed **without** calling any matching controller, and `navigateAwayCallback` is ignored.

### `getObjFromHash(hash {string})`

Given the specified hash string, if a match was found in Router.routes, it returns an object, ex: `{id: 'blah', params:{}}`. Returns false if no
match was found.

### `setRoutes(map {object})`

Sets or adds the routes given. Will override if any duplicates are present. It `extends` the route map with `Object.assign()`.

```
mr.setRoutes({foo: 'bar'});
mr.setRoutes({boo: 'nar'});
mr.getRoutes(); // {foo: 'bar', boo: 'nar'}
```

### `setControllers(map {object})`

Sets or adds the controllers given. Will override if any duplicates are present. It `extends` the route map with `Object.assign()`.

```
mr.setControllers({foo: [function]});
mr.setControllers({boo: [function]});
mr.getControllers(); // {foo: [function], boo: [function]}
```

### `setOnHashChange([function])`

Sets a callback to fire on hash changes. If that callback returns `false`, then the hash change is undone (`window.history.go(-1)` is called). This is great for preventing loss of unsaved changes in a dialog box, for example.

### `clearRoutes()`

Clears the routes.

### `clearControllers()`

Clears the controllers.

## Route matching

For more details on how we match routes to/from hashes, please [see the documentation for RouteMatcher](https://github.com/cowboy/javascript-route-matcher).

## License

[MIT](https://github.com/mhweiner/mr-router/blob/master/LICENSE). Free to use in all your things!

## Contribution

DO IT! PR's welcome.
