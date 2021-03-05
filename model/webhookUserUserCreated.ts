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
import { UserResponse } from './userResponse';
import { AttemptResponse } from './attemptResponse';
import { WebhookUserUserCreatedAllOf } from './webhookUserUserCreatedAllOf';
import { WebhookResponse } from './webhookResponse';
import { CommonWebhook } from './commonWebhook';


/**
 * This is the base Webhook object
 */
export interface WebhookUserUserCreated { 
    objUser: UserResponse;
    objWebhook: WebhookResponse;
    /**
     * An array containing details of previous attempts that were made to deliver the message. The array is empty if it\'s the first attempt.
     */
    a_objAttempt: Array<AttemptResponse>;
}

