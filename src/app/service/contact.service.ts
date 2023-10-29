import { Injectable } from '@angular/core';
import {Contact} from 'src/app/model/contact';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8090/api/Contacts';

@Injectable({
  providedIn: 'root'
})

export class ContactService {
  constructor(private http: HttpClient) {}

  create(contact: Contact): Observable<Object>{
    return this.http.post(baseUrl, contact);
  }
  getAll(): Observable<Contact[]> {
    return this.http.get<Contact[]>(baseUrl);
  }

  get(id: any): Observable<Contact> {
    return this.http.get<Contact>(`${baseUrl}/${id}`);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }
}
