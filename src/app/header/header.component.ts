import { Component } from '@angular/core'
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',

})
export class HeaderComponent{
    constructor(private dataStorageService: DataStorageService,
        private authService: AuthService){}

    isAuthenticated = () => this.authService.isAuthenticated()
    onSaveData(){
        this.dataStorageService.storeRecipes().subscribe()
    }
    onFetchData(){
        this.dataStorageService.fetchRecipes()
    }
    onSignout(){
        this.authService.signoutUser()
    }
}