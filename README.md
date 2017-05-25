<img src="https://github.com/paypal/glamorous/raw/master/other/logo/full.png" alt="glamorous logo" title="glamorous" align="right" width="150" height="150" />

# glamorous-website

This is the website for [`glamorous`](https://github.com/paypal/glamorous/) and is built with [`next`](https://github.com/zeit/next.js) and `glamorous` of course.

## Installing

This site requires `node` and `npm` to be installed first. Then:

1. Clone the repo
2. Run `npm install` (or `yarn install`)
3. Run `npm run dev` to run a local version to view

If you plan to deploy the project, you can run `npm run build` to build the `next` site.

## Contributing

If you plan to contribute to the project you should run tests along the way. Testing is performed with [`xo`](https://github.com/sindresorhus/xo) for linting and [`jest`](https://github.com/facebook/jest) for snapshot testing. You can do so like this:

To lint the project run `npm run lint`.

To run all tests run `npm test`.

If you make changes that require updating the `jest` snapshots, run `npm test -- -u`
