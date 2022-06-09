import { environment } from './../../../environments/environment.prod';
import { AccountConfiguration } from './../models/account-configuration.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SetupService {

  constructor(private http: HttpClient) { }

  getConfig(): Observable<AccountConfiguration> | undefined {
    return this.http.get<AccountConfiguration>(`${environment.baseUrl}/accounts/configuration`);
  }

  updateConfig(config: AccountConfiguration): Observable<void> {
    return this.http.put<void>(`${environment.baseUrl}/accounts`, config);
  }

}
