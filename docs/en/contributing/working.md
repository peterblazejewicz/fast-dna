---
id: working
title: Working
sidebar_label: Working
---

## Managing Issues

Well crafted issues improve the speed that work can be triaged, understood, and completed. To help guide this process [issue templates](https://github.com/Microsoft/fast-dna/tree/master/.github/ISSUE_TEMPLATE) exist to allow users to choose an appropriate [bug report](https://github.com/Microsoft/fast-dna/blob/master/.github/ISSUE_TEMPLATE/report-a-bug.md) or [feature request](https://github.com/Microsoft/fast-dna/blob/master/.github/ISSUE_TEMPLATE/request-a-feature.md).

Here's an excellent resource for [do's and don'ts](https://hackernoon.com/45-github-issues-dos-and-donts-dfec9ab4b612) when working with bugs, issues, and requests.

[GitHub labels](https://developer.github.com/v3/issues/labels/) are used to manage issues broadly considered work items grouped by color and prefixed by label name.

## Pull requests

When landing a pull request (PR), individuals must modify the original commit message to include comprehensive details. This detail along with other git history meta information deploys as part of the documentation changelog history. Changelogs are generated by [Lerna](https://lernajs.io/) using [conventional commits](https://conventionalcommits.org/).

PR comments should include the issue number per the [github closing issue keywords](https://help.github.com/articles/closing-issues-using-keywords/) documentation.

One or more collaborators are automatically assigned to review each PR based on areas of [ownership](https://github.com/Microsoft/fast-dna/blob/master/.github/CODEOWNERS).

**`<type>`** is required to be at least one of the following:

- chore: A change that does not impact distributed packages
- feat: Adding, updating, or removing a feature
- fix: A bug fix.

**`<description>`** is required and speaks to what the user gets from this PR:

- Be concise
- Use lowercase
- Use imperative, present tense (e.g. `add` not `adds`)
- Do not end with a period. Period.
- Avoid redundant words

Accepted title format

```comment
<type>: <description>
```

Example titles

```comment
feat: add a border radius to MSFT button
chore: add unit-tests for all components
fix: update MSFT design system to use 3px border radius
```

### Pull request template

In addition to providing a properly formatted title for your pull request, we offer a template that will help guide you toward appropriate best practices and processes as well as provide additional information which will give those reviewing your request the context they need.

Open the [pull request template](https://github.com/Microsoft/fast-dna/blob/master/.github/pull_request_template.md).

### Interim commits

The above outlines the format for the **final** commit, but contributors have many interim commits while working on their branch. These commits should be succinct, concise, and consistent for best readability. Always remember, a diff tells you _what_ changed in a commit, but only the commit message can adequately tell you _why_.

Typical interim commits may look like the following:

```terminal
5ba3db6 Update toggle markup for accessibility
84564a0 Add MSFT styles
e142fd1 Rebase with master
887815f Remove toggle underline on hover
ac8326d Fix ts-lint errors
```

As a core philosophy, we prefer [rebasing over merging](https://www.atlassian.com/git/tutorials/merging-vs-rebasing).

## Common commands

All "packages" share common script names for consistency along with their documentation guides.

To clean all packages.

```bash
lerna clean
```

Install remote dependencies, build, and symlink local dependencies.

```bash
lerna bootstrap
```

To run all tests on all packages.

```bash
lerna run test
```

To run all tests on a single package.

```bash
cd packages/package-name
npm run test
```

Most packages have a *watch* command that rebuilds the package's distribution when a file changes. This process can be useful when doing development across multiple packages.

```bash
npm run watch
```

## Troubleshooting
If you run into any errors and they seem unrelated to your work try the following procedure.

1. Clean out old node_modules from all packages with Lerna.

```bash
lerna clean
```

1. Delete root node_modules (`fast-dna/node_modules`).

```bash
rm -rf
```

1. Reinstall all modules on root and modules across all packages using Lerna.

```bash
npm i
lerna bootstrap
```

1. Fully test the project with Lerna.

```bash
lerna run test
```