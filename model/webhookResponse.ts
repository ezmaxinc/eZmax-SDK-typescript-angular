/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.43
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
     * The customer code assigned to your account
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
    /**
     * This Management Event. This property will be set only if the Module is \"Management\".
     */
    eWebhookManagementevent?: WebhookResponse.EWebhookManagementeventEnum;
}
export namespace WebhookResponse {
    export type EWebhookModuleEnum = 'Ezsign' | 'Management';
    export const EWebhookModuleEnum = {
        Ezsign: 'Ezsign' as EWebhookModuleEnum,
        Management: 'Management' as EWebhookModuleEnum
    };
    export type EWebhookEzsigneventEnum = 'DocumentCompleted' | 'FolderCompleted';
    export const EWebhookEzsigneventEnum = {
        DocumentCompleted: 'DocumentCompleted' as EWebhookEzsigneventEnum,
        FolderCompleted: 'FolderCompleted' as EWebhookEzsigneventEnum
    };
    export type EWebhookManagementeventEnum = 'UserCreated';
    export const EWebhookManagementeventEnum = {
        UserCreated: 'UserCreated' as EWebhookManagementeventEnum
    };
}


