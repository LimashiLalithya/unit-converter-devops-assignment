# Unit Converter --- Advanced Git & DevOps Team Collaboration Assignment

[![CI
Pipeline](https://github.com/LimashiLalithya/unit-converter-devops-assignment/actions/workflows/ci.yml/badge.svg)](https://github.com/LimashiLalithya/unit-converter-devops-assignment/actions/workflows/ci.yml)
[![Deploy to
Vercel](https://github.com/LimashiLalithya/unit-converter-devops-assignment/actions/workflows/deploy.yml/badge.svg)](https://github.com/LimashiLalithya/unit-converter-devops-assignment/actions/workflows/deploy.yml)

A web-based Unit Converter application developed for the **Advanced Git
& DevOps Team Collaboration Assignment**. The application provides
accurate conversions for length, weight, and temperature, together with
validation, unit swapping, conversion history, and persistent local
storage.

## Group Information

| Student | Student ID | Role |
|---|---|---|
| **Limashi Lalithya** | **ITBNM-2211-0209** | **DevOps Engineer** |
| **Chandika Kavindu (RMCK Rathnayake)** | **ITBNM-2211-0182** | **Full-Stack Developer** |

## Project Links

-   **GitHub Repository:**
    https://github.com/LimashiLalithya/unit-converter-devops-assignment
-   **Live Production Deployment:**
    https://unit-converter-devops-assignment.vercel.app/

## Project Overview

The Unit Converter is a responsive client-side web application that
allows users to convert values between supported units.

The project demonstrates professional Git collaboration and DevOps
practices, including:

-   Feature-based Git branching
-   Pull requests and peer code reviews
-   Meaningful conventional commits
-   Continuous Integration with GitHub Actions
-   Automated testing, linting, and production builds
-   Continuous Deployment to Vercel
-   Production release through the `main` branch
-   Development integration through the `develop` branch
-   Deployment troubleshooting
-   Technical documentation

## Features

-   Length conversion
-   Weight conversion
-   Temperature conversion
-   Real-time conversion
-   Input validation
-   Unit swapping
-   Conversion history
-   LocalStorage persistence
-   Responsive user interface
-   Accessible and clear controls

## Technology Stack

-   HTML5
-   CSS3
-   JavaScript ES Modules
-   Vite
-   Vitest
-   ESLint
-   Git
-   GitHub
-   GitHub Actions
-   Vercel

## Project Structure

``` text
unit-converter-devops-assignment/
├── .github/
│   └── workflows/
│       ├── ci.yml
│       └── deploy.yml
├── src/
│   ├── scripts/
│   │   ├── __tests__/
│   │   │   └── converter.test.js
│   │   ├── app.js
│   │   └── converter.js
│   ├── styles/
│   │   └── style.css
│   └── index.html
├── .gitignore
├── eslint.config.js
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## Team Roles and Responsibilities

### Limashi Lalithya --- DevOps Engineer

-   Repository and Git workflow setup
-   GitHub Actions CI pipeline
-   Vercel deployment pipeline
-   Vercel project configuration
-   Deployment troubleshooting
-   GitHub Actions workflow maintenance
-   Branch and release workflow
-   Pull requests and review coordination
-   Deployment and CI/CD documentation
-   Local verification of tests, linting, and production builds

### Chandika Kavindu (RMCK Rathnayake) --- Full-Stack Developer

-   Conversion engine implementation
-   Length, weight, and temperature conversion functionality
-   Application functionality and UI-related development
-   Automated unit tests
-   Feature-branch development
-   Pull-request review and approval
-   Integration and release participation
-   Deployment verification and collaborative troubleshooting

## Git Branch Strategy

The repository uses a Git Flow-style collaboration model:

``` text
main
│
└── Production / release branch
        ▲
        │ Release Pull Request
        │
develop
│
├── feature/conversion-engine
├── feature/converter-ui
├── feature/ci-pipeline
├── feature/deploy-pipeline
├── docs/deployment-cicd
├── fix/vercel-deployment
└── fix/update-vercel-action
```

### Branch Responsibilities

  Branch        Purpose
  ------------- ---------------------------------------------------
  `main`        Production-ready code and production deployment
  `develop`     Integration branch for completed development work
  `feature/*`   New feature development
  `fix/*`       Bug fixes and configuration/deployment fixes
  `docs/*`      Documentation work

Developers do not use `main` for normal development. Work is completed
on dedicated branches and merged through reviewed pull requests.

## Git Collaboration Workflow

``` text
Feature / Fix / Documentation Branch
              │
              ▼
        Pull Request
              │
       CI + Code Review
              │
              ▼
          develop
              │
              ▼
       Release Pull Request
              │
       CI + Code Review
              │
              ▼
            main
              │
              ▼
       GitHub Actions
              │
              ▼
           Vercel
              │
              ▼
        Production
```

### Pull Request Process

1.  Update the local `develop` branch.
2.  Create a dedicated feature, fix, or documentation branch.
3.  Make focused changes.
4.  Use meaningful conventional commits.
5.  Push the branch to GitHub.
6.  Open a pull request into `develop`.
7.  Request peer review.
8.  Allow automated checks to complete.
9.  Resolve requested changes or conflicts.
10. Merge the approved pull request into `develop`.
11. Create a release pull request from `develop` to `main`.
12. Review and merge the release pull request.
13. Allow the production deployment workflow to run from `main`.
14. Verify the live Vercel deployment.

## Continuous Integration

The CI workflow is:

``` text
.github/workflows/ci.yml
```

The CI pipeline performs:

1.  Checkout repository
2.  Set up Node.js
3.  Install dependencies with `npm ci`
4.  Run unit tests with `npm test`
5.  Run ESLint with `npm run lint`
6.  Build the application with `npm run build`

### Local CI Verification

``` bash
npm ci
npm test
npm run lint
npm run build
```

The application was locally verified with:

-   Unit tests passing
-   ESLint passing
-   Vite production build passing

## Continuous Deployment

The deployment workflow is:

``` text
.github/workflows/deploy.yml
```

Production deployment is triggered after changes reach the `main`
branch.

The deployment workflow performs:

1.  Checkout repository
2.  Set up Node.js
3.  Install dependencies
4.  Run tests
5.  Run lint
6.  Build the application
7.  Deploy to Vercel using the configured GitHub repository secrets

### Production Deployment

**Platform:** Vercel

**Live URL:**

https://unit-converter-devops-assignment.vercel.app/

The production deployment has been successfully verified through GitHub
Actions.

## Vercel Configuration

The Vercel project is associated with the GitHub repository and the
team's Vercel project.

The GitHub Actions deployment uses these repository secrets:

``` text
VERCEL_TOKEN
VERCEL_ORG_ID
VERCEL_PROJECT_ID
```

The actual secret values are never stored in the repository.

## Testing

The project uses **Vitest** for automated unit testing.

The current tests cover:

-   Meters to kilometers
-   Kilometers to meters
-   Kilograms to grams
-   Celsius to Fahrenheit
-   Celsius to Kelvin

Run:

``` bash
npm test
```

## Linting

ESLint is used to maintain code quality.

Run:

``` bash
npm run lint
```

## Production Build

Vite is used for the production build.

Run:

``` bash
npm run build
```

The generated production files are placed in:

``` text
dist/
```

## Local Development

### Prerequisites

-   Node.js 20 or later
-   npm
-   Git

### Clone Repository

``` bash
git clone https://github.com/LimashiLalithya/unit-converter-devops-assignment.git
cd unit-converter-devops-assignment
```

### Install Dependencies

``` bash
npm ci
```

### Start Development Server

``` bash
npm run dev
```

Vite will display the local development URL in the terminal.

### Verify Before Pushing

``` bash
npm test
npm run lint
npm run build
git status
```

## Deployment Troubleshooting

During the development of the Vercel deployment pipeline, the GitHub
Actions deployment job initially failed during Vercel CLI execution.

The team investigated:

-   Vercel project configuration
-   Vercel organization/team configuration
-   Project ID
-   Organization/team ID
-   GitHub repository secrets
-   Local Vercel project linking
-   Deployment workflow configuration

The deployment action was updated from:

``` text
amondnet/vercel-action@v25
```

to:

``` text
amondnet/vercel-action@v42
```

The Vercel authentication and project configuration were then corrected
and the deployment workflow was rerun.

The final production deployment succeeded.

This demonstrates practical DevOps troubleshooting and recovery of a
failed cloud deployment pipeline.

## Security and Secret Management

Sensitive information is not committed to Git.

The repository ignores local Vercel and environment configuration:

``` text
.env
.env.*
.vercel/
```

Deployment credentials are stored in GitHub repository secrets.

No Vercel token, password, API key, or other deployment credential is
included in the source code.

## Protected Branches and GitHub Rulesets

The repository uses protected `main` and `develop` branches.

### Recommended `main` ruleset

Target:

``` text
main
```

Enable:

-   Active enforcement
-   Restrict deletions
-   Require pull request before merging
-   Require at least 1 approval
-   Require status checks to pass
-   Block force pushes

### Recommended `develop` ruleset

Target:

``` text
develop
```

Enable:

-   Active enforcement
-   Restrict deletions
-   Require pull request before merging
-   Require at least 1 approval
-   Require status checks to pass
-   Block force pushes

Feature and fix branches remain available for normal development.

## Merge Conflict Demonstration

Merge-conflict handling is part of the collaboration workflow.

When a conflict occurs, the team follows this process:

``` bash
git checkout develop
git pull origin develop

git checkout <feature-branch>
git merge develop
```

Inspect conflicted files:

``` bash
git status
```

Resolve conflict markers:

``` text
<<<<<<<
=======
>>>>>>>
```

After resolving:

``` bash
git add .
git commit -m "fix: resolve merge conflict with develop"
git push origin <feature-branch>
```

The pull request is then rechecked through CI and peer review.

> **Evidence:** Add the actual GitHub pull request/commit reference or
> screenshots of the team's real merge-conflict demonstration here
> before final submission if the lecturer requires conflict evidence.

## Meaningful Commit History

The project uses meaningful commits describing the purpose of each
change.

Examples from the repository workflow include:

``` text
chore: initialize unit converter project
chore: configure project tooling and tests
feat: expand conversion engine and validation
feat: build interactive converter interface
ci: add GitHub Actions quality pipeline
ci: add Vercel deployment pipeline
docs: add deployment and CI/CD documentation
chore: ignore Vercel local configuration
ci: update Vercel deployment action
```

This commit style makes project history easier to understand and
demonstrates structured collaboration.

## Pull Request and Code Review Evidence

The repository includes collaborative pull requests for:

-   Conversion engine development
-   Converter UI development
-   CI pipeline development
-   Deployment pipeline development
-   Deployment documentation
-   Vercel configuration troubleshooting
-   Vercel deployment action update
-   Release promotion from `develop` to `main`

Peer review was performed before the relevant merges.

## Release Process

The final release process is:

``` text
1. Complete development on feature/fix branches
              ↓
2. Pull Request → develop
              ↓
3. Peer review + CI
              ↓
4. Merge into develop
              ↓
5. Local verification
              ↓
6. Release Pull Request → main
              ↓
7. Peer review + CI
              ↓
8. Merge into main
              ↓
9. GitHub Actions deployment
              ↓
10. Vercel production
              ↓
11. Verify live application
```

## Verification Checklist

### Repository

-   [x] Public GitHub repository
-   [x] `main` production branch
-   [x] `develop` integration branch
-   [x] Feature branches used
-   [x] Fix branches used
-   [x] Documentation branch used
-   [x] Meaningful commits
-   [x] Pull requests
-   [x] Peer code reviews
-   [x] Release pull request
-   [x] Protected branch rulesets
-   [ ] Final merge-conflict evidence added, if required

### Team

-   [x] Limashi Lalithya --- ITBNM-2211-0209
-   [x] Chandika Kavindu (RMCK Rathnayake) --- ITBNM-2211-0182
-   [x] Individual roles documented
-   [x] Individual contributions documented

### Application

-   [x] Length conversion
-   [x] Weight conversion
-   [x] Temperature conversion
-   [x] Input validation
-   [x] Unit swapping
-   [x] Conversion history
-   [x] LocalStorage persistence
-   [x] Responsive interface

### CI/CD

-   [x] GitHub Actions CI workflow
-   [x] Automated unit tests
-   [x] ESLint checks
-   [x] Production build verification
-   [x] Vercel deployment workflow
-   [x] Vercel authentication configured through secrets
-   [x] Production deployment successful
-   [x] Live production URL verified

### Documentation

-   [x] Project overview
-   [x] Team information
-   [x] Student IDs
-   [x] Roles
-   [x] Features
-   [x] Technology stack
-   [x] Project structure
-   [x] Branch strategy
-   [x] Git workflow
-   [x] CI documentation
-   [x] CD documentation
-   [x] Vercel deployment
-   [x] Security and secrets
-   [x] Troubleshooting
-   [x] Merge conflict procedure
-   [x] Release process
-   [x] Verification checklist

## Assignment Alignment

This project demonstrates the key requirements of an Advanced Git &
DevOps Team Collaboration assignment:

-   Public GitHub repository
-   Two-member team
-   Clearly assigned technical roles
-   Git branching strategy
-   Meaningful commits
-   Feature development branches
-   Pull requests
-   Peer code reviews
-   `develop` integration branch
-   `main` production branch
-   Protected branches
-   GitHub Actions CI
-   Automated tests
-   ESLint validation
-   Production build verification
-   Vercel continuous deployment
-   Live production application
-   Deployment troubleshooting
-   Technical documentation
-   Collaborative Git workflow

## Final Submission

**GitHub Repository:**

https://github.com/LimashiLalithya/unit-converter-devops-assignment

**Live Production Application:**

https://unit-converter-devops-assignment.vercel.app/

The LMS submission should use the GitHub repository URL according to the
assignment submission requirement.

## License

This project was developed for academic purposes as part of the Advanced
Git & DevOps Team Collaboration assignment.
