import { CounterService } from './../services/counter.service';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  counter = 0;
  constructor(private CounterService: CounterService) {}

  ngOnInit() {
    this.CounterService.getCounter().subscribe(
      (value) => (this.counter = value)
    );
  }
}
