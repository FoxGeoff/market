# Market

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.6.

## Project introduction

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Task: add Material

1. Run `ng add @angular/material`
2. Test by adding MatButtonModule to the AppModule

### Task: Use Material Schematics

1. Address Form
2. Table
3. Tree
4. Navigation
5. Dashboard
6. Drag and Drop

### Task: Add Schematics - Navigation

1. Run 'ng generate @angular/material:navigation nav'

### Task: Add Schematics - Dashboard

1. Run 'ng g @angular/material:dashboard home'
2. Add routing to Home Page and Search Page

## Kanban Task: Express Server Intergration

1. Video Ref <https://www.youtube.com/watch?v=dT1ID4q57fs>
2. How to 'Microservices'

### Task: Install Express (microservice)

1. Run 'npm i -g express-generator'
2. Run 'express market-service'
3. Run 'cd market-service'and npm install'
4. Run 'market-service/start app.js'
5. Open 'localhost:3000'
6. Run 'npm nodemon'
7. Run 'nodemn app.js'

### Task: Add route /deals (app.js)

1. code: app.use('/deals', dealsRouter); (app.js)
2. code: var dealsRouter = require('./routes/deals');
3. change: routes/users.js > routes/deals.js
