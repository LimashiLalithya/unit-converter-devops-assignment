# Unit Converter

A web-based Unit Converter application that supports length, weight, and
temperature conversions.

## Features

-   Length conversion
-   Weight conversion
-   Temperature conversion
-   Real-time conversion
-   Input validation
-   Unit swapping
-   Conversion history
-   LocalStorage persistence
-   Responsive and accessible user interface

## Technology Stack

-   HTML5
-   CSS3
-   JavaScript (ES Modules)
-   Vite
-   Vitest
-   ESLint
-   GitHub Actions
-   Vercel

## Local Development

### Install Dependencies

``` bash
npm ci
```

### Run Development Server

``` bash
npm run dev
```

The application can then be accessed through the local Vite development
URL.

## Quality Checks

The project uses automated quality checks to validate code before
changes are merged into the `develop` branch.

### Run Tests

``` bash
npm test
```

### Run ESLint

``` bash
npm run lint
```

### Build the Application

``` bash
npm run build
```

### Run All Quality Checks Locally

``` bash
npm test && npm run lint && npm run build
```

## CI/CD Pipeline

GitHub Actions is used for continuous integration and automated project
quality checks.

The workflow is located at:

``` text
.github/workflows/ci.yml
```

The CI pipeline performs the following steps:

1.  Checks out the repository.
2.  Sets up Node.js 20.
3.  Installs dependencies using `npm ci`.
4.  Runs the Vitest test suite.
5.  Runs ESLint.
6.  Builds the production application using Vite.

### CI Triggers

The workflow runs on:

-   Pushes to `develop`
-   Pushes to feature branches
-   Pull requests targeting `develop`

All CI checks successfully passed for the implemented pipeline.

## Deployment

The application is deployed using Vercel.

### Vercel Deployment

The Vercel deployment project is available here:

[**Vercel Deployment
Project**](https://vercel.com/assigment-team/unit-converter-devops-assignment/B6HrrAJFUo5fKcmf7d2zoTjuSK9G)

### Production Deployment URL

The deployed application is available at:

[**unit-converter-devops-assignment-48c0xwqrw-assigment-team.vercel.app**](https://unit-converter-devops-assignment-48c0xwqrw-assigment-team.vercel.app)

### Production Domain

The configured Vercel domain is:

[**unit-converter-devops-assignment.vercel.app**](https://unit-converter-devops-assignment.vercel.app/)

### Speed Insights

Vercel Speed Insights is available from the project dashboard:

[**Vercel Speed
Insights**](https://vercel.com/assigment-team/unit-converter-devops-assignment/speed-insights)

### Build Configuration

The application uses Vite for production builds.

Build command:

``` bash
npm run build
```

Output directory:

``` text
dist
```

## Git Repository

The source code is hosted on GitHub:

[**GitHub
Repository**](https://github.com/LimashiLalithya/unit-converter-devops-assignment.git)

## Git Branching and Pull Request Workflow

The project follows a feature-branch workflow.

Typical workflow:

``` text
develop
   │
   ├── feature/conversion-engine
   │
   ├── feature/converter-ui
   │
   ├── feature/ci-pipeline
   │
   └── docs/deployment-cicd
```

Changes are developed on separate branches and submitted through pull
requests targeting `develop`.

Before merging a pull request:

-   Automated CI checks must pass.
-   The changes are reviewed by another team member.
-   Merge conflicts must be resolved.
-   The pull request is then merged into `develop`.

## Verification

The following checks have been successfully completed:

-   `npm test`
-   `npm run lint`
-   `npm run build`
-   GitHub Actions CI pipeline
-   Vercel deployment
-   Manual browser verification of length, weight, and temperature
    conversions

## Project Structure

``` text
unit-converter-devops-assignment/
├── .github/
│   └── workflows/
│       └── ci.yml
├── src/
│   ├── scripts/
│   │   ├── __tests__/
│   │   │   └── converter.test.js
│   │   ├── app.js
│   │   └── converter.js
│   ├── styles/
│   │   └── style.css
│   └── index.html
├── eslint.config.js
├── package.json
├── package-lock.json
└── README.md
```

## Assignment

This project demonstrates Git collaboration, feature branching, pull
requests, code review, automated testing, linting, continuous
integration, and production deployment as part of the Advanced Git &
DevOps Team Collaboration assignment.