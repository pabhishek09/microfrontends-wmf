# Microfrontends using Webpack's module federation plugin

Webpack's [Module federation plugin] (https://webpack.js.org/concepts/module-federation/) allows to export an app as a remote as a remote bundle which can imported on another apps in runtime.

## Projects

- app-shell (react app which serves as a container)
- remote-app-1 (vuejs app)
- remote-app-2 (react app)

## Running the app locally

This app use yarn workspaces to manage the dependencies of the individual projects

1. Run `yarn` to install dependencies
2. Run `yarn dev` to run in development mode
