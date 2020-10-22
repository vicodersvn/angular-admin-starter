import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <div class="socials">
      <a href="#" target="_blank" class="ion ion-social-facebook-outline"></a>
      <a href="#" target="_blank" class="ion ion-social-twitter-outline"></a>
      <a href="#" target="_blank" class="ion ion-social-linkedin-outline"></a>
    </div>
  `
})
export class FooterComponent {}
