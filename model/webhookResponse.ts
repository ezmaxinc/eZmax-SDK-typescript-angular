/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign application.  We provide SDKs for customers. They are generated using OpenAPI codegen, we encourage customers to use them as we also provide samples for them.  You can choose to build your own implementation manually or can use any compatible OpenAPI 3.0 generator like Swagger Codegen, OpenAPI codegen or any commercial generators.  If you need helping understanding how to use this API, don\'t waste too much time looking for it. Contact support-api@ezmax.ca, we\'re here to help. We are developpers so we know programmers don\'t like bad documentation. If you don\'t find what you need in the documentation, let us know, we\'ll improve it and put you rapidly up on track.
 *
 * The version of the OpenAPI document: 1.0.8
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * A webhook object
 */
export interface WebhookResponse { 
    /**
     * The Webhook ID. This value is visible in the admin interface.
     */
    pkiWebhookID: number;
    /**
     * The Module generating the Event.
     */
    eWebhookModule: WebhookResponse.EWebhookModuleEnum;
    /**
     * This Ezsign Event. This property will be set only if the Module is \"Ezsign\".
     */
    eWebhookEzsignevent?: WebhookResponse.EWebhookEzsigneventEnum;
    /**
     * The Customer Code in which the event was generated
     */
    pksCustomerCode: string;
    /**
     * The url being called
     */
    sWebhookUrl: string;
    /**
     * The email that will receive the webhook in case all attempts fail.
     */
    sWebhookEmailfailed: string;
}
export namespace WebhookResponse {
    export type EWebhookModuleEnum = 'Ezsign';
    export const EWebhookModuleEnum = {
        Ezsign: 'Ezsign' as EWebhookModuleEnum
    };
    export type EWebhookEzsigneventEnum = 'DocumentCompleted' | 'FolderCompleted';
    export const EWebhookEzsigneventEnum = {
        DocumentCompleted: 'DocumentCompleted' as EWebhookEzsigneventEnum,
        FolderCompleted: 'FolderCompleted' as EWebhookEzsigneventEnum
    };
}


