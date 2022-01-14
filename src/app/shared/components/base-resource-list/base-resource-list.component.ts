import { Component, OnInit } from '@angular/core';
import { BaseResourceModel } from '../../models/base-resource.model';
import { BaseResouceService } from '../../services/base-resource.service';

@Component({
  template: ''
})

export abstract class BaseResourceListComponent<T extends BaseResourceModel> implements OnInit {

  resources: Array<T> = [];

  constructor(private baseResourceService: BaseResouceService<T>) { }

  ngOnInit() {
    this.baseResourceService.getAll().subscribe(
      resources => this.resources = resources,
      error => console.log('ERRO AO CARREGAR A LISTA', error)
    )
  }

  deleteResource(resource: T) {
    const confirmation = confirm("Tem certeza que deseja deletar este item ?");
    if (confirmation) {
      this.baseResourceService.delete(resource.id).subscribe(
        () => this.resources = this.resources.filter(element => element != resource),
        () => alert('Erro ao remover item.')
      )
    }
  }
}
