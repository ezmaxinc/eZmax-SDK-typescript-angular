/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.41
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { CommonResponseObjDebug } from './commonResponseObjDebug';
import { CommonResponseObjDebugPayload } from './commonResponseObjDebugPayload';
import { CommonResponse } from './commonResponse';
import { UserCreateEzsignuserV1ResponseMPayload } from './userCreateEzsignuserV1ResponseMPayload';


/**
 * Response for the /1/module/user/createEzsignuser API Request
 */
export interface UserCreateEzsignuserV1Response { 
    mPayload: UserCreateEzsignuserV1ResponseMPayload;
    objDebugPayload?: CommonResponseObjDebugPayload;
    objDebug?: CommonResponseObjDebug;
}

