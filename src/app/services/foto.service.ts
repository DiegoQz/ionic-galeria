import { Injectable } from '@angular/core';
import { Plugins, CamaraResultType, Capacitor, FilesystemDirectory, 
CamaraFoto, CamaraSource} from '@capacitor/core';

const{Camara, Filesystem, Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class FotoService {

  constructor() { }

  public async addNuevaGaleria(){
    const captureFoto= await Camara.getFoto({
      resultType: CamaraResultType.Uri,
      source: CamaraSource.Camara,
      quality: 100
     });
  }
 
}
