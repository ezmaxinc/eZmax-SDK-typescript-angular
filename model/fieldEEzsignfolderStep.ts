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


/**
 * The signature step of the Ezsignfolder.
 */
export type FieldEEzsignfolderStep = 'Unsent' | 'Sent' | 'PartiallySigned' | 'Expired' | 'Signed' | 'Completed' | 'Archived';

export const FieldEEzsignfolderStep = {
    Unsent: 'Unsent' as FieldEEzsignfolderStep,
    Sent: 'Sent' as FieldEEzsignfolderStep,
    PartiallySigned: 'PartiallySigned' as FieldEEzsignfolderStep,
    Expired: 'Expired' as FieldEEzsignfolderStep,
    Signed: 'Signed' as FieldEEzsignfolderStep,
    Completed: 'Completed' as FieldEEzsignfolderStep,
    Archived: 'Archived' as FieldEEzsignfolderStep
};

