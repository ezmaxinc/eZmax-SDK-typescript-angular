/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.37
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
 * Response for the /1/object/ezsigndocument/{pkiEzsigndocument}/applyEzsigntemplate API Request
 */
export interface EzsigndocumentApplyEzsigntemplateV1Response { 
    objDebugPayload?: CommonResponseObjDebugPayload;
    objDebug?: CommonResponseObjDebug;
}

