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


/**
 * Request for the /1/object/ezsigndocument/{pkiEzsigndocumentID}/applyezsigntemplate API Request
 */
export interface EzsigndocumentApplyEzsigntemplateV1Request { 
    /**
     * The unique ID of the Ezsigndocument
     */
    fkiEzsigntemplateID: number;
    a_sEzsigntemplatesigner: Array<string>;
    a_pkiEzsignfoldersignerassociationID: Array<number>;
}

