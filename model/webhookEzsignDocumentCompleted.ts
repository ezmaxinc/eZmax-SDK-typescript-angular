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
import { AttemptResponse } from './attemptResponse';
import { EzsigndocumentResponse } from './ezsigndocumentResponse';
import { WebhookEzsignDocumentCompletedAllOf } from './webhookEzsignDocumentCompletedAllOf';
import { WebhookResponse } from './webhookResponse';
import { CommonWebhook } from './commonWebhook';


/**
 * This is the base Webhook object
 */
export interface WebhookEzsignDocumentCompleted { 
    objEzsigndocument: EzsigndocumentResponse;
    objWebhook: WebhookResponse;
    /**
     * An array containing details of previous attempts that were made to deliver the message. The array is empty if it\'s the first attempt.
     */
    a_objAttempt: Array<AttemptResponse>;
}

