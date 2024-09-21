import { Injectable } from '@angular/core';
import { ApiService } from 'app/shared/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(public api: ApiService) {}
}
