/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.44
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * Request for the /1/object/ezsignfolder/{pkiEzsignfolderID}/send API Request
 */
export interface EzsignfolderSendV1Request { 
    /**
     * A custom text message that will be added to the email sent to signatories inviting them to sign.  You can send an empty string and only the generic message will be sent.
     */
    tExtraMessage: string;
}

