# MicroApp Common LIB Boilerplate

This is part of MicroApp Suites, a common library boilerplate designed to store reusable code for multiple microapps. To avoid duplication, the common library can include shared Java classes, models, functions, interfaces, and React components.

## Use Case
A team of developers is working on multiple microapps for an enterprise solution. To ensure consistency and avoid code duplication, they use the common library from MicroApp Suites. This library contains shared Java classes, models, functions, interfaces, and React components, allowing the team to efficiently reuse code across different microapps, reducing development time and maintaining uniformity.


## Technology
This boilerplate uses Create ReactJS with Webpack for building the frontend and Spring Boot with Maven for the backend. It is customized for simplicity, with ESLint rules for writing code. 

### Environment Variables
- **Frontend**: Uses `.env` files for environment variables.
- **Backend**: Uses default Spring Boot configuration.

The environment variables for the frontend and backend can be separated within the application.

### Development and Production
Commands to build and run test cases for both the frontend and backend are configured in `package.json`. Module aliasing is added for the frontend to ensure consistent imports.


## Rules

### Folder Naming Conventions

```bash
root
├── service-lib
│   ├── main
│   │   ├── config
│   │   ├── controllers
│   │   ├── services
│   │   ├── models
│   │   └── utils
│   └── test
├── views-lib
│   ├── components
│   ├── utils
│   ├── pages
│   ├── contexts
│   └── test

```

### Test Files
- **Backend**: Tests should be written in the `service/test` folder.
- **Frontend**: Tests should be written in the `views/test` folder.

This structure ensures that your project remains organized and adheres to the specified conventions. Let me know if you need any more details or further customization!

## Running the Project

To run the project, use the following commands:

### Build for Production
- **Frontend**: `npm run build:react:prod`
- **Backend**: `mvn clean install -Pprod -Dspring.profiles.active=prod`

### Start Development Server
- **Frontend**: `npm run start:react`
- **Backend**: `mvn clean spring-boot:run -Pdev -Dspring.profiles.active=dev`

### Build for Development
- **Frontend**: `npm run build:react`
- **Backend**: `mvn clean install -Pdev -Dspring.profiles.active=dev`

### Run Tests
- **Backend**: `mvn clean test -X`


## Updating a Repository Created from a Template

Once you create a repository using a template, it will be disconnected from that template. To manually update your repository with changes from the template, follow these steps:

1. **Add the template as a remote:**
```bash
git remote add template [template_url]
```

1. **Fetch all changes from the template:**
```bash
git fetch --all
```

1. **Merge changes from the template’s main branch:**
```bash
git merge template/main --allow-unrelated-histories
```
**Note:** If your project has diverged significantly from the template, you may encounter merge conflicts. These will need to be resolved manually.
