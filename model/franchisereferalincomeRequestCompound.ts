/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign application.  We provide SDKs for customers. They are generated using OpenAPI codegen, we encourage customers to use them as we also provide samples for them.  You can choose to build your own implementation manually or can use any compatible OpenAPI 3.0 generator like Swagger Codegen, OpenAPI codegen or any commercial generators.  If you need helping understanding how to use this API, don\'t waste too much time looking for it. Contact support-api@ezmax.ca, we\'re here to help. We are developpers so we know programmers don\'t like bad documentation. If you don\'t find what you need in the documentation, let us know, we\'ll improve it and put you rapidly up on track.
 *
 * The version of the OpenAPI document: 1.0.19
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

