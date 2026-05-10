
import { AppComponent } from './appComponent';
import { HomePage } from './homePage';
import { LoginPage } from './loginPage';
import { ShoppingCartPage } from './shoppingCart';


export class Application extends AppComponent {
  homePage = new HomePage(this.page);
  loginPage = new LoginPage(this.page);
  shoppingCart = new ShoppingCartPage(this.page);
}