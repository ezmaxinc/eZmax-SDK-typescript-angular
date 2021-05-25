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
import { EzsignfolderRequestCompound } from './ezsignfolderRequestCompound';
import { EzsignfolderRequest } from './ezsignfolderRequest';


/**
 * Request for the /1/object/ezsignfolder/createObject API Request
 */
export interface EzsignfolderCreateObjectV1Request { 
    objEzsignfolder?: EzsignfolderRequest;
    objEzsignfolderCompound?: EzsignfolderRequestCompound;
}

