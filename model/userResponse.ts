/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.33
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { UserResponseAllOf } from './userResponseAllOf';
import { CommonAudit } from './commonAudit';
import { FieldEUserType } from './fieldEUserType';


/**
 * A User Object
 */
export interface UserResponse { 
    /**
     * The unique ID of the User
     */
    pkiUserID: number;
    /**
     * The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
     */
    fkiLanguageID: number;
    eUserType: FieldEUserType;
    /**
     * The First name of the user
     */
    sUserFirstname: string;
    /**
     * The Last name of the user
     */
    sUserLastname: string;
    /**
     * The Login name of the User.
     */
    sUserLoginname: string;
    objAudit: CommonAudit;
}

