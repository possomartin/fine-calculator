import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  constructor(private webReqService: WebRequestService, private router: Router) { }

  /* get All Fines */

  getAllFines()
  {
    return this.webReqService.get('api/system/all');
  }

  calculatefine(id: string)
  {
    return this.webReqService.get(`api/system/fine/${id}`);
  }
}
