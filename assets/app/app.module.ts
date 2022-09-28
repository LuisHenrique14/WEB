import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from "./app.component";
import { MessageComponent } from './messages/message.component';
import { MessageListComponent } from './messages/message-list.component';
import { MessageInputComponent } from './messages/message-input.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthenticationComponent } from './auth/authentication.component';
import { HeaderComponent } from './header.component';
import { FormularioDrivenAtivComponent } from './messages/formularioDrivenAtiv.component';
import { myrouting } from './app.routing';
import { SignupComponent } from './auth/signup.component';
import { LogoutComponent } from './auth/logout.component';
import { SigninComponent } from './auth/signin.component';
import { DadosComponent01 } from './dados01.component';

@NgModule({
    declarations: [
        AppComponent,
        MessageComponent,
        MessageListComponent,
        MessageInputComponent,
        MessagesComponent,
        AuthenticationComponent,
        HeaderComponent,
        FormularioDrivenAtivComponent
        LogoutComponent,
        SigninComponent,
        SignupComponent,
        DadosComponent01,
    ],
    imports: [BrowserModule, FormsModule, myrouting],
    bootstrap: [AppComponent]
})
export class AppModule {

}