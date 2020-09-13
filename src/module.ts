import { ModuleWithProviders, NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { ResourceRegistry } from "./resource/resource-registry";


/*
 * Angular module declaration
 */
@NgModule({
    imports: [
        HttpClientModule,
    ],
    exports: [],
    declarations: [],
    providers: [/* declare in `forRoot()` */],
})
export class NgxResourceFactoryModule {

    static forRoot(): ModuleWithProviders<NgxResourceFactoryModule> {
        return {
            ngModule: NgxResourceFactoryModule,
            providers: [
                ResourceRegistry,
            ]
        };
    }

}
