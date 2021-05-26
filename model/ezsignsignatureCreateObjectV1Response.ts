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
import { CommonResponseObjDebug } from './commonResponseObjDebug';
import { CommonResponseObjDebugPayload } from './commonResponseObjDebugPayload';
import { EzsignsignatureCreateObjectV1ResponseMPayload } from './ezsignsignatureCreateObjectV1ResponseMPayload';
import { CommonResponse } from './commonResponse';


/**
 * Response for the /1/object/ezsignsignature/createObject API Request
 */
export interface EzsignsignatureCreateObjectV1Response { 
    mPayload: EzsignsignatureCreateObjectV1ResponseMPayload;
    objDebugPayload?: CommonResponseObjDebugPayload;
    objDebug?: CommonResponseObjDebug;
}

