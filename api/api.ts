export * from './activesession.service';
import { ActivesessionService } from './activesession.service';
export * from './ezsigndocument.service';
import { EzsigndocumentService } from './ezsigndocument.service';
export * from './ezsignfolder.service';
import { EzsignfolderService } from './ezsignfolder.service';
export * from './ezsignfoldersignerassociation.service';
import { EzsignfoldersignerassociationService } from './ezsignfoldersignerassociation.service';
export * from './ezsignsignature.service';
import { EzsignsignatureService } from './ezsignsignature.service';
export * from './franchisereferalincome.service';
import { FranchisereferalincomeService } from './franchisereferalincome.service';
export const APIS = [ActivesessionService, EzsigndocumentService, EzsignfolderService, EzsignfoldersignerassociationService, EzsignsignatureService, FranchisereferalincomeService];
