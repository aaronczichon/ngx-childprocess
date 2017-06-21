# ngx-childprocess

Based on the `ngx-electron` package this wraps the child_process node API for Angular applications which are running inside an electron app

## Installation

`ngx-childprocess` can be installed easily using either `yarn` or `npm` commands in the scope of an angular project.

```
$ yarn add ngx-childprocess --save
# or
$ npm install ngx-childprocess --save
```

`ngx-childprocess` is exposing a module called `NgxChildProcessModule` which needs to be imported in your `AppModule`.

``` typescript
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgxChildProcessModule} from 'ngx-childprocess';
import {AppComponent} from './app.component';
 
@NgModule({
    declarations: [],
    imports: [
      BrowserModule,
      NgxChildProcessModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
 
}
```

Once the module has been imported, you can easily use angular DI to ask for `ChildProcessService`.

``` typescript
import {Component} from '@angular/core';
import {ChildProcessService} from 'ngx-childprocess';
 
@Component({
  selector: 'my-app',
  templateUrl: 'app.html'
})
export class AppComponent {
 
    constructor(private _childProcessService: ChildProcessService) { }
}
```
