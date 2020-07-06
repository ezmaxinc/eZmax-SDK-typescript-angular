export * from './activesession.service';
import { ActivesessionService } from './activesession.service';
export * from './ezsigndocument.service';
import { EzsigndocumentService } from './ezsigndocument.service';
export * from './ezsignfolder.service';
import { EzsignfolderService } from './ezsignfolder.service';
export * from './ezsignfoldersignerassociation.service';
import { EzsignfoldersignerassociationService } from './ezsignfoldersignerassociation.service';
export const APIS = [ActivesessionService, EzsigndocumentService, EzsignfolderService, EzsignfoldersignerassociationService];
