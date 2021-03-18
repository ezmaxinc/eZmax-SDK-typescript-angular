/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.37
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
    /**
     * The unique ID of the User
     */
    fkiUserID: number;
    /**
     * The unique ID of the Apikey
     */
    fkiApikeyID: number;
}
export namespace ActivesessionGetCurrentV1ResponseMPayload {
    export type EActivesessionSessiontypeEnum = 'Normal';
    export const EActivesessionSessiontypeEnum = {
        Normal: 'Normal' as EActivesessionSessiontypeEnum
    };
}


