import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';
import { FormEmailData } from '../form/form-interface';

@Injectable({
  providedIn: 'root',
})
export class EmailContactFormService {
  emailAPI: string = 'https://mailthis.to/YeraldSE';

  constructor(private http: HttpClient) {}

  postEmailToAPI(formData: FormEmailData) {
    return this.http.post(this.emailAPI, formData, { responseType: 'text' });
  }
}
