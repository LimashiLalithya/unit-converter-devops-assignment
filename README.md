# Unit Converter --- Advanced Git & DevOps Team Collaboration Assignment

[![CI
Pipeline](https://github.com/LimashiLalithya/unit-converter-devops-assignment/actions/workflows/ci.yml/badge.svg)](https://github.com/LimashiLalithya/unit-converter-devops-assignment/actions/workflows/ci.yml)
[![Deploy to
Vercel](https://github.com/LimashiLalithya/unit-converter-devops-assignment/actions/workflows/deploy.yml/badge.svg)](https://github.com/LimashiLalithya/unit-converter-devops-assignment/actions/workflows/deploy.yml)

A web-based Unit Converter application developed for the **Advanced Git
& DevOps Team Collaboration Assignment**. The application provides
accurate, real-time conversions for length, weight, and temperature,
together with validation, unit swapping, conversion history, and
persistent local storage.

## Group Information

  -----------------------------------------------------------------------
  Student                 Student ID              Role
  ----------------------- ----------------------- -----------------------
  **Limashi Lalithya**    **ITBNM-2211-0209**     DevOps Engineer

  **Chandika Kavindu      **ITBNM-2211-0182**     Full-Stack Developer
  (RMCK Rathnayake)**                             
  -----------------------------------------------------------------------

## Project Links

-   **GitHub Repository:**
    https://github.com/LimashiLalithya/unit-converter-devops-assignment
-   **Live Production Deployment:**
    https://unit-converter-devops-assignment.vercel.app/

## Project Description

The Unit Converter is a responsive client-side web application that
allows users to convert values between commonly used units.

The project was developed to demonstrate professional Git collaboration
and DevOps practices, including:

-   Feature-based Git branching
-   Pull requests and peer code reviews
-   Conventional commit messages
-   Continuous Integration with GitHub Actions
-   Automated testing, linting, and production builds
-   Continuous Deployment to Vercel
-   Production release through the `main` branch
-   Documentation and collaborative development

## Features

-   **Length conversion** --- convert between supported length units.
-   **Weight conversion** --- convert between supported weight units.
-   **Temperature conversion** --- convert between Celsius, Fahrenheit,
    and Kelvin.
-   **Real-time conversion** --- update conversion results
    interactively.
-   **Input validation** --- prevent invalid or unusable conversion
    input.
-   **Unit swapping** --- quickly swap source and target units.
-   **Conversion history** --- keep a record of previous conversions.
-   **LocalStorage persistence** --- retain conversion history in the
    browser.
-   **Responsive UI** --- usable on desktop and smaller screens.
-   **Accessible interface** --- clear controls and readable
    presentation.

## Technology Stack

-   HTML5
-   CSS3
-   JavaScript (ES Modules)
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

## Branch Strategy

The project follows a Git Flow-style collaboration model:

``` text
main
│
└── Production / release branch
        ▲
        │ Pull Request
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

-   **`main`** --- production-ready code. Changes are promoted through a
    reviewed pull request and successful CI/deployment checks.
-   **`develop`** --- integration and development branch where completed
    feature work is combined and tested.
-   **`feature/*`** --- individual feature-development branches.
-   **`fix/*`** --- branches used to correct defects or
    deployment/configuration problems.
-   **`docs/*`** --- branches used for documentation changes.

Developers avoid direct development on `main`. Feature/fix/documentation
work is pushed to its own branch, reviewed through a pull request, and
merged after the required checks and review are completed.

## Git Collaboration Workflow

The team's normal workflow is:

``` text
Developer
   │
   ▼
Feature / Fix / Docs Branch
   │
   ▼
Pull Request → develop
   │
   ├── Automated CI
   ├── Code Review
   └── Conflict Resolution if required
   │
   ▼
develop
   │
   ▼
Release Pull Request → main
   │
   ▼
main
   │
   ▼
GitHub Actions Deployment
   │
   ▼
Vercel Production
```

### Pull Request Process

1.  Update the local `develop` branch.
2.  Create a dedicated feature, fix, or documentation branch.
3.  Make focused changes using meaningful conventional commits.
4.  Push the branch to GitHub.
5.  Open a pull request into `develop`.
6.  Request a review from the other team member.
7.  Wait for required checks and review approval.
8.  Resolve any merge conflicts.
9.  Merge the approved pull request into `develop`.
10. When the release is ready, create a pull request from `develop` to
    `main`.
11. Merge the release pull request after the final checks.
12. The production deployment workflow runs from `main`.

## Individual Contributions

### Limashi Lalithya --- DevOps Engineer

-   Repository setup and Git workflow configuration.
-   GitHub Actions CI pipeline configuration.
-   Vercel production deployment pipeline configuration.
-   Vercel project linking and deployment configuration.
-   Deployment troubleshooting and recovery.
-   Updated the Vercel GitHub Action from `v25` to `v42` after a
    deployment failure.
-   Managed release integration from `develop` to `main`.
-   Created and maintained feature/fix/documentation branches.
-   Created pull requests and coordinated code reviews.
-   Maintained project-level DevOps documentation.
-   Verified local tests, linting, and production builds.

### Chandika Kavindu (RMCK Rathnayake) --- Full-Stack Developer

-   Implemented the conversion engine for length, weight, and
    temperature.
-   Developed and contributed application functionality through the
    feature-branch workflow.
-   Contributed automated unit tests for conversion functionality.
-   Participated in pull-request review and approval.
-   Contributed to integration and release work through the `develop`
    branch.
-   Participated in deployment verification and collaborative
    troubleshooting.

## CI --- Continuous Integration

The CI workflow is located at:

``` text
.github/workflows/ci.yml
```

The CI pipeline performs:

1.  Checkout repository.
2.  Set up Node.js 20.
3.  Install dependencies with `npm ci`.
4.  Run Vitest unit tests with `npm test`.
5.  Run ESLint with `npm run lint`.
6.  Build the production application with `npm run build`.

### Local Quality Checks

Run the complete local verification sequence:

``` bash
npm ci
npm test
npm run lint
npm run build
```

The project has been verified locally with:

-   Unit tests passing.
-   ESLint passing.
-   Vite production build passing.

## CD --- Continuous Deployment

The deployment workflow is located at:

``` text
.github/workflows/deploy.yml
```

Production deployment is triggered by changes reaching the `main`
branch.

The deployment workflow:

1.  Checks out the repository.
2.  Sets up Node.js.
3.  Installs project dependencies.
4.  Runs automated tests.
5.  Runs ESLint.
6.  Builds the production application.
7.  Deploys the production build to Vercel.

### Production Platform

**Deployment platform:** Vercel

**Production URL:**

https://unit-converter-devops-assignment.vercel.app/

The production deployment has been successfully verified through GitHub
Actions.

## Vercel Deployment Configuration

The project is linked to the Vercel project used by the team.

The deployment workflow uses repository secrets for authentication and
project identification. Sensitive credentials are not stored in the
repository.

Required deployment secrets are configured in GitHub repository
settings:

-   `VERCEL_TOKEN`
-   `VERCEL_ORG_ID`
-   `VERCEL_PROJECT_ID`

> Secret values are intentionally not documented or committed to the
> repository.

## Testing

The project uses **Vitest** for unit testing.

Current automated tests cover:

-   Meters to kilometers.
-   Kilometers to meters.
-   Kilograms to grams.
-   Celsius to Fahrenheit.
-   Celsius to Kelvin.

Run tests with:

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

The project uses Vite for production builds.

Run:

``` bash
npm run build
```

The production build is generated in:

``` text
dist/
```

## Local Development

### Prerequisites

-   Node.js 20 or higher recommended.
-   npm.
-   Git.

### Installation

Clone the repository:

``` bash
git clone https://github.com/LimashiLalithya/unit-converter-devops-assignment.git
```

Move into the project:

``` bash
cd unit-converter-devops-assignment
```

Install dependencies:

``` bash
npm ci
```

### Run Development Server

``` bash
npm run dev
```

Vite will provide a local development URL in the terminal.

### Verify the Application

``` bash
npm test
npm run lint
npm run build
```

## Merge Conflict Demonstration

Merge conflicts are part of the required collaboration workflow for this
assignment.

The team uses the following resolution process when a conflict occurs:

1.  Pull the latest changes from `develop`.
2.  Merge the target branch into the working branch.
3.  Inspect files reported by Git as conflicted.
4.  Review the conflict markers:
    -   `<<<<<<<`
    -   `=======`
    -   `>>>>>>>`
5.  Discuss the correct final implementation with the team.
6.  Remove the conflict markers and keep the correct combined
    implementation.
7.  Stage the resolved files.
8.  Create a meaningful conflict-resolution commit.
9.  Push the branch.
10. Re-run CI and complete the pull-request review.

Example:

``` bash
git checkout develop
git pull origin develop

git checkout <feature-branch>
git merge develop

# Resolve conflicts in the affected files.

git add .
git commit -m "fix: resolve merge conflict with develop"
git push origin <feature-branch>
```

> **Evidence note:** Any screenshot or GitHub pull-request reference
> demonstrating the team's actual conflict and resolution should be
> added to this section before final submission if required by the
> lecturer.

## Deployment Challenge & Resolution

During deployment setup, the team encountered a Vercel deployment
failure in GitHub Actions.

The deployment workflow initially failed during Vercel CLI execution.
The team investigated the linked Vercel project and repository
configuration, verified the project identifiers, refreshed the Vercel
authentication configuration, and updated the Vercel GitHub Action.

The deployment action was updated from:

``` text
amondnet/vercel-action@v25
```

to:

``` text
amondnet/vercel-action@v42
```

After the Vercel token/project configuration was corrected, the workflow
was rerun successfully and the application was deployed to production.

This demonstrates practical troubleshooting of a cloud deployment
pipeline rather than relying only on a local build.

## Security & Secrets

Sensitive deployment credentials are not committed to Git.

The repository `.gitignore` excludes local environment and Vercel
configuration files, including:

``` text
.env
.env.*
.vercel/
```

Vercel authentication is handled through GitHub Actions secrets.

No API keys, passwords, or deployment tokens are stored in the source
code.

## Branch Protection & Rulesets

The production `main` branch is intended to be protected through GitHub
repository rulesets.

Recommended `main` protection:

-   Ruleset status: **Active**
-   Target branch: **main**
-   Require a pull request before merging.
-   Require at least one approval.
-   Dismiss stale approvals when appropriate.
-   Require status checks to pass.
-   Block force pushes.
-   Restrict branch deletion.
-   Allow administrators to bypass only when necessary for
    administration.

Recommended `develop` protection:

-   Ruleset status: **Active**
-   Target branch: **develop**
-   Require pull request before merging where practical.
-   Require CI status checks.
-   Block force pushes.
-   Restrict branch deletion.
-   Keep normal feature development on `feature/*` branches.

The exact ruleset configuration is maintained in GitHub repository
settings.

## Verification Checklist

### Repository

-   [x] Repository is public.
-   [x] `main` branch is the production branch.
-   [x] `develop` branch is the integration branch.
-   [x] Feature/fix/documentation branches were used.
-   [x] Multiple pull requests were created.
-   [x] Peer code review was performed.
-   [x] Both team members have visible contributions.
-   [ ] Final merge-conflict evidence added to this README, if required.

### Application

-   [x] Length conversion.
-   [x] Weight conversion.
-   [x] Temperature conversion.
-   [x] Real-time conversion.
-   [x] Input validation.
-   [x] Unit swapping.
-   [x] Conversion history.
-   [x] LocalStorage persistence.
-   [x] Responsive interface.

### CI/CD

-   [x] `.github/workflows/ci.yml` exists.
-   [x] `.github/workflows/deploy.yml` exists.
-   [x] Automated tests run.
-   [x] ESLint runs.
-   [x] Production build runs.
-   [x] Vercel production deployment succeeds.
-   [x] Production deployment URL is available.
-   [x] CI/CD badges are included in this README.

### Documentation

-   [x] Team member names and student IDs included.
-   [x] Roles included.
-   [x] Project description included.
-   [x] Features documented.
-   [x] Technology stack documented.
-   [x] Branch strategy documented.
-   [x] CI/CD process documented.
-   [x] Deployment URL included.
-   [x] Individual contributions documented.
-   [x] Deployment challenge documented.
-   [x] Setup instructions included.
-   [ ] Final merge-conflict evidence reference added if required.

## Assignment Alignment

This project demonstrates the main requirements of the Advanced Git &
DevOps Team Collaboration assignment:

-   Public GitHub repository.
-   Team member identification.
-   Production-ready `main` branch.
-   Integration `develop` branch.
-   Individual feature branches.
-   Meaningful Git commits.
-   Pull requests.
-   Peer code reviews.
-   GitHub Actions CI.
-   Automated testing and linting.
-   Production build verification.
-   Automated Vercel deployment.
-   Live public deployment.
-   Git collaboration and DevOps troubleshooting.
-   Project documentation.

## Final Submission

The assignment requires submission of the **GitHub repository link
only** through the LMS.

Repository:

https://github.com/LimashiLalithya/unit-converter-devops-assignment

Live application:

https://unit-converter-devops-assignment.vercel.app/

No PDF, Word document, ZIP file, or other project document should be
uploaded to the LMS when following the assignment submission
instructions.

## License

This project was created for academic purposes as part of the Advanced
Git & DevOps Team Collaboration assignment.
