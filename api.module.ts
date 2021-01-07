import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';

import { ModuleUserService } from './api/moduleUser.service';
import { ObjectActivesessionService } from './api/objectActivesession.service';
import { ObjectApikeyService } from './api/objectApikey.service';
import { ObjectEzsigndocumentService } from './api/objectEzsigndocument.service';
import { ObjectEzsignfolderService } from './api/objectEzsignfolder.service';
import { ObjectEzsignfoldersignerassociationService } from './api/objectEzsignfoldersignerassociation.service';
import { ObjectEzsignsignatureService } from './api/objectEzsignsignature.service';
import { ObjectFranchisebrokerService } from './api/objectFranchisebroker.service';
import { ObjectFranchiseofficeService } from './api/objectFranchiseoffice.service';
import { ObjectFranchisereferalincomeService } from './api/objectFranchisereferalincome.service';
import { ObjectPeriodService } from './api/objectPeriod.service';

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
