import { OnInit, AfterContentChecked, Injector, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { GenericResourceModel } from '../../models/generic-resource.model';
import { GenericResouceService } from '../../services/generic-resource.service';
import { switchMap } from "rxjs/operators";

@Injectable()
export abstract class GenericFormComponent<T extends GenericResourceModel> implements OnInit, AfterContentChecked {

    currentAction: string;
    resourceForm: FormGroup;
    pageTitle: string;
    serverErrorMessages: Array<string> = null;
    submittingForm: boolean = false;

    protected route: ActivatedRoute;
    protected router: Router;
    protected formBuilder: FormBuilder;

    constructor(
        protected injector: Injector,
        public resource: T,
        protected resourceService: GenericResouceService<T>,
        protected jsonDataResourceFn: (jsonData: any) => T
    ) {
        this.route = injector.get(ActivatedRoute);
        this.router = injector.get(Router);
        this.formBuilder = injector.get(FormBuilder);
    }

    ngOnInit(): void {
        this.setCurrentAction();
        this.buildResourceForm();
        // this.loadResource();
    }

    ngAfterContentChecked(): void {
        this.setPageTitle();
    }

    submitForm(): void {
        this.submittingForm = true;
        this.createResource();
        // if(this.currentAction == "create")
        //     this.createResource();
        // else
        //     this.updateResource();
    }

    protected setCurrentAction(): void {
        if(this.route.snapshot.url[0].path == "create")
            this.currentAction = "create"
        else
            this.currentAction = "edit"
    }

    // protected loadResource(): void {
    //     if (this.currentAction == "edit") {
    //         this.route.paramMap.pipe(switchMap(params => this.resourceService.getById(params.get("id")))).subscribe(
    //             (resource) => {
    //                 this.resource = resource;
    //                 this.resourceForm.patchValue(resource)
    //             },

    //             (error) => alert('Ocorreu um erro no servidor, tente mais tarde.')
    //         )
    //     }
    // }

    protected setPageTitle(): void {
        if (this.currentAction == 'create')
            this.pageTitle = this.creationPageTitle();
        else {
            this.pageTitle = this.editionPageTitle();
        }
    }

    protected creationPageTitle(): string {
        return "Cadastrar um "
    }

    protected editionPageTitle(): string {
        return "Editar "
    }

    protected createResource(): void {
        const resource: T = this.jsonDataResourceFn(this.resourceForm.value);
        this.resourceService.create(resource).subscribe(
            resource => {
                alert('cadastrado com sucesso !!'),
                this.resourceForm.reset();
            },
            error => console.log(error)
        )
    }

    protected updateResource(): void {
        const resource: T = this.jsonDataResourceFn(this.resourceForm.value);
        this.resourceService.update(resource).subscribe(
            resource => console.log(resource),
            error => console.log(error)
        )
    }

    // protected actionsForSuccess(resource: T): void {
    //     // toastr.success("Solicitação processada com sucesso!");
    //     const baseComponentPath: string = this.route.snapshot.parent.url[0].path;
    //     this.router.navigateByUrl(baseComponentPath, {skipLocationChange: true}).then(
    //         () => this.router.navigate([baseComponentPath, resource.id, "edit"])
    //     )
    // }

    // protected actionsForError(error): void {
    //     // toastr.error("Ocorreu um erro ao processar a sua solicitação!");
    //     this.submittingForm = false;
    //     if(error.status === 422)
    //         this.serverErrorMessages = JSON.parse(error._body).errors;
    //     else
    //         this.serverErrorMessages = ["Falha na comunicação com o servidor. Por favor, tente mais tarde."];
    // }

    protected abstract buildResourceForm(): void;
}
