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


/**
 * The signature step of the Ezsigndocument.
 */
export type FieldEEzsigndocumentStep = 'Unsent' | 'Unsigned' | 'PartiallySigned' | 'Completed';

export const FieldEEzsigndocumentStep = {
    Unsent: 'Unsent' as FieldEEzsigndocumentStep,
    Unsigned: 'Unsigned' as FieldEEzsigndocumentStep,
    PartiallySigned: 'PartiallySigned' as FieldEEzsigndocumentStep,
    Completed: 'Completed' as FieldEEzsigndocumentStep
};

