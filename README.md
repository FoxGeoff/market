# Market

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.6.

## Project introduction

1. code ref: <https://github.com/shaheershukur/Market-Web-Application>
2. video ref (Schematics): <https://www.youtube.com/watch?v=M5YSPas3qFo>
3. Online ref (Schematics):<https://tomastrajan.medium.com/total-guide-to-custom-angular-schematics-5c50cf90cdb4>
4. Online code ref: <https://github.com/tomastrajan/angular-ngrx-material-starter>

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

### Task: Add an Angular Service

1. file: app.service.ts
2. Check: httpClient is imported in app.module.ts
3. Check: Cross site error (CORS)
4. On Server backend run 'npm i cors'

### Task: Style the card

```html
<mat-card class="dashboard-card" [style.background-image]="getImage(card.imageName)">
```

## Kanband Task: Stylized custom notification in Angular [#4] | Snackbar component of Material library | Multi-color

1. Video Ref: <https://www.youtube.com/watch?v=gO8rL5iXk-Y>

### Task: Add Snackbar Notification

...

## Kanban Task: Add MongoDB database

1. Video Ref: <https://www.youtube.com/watch?v=u76N3HFTBX8>
2. Use app Mongodb Compass to connect to DB
3. Using Compass create: DB: market and Collection: DEALS
4. Import Data into deals collection
5. Add folder market-db/insert_deals_ref.json

```json
[
  {
    "imageName": "food1",
    "title": "10% off with coupon",
    "handsetCols":0,
    "handsetRows":0,
    "webCols": 0,
    "webRows": 0
  },
  {
    "imageName": "food2",
    "title": "Flash Sale on Food",
    "handsetCols":2,
    "handsetRows":1,
    "webCols": 2,
    "webRows": 1
  },
  {
    "imageName": "food3",
    "title": "5% discount for delivery",
    "handsetCols":2,
    "handsetRows":1,
    "webCols": 2,
    "webRows": 1
  },
  {
    "imageName": "food4",
    "title": "$5 Coupon use '5off' code",
    "handsetCols":2,
    "handsetRows":1,
    "webCols": 2,
    "webRows": 1
  }
]
```

Task: Update the 'routes/deals.js' code

1. Create DAL: "market-service\public\javascripts\DbAbstractionLayer.js"
2. Run 'npm i mongodb' @ DAL path

Task: Install MongoDB Community Server

Task: Setup MongoDb enviroment path

1. Get path: 'C:\Program Files\MongoDB\Server\6.0\bin'
2. Edit system environment variable and add to 'path'
3. Add to PATH the new MonogoDB address
4. Default: 'C:\data\db'
5. Type 'mongod -version' in cmd @ c:uses/foxge/mongod -version
6. Type 'mongod' to start demon ( cmd win + R)
7. check in Compass: 'mongodb://localhost:27017'

## Market App: Angular => Express => MongoDB DONE

## KanBan Task: Stylized custom notification in Angular [#4] | Snackbar component of Material library | Multi-color

1. Video Ref. <https://www.youtube.com/watch?v=gO8rL5iXk-Y>
2. Import the Material snackbar module

### Task: Add: notification service

### Task: Consume "SnackBar service"

1.TBD

### Task: Dark Theme

1. Video Ref: <https://www.youtube.com/watch?v=r6Ygw9L55zg>
2. TBD

## Kanban Task: Add methods - List, Delete, Edit, Add for DEALS

1. TBD

## Kanban Task: HTTP Interceptor + Material Progress Loader

1. Video Ref <https://www.youtube.com/watch?v=o12iI18l1wI>
2. Add mat progress bar

### Task: Add http Intercepter

1. Add loader Service File
2. Add intercepter Service File

```Typescript
//interceptor.service
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, Observable } from 'rxjs';
import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(public loaderService: LoaderService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.isloading.next(true);

    return next.handle(req).pipe(
      finalize(
        () => {
          this.loaderService.isloading.next(false);
        }
      )
    )
  }
}

//app.module.ts
 ...
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}
  ],
  ...

//loader.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  public isloading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }
}
```

## Kanban Task: CRUD

```html
    Create (POST) - Make something
    Read (GET)- Get something
    Update (PUT) - Change something
    Delete (DELETE)- Remove something
```
