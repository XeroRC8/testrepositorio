import { Component } from '@angular/core';

type Tabs= 'tab-pokemon' | 'tab-favorites'

@Component({
  selector: 'pokemon-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

  public currentTab: Tabs='tab-pokemon';

  public pokemon: any[]=new Array(1010);

}
