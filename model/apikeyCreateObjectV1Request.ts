/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.43
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { ApikeyRequestCompound } from './apikeyRequestCompound';
import { ApikeyRequest } from './apikeyRequest';


/**
 * Request for the /1/object/apikey/createObject API Request
 */
export interface ApikeyCreateObjectV1Request { 
    objApikey?: ApikeyRequest;
    objApikeyCompound?: ApikeyRequestCompound;
}

