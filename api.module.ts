import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';

import { ActivesessionService } from './api/activesession.service';
import { EzsigndocumentService } from './api/ezsigndocument.service';
import { EzsignfolderService } from './api/ezsignfolder.service';
import { EzsignfoldersignerassociationService } from './api/ezsignfoldersignerassociation.service';
import { EzsignsignatureService } from './api/ezsignsignature.service';
import { FranchisebrokerService } from './api/franchisebroker.service';
import { FranchiseofficeService } from './api/franchiseoffice.service';
import { FranchisereferalincomeService } from './api/franchisereferalincome.service';
import { PeriodService } from './api/period.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: []
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders<ApiModule> {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
