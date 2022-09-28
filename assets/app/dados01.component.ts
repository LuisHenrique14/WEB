import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
    selector: 'app-dados01',
    template: `
    <p> === Dados 01 === </p>
    <div class="col-md-8 col-md-offset-2">
    <form (ngSubmit)="onSubmit(refLocalFormDrivenAtiv)" #refLocalFormDrivenAtiv="ngForm" ngNativeValidate>
        <div class="form-group">
            <label>Nome</label>
            <input type="text"
                    id="myContentngDrivenAtivFormNome"
                    class="form-control"
                    ngModel
                    name="myContentngDrivenAtivFormNome"
                    required>
        </div>
        <button type="submit" class="btn btn-primary">Save myContentDrivenAtivForm</button>
    </form>
    <br/>
    <strong> ==== RELATÓRIO myContentngDrivenAtivForm ===</strong> <br/>
    <br>
    nome: {{ nome }} <br/>
    <br>
    <strong> ============================================</strong> <br/>
    <br>
    <br>
    </div>
    `
})

export class DadosComponent01{
    nome: string;
    onSubmit(form: NgForm){
        this.nome = form.value.myContentngDrivenAtivFormNome;
    }
}