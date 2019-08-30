import { EventEmitter, Component, OnInit, Input, ViewChild, SimpleChanges, OnChanges, Output } from '@angular/core';
import { Screen } from '../../models/screen';
import { Router } from '@angular/router';


@Component({
  selector: 'auth-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit, OnChanges {
  @Input() screens: Screen[];
  @ViewChild('childMenu', { static: true }) public childMenu;
  @Output() handleRouterClickChild = new EventEmitter<Screen>();
  constructor(
    private router: Router
  ) { }

  ngOnChanges(changes: SimpleChanges): void {

    console.log('screens in items:', this.screens);
  }
  ngOnInit() {
  }

  handleRouterClickEvent(screen: Screen) {
    console.log('emitting', screen);
    this.router.navigate([screen.routerPath]);
    this.handleRouterClickChild.emit(screen);
    console.log('emitting successfull');
  }

}
