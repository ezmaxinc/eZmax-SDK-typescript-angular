/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign application.  We provide SDKs for customers. They are generated using OpenAPI codegen, we encourage customers to use them as we also provide samples for them.  You can choose to build your own implementation manually or can use any compatible OpenAPI 3.0 generator like Swagger Codegen, OpenAPI codegen or any commercial generators.  If you need helping understanding how to use this API, don\'t waste too much time looking for it. Contact support-api@ezmax.ca, we\'re here to help. We are developpers so we know programmers don\'t like bad documentation. If you don\'t find what you need in the documentation, let us know, we\'ll improve it and put you rapidly up on track.
 *
 * The version of the OpenAPI document: 1.0.12
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
     * The actual file name that will be used when downloading or attaching to an email.
     */
    sEzsigndocumentFilename: string;
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


