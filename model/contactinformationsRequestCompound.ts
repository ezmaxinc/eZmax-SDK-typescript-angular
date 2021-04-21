/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.41
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

