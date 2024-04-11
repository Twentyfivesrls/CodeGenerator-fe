import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Code} from "../models/Code";

@Injectable({
  providedIn: 'root'
})
export class CodeGeneratorService {
  private apiUrl = 'http://localhost:8080/code/save';

  constructor(private http: HttpClient) { }

  saveCode(code: Code): Observable<Code> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<Code>(this.apiUrl, code, { headers: headers });
  }
}
