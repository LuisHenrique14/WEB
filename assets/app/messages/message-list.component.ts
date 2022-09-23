import { Component } from "@angular/core";
import { MessageService } from "./message-services";
import { Message } from "./message.model";

@Component({
    selector: 'app-message-list',
    template: `
        <div class="col-md-8 col-md-offset-2">
            <app-message [messageVarClasse]="msg"
                (editClicked_MessageMetodoClasse)="msg.content = $event"
                *ngFor="let msg of messageS">
            </app-message>
        </div>
    `,
    /*providers: [MessageService]*/
})

export class MessageListComponent implements Oninit {
    messageS: Message[] = [ new Message("Texto da Mensagem-LIST-Comp", "LuisHenrique-LIST-Comp"),
                            new Message("Texto 2 da Mensagem-LIST-Comp", "MeloNunes-LIST-Comp"),                        
                            new Message("Texto 3 da Mensagem-LIST-Comp", "LHMN-LIST-Comp")
                           ];

    constructor (private messageService: MessageService) { }

    ngOnInit(): void {
        this.messageS = this.messageService.getMessage();
    }
}