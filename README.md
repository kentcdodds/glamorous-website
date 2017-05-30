<img src="https://github.com/paypal/glamorous/raw/master/other/logo/full.png" alt="glamorous logo" title="glamorous" align="right" width="150" height="150" />

# glamorous-website

This is the website for [`glamorous`](https://github.com/paypal/glamorous/) and is built with [`next`](https://github.com/zeit/next.js) and `glamorous` of course.

[![Build Status][build-badge]][build]
[![Code Coverage][coverage-badge]][coverage]
[![Dependencies][dependencyci-badge]][dependencyci]
[![version][version-badge]][package]
[![downloads][downloads-badge]][npm-stat]
[![MIT License][license-badge]][LICENSE]

[![All Contributors](https://img.shields.io/badge/all_contributors-4-orange.svg?style=flat-square)](#contributors)
[![PRs Welcome][prs-badge]][prs]
[![Donate][donate-badge]][donate]
[![Code of Conduct][coc-badge]][coc]
[![Roadmap][roadmap-badge]][roadmap]
[![Examples][examples-badge]][examples]

[![Watch on GitHub][github-watch-badge]][github-watch]
[![Star on GitHub][github-star-badge]][github-star]
[![Tweet][twitter-badge]][twitter]

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

## Contributors

Thanks goes to these people ([emoji key][emojis]):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
| [<img src="https://avatars.githubusercontent.com/u/1500684?v=3" width="100px;"/><br /><sub>Kent C. Dodds</sub>](https://kentcdodds.com)<br />[💻](https://github.com/kentcdodds/glamorous-website/commits?author=kentcdodds "Code") [📖](https://github.com/kentcdodds/glamorous-website/commits?author=kentcdodds "Documentation") [🚇](#infra-kentcdodds "Infrastructure (Hosting, Build-Tools, etc)") [⚠️](https://github.com/kentcdodds/glamorous-website/commits?author=kentcdodds "Tests") | [<img src="https://avatars0.githubusercontent.com/u/737065?v=3" width="100px;"/><br /><sub>Paul Molluzzo</sub>](https://paul.molluzzo.com)<br />[💻](https://github.com/kentcdodds/glamorous-website/commits?author=paulmolluzzo "Code") [📖](https://github.com/kentcdodds/glamorous-website/commits?author=paulmolluzzo "Documentation") [👀](#review-paulmolluzzo "Reviewed Pull Requests") [⚠️](https://github.com/kentcdodds/glamorous-website/commits?author=paulmolluzzo "Tests") | [<img src="https://avatars0.githubusercontent.com/u/11924130?v=3" width="100px;"/><br /><sub>zhu haihao</sub>](http://liadbiz.github.io)<br />[💻](https://github.com/kentcdodds/glamorous-website/commits?author=liadbiz "Code") [📖](https://github.com/kentcdodds/glamorous-website/commits?author=liadbiz "Documentation") | [<img src="https://avatars0.githubusercontent.com/u/3509412?v=3" width="100px;"/><br /><sub>Montlouis-Calixte Stéphane</sub>](http://sbydesign.fr)<br /> |
| :---: | :---: | :---: | :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors][all-contributors] specification.
Contributions of any kind welcome!

## LICENSE

MIT

[npm]: https://www.npmjs.com/
[node]: https://nodejs.org
[build-badge]: https://img.shields.io/travis/kentcdodds/glamorous-website.svg?style=flat-square
[build]: https://travis-ci.org/kentcdodds/glamorous-website
[coverage-badge]: https://img.shields.io/codecov/c/github/kentcdodds/glamorous-website.svg?style=flat-square
[coverage]: https://codecov.io/github/kentcdodds/glamorous-website
[dependencyci-badge]: https://dependencyci.com/github/kentcdodds/glamorous-website/badge?style=flat-square
[dependencyci]: https://dependencyci.com/github/kentcdodds/glamorous-website
[version-badge]: https://img.shields.io/npm/v/glamorous-website.svg?style=flat-square
[package]: https://www.npmjs.com/package/glamorous-website
[downloads-badge]: https://img.shields.io/npm/dm/glamorous-website.svg?style=flat-square
[npm-stat]: http://npm-stat.com/charts.html?package=glamorous-website&from=2016-04-01
[license-badge]: https://img.shields.io/npm/l/glamorous-website.svg?style=flat-square
[license]: https://github.com/kentcdodds/glamorous-website/blob/master/other/LICENSE
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[donate-badge]: https://img.shields.io/badge/$-support-green.svg?style=flat-square
[donate]: http://kcd.im/donate
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc]: https://github.com/kentcdodds/glamorous-website/blob/master/other/CODE_OF_CONDUCT.md
[roadmap-badge]: https://img.shields.io/badge/%F0%9F%93%94-roadmap-CD9523.svg?style=flat-square
[roadmap]: https://github.com/kentcdodds/glamorous-website/blob/master/other/ROADMAP.md
[examples-badge]: https://img.shields.io/badge/%F0%9F%92%A1-examples-8C8E93.svg?style=flat-square
[examples]: https://github.com/kentcdodds/glamorous-website/blob/master/other/EXAMPLES.md
[github-watch-badge]: https://img.shields.io/github/watchers/kentcdodds/glamorous-website.svg?style=social
[github-watch]: https://github.com/kentcdodds/glamorous-website/watchers
[github-star-badge]: https://img.shields.io/github/stars/kentcdodds/glamorous-website.svg?style=social
[github-star]: https://github.com/kentcdodds/glamorous-website/stargazers
[twitter]: https://twitter.com/intent/tweet?text=Check%20out%20glamorous-website!%20https://github.com/kentcdodds/glamorous-website%20%F0%9F%91%8D
[twitter-badge]: https://img.shields.io/twitter/url/https/github.com/kentcdodds/glamorous-website.svg?style=social
[emojis]: https://github.com/kentcdodds/all-contributors#emoji-key
[all-contributors]: https://github.com/kentcdodds/all-contributors
