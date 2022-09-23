import { Component } from '@angular/core';
import { Message } from './messages/message.model'; 
import { MessageService } from './messages/message-services';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers: [MessageService]
})
export class AppComponent {

    nomeNgSwitch: string = "";
    valorNgSwitch: number;

    mostrarElemento: boolean = true;
    onMudaMostrarElemento(){
        this.mostrarElemento = !this.mostrarElemento;
    }

    messageS: Message[] = [ new Message("Texto da mensagem", "Luis Henrique"),
                            new Message("Texto da mensagem 2", "Luis Fernando"),
                            new Message("Texto da mensagem 3", "Carlos Eduardo")
    ];
};
