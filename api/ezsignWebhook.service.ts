/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign application.  We provide SDKs for customers. They are generated using OpenAPI codegen, we encourage customers to use them as we also provide samples for them.  You can choose to build your own implementation manually or can use any compatible OpenAPI 3.0 generator like Swagger Codegen, OpenAPI codegen or any commercial generators.  If you need helping understanding how to use this API, don\'t waste too much time looking for it. Contact support-api@ezmax.ca, we\'re here to help. We are developpers so we know programmers don\'t like bad documentation. If you don\'t find what you need in the documentation, let us know, we\'ll improve it and put you rapidly up on track.
 *
 * The version of the OpenAPI document: 1.0.5
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

import { WebhookEzsignDocumentCompleted } from '../model/models';
import { WebhookEzsignFolderCompleted } from '../model/models';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';



@Injectable({
  providedIn: 'root'
})
export class EzsignWebhookService {

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
     * DocumentCompleted
     * This Webhook will be called when the last signature on an Ezsigndocument is made.
     * @param webhookPathEzsignDocumentCompleted The path on your server where your webhook listener resides
     * @param webhookEzsignDocumentCompleted 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public webhookEzsignDocumentCompleted(webhookPathEzsignDocumentCompleted: string, webhookEzsignDocumentCompleted: WebhookEzsignDocumentCompleted, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: undefined}): Observable<any>;
    public webhookEzsignDocumentCompleted(webhookPathEzsignDocumentCompleted: string, webhookEzsignDocumentCompleted: WebhookEzsignDocumentCompleted, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: undefined}): Observable<HttpResponse<any>>;
    public webhookEzsignDocumentCompleted(webhookPathEzsignDocumentCompleted: string, webhookEzsignDocumentCompleted: WebhookEzsignDocumentCompleted, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: undefined}): Observable<HttpEvent<any>>;
    public webhookEzsignDocumentCompleted(webhookPathEzsignDocumentCompleted: string, webhookEzsignDocumentCompleted: WebhookEzsignDocumentCompleted, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: undefined}): Observable<any> {
        if (webhookPathEzsignDocumentCompleted === null || webhookPathEzsignDocumentCompleted === undefined) {
            throw new Error('Required parameter webhookPathEzsignDocumentCompleted was null or undefined when calling webhookEzsignDocumentCompleted.');
        }
        if (webhookEzsignDocumentCompleted === null || webhookEzsignDocumentCompleted === undefined) {
            throw new Error('Required parameter webhookEzsignDocumentCompleted was null or undefined when calling webhookEzsignDocumentCompleted.');
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

        return this.httpClient.post<any>(`${this.configuration.basePath}/${encodeURIComponent(String(webhookPathEzsignDocumentCompleted))}`,
            webhookEzsignDocumentCompleted,
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
     * FolderCompleted
     * This Webhook will be called when the last signature on the last Ezsigndocument from the folder is made.
     * @param webhookPathEzsignFolderCompleted The path on your server where your webhook listener resides
     * @param webhookEzsignFolderCompleted 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public webhookEzsignFolderCompleted(webhookPathEzsignFolderCompleted: string, webhookEzsignFolderCompleted: WebhookEzsignFolderCompleted, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: undefined}): Observable<any>;
    public webhookEzsignFolderCompleted(webhookPathEzsignFolderCompleted: string, webhookEzsignFolderCompleted: WebhookEzsignFolderCompleted, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: undefined}): Observable<HttpResponse<any>>;
    public webhookEzsignFolderCompleted(webhookPathEzsignFolderCompleted: string, webhookEzsignFolderCompleted: WebhookEzsignFolderCompleted, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: undefined}): Observable<HttpEvent<any>>;
    public webhookEzsignFolderCompleted(webhookPathEzsignFolderCompleted: string, webhookEzsignFolderCompleted: WebhookEzsignFolderCompleted, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: undefined}): Observable<any> {
        if (webhookPathEzsignFolderCompleted === null || webhookPathEzsignFolderCompleted === undefined) {
            throw new Error('Required parameter webhookPathEzsignFolderCompleted was null or undefined when calling webhookEzsignFolderCompleted.');
        }
        if (webhookEzsignFolderCompleted === null || webhookEzsignFolderCompleted === undefined) {
            throw new Error('Required parameter webhookEzsignFolderCompleted was null or undefined when calling webhookEzsignFolderCompleted.');
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

        return this.httpClient.post<any>(`${this.configuration.basePath}/${encodeURIComponent(String(webhookPathEzsignFolderCompleted))}`,
            webhookEzsignFolderCompleted,
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
