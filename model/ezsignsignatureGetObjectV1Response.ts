/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign application.
 *
 * The version of the OpenAPI document: 1.0.30
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { CommonResponseObjDebug } from './commonResponseObjDebug';
import { CommonResponseObjDebugPayload } from './commonResponseObjDebugPayload';
import { CommonResponse } from './commonResponse';


/**
 * Response for the /1/object/ezsignsignature/getObject API Request
 */
export interface EzsignsignatureGetObjectV1Response { 
    /**
     * Payload for the /1/object/ezsignsignature/getObject API Request
     */
    mPayload: object;
    objDebugPayload?: CommonResponseObjDebugPayload;
    objDebug?: CommonResponseObjDebug;
}

