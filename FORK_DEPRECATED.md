# This fork is deprecated

`substrateindependent/openclaw` is **not** a deployable surface and never was.

It was created 2026-07-24 and carries exactly one merge (PR #1). It has zero
workflow runs, zero releases, and a `package.json` that still points at
upstream. Nothing has ever been built, published, or installed from this
repository. Every machine that runs OpenClaw installs the public `openclaw`
package from the npm registry, so merging here changes nothing anywhere.

The fix in PR #1 treated the cron tool's by-design self-scope rejection as
non-terminal rather than a fatal run error. It is not being ported here.
Upstream renamed the rejection string in the cron-to-automations rename, so a
verbatim port would match a string upstream never emits. The defect is instead
being reported upstream as an issue carrying a live reproduction, which is what
the maintainers asked for.

Those three commits are preserved outside this repository, on
`Fieldcrest/openclaw-fork-preservation`, branch `eng-24-cron-classifier-fix`.

Do not open pull requests against this repository. Fixes to third-party
packages installed from a registry go upstream as pull requests.

This repository is retained read-only so PR #1's review history stays
retrievable. It is archived.
