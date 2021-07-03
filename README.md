# module-federation-example2

This examples contains an example module which is used in [next-example-app](https://github.com/P01010000/next-example-app)

This examples features a compatibility wrapper which renders the app using ReactDOM.render as workaround. This can be useful if the host does not share react or the shared version is not compatible.

[module-federation-example1](https://github.com/P01010000/module-federation-example1) configures sharing while it is disabled on purpose in [module-federation-example2](https://github.com/P01010000/module-federation-example2) to demonstrate it.

# Running Demo

Run next-example-app via `npm start`
Run `npm start` or `npm run build && npm run serve` in example1 and example2

- [localhost:3000](http://localhost:3000/) (HOST)
- [localhost:8081](http://localhost:8081/) (STANDALONE REMOTE)
- [localhost:8082](http://localhost:8082/) (STANDALONE REMOTE)
