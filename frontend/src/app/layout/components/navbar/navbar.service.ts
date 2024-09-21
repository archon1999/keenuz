import { Injectable } from '@angular/core';
import { ApiService } from 'app/shared/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  constructor(
    public api: ApiService,
  ) { }
}
