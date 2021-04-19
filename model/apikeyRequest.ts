/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.40
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { MultilingualApikeyDescription } from './multilingualApikeyDescription';


/**
 * An Apikey Object
 */
export interface ApikeyRequest { 
    /**
     * The unique ID of the User
     */
    fkiUserID: number;
    objApikeyDescription: MultilingualApikeyDescription;
}

