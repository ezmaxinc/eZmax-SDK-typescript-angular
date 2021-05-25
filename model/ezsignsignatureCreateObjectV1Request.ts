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
import { EzsignsignatureRequestCompound } from './ezsignsignatureRequestCompound';
import { EzsignsignatureRequest } from './ezsignsignatureRequest';


/**
 * Request for the /1/object/ezsignsignature/createObject API Request
 */
export interface EzsignsignatureCreateObjectV1Request { 
    objEzsignsignature?: EzsignsignatureRequest;
    objEzsignsignatureCompound?: EzsignsignatureRequestCompound;
}

