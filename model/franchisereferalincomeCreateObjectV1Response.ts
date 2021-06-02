/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.45
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { CommonResponseObjDebug } from './commonResponseObjDebug';
import { CommonResponseObjDebugPayload } from './commonResponseObjDebugPayload';
import { FranchisereferalincomeCreateObjectV1ResponseMPayload } from './franchisereferalincomeCreateObjectV1ResponseMPayload';
import { CommonResponse } from './commonResponse';


/**
 * Response for the /1/object/franchisereferalincome/createObject API Request
 */
export interface FranchisereferalincomeCreateObjectV1Response { 
    mPayload: FranchisereferalincomeCreateObjectV1ResponseMPayload;
    objDebugPayload?: CommonResponseObjDebugPayload;
    objDebug?: CommonResponseObjDebug;
}

