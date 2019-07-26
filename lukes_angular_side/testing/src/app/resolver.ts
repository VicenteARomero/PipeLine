import { Resolve } from '@angular/router';
import { HnService } from './resolve';
import { Injectable } from '@angular/core';

@Injectable()
export class HnResolver implements Resolve<any> {
  constructor(private hnService: HnService) {}

  resolve() {
    return this.hnService.getTopPosts();
  }
}