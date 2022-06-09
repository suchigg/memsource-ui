import { Observable } from 'rxjs';
import { AccountConfiguration } from './../../core/models/account-configuration.model';
import { SetupService } from './../../core/services/setup.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit {

  config$: Observable<AccountConfiguration> | undefined | null;

  constructor(private setupService: SetupService) { }

  updateConfig(config: AccountConfiguration): void {
    this.setupService.updateConfig(config).subscribe();
  }

  ngOnInit(): void {
    this.config$ = this.setupService.getConfig();
  }

}
