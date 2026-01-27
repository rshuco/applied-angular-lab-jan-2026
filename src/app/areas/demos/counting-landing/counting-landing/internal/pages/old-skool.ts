import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PageLayout } from '@ht/shared/ui-common/layouts/page';

@Component({
  selector: 'app-demos-pages-old-skool',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PageLayout],
  template: `<app-ui-page title="old-skool">
    <div>
      <button (click)="decrement()">-</button>
      <span>{{ count }}</span>
      <button (click)="increment()">+</button>
    </div>
  </app-ui-page>`,
  styles: ``,
})
export class OldSkoolPage {
  count = 0;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}
