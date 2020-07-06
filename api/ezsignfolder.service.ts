/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign application.  We provide SDKs for customers. They are generated using OpenAPI codegen, we encourage customers to use them as we also provide samples for them.  You can choose to build your own implementation manually or can use any compatible OpenAPI 3.0 generator like Swagger Codegen, OpenAPI codegen or any commercial generators.  If you need helping understanding how to use this API, don\'t waste too much time looking for it. Contact support-api@ezmax.ca, we\'re here to help. We are developpers so we know programmers don\'t like bad documentation. If you don\'t find what you need in the documentation, let us know, we\'ll improve it and put you rapidly up on track.
 *
 * The version of the OpenAPI document: 1.0.2
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
import { EzsignfolderCreateObjectV1Request } from '../model/models';
import { EzsignfolderCreateObjectV1Response } from '../model/models';
import { EzsignfolderDeleteObjectV1Response } from '../model/models';
import { EzsignfolderEditObjectV1Request } from '../model/models';
import { EzsignfolderEditObjectV1Response } from '../model/models';
import { EzsignfolderGetObjectV1Response } from '../model/models';
import { EzsignfolderSendV1Request } from '../model/models';
import { EzsignfolderSendV1Response } from '../model/models';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';



@Injectable({
  providedIn: 'root'
})
export class EzsignfolderService {

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
     * Create a new Ezsignfolder
     * The endpoint allows to create one or many elements at once.  The array can contain simple (Just the object) or compound (The object and its child) objects.  Creating compound elements allows to reduce the multiple requests to create all child objects.
     * @param ezsignfolderCreateObjectV1Request 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public ezsignfolderCreateObjectV1(ezsignfolderCreateObjectV1Request: Array<EzsignfolderCreateObjectV1Request>, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<EzsignfolderCreateObjectV1Response>;
    public ezsignfolderCreateObjectV1(ezsignfolderCreateObjectV1Request: Array<EzsignfolderCreateObjectV1Request>, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<EzsignfolderCreateObjectV1Response>>;
    public ezsignfolderCreateObjectV1(ezsignfolderCreateObjectV1Request: Array<EzsignfolderCreateObjectV1Request>, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<EzsignfolderCreateObjectV1Response>>;
    public ezsignfolderCreateObjectV1(ezsignfolderCreateObjectV1Request: Array<EzsignfolderCreateObjectV1Request>, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        if (ezsignfolderCreateObjectV1Request === null || ezsignfolderCreateObjectV1Request === undefined) {
            throw new Error('Required parameter ezsignfolderCreateObjectV1Request was null or undefined when calling ezsignfolderCreateObjectV1.');
        }

        let headers = this.defaultHeaders;

        // authentication (Authorization) required
        if (this.configuration.apiKeys) {
            const key: string | undefined = this.configuration.apiKeys["Authorization"] || this.configuration.apiKeys["Authorization"];
            if (key) {
                headers = headers.set('Authorization', key);
            }
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

        return this.httpClient.post<EzsignfolderCreateObjectV1Response>(`${this.configuration.basePath}/1/object/ezsignfolder`,
            ezsignfolderCreateObjectV1Request,
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
     * Delete an existing Ezsignfolder
     * @param pkiEzsignfolderID The unique ID of the Ezsignfolder
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public ezsignfolderDeleteObjectV1(pkiEzsignfolderID: number, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<EzsignfolderDeleteObjectV1Response>;
    public ezsignfolderDeleteObjectV1(pkiEzsignfolderID: number, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<EzsignfolderDeleteObjectV1Response>>;
    public ezsignfolderDeleteObjectV1(pkiEzsignfolderID: number, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<EzsignfolderDeleteObjectV1Response>>;
    public ezsignfolderDeleteObjectV1(pkiEzsignfolderID: number, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        if (pkiEzsignfolderID === null || pkiEzsignfolderID === undefined) {
            throw new Error('Required parameter pkiEzsignfolderID was null or undefined when calling ezsignfolderDeleteObjectV1.');
        }

        let headers = this.defaultHeaders;

        // authentication (Authorization) required
        if (this.configuration.apiKeys) {
            const key: string | undefined = this.configuration.apiKeys["Authorization"] || this.configuration.apiKeys["Authorization"];
            if (key) {
                headers = headers.set('Authorization', key);
            }
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

        return this.httpClient.delete<EzsignfolderDeleteObjectV1Response>(`${this.configuration.basePath}/1/object/ezsignfolder/${encodeURIComponent(String(pkiEzsignfolderID))}`,
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
     * Modify an existing Ezsignfolder
     * @param pkiEzsignfolderID The unique ID of the Ezsignfolder
     * @param ezsignfolderEditObjectV1Request 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public ezsignfolderEditObjectV1(pkiEzsignfolderID: number, ezsignfolderEditObjectV1Request: EzsignfolderEditObjectV1Request, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<EzsignfolderEditObjectV1Response>;
    public ezsignfolderEditObjectV1(pkiEzsignfolderID: number, ezsignfolderEditObjectV1Request: EzsignfolderEditObjectV1Request, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<EzsignfolderEditObjectV1Response>>;
    public ezsignfolderEditObjectV1(pkiEzsignfolderID: number, ezsignfolderEditObjectV1Request: EzsignfolderEditObjectV1Request, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<EzsignfolderEditObjectV1Response>>;
    public ezsignfolderEditObjectV1(pkiEzsignfolderID: number, ezsignfolderEditObjectV1Request: EzsignfolderEditObjectV1Request, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        if (pkiEzsignfolderID === null || pkiEzsignfolderID === undefined) {
            throw new Error('Required parameter pkiEzsignfolderID was null or undefined when calling ezsignfolderEditObjectV1.');
        }
        if (ezsignfolderEditObjectV1Request === null || ezsignfolderEditObjectV1Request === undefined) {
            throw new Error('Required parameter ezsignfolderEditObjectV1Request was null or undefined when calling ezsignfolderEditObjectV1.');
        }

        let headers = this.defaultHeaders;

        // authentication (Authorization) required
        if (this.configuration.apiKeys) {
            const key: string | undefined = this.configuration.apiKeys["Authorization"] || this.configuration.apiKeys["Authorization"];
            if (key) {
                headers = headers.set('Authorization', key);
            }
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

        return this.httpClient.put<EzsignfolderEditObjectV1Response>(`${this.configuration.basePath}/1/object/ezsignfolder/${encodeURIComponent(String(pkiEzsignfolderID))}`,
            ezsignfolderEditObjectV1Request,
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
     * Retrieve an existing Ezsignfolder\&#39;s children IDs
     * @param pkiEzsignfolderID The unique ID of the Ezsignfolder
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public ezsignfolderGetObjectGetChildrenV1(pkiEzsignfolderID: number, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<any>;
    public ezsignfolderGetObjectGetChildrenV1(pkiEzsignfolderID: number, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<any>>;
    public ezsignfolderGetObjectGetChildrenV1(pkiEzsignfolderID: number, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<any>>;
    public ezsignfolderGetObjectGetChildrenV1(pkiEzsignfolderID: number, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        if (pkiEzsignfolderID === null || pkiEzsignfolderID === undefined) {
            throw new Error('Required parameter pkiEzsignfolderID was null or undefined when calling ezsignfolderGetObjectGetChildrenV1.');
        }

        let headers = this.defaultHeaders;

        // authentication (Authorization) required
        if (this.configuration.apiKeys) {
            const key: string | undefined = this.configuration.apiKeys["Authorization"] || this.configuration.apiKeys["Authorization"];
            if (key) {
                headers = headers.set('Authorization', key);
            }
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

        return this.httpClient.get<any>(`${this.configuration.basePath}/1/object/ezsignfolder/${encodeURIComponent(String(pkiEzsignfolderID))}/getChildren`,
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
     * Retrieve an existing Ezsignfolder
     * @param pkiEzsignfolderID The unique ID of the Ezsignfolder
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public ezsignfolderGetObjectV1(pkiEzsignfolderID: number, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<EzsignfolderGetObjectV1Response>;
    public ezsignfolderGetObjectV1(pkiEzsignfolderID: number, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<EzsignfolderGetObjectV1Response>>;
    public ezsignfolderGetObjectV1(pkiEzsignfolderID: number, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<EzsignfolderGetObjectV1Response>>;
    public ezsignfolderGetObjectV1(pkiEzsignfolderID: number, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        if (pkiEzsignfolderID === null || pkiEzsignfolderID === undefined) {
            throw new Error('Required parameter pkiEzsignfolderID was null or undefined when calling ezsignfolderGetObjectV1.');
        }

        let headers = this.defaultHeaders;

        // authentication (Authorization) required
        if (this.configuration.apiKeys) {
            const key: string | undefined = this.configuration.apiKeys["Authorization"] || this.configuration.apiKeys["Authorization"];
            if (key) {
                headers = headers.set('Authorization', key);
            }
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

        return this.httpClient.get<EzsignfolderGetObjectV1Response>(`${this.configuration.basePath}/1/object/ezsignfolder/${encodeURIComponent(String(pkiEzsignfolderID))}`,
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
     * Send the Ezsignfolder to the signatories for signature
     * @param pkiEzsignfolderID The unique ID of the Ezsignfolder
     * @param ezsignfolderSendV1Request 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public ezsignfolderSendV1(pkiEzsignfolderID: number, ezsignfolderSendV1Request: EzsignfolderSendV1Request, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<EzsignfolderSendV1Response>;
    public ezsignfolderSendV1(pkiEzsignfolderID: number, ezsignfolderSendV1Request: EzsignfolderSendV1Request, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<EzsignfolderSendV1Response>>;
    public ezsignfolderSendV1(pkiEzsignfolderID: number, ezsignfolderSendV1Request: EzsignfolderSendV1Request, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<EzsignfolderSendV1Response>>;
    public ezsignfolderSendV1(pkiEzsignfolderID: number, ezsignfolderSendV1Request: EzsignfolderSendV1Request, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        if (pkiEzsignfolderID === null || pkiEzsignfolderID === undefined) {
            throw new Error('Required parameter pkiEzsignfolderID was null or undefined when calling ezsignfolderSendV1.');
        }
        if (ezsignfolderSendV1Request === null || ezsignfolderSendV1Request === undefined) {
            throw new Error('Required parameter ezsignfolderSendV1Request was null or undefined when calling ezsignfolderSendV1.');
        }

        let headers = this.defaultHeaders;

        // authentication (Authorization) required
        if (this.configuration.apiKeys) {
            const key: string | undefined = this.configuration.apiKeys["Authorization"] || this.configuration.apiKeys["Authorization"];
            if (key) {
                headers = headers.set('Authorization', key);
            }
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

        return this.httpClient.post<EzsignfolderSendV1Response>(`${this.configuration.basePath}/1/object/ezsignfolder/${encodeURIComponent(String(pkiEzsignfolderID))}/send`,
            ezsignfolderSendV1Request,
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
