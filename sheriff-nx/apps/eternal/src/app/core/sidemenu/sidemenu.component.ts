import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatBadgeModule } from '@angular/material/badge';
import {SecurityStore} from "@app/shared/security";

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
  standalone: true,
  imports: [MatButtonModule, RouterLink, MatBadgeModule],
})
export class SidemenuComponent {
  securityStore = inject(SecurityStore);
}
