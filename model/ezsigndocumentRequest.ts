/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.46
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * An Ezsigndocument Object
 */
export interface EzsigndocumentRequest { 
    /**
     * Indicates where to look for the document binary content.
     */
    eEzsigndocumentSource: EzsigndocumentRequest.EEzsigndocumentSourceEnum;
    /**
     * Indicates the format of the document.
     */
    eEzsigndocumentFormat: EzsigndocumentRequest.EEzsigndocumentFormatEnum;
    /**
     * The Base64 encoded binary content of the document.  This field is Required when eEzsigndocumentSource = Base64.
     */
    sEzsigndocumentBase64?: string;
    /**
     * A reference to a valid Ezsignfolder.  That value is returned after a successful Ezsignfolder Creation.
     */
    fkiEzsignfolderID: number;
    /**
     * Represent a Date Time. The timezone is the one configured in the User\'s profile.
     */
    dtEzsigndocumentDuedate: string;
    /**
     * The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
     */
    fkiLanguageID: number;
    /**
     * The name of the document that will be presented to Ezsignfoldersignerassociations
     */
    sEzsigndocumentName: string;
}
export namespace EzsigndocumentRequest {
    export type EEzsigndocumentSourceEnum = 'Base64';
    export const EEzsigndocumentSourceEnum = {
        Base64: 'Base64' as EEzsigndocumentSourceEnum
    };
    export type EEzsigndocumentFormatEnum = 'Pdf';
    export const EEzsigndocumentFormatEnum = {
        Pdf: 'Pdf' as EEzsigndocumentFormatEnum
    };
}


