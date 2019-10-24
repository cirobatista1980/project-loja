import Autor from './autor';
import Tag from './tag';

export default class Artigo {
  Id: number;
  AutorId: number;
  DataAlteracao: Date;
  DataPublicacao: Date;
  Titulo: string;
  Descricao: string;
  Conteudo: string;
  Autor: Autor;
  Tags: Tag[];
}
