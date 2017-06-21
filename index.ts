import {NgModule} from '@angular/core';
import {ChildProcessService} from './src/childProcessService';
import {ChildProcessServiceRef} from './src/childProcessServiceRef';

export * from './src/childProcessService';
export * from './src/childProcessServiceRef';

@NgModule({
    declarations: [],
    exports: [],
    providers: [{ provide: ChildProcessService, useClass: ChildProcessServiceRef }]
})
export class NgxChildProcessModule {

}
