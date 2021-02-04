/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign application.  We provide SDKs for customers. They are generated using OpenAPI codegen, we encourage customers to use them as we also provide samples for them.  You can choose to build your own implementation manually or can use any compatible OpenAPI 3.0 generator like Swagger Codegen, OpenAPI codegen or any commercial generators.  If you need helping understanding how to use this API, don\'t waste too much time looking for it. Contact support-api@ezmax.ca, we\'re here to help. We are developpers so we know programmers don\'t like bad documentation. If you don\'t find what you need in the documentation, let us know, we\'ll improve it and put you rapidly up on track.
 *
 * The version of the OpenAPI document: 1.0.28
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { ContactinformationsRequest } from './contactinformationsRequest';
import { AddressRequest } from './addressRequest';
import { WebsiteRequest } from './websiteRequest';
import { PhoneRequest } from './phoneRequest';
import { EmailRequest } from './emailRequest';


/**
 * A Contactinformations Object and children to create a complete structure
 */
export interface ContactinformationsRequestCompound { 
    a_objAddress: Array<AddressRequest>;
    a_objPhone: Array<PhoneRequest>;
    a_objEmail: Array<EmailRequest>;
    a_objWebsite: Array<WebsiteRequest>;
    /**
     * The index in the a_objAddress array (zero based index) representing the Address object that should become the default one.  You can leave the value to 0 if the array is empty.
     */
    iAddressDefault: number;
    /**
     * The index in the a_objPhone array (zero based index) representing the Phone object that should become the default one.  You can leave the value to 0 if the array is empty.
     */
    iPhoneDefault: number;
    /**
     * The index in the a_objEmail array (zero based index) representing the Email object that should become the default one.  You can leave the value to 0 if the array is empty.
     */
    iEmailDefault: number;
    /**
     * The index in the a_objWebsite array (zero based index) representing the Website object that should become the default one.  You can leave the value to 0 if the array is empty.
     */
    iWebsiteDefault: number;
}

