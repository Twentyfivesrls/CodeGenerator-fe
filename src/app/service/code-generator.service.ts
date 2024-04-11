import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Code} from "../models/Code";

@Injectable({
  providedIn: 'root'
})
export class CodeGeneratorService {
  private apiUrl = 'http://80.211.123.141:8103/CodeGenerator-be/code/save';

  constructor(private http: HttpClient) { }

  saveCode(code: Code): Observable<Code> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<Code>(this.apiUrl, code, { headers: headers });
  }
}
