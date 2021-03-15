/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.35
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { ApikeyResponse } from './apikeyResponse';


/**
 * Payload for the /1/object/apikey/createObject API Request
 */
export interface ApikeyCreateObjectV1ResponseMPayload { 
    a_objApikey: Array<ApikeyResponse>;
}

