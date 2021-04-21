/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.42
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * An Attempt object
 */
export interface AttemptResponse { 
    /**
     * Represent a Date Time. The timezone is the one configured in the User\'s profile.
     */
    dtAttemptStart: string;
    /**
     * The Success or Failure message of the attempt when we tried to call the URL to deliver the webhook event.
     */
    sAttemptResult: string;
    /**
     * The number of second it took to process the webhook or get an error
     */
    iAttemptDuration: number;
}

