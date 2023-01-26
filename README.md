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
4. Run 'market-service/npm start app.js'
5. Open 'localhost:3000'
6. Run 'npm install --save-dev nodemon'
7. Run 'nodemon .bin/www' OR 'npm run n-start'

```typescript
[nodemon] starting `node ./bin/www .bin/www`
```

### Task: Add route /deals (app.js)

1. change code: app.use('/deals', dealsRouter); //app.js
2. change code: var dealsRouter = require('./routes/deals'); //app.js
3. change file: routes/users.js > routes/deals.js
4. [short cut F2 to rename file]

### Task: Send data from server (JSON OBJ)

1. Update deals.js

```Javascript
/* GET deals listing. */
router.get('/', function(req, res, next) {
  let jsonResponce = {
    "handsetCards": [
      { title: 'Card 1', cols: 2, rows: 1 },
      { title: 'Card 2', cols: 2, rows: 1 },
      { title: 'Card 3', cols: 2, rows: 1 },
      { title: 'Card 4', cols: 2, rows: 1 }
    ],
    "webCards": [
      { title: 'Card 1', cols: 2, rows: 1 },
      { title: 'Card 2', cols: 1, rows: 1 },
      { title: 'Card 3', cols: 1, rows: 2 },
      { title: 'Card 4', cols: 1, rows: 1 }
    ]
  };
  res.json(jsonResponce);
});
```

```json
{
  "handsetCards": [
    { "title": "Card 1", "cols": 2, "rows": 1 },
    { "title": "Card 2", "cols": 2, "rows": 1 },
    { "title": "Card 3", "cols": 2, "rows": 1 },
    { "title": "Card 4", "cols": 2, "rows": 1 }
  ],
  "webCards": [
    { "title": "Card 1", "cols": 2, "rows": 1 },
    { "title": "Card 2", "cols": 1, "rows": 1 },
    { "title": "Card 3", "cols": 1, "rows": 2 },
    { "title": "Card 4", "cols": 1, "rows": 1 }
  ]
}
```

```typescript
// home.component.ts

export class HomeComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = [];
  cardForHandset = [];
  cardsForweb = [];

  isHandset: boolean = false;
  isHandsetObserver: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return true;
      }
      return false;
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this.isHandsetObserver.subscribe(currentObserverValue => {
      this.isHandset = currentObserverValue;
      this.loadCards();
    })
  }

  loadCards() {
    this.cards = this.isHandset ? this.cardForHandset : this.cardsForweb
  }
}
```
