import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { HeaderComponent } from './components/header/header.component'
import { MainContentComponent } from './components/main-content/main-content.component'

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, HeaderComponent, MainContentComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
    title = 'GoTask'
}
