/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.31
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
import { EzsigndocumentApplyEzsigntemplateV1Request } from '../model/models';
import { EzsigndocumentApplyEzsigntemplateV1Response } from '../model/models';
import { EzsigndocumentCreateObjectV1Request } from '../model/models';
import { EzsigndocumentCreateObjectV1Response } from '../model/models';
import { EzsigndocumentDeleteObjectV1Response } from '../model/models';
import { EzsigndocumentGetDownloadUrlV1Response } from '../model/models';
import { EzsigndocumentGetObjectV1Response } from '../model/models';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';



@Injectable({
  providedIn: 'root'
})
export class ObjectEzsigndocumentService {

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
     * Apply an Ezsign Template to the Ezsigndocument.
     * This endpoint applies a predefined template to the ezsign document. This allows to automatically apply all the form and signature fields on a document in a single step.  The document must not already have fields otherwise an error will be returned.
     * @param pkiEzsigndocumentID The unique ID of the Ezsigndocument
     * @param ezsigndocumentApplyEzsigntemplateV1Request 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public ezsigndocumentApplyEzsigntemplateV1(pkiEzsigndocumentID: number, ezsigndocumentApplyEzsigntemplateV1Request: EzsigndocumentApplyEzsigntemplateV1Request, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<EzsigndocumentApplyEzsigntemplateV1Response>;
    public ezsigndocumentApplyEzsigntemplateV1(pkiEzsigndocumentID: number, ezsigndocumentApplyEzsigntemplateV1Request: EzsigndocumentApplyEzsigntemplateV1Request, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<EzsigndocumentApplyEzsigntemplateV1Response>>;
    public ezsigndocumentApplyEzsigntemplateV1(pkiEzsigndocumentID: number, ezsigndocumentApplyEzsigntemplateV1Request: EzsigndocumentApplyEzsigntemplateV1Request, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<EzsigndocumentApplyEzsigntemplateV1Response>>;
    public ezsigndocumentApplyEzsigntemplateV1(pkiEzsigndocumentID: number, ezsigndocumentApplyEzsigntemplateV1Request: EzsigndocumentApplyEzsigntemplateV1Request, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        if (pkiEzsigndocumentID === null || pkiEzsigndocumentID === undefined) {
            throw new Error('Required parameter pkiEzsigndocumentID was null or undefined when calling ezsigndocumentApplyEzsigntemplateV1.');
        }
        if (ezsigndocumentApplyEzsigntemplateV1Request === null || ezsigndocumentApplyEzsigntemplateV1Request === undefined) {
            throw new Error('Required parameter ezsigndocumentApplyEzsigntemplateV1Request was null or undefined when calling ezsigndocumentApplyEzsigntemplateV1.');
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

        return this.httpClient.post<EzsigndocumentApplyEzsigntemplateV1Response>(`${this.configuration.basePath}/1/object/ezsigndocument/${encodeURIComponent(String(pkiEzsigndocumentID))}/applyezsigntemplate`,
            ezsigndocumentApplyEzsigntemplateV1Request,
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
     * Create a new Ezsigndocument
     * The endpoint allows to create one or many elements at once.  The array can contain simple (Just the object) or compound (The object and its child) objects.  Creating compound elements allows to reduce the multiple requests to create all child objects.
     * @param ezsigndocumentCreateObjectV1Request 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public ezsigndocumentCreateObjectV1(ezsigndocumentCreateObjectV1Request: Array<EzsigndocumentCreateObjectV1Request>, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<EzsigndocumentCreateObjectV1Response>;
    public ezsigndocumentCreateObjectV1(ezsigndocumentCreateObjectV1Request: Array<EzsigndocumentCreateObjectV1Request>, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<EzsigndocumentCreateObjectV1Response>>;
    public ezsigndocumentCreateObjectV1(ezsigndocumentCreateObjectV1Request: Array<EzsigndocumentCreateObjectV1Request>, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<EzsigndocumentCreateObjectV1Response>>;
    public ezsigndocumentCreateObjectV1(ezsigndocumentCreateObjectV1Request: Array<EzsigndocumentCreateObjectV1Request>, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        if (ezsigndocumentCreateObjectV1Request === null || ezsigndocumentCreateObjectV1Request === undefined) {
            throw new Error('Required parameter ezsigndocumentCreateObjectV1Request was null or undefined when calling ezsigndocumentCreateObjectV1.');
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

        return this.httpClient.post<EzsigndocumentCreateObjectV1Response>(`${this.configuration.basePath}/1/object/ezsigndocument`,
            ezsigndocumentCreateObjectV1Request,
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
     * Delete an existing Ezsigndocument
     * @param pkiEzsigndocumentID The unique ID of the Ezsigndocument
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public ezsigndocumentDeleteObjectV1(pkiEzsigndocumentID: number, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<EzsigndocumentDeleteObjectV1Response>;
    public ezsigndocumentDeleteObjectV1(pkiEzsigndocumentID: number, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<EzsigndocumentDeleteObjectV1Response>>;
    public ezsigndocumentDeleteObjectV1(pkiEzsigndocumentID: number, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<EzsigndocumentDeleteObjectV1Response>>;
    public ezsigndocumentDeleteObjectV1(pkiEzsigndocumentID: number, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        if (pkiEzsigndocumentID === null || pkiEzsigndocumentID === undefined) {
            throw new Error('Required parameter pkiEzsigndocumentID was null or undefined when calling ezsigndocumentDeleteObjectV1.');
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

        return this.httpClient.delete<EzsigndocumentDeleteObjectV1Response>(`${this.configuration.basePath}/1/object/ezsigndocument/${encodeURIComponent(String(pkiEzsigndocumentID))}`,
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
     * Retrieve an existing Ezsigndocument\&#39;s children IDs
     * @param pkiEzsigndocumentID The unique ID of the Ezsigndocument
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public ezsigndocumentGetChildrenV1(pkiEzsigndocumentID: number, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<any>;
    public ezsigndocumentGetChildrenV1(pkiEzsigndocumentID: number, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<any>>;
    public ezsigndocumentGetChildrenV1(pkiEzsigndocumentID: number, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<any>>;
    public ezsigndocumentGetChildrenV1(pkiEzsigndocumentID: number, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        if (pkiEzsigndocumentID === null || pkiEzsigndocumentID === undefined) {
            throw new Error('Required parameter pkiEzsigndocumentID was null or undefined when calling ezsigndocumentGetChildrenV1.');
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

        return this.httpClient.get<any>(`${this.configuration.basePath}/1/object/ezsigndocument/${encodeURIComponent(String(pkiEzsigndocumentID))}/getChildren`,
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
     * Retrieve a URL to download documents.
     * This endpoint returns URLs to different files that can be downloaded during the signing process.  These links will expire after 5 minutes so the download of the file should be made soon after retrieving the link.
     * @param pkiEzsigndocumentID The unique ID of the Ezsigndocument
     * @param eDocumentType The type of document to retrieve.  1. **Initial** Is the initial document before any signature were applied. 2. **Signed** Is the final document once all signatures were applied. 3. **Proofdocument** Is the evidence report. 4. **Proof** Is the complete evidence archive including all of the above and more. 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public ezsigndocumentGetDownloadUrlV1(pkiEzsigndocumentID: number, eDocumentType: 'Initial' | 'Signed' | 'Proof' | 'Proofdocument', observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<EzsigndocumentGetDownloadUrlV1Response>;
    public ezsigndocumentGetDownloadUrlV1(pkiEzsigndocumentID: number, eDocumentType: 'Initial' | 'Signed' | 'Proof' | 'Proofdocument', observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<EzsigndocumentGetDownloadUrlV1Response>>;
    public ezsigndocumentGetDownloadUrlV1(pkiEzsigndocumentID: number, eDocumentType: 'Initial' | 'Signed' | 'Proof' | 'Proofdocument', observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<EzsigndocumentGetDownloadUrlV1Response>>;
    public ezsigndocumentGetDownloadUrlV1(pkiEzsigndocumentID: number, eDocumentType: 'Initial' | 'Signed' | 'Proof' | 'Proofdocument', observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        if (pkiEzsigndocumentID === null || pkiEzsigndocumentID === undefined) {
            throw new Error('Required parameter pkiEzsigndocumentID was null or undefined when calling ezsigndocumentGetDownloadUrlV1.');
        }
        if (eDocumentType === null || eDocumentType === undefined) {
            throw new Error('Required parameter eDocumentType was null or undefined when calling ezsigndocumentGetDownloadUrlV1.');
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

        return this.httpClient.get<EzsigndocumentGetDownloadUrlV1Response>(`${this.configuration.basePath}/1/object/ezsigndocument/${encodeURIComponent(String(pkiEzsigndocumentID))}/getDownloadUrl/${encodeURIComponent(String(eDocumentType))}`,
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
     * Retrieve an existing Ezsigndocument
     * @param pkiEzsigndocumentID The unique ID of the Ezsigndocument
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public ezsigndocumentGetObjectV1(pkiEzsigndocumentID: number, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<EzsigndocumentGetObjectV1Response>;
    public ezsigndocumentGetObjectV1(pkiEzsigndocumentID: number, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<EzsigndocumentGetObjectV1Response>>;
    public ezsigndocumentGetObjectV1(pkiEzsigndocumentID: number, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<EzsigndocumentGetObjectV1Response>>;
    public ezsigndocumentGetObjectV1(pkiEzsigndocumentID: number, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        if (pkiEzsigndocumentID === null || pkiEzsigndocumentID === undefined) {
            throw new Error('Required parameter pkiEzsigndocumentID was null or undefined when calling ezsigndocumentGetObjectV1.');
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

        return this.httpClient.get<EzsigndocumentGetObjectV1Response>(`${this.configuration.basePath}/1/object/ezsigndocument/${encodeURIComponent(String(pkiEzsigndocumentID))}`,
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
