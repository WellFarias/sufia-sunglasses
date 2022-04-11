import { OnInit, Injectable } from '@angular/core';
import { GenericResourceModel } from '../../models/generic-resource.model';
import { GenericResouceService } from '../../services/generic-resource.service';

@Injectable()
export abstract class GenericResourceListComponent<T extends GenericResourceModel> implements OnInit {

    resources: Array<T> = [];

    constructor(private genericResourceService: GenericResouceService<T>) { }

    ngOnInit() {
        this.genericResourceService.getAll().subscribe(
            resources => this.resources = resources,
            error => console.log('ERRO AO CARREGAR A LISTA', error)
        );
    }

    deleteResource(resource: T) {
        const confirmation = confirm('Tem certeza que deseja deletar este item ?');
        if (confirmation) {
            this.genericResourceService.delete(resource.id).subscribe(
                () => this.resources = this.resources.filter(element => element !== resource),
                () => alert('Erro ao remover item.')
            );
        }
    }
}
