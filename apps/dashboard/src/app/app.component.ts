import { Component } from '@angular/core';

@Component({
  selector: 'projects-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dashboard';

  links = [{ path: './projects', icon: 'work', title: 'Projects' }];
}
