# Release History

*****************

## Release ONDEWO Survey Angular Client 2.0.2

### Bug Fixes

* [[OND221-2830]](https://ondewo.atlassian.net/browse/OND221-2830) Regenerated with [ondewo-proto-compiler 5.13.0](https://github.com/ondewo/ondewo-proto-compiler/releases/tag/5.13.0).
* [[OND221-2830]](https://ondewo.atlassian.net/browse/OND221-2830) The hand-written `auth/` surface is now re-exported from the generated public-api barrel. It was compiled and shipped inside the package but nothing re-exported it, so importing a symbol from the package root did not resolve and consumers could only deep-import the module. The re-export is emitted by the compiler, so it survives the regeneration that rewrites the barrel on every build.
* [[OND221-2830]](https://ondewo.atlassian.net/browse/OND221-2830) Tooling: `conventional-pre-commit` now runs before `giticket` at the commit-msg stage - with giticket first, its `[OND221-2830] fix: ...` rewrite was no longer valid Conventional Commits and every commit on a ticket branch failed. `README.md` is prettier-ignored where `.prettierrc` sets `useTabs` and markdownlint's MD010 de-tabs the same blocks, and the codegen `docker run` invocations no longer pass `-it`, which fails outside a TTY.

***************** 

## Release ONDEWO Survey Angular Client 2.0.1 
 
### Improvements

* Optimized for Angular 16 (esm2022 and fesm2022)
* Tracking API Version [2.0.0](https://github.com/ondewo/ondewo-survey-api/releases/tag/2.0.0) ( [Documentation](https://ondewo.github.io/ondewo-survey-api/) ) 

***************** 

## Release ONDEWO Survey Angular Client 2.0.0 
 
### Improvements 
* Tracking API Version [2.0.0](https://github.com/ondewo/ondewo-survey-api/releases/tag/2.0.0) ( [Documentation](https://ondewo.github.io/ondewo-survey-api/) ) 

*****************

## Release ONDEWO Survey Angular Client 1.1.0

* Track version 1.1.0 of [ONDEWO Survey API](https://github.com/ondewo/ondewo-nlu-api/releases/1.1.0)
* [[OND211-2039]](https://ondewo.atlassian.net/browse/OND211-2039) - Implemented automated release for GitHub and NPM
* [[OND211-2039]](https://ondewo.atlassian.net/browse/OND211-2039) - Added pre-commit hooks and adjusted files to them

*****************

## Release ONDEWO Survey Angular Client 1.0.0

* Track version 1.0.0 of [ONDEWO Survey API](https://github.com/ondewo/ondewo-nlu-api/releases/1.0.0)

*****************

## Release ONDEWO Survey Angular Client 0.6.1

* Track version 0.6.1 of [ONDEWO Survey API](https://github.com/ondewo/ondewo-nlu-api/releases/0.6.1)
* Upgraded to Angular >= 13.x.x and ngx-grpc >=3.0.0

*****************

## Release ONDEWO Survey Angular Client 0.6.0

* Track version 0.6.0 of [ONDEWO Survey API](https://github.com/ondewo/ondewo-nlu-api/releases/0.6.0)

*****************

## Release ONDEWO Survey Angular Client 0.5.0

* Track version 0.5.0 of [ONDEWO Survey API](https://github.com/ondewo/ondewo-nlu-api/releases/0.5.0)

*****************

## Release ONDEWO Survey Angular Client 0.4.1

* Track version 0.4.1 of [ONDEWO Survey API](https://github.com/ondewo/ondewo-nlu-api/releases/0.4.1)
