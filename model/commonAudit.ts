/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.44
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * Gives informations about the user that created the object and the last user to have modified it.  If the object was never modified after creation, both Created and Modified informations will be the same.  Apikey details will only be provided if the changes were made by an API key.  
 */
export interface CommonAudit { 
    /**
     * The unique ID of the User
     */
    fkiUserIDCreated: number;
    /**
     * The unique ID of the User
     */
    fkiUserIDModified: number;
    /**
     * The unique ID of the Apikey
     */
    fkiApikeyIDCreated?: number;
    /**
     * The unique ID of the Apikey
     */
    fkiApikeyIDModified?: number;
    /**
     * Represent a Date Time. The timezone is the one configured in the User\'s profile.
     */
    dtCreatedDate: string;
    /**
     * Represent a Date Time. The timezone is the one configured in the User\'s profile.
     */
    dtModifiedDate: string;
}

