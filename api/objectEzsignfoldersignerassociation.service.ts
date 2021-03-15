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
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent, HttpParameterCodec }       from '@angular/common/http';
import { CustomHttpParameterCodec }                          from '../encoder';
import { Observable }                                        from 'rxjs';

import { CommonResponseError } from '../model/models';
import { EzsignfoldersignerassociationCreateObjectV1Request } from '../model/models';
import { EzsignfoldersignerassociationCreateObjectV1Response } from '../model/models';
import { EzsignfoldersignerassociationDeleteObjectV1Response } from '../model/models';
import { EzsignfoldersignerassociationGetInPersonLoginUrlV1Response } from '../model/models';
import { EzsignfoldersignerassociationGetObjectV1Response } from '../model/models';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';



@Injectable({
  providedIn: 'root'
})
export class ObjectEzsignfoldersignerassociationService {

    protected basePath = 'https://prod.api.appcluster01.ca-central-1.ezmax.com/rest';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();
    public encoder: HttpParameterCodec;

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new CustomHttpParameterCodec();
    }


    private addToHttpParams(httpParams: HttpParams, value: any, key?: string): HttpParams {
        if (typeof value === "object" && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        } else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }

    private addToHttpParamsRecursive(httpParams: HttpParams, value?: any, key?: string): HttpParams {
        if (value == null) {
            return httpParams;
        }

        if (typeof value === "object") {
            if (Array.isArray(value)) {
                (value as any[]).forEach( elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            } else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key,
                        (value as Date).toISOString().substr(0, 10));
                } else {
                   throw Error("key may not be null if value is Date");
                }
            } else {
                Object.keys(value).forEach( k => httpParams = this.addToHttpParamsRecursive(
                    httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        } else if (key != null) {
            httpParams = httpParams.append(key, value);
        } else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }

    /**
     * Create a new Ezsignfoldersignerassociation
     * The endpoint allows to create one or many elements at once.  The array can contain simple (Just the object) or compound (The object and its child) objects.  Creating compound elements allows to reduce the multiple requests to create all child objects.
     * @param ezsignfoldersignerassociationCreateObjectV1Request 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public ezsignfoldersignerassociationCreateObjectV1(ezsignfoldersignerassociationCreateObjectV1Request: Array<EzsignfoldersignerassociationCreateObjectV1Request>, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<EzsignfoldersignerassociationCreateObjectV1Response>;
    public ezsignfoldersignerassociationCreateObjectV1(ezsignfoldersignerassociationCreateObjectV1Request: Array<EzsignfoldersignerassociationCreateObjectV1Request>, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<EzsignfoldersignerassociationCreateObjectV1Response>>;
    public ezsignfoldersignerassociationCreateObjectV1(ezsignfoldersignerassociationCreateObjectV1Request: Array<EzsignfoldersignerassociationCreateObjectV1Request>, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<EzsignfoldersignerassociationCreateObjectV1Response>>;
    public ezsignfoldersignerassociationCreateObjectV1(ezsignfoldersignerassociationCreateObjectV1Request: Array<EzsignfoldersignerassociationCreateObjectV1Request>, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        if (ezsignfoldersignerassociationCreateObjectV1Request === null || ezsignfoldersignerassociationCreateObjectV1Request === undefined) {
            throw new Error('Required parameter ezsignfoldersignerassociationCreateObjectV1Request was null or undefined when calling ezsignfoldersignerassociationCreateObjectV1.');
        }

        let headers = this.defaultHeaders;

        let credential: string | undefined;
        // authentication (Authorization) required
        credential = this.configuration.lookupCredential('Authorization');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }

        let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        let responseType: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType = 'text';
        }

        return this.httpClient.post<EzsignfoldersignerassociationCreateObjectV1Response>(`${this.configuration.basePath}/1/object/ezsignfoldersignerassociation`,
            ezsignfoldersignerassociationCreateObjectV1Request,
            {
                responseType: <any>responseType,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Delete an existing Ezsignfoldersignerassociation
     * @param pkiEzsignfoldersignerassociationID The unique ID of the Ezsignfoldersignerassociation
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public ezsignfoldersignerassociationDeleteObjectV1(pkiEzsignfoldersignerassociationID: number, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<EzsignfoldersignerassociationDeleteObjectV1Response>;
    public ezsignfoldersignerassociationDeleteObjectV1(pkiEzsignfoldersignerassociationID: number, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<EzsignfoldersignerassociationDeleteObjectV1Response>>;
    public ezsignfoldersignerassociationDeleteObjectV1(pkiEzsignfoldersignerassociationID: number, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<EzsignfoldersignerassociationDeleteObjectV1Response>>;
    public ezsignfoldersignerassociationDeleteObjectV1(pkiEzsignfoldersignerassociationID: number, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        if (pkiEzsignfoldersignerassociationID === null || pkiEzsignfoldersignerassociationID === undefined) {
            throw new Error('Required parameter pkiEzsignfoldersignerassociationID was null or undefined when calling ezsignfoldersignerassociationDeleteObjectV1.');
        }

        let headers = this.defaultHeaders;

        let credential: string | undefined;
        // authentication (Authorization) required
        credential = this.configuration.lookupCredential('Authorization');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }

        let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        let responseType: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType = 'text';
        }

        return this.httpClient.delete<EzsignfoldersignerassociationDeleteObjectV1Response>(`${this.configuration.basePath}/1/object/ezsignfoldersignerassociation/${encodeURIComponent(String(pkiEzsignfoldersignerassociationID))}`,
            {
                responseType: <any>responseType,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retrieve an existing Ezsignfoldersignerassociation\&#39;s children IDs
     * @param pkiEzsignfoldersignerassociationID The unique ID of the Ezsignfoldersignerassociation
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public ezsignfoldersignerassociationGetChildrenV1(pkiEzsignfoldersignerassociationID: number, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<any>;
    public ezsignfoldersignerassociationGetChildrenV1(pkiEzsignfoldersignerassociationID: number, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<any>>;
    public ezsignfoldersignerassociationGetChildrenV1(pkiEzsignfoldersignerassociationID: number, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<any>>;
    public ezsignfoldersignerassociationGetChildrenV1(pkiEzsignfoldersignerassociationID: number, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        if (pkiEzsignfoldersignerassociationID === null || pkiEzsignfoldersignerassociationID === undefined) {
            throw new Error('Required parameter pkiEzsignfoldersignerassociationID was null or undefined when calling ezsignfoldersignerassociationGetChildrenV1.');
        }

        let headers = this.defaultHeaders;

        let credential: string | undefined;
        // authentication (Authorization) required
        credential = this.configuration.lookupCredential('Authorization');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }

        let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        let responseType: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType = 'text';
        }

        return this.httpClient.get<any>(`${this.configuration.basePath}/1/object/ezsignfoldersignerassociation/${encodeURIComponent(String(pkiEzsignfoldersignerassociationID))}/getChildren`,
            {
                responseType: <any>responseType,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retrieve a Login Url to allow In-Person signing
     * This endpoint returns a Login Url that can be used in a browser or embedded in an I-Frame to allow in person signing.  The signer Login type must be configured as In-Person.
     * @param pkiEzsignfoldersignerassociationID The unique ID of the Ezsignfoldersignerassociation
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public ezsignfoldersignerassociationGetInPersonLoginUrlV1(pkiEzsignfoldersignerassociationID: number, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<EzsignfoldersignerassociationGetInPersonLoginUrlV1Response>;
    public ezsignfoldersignerassociationGetInPersonLoginUrlV1(pkiEzsignfoldersignerassociationID: number, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<EzsignfoldersignerassociationGetInPersonLoginUrlV1Response>>;
    public ezsignfoldersignerassociationGetInPersonLoginUrlV1(pkiEzsignfoldersignerassociationID: number, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<EzsignfoldersignerassociationGetInPersonLoginUrlV1Response>>;
    public ezsignfoldersignerassociationGetInPersonLoginUrlV1(pkiEzsignfoldersignerassociationID: number, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        if (pkiEzsignfoldersignerassociationID === null || pkiEzsignfoldersignerassociationID === undefined) {
            throw new Error('Required parameter pkiEzsignfoldersignerassociationID was null or undefined when calling ezsignfoldersignerassociationGetInPersonLoginUrlV1.');
        }

        let headers = this.defaultHeaders;

        let credential: string | undefined;
        // authentication (Authorization) required
        credential = this.configuration.lookupCredential('Authorization');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }

        let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        let responseType: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType = 'text';
        }

        return this.httpClient.get<EzsignfoldersignerassociationGetInPersonLoginUrlV1Response>(`${this.configuration.basePath}/1/object/ezsignfoldersignerassociation/${encodeURIComponent(String(pkiEzsignfoldersignerassociationID))}/getInPersonLoginUrl`,
            {
                responseType: <any>responseType,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retrieve an existing Ezsignfoldersignerassociation
     * @param pkiEzsignfoldersignerassociationID The unique ID of the Ezsignfoldersignerassociation
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public ezsignfoldersignerassociationGetObjectV1(pkiEzsignfoldersignerassociationID: number, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<EzsignfoldersignerassociationGetObjectV1Response>;
    public ezsignfoldersignerassociationGetObjectV1(pkiEzsignfoldersignerassociationID: number, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<EzsignfoldersignerassociationGetObjectV1Response>>;
    public ezsignfoldersignerassociationGetObjectV1(pkiEzsignfoldersignerassociationID: number, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<EzsignfoldersignerassociationGetObjectV1Response>>;
    public ezsignfoldersignerassociationGetObjectV1(pkiEzsignfoldersignerassociationID: number, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        if (pkiEzsignfoldersignerassociationID === null || pkiEzsignfoldersignerassociationID === undefined) {
            throw new Error('Required parameter pkiEzsignfoldersignerassociationID was null or undefined when calling ezsignfoldersignerassociationGetObjectV1.');
        }

        let headers = this.defaultHeaders;

        let credential: string | undefined;
        // authentication (Authorization) required
        credential = this.configuration.lookupCredential('Authorization');
        if (credential) {
            headers = headers.set('Authorization', credential);
        }

        let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        let responseType: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType = 'text';
        }

        return this.httpClient.get<EzsignfoldersignerassociationGetObjectV1Response>(`${this.configuration.basePath}/1/object/ezsignfoldersignerassociation/${encodeURIComponent(String(pkiEzsignfoldersignerassociationID))}`,
            {
                responseType: <any>responseType,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
