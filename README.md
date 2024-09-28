# MicroApp Library Boilerplate

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
Commands to build and run test cases for both the frontend and backend are configured in `package.json`.

## Running the Project

To run the project, use the following commands:

### Build for Package
- **Frontend library**: `babel views-library --out-dir views-dist && node cli.js`
- **Backend library**: `mvn clean install -Dspring.profiles.active=prod`

### Start Development Server
- **Frontend Library**: `npm run start:library:dev`
- **Frontend Library Local Publish**: `npm run local:publish`
- **Backend Library**: Test case-driven development.

## Configuration in Your Project

### Frontend
After running the Frontend Library Local Publish, run:

```sh
npm link microapp-common@1.0.0
```
Then, import and use it like this:
```javascript
import { HelloWorld } from 'microapp-common';
```

import { HelloWorld }  from 'microapp-common';

like above and use it 

### Backend
Add this dependency to your `pom.xml` file:

```xml
<dependency>
    <groupId>com.service-library</groupId>
    <artifactId>microapp-common</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <scope>compile</scope>
</dependency>
```


## Rules

### Folder Naming Conventions

```bash
root
├── service-library
│   ├── main
│   │   ├── config
│   │   ├── controllers
│   │   ├── services
│   │   ├── models
│   │   └── utils
│   └── test
├── views-library (all components, pages, and utils belonging to the common library should be here)
│   ├── components
│   ├── utils
│   ├── pages
│   ├── contexts
│   └── test
├── views-dev (in views-dev, the views-library components and functions can be implemented for development purposes)
│   ├── index.html
│   ├── index.js

```

### Test Files
- **Backend Library**: Tests should be written in the `service/test` folder.
- **Frontend Library**: Tests should be written in the `views-test` folder.

This structure ensures that your project remains organized and adheres to the specified conventions. Let me know if you need any more details or further customization!


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
