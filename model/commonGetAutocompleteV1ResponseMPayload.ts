/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.32
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * Generic Autocomplete Response
 */
export interface CommonGetAutocompleteV1ResponseMPayload { 
    /**
     * The Category (ie group) for the dropdown or an empty string if not categorized
     */
    group: string;
    /**
     * The Unique ID of the element
     */
    id: string;
    /**
     * The Description of the element
     */
    option: string;
}

