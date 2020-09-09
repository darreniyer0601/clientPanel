import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { SettingsService } from '../services/settings.service';

import 'rxjs/Rx';

@Injectable()
export class RegisterGuard implements CanActivate {
  constructor(
    private router: Router,
    private settingsService: SettingsService
  ) {}

  canActivate(): boolean {
    if (this.settingsService.getSettings().allowRegistration) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
