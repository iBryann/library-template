/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IUser {
  id: number;
  idOrigem: any;
  tipoProva: number;
  nome: string;
  email: string;
  cpf: string;
  celular: string;
  credito: number;
  foto: string;
  dataCriacao: string;
  dataAtualizacao: string;
  emailp4ed: string;
  sexo: any;
  responsavelId: any;
  responsavelSecundarioId: any;
  primeiroAcesso: boolean;
  emailboasvindas: boolean;
  status: boolean;
  transctionsCode: string;
  inscricao: string;
  azureadUpdated: boolean;
  qtdPular: any;
  dadosValidados: boolean;
  usuarioPerfilPoliedro: any[];
  escolas: ISchool[];
  dependentes: any[];
  responsaveis: any[];
  licencas: any;
  revisaoDadosMaxPular: number;
}

export interface ISchool {
  id: number;
  idPerfil: number;
  idFuncao: any;
  idEscola: number;
  idRedeEscolar: any;
  idUsuario: number;
  idUnidade: any;
  idTurma: any;
  typePerfil: number;
  ativo: string;
  dataAceite: any;
  excluido: boolean;
  dataExclusao: any;
  dataCriacao: string;
  dataInativacao: any;
  edrosId: any;
  matricula: string;
  inscricao: string;
  acessibilidade: any;
  escola: ISchool2;
  unidade: any;
  perfil: IProfile;
  funcao: any;
  turma: any;
  permissoesGrupoAcesso: IAccessGroupPermissions[];
}

export interface ISchool2 {
  id: number;
  idRedeEscolar: any;
  cnpj: string;
  unidadeEscolar: string;
  telefone: string;
  logo: string;
  idEscolaSf: string;
  email: any;
  nomeConta: string;
  descricao: string;
  cidade: string;
  anoLetivoPadrao: number;
  ativo: number;
  tipoEscola: number;
  consultorComercial: string;
  emailconsultorComercial: string;
  idMatriz: any;
  tipoSalesforce: any;
  bairro: string;
  estado: string;
  segmentosAtivos: string[];
  coordenadorPedagogico: any;
  dataCriacao: string;
  dataAtualizacao: string;
  idPedidoColecao: any;
}

export interface IProfile {
  id: number;
  nome: string;
  ativo: string;
  dataCriacao: string;
  dataAtualizacao: string;
  dataInativacao: any;
  idPefilTemplate: any;
  idRedeEscolar: any;
  idEscola: any;
  ordemPerfil: number;
}

export interface IAccessGroupPermissions {
  grupo: string;
  visualizar: boolean;
  administrar: boolean;
}
