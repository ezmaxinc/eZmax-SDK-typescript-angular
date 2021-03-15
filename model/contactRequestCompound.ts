/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.33
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { ContactRequestCompoundAllOf } from './contactRequestCompoundAllOf';
import { ContactRequest } from './contactRequest';
import { ContactinformationsRequestCompound } from './contactinformationsRequestCompound';


/**
 * A Contact Object and children to create a complete structure
 */
export interface ContactRequestCompound { 
    objContactinformations: ContactinformationsRequestCompound;
    /**
     * The unique ID of the Contacttitle.  Valid values:  |Value|Description| |-|-| |1|Ms.| |2|Mr.| |4|(Blank)| |5|Me (For Notaries)|
     */
    fkiContacttitleID: number;
    /**
     * The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
     */
    fkiLanguageID: number;
    /**
     * The First name of the contact
     */
    sContactFirstname: string;
    /**
     * The Last name of the contact
     */
    sContactLastname: string;
    /**
     * The Company name of the contact
     */
    sContactCompany: string;
    /**
     * The Birth Date of the contact
     */
    dtContactBirthdate?: string;
}

