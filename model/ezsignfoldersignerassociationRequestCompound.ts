/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.33
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { EzsignsignerRequestCompound } from './ezsignsignerRequestCompound';
import { EzsignfoldersignerassociationRequest } from './ezsignfoldersignerassociationRequest';


/**
 * An Ezsignfoldersignerassociation Object and children to create a complete structure
 */
export interface EzsignfoldersignerassociationRequestCompound { 
    objEzsignsigner?: EzsignsignerRequestCompound;
    /**
     * A reference to a valid User.  This is only used if the signatory will be a user from the system.
     */
    fkiUserID?: number;
    /**
     * A reference to a valid Ezsignfolder.  That value is returned after a successful Ezsignfolder Creation.
     */
    fkiEzsignfolderID: number;
}

