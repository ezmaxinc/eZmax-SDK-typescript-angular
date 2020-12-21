/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign application.  We provide SDKs for customers. They are generated using OpenAPI codegen, we encourage customers to use them as we also provide samples for them.  You can choose to build your own implementation manually or can use any compatible OpenAPI 3.0 generator like Swagger Codegen, OpenAPI codegen or any commercial generators.  If you need helping understanding how to use this API, don\'t waste too much time looking for it. Contact support-api@ezmax.ca, we\'re here to help. We are developpers so we know programmers don\'t like bad documentation. If you don\'t find what you need in the documentation, let us know, we\'ll improve it and put you rapidly up on track.
 *
 * The version of the OpenAPI document: 1.0.23
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * Payload for the /1/object/activesession/getCurrent API Request
 */
export interface ActivesessionGetCurrentV1ResponseMPayload { 
    /**
     * The customer code specific to the client in which the API request is being made
     */
    sCustomerCode: string;
    /**
     * The type of session used for the API request call
     */
    eActivesessionSessiontype: ActivesessionGetCurrentV1ResponseMPayload.EActivesessionSessiontypeEnum;
    /**
     * The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
     */
    fkiLanguageID: number;
    /**
     * The name of the active Company in the current language
     */
    sCompanyNameX: string;
    /**
     * The name of the active Department in the current language
     */
    sDepartmentNameX: string;
    /**
     * An Array of Registered modules.  These are the modules that are Licensed to be used by the User or the API Key.
     */
    a_RegisteredModules: Array<string>;
    /**
     * An array of permissions granted to the user or api key
     */
    a_Permissions: Array<number>;
}
export namespace ActivesessionGetCurrentV1ResponseMPayload {
    export type EActivesessionSessiontypeEnum = 'Normal';
    export const EActivesessionSessiontypeEnum = {
        Normal: 'Normal' as EActivesessionSessiontypeEnum
    };
}


