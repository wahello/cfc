import {MODIFICA_TIME} from '../actions/types';

// acao utilizada no controle do state que contem o time montado
export const modificaTime = (
                                apelido, 
                                atletaId,
                                esquemaId,
                                capitao,
                            ) => {
    return{
      type:MODIFICA_TIME,
      apelido,
      atletaId,
      esquemaId,
      capitao,
    }
  }