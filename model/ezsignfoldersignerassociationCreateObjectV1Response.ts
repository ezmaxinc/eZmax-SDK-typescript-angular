/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.31
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { CommonResponseObjDebug } from './commonResponseObjDebug';
import { CommonResponseObjDebugPayload } from './commonResponseObjDebugPayload';
import { EzsignfoldersignerassociationCreateObjectV1ResponseMPayload } from './ezsignfoldersignerassociationCreateObjectV1ResponseMPayload';
import { CommonResponse } from './commonResponse';


/**
 * Response for the /1/object/ezsignfoldersignerassociation/createObject API Request
 */
export interface EzsignfoldersignerassociationCreateObjectV1Response { 
    mPayload: EzsignfoldersignerassociationCreateObjectV1ResponseMPayload;
    objDebugPayload?: CommonResponseObjDebugPayload;
    objDebug?: CommonResponseObjDebug;
}

