/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.39
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { ContactRequestCompound } from './contactRequestCompound';
import { FranchisereferalincomeRequest } from './franchisereferalincomeRequest';
import { AddressRequest } from './addressRequest';


/**
 * A Franchisereferalincome Object and children to create a complete structure
 */
export interface FranchisereferalincomeRequestCompound { 
    objAddress?: AddressRequest;
    a_objContact: Array<ContactRequestCompound>;
    /**
     * The unique ID of the Franchisebroker
     */
    fkiFranchisebrokerID: number;
    /**
     * The unique ID of the Franchisereferalincomeprogram
     */
    fkiFranchisereferalincomeprogramID: number;
    /**
     * The unique ID of the Period
     */
    fkiPeriodID: number;
    /**
     * The loan amount
     */
    dFranchisereferalincomeLoan: string;
    /**
     * The amount that will be given to the franchise
     */
    dFranchisereferalincomeFranchiseamount: string;
    /**
     * The amount that will be kept by the franchisor
     */
    dFranchisereferalincomeFranchisoramount: string;
    /**
     * The amount that will be given to the agent
     */
    dFranchisereferalincomeAgentamount: string;
    /**
     * The date the amounts were disbursed
     */
    dtFranchisereferalincomeDisbursed: string;
    /**
     * A comment about the transaction
     */
    tFranchisereferalincomeComment: string;
    /**
     * The unique ID of the Franchisereoffice
     */
    fkiFranchiseofficeID: number;
    sFranchisereferalincomeRemoteid: string;
}

