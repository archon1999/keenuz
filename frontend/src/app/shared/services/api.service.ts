import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { paramsMapper } from '@shared/utils';

export const BASE_URL = environment.apiUrl;
export const BASE_API_URL = BASE_URL + '/api/';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    public http: HttpClient,
    public translateService: TranslateService
  ) {}

  get(prefix: string, params: any = {}, otherOptions: any = {}): Observable<any> {
    const url = BASE_API_URL + prefix;
    const options = otherOptions;
    const filteredParams: any = {};
    for (const key of Object.keys(params)) {
      const value = params[key];
      if (value !== null && value !== undefined) {
        filteredParams[key] = value;
      }
    }
    this.initOptions(options);
    options.params = paramsMapper(filteredParams);
    options.observe = 'response';
    return this.http.get(url, options).pipe(
      map((response: any) => {
        return response.body;
      }),
    );
  }

  post(prefix: string, body: any = {}, options: any = {}): any {
    const url = BASE_API_URL + prefix;
    this.initOptions(options);
    return this.http.post(url, body, options);
  }

  put(prefix: string, body: any = {}, options: any = {}): any {
    const url = BASE_API_URL + prefix;
    this.initOptions(options);
    return this.http.put(url, body, options);
  }

  delete(prefix: string, params: any = {}, otherOptions: any = {}): any {
    const url = BASE_API_URL + prefix;
    const options = otherOptions;
    this.initOptions(options);
    options.params = params;
    return this.http.delete(url, options);
  }

  initOptions(options: any) {
    options.headers = new HttpHeaders();
    options.headers = options.headers.set('Content-Type', 'application/json; charset=utf-8');
    options.withCredentials = true;
  }

}
