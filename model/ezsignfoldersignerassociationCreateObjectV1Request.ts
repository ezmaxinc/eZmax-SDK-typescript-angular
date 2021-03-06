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
import { EzsignfoldersignerassociationRequestCompound } from './ezsignfoldersignerassociationRequestCompound';
import { EzsignfoldersignerassociationRequest } from './ezsignfoldersignerassociationRequest';


/**
 * Request for the /1/object/ezsignfoldersignerassociation/createObject API Request
 */
export interface EzsignfoldersignerassociationCreateObjectV1Request { 
    objEzsignfoldersignerassociation?: EzsignfoldersignerassociationRequest;
    objEzsignfoldersignerassociationCompound?: EzsignfoldersignerassociationRequestCompound;
}

