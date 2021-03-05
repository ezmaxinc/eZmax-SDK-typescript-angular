/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.32
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { EzsignfolderRequest } from './ezsignfolderRequest';
import { FieldEEzsignfolderSendreminderfrequency } from './fieldEEzsignfolderSendreminderfrequency';
import { EzsignfoldersignerassociationRequest } from './ezsignfoldersignerassociationRequest';


/**
 * An Ezsignfolder Object and children to create a complete structure
 */
export interface EzsignfolderRequestCompound { 
    /**
     * An array of signers that will be invited to sign the Ezsigndocuments
     */
    a_Ezsignfoldersignerassociation: Array<EzsignfoldersignerassociationRequest>;
    /**
     * The unique ID of the Ezsignfoldertype.    This value can be queried by the API and is also visible in the admin interface.    There are two types of Ezsignfoldertype. **User** and **Shared**. **User** can only be seen by the user who created the folder or its assistants. Access to **Shared** folders are configurable for access and email delivery. You should typically choose a **Shared** type here.
     */
    fkiEzsignfoldertypeID: number;
    /**
     * The unique ID of the Ezsigntsarequirement.  Determine if a Time Stamping Authority should add a timestamp on each of the signature. Valid values:  |Value|Description| |-|-| |1|No. TSA Timestamping will requested. This will make all signatures a lot faster since no round-trip to the TSA server will be required. Timestamping will be made using eZsign server\'s time.| |2|Best effort. Timestamping from a Time Stamping Authority will be requested but is not mandatory. In the very improbable case it cannot be completed, the timestamping will be made using eZsign server\'s time. **Additional fee applies**| |3|Mandatory. Timestamping from a Time Stamping Authority will be requested and is mandatory. In the very improbable case it cannot be completed, the signature will fail and the user will be asked to retry. **Additional fee applies**|
     */
    fkiEzsigntsarequirementID: number;
    /**
     * The description of the Ezsign Folder
     */
    sEzsignfolderDescription: string;
    /**
     * Somes extra notes about the eZsign Folder
     */
    tEzsignfolderNote: string;
    eEzsignfolderSendreminderfrequency: FieldEEzsignfolderSendreminderfrequency;
}

