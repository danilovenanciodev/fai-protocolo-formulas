export interface BancoWellsRequest{
    distancia: number
    idade: number
    sexo: 'MASCULINO' | 'FEMININO'
}

export interface BancoWellsResponse{
    distancia: number
    classificacao: string
}

export class BancoWellsService{
    public bancoWells(data: BancoWellsRequest): BancoWellsResponse{
        let classificacao = ''
        let distancia = data.distancia
        let idade = data.idade
        let sexo = data.sexo

        classificacao = this.classificacao(distancia, idade, sexo) || ''

        return {
            distancia,
            classificacao
        }
    }

    private classificacao(valor: number, idade: number, sexo: 'MASCULINO' | 'FEMININO' ){
        let listaClassificacao = []

        if(sexo === 'MASCULINO'){
            listaClassificacao = this.listaClassificacaoHomem()
        }
        else if(sexo === 'FEMININO'){
            listaClassificacao = this.listaClassificacaoMulher()
        }

        listaClassificacao = this.listaClassificacaoHomem()
        listaClassificacao = listaClassificacao.filter(v => idade >= v.idadeInicio && idade <= v.idadeFim)
        let classificacao = listaClassificacao.find(v => valor >= v.valorInicio && valor <= v.valorFim)

        return classificacao?.classificacao
    }

    private listaClassificacaoHomem(){
        return [
            {
                codigo: "BANCO_WELLS_HOMEM_15_19",
                idadeInicio: 15,
                idadeFim: 19,
                valorInicio: 0,
                valorFim: 23,
                classificacao: "Ruim"
            },
            {
                codigo: "BANCO_WELLS_HOMEM_15_19",
                idadeInicio: 15,
                idadeFim: 19,
                valorInicio: 24,
                valorFim: 28,
                classificacao: "Abaixo da média "
            },
            {
                codigo: "BANCO_WELLS_HOMEM_15_19",
                idadeInicio: 15,
                idadeFim: 19,
                valorInicio: 29,
                valorFim: 33,
                classificacao: "Média"
            },
            {
                codigo: "BANCO_WELLS_HOMEM_15_19",
                idadeInicio: 15,
                idadeFim: 19,
                valorInicio: 34,
                valorFim: 38,
                classificacao: "Acima da média "
            },
            {
                codigo: "BANCO_WELLS_HOMEM_15_19",
                idadeInicio: 15,
                idadeFim: 19,
                valorInicio: 39,
                valorFim: 999,
                classificacao: "Excelente "
            },
            {
                codigo: "BANCO_WELLS_HOMEM_20_29",
                idadeInicio: 20,
                idadeFim: 29,
                valorInicio: 0,
                valorFim: 24,
                classificacao: "Ruim"
            },
            {
                codigo: "BANCO_WELLS_HOMEM_20_29",
                idadeInicio: 20,
                idadeFim: 29,
                valorInicio: 25,
                valorFim: 29,
                classificacao: "Abaixo da média "
            },
            {
                codigo: "BANCO_WELLS_HOMEM_20_29",
                idadeInicio: 20,
                idadeFim: 29,
                valorInicio: 30,
                valorFim: 33,
                classificacao: "Média"
            },
            {
                codigo: "BANCO_WELLS_HOMEM_20_29",
                idadeInicio: 20,
                idadeFim: 29,
                valorInicio: 34,
                valorFim: 39,
                classificacao: "Acima da média "
            },
            {
                codigo: "BANCO_WELLS_HOMEM_20_29",
                idadeInicio: 20,
                idadeFim: 29,
                valorInicio: 40,
                valorFim: 999,
                classificacao: "Excelente"
            },
            {
                codigo: "BANCO_WELLS_HOMEM_30_39",
                idadeInicio: 30,
                idadeFim: 39,
                valorInicio: 0,
                valorFim: 22,
                classificacao: "Ruim"
            },
            {
                codigo: "BANCO_WELLS_HOMEM_30_39",
                idadeInicio: 30,
                idadeFim: 39,
                valorInicio: 23,
                valorFim: 27,
                classificacao: "Abaixo da média "
            },
            {
                codigo: "BANCO_WELLS_HOMEM_30_39",
                idadeInicio: 30,
                idadeFim: 39,
                valorInicio: 28,
                valorFim: 32,
                classificacao: "Média"
            },
            {
                codigo: "BANCO_WELLS_HOMEM_30_39",
                idadeInicio: 30,
                idadeFim: 39,
                valorInicio: 33,
                valorFim: 37,
                classificacao: "Acima da média "
            },
            {
                codigo: "BANCO_WELLS_HOMEM_30_39",
                idadeInicio: 30,
                idadeFim: 39,
                valorInicio: 38,
                valorFim: 999,
                classificacao: "Excelente "
            },
            {
                codigo: "BANCO_WELLS_HOMEM_40_49",
                idadeInicio: 40,
                idadeFim: 49,
                valorInicio: 0,
                valorFim: 17,
                classificacao: "Ruim"
            },
            {
                codigo: "BANCO_WELLS_HOMEM_40_49",
                idadeInicio: 40,
                idadeFim: 49,
                valorInicio: 18,
                valorFim: 23,
                classificacao: "Abaixo da média "
            },
            {
                codigo: "BANCO_WELLS_HOMEM_40_49",
                idadeInicio: 40,
                idadeFim: 49,
                valorInicio: 24,
                valorFim: 28,
                classificacao: "Média"
            },
            {
                codigo: "BANCO_WELLS_HOMEM_40_49",
                idadeInicio: 40,
                idadeFim: 49,
                valorInicio: 29,
                valorFim: 34,
                classificacao: "Acima da média "
            },
            {
                codigo: "BANCO_WELLS_HOMEM_40_49",
                idadeInicio: 40,
                idadeFim: 49,
                valorInicio: 35,
                valorFim: 999,
                classificacao: "Excelente "
            },
            {
                codigo: "BANCO_WELLS_HOMEM_50_59",
                idadeInicio: 50,
                idadeFim: 59,
                valorInicio: 0,
                valorFim: 15,
                classificacao: "Ruim"
            },
            {
                codigo: "BANCO_WELLS_HOMEM_50_59",
                idadeInicio: 50,
                idadeFim: 59,
                valorInicio: 16,
                valorFim: 23,
                classificacao: "Abaixo da média "
            },
            {
                codigo: "BANCO_WELLS_HOMEM_50_59",
                idadeInicio: 50,
                idadeFim: 59,
                valorInicio: 24,
                valorFim: 27,
                classificacao: "Média"
            },
            {
                codigo: "BANCO_WELLS_HOMEM_50_59",
                idadeInicio: 50,
                idadeFim: 59,
                valorInicio: 28,
                valorFim: 34,
                classificacao: "Acima da média "
            },
            {
                codigo: "BANCO_WELLS_HOMEM_50_59",
                idadeInicio: 50,
                idadeFim: 59,
                valorInicio: 35,
                valorFim: 999,
                classificacao: "Excelente "
            },
            {
                codigo: "BANCO_WELLS_HOMEM_60_69",
                idadeInicio: 60,
                idadeFim: 69,
                valorInicio: 0,
                valorFim: 14,
                classificacao: "Ruim"
            },
            {
                codigo: "BANCO_WELLS_HOMEM_60_69",
                idadeInicio: 60,
                idadeFim: 69,
                valorInicio: 15,
                valorFim: 19,
                classificacao: "Abaixo da média "
            },
            {
                codigo: "BANCO_WELLS_HOMEM_60_69",
                idadeInicio: 60,
                idadeFim: 69,
                valorInicio: 20,
                valorFim: 24,
                classificacao: "Média"
            },
            {
                codigo: "BANCO_WELLS_HOMEM_60_69",
                idadeInicio: 60,
                idadeFim: 69,
                valorInicio: 25,
                valorFim: 32,
                classificacao: "Acima da média "
            },
            {
                codigo: "BANCO_WELLS_HOMEM_60_69",
                idadeInicio: 60,
                idadeFim: 69,
                valorInicio: 33,
                valorFim: 999,
                classificacao: "Excelente "
            },
        ]
    }

    private listaClassificacaoMulher(){
        return [
            {
                codigo: "BANCO_WELLS_MULHER_15_19",
                idadeInicio: 15,
                idadeFim: 19,
                valorInicio: 0,
                valorFim: 28,
                classificacao: "Ruim"
            },
            {
                codigo: "BANCO_WELLS_MULHER_15_19",
                idadeInicio: 15,
                idadeFim: 19,
                valorInicio: 29,
                valorFim: 33,
                classificacao: "Abaixo da média "
            },
            {
                codigo: "BANCO_WELLS_MULHER_15_19",
                idadeInicio: 15,
                idadeFim: 19,
                valorInicio: 34,
                valorFim: 37,
                classificacao: "Média "
            },
            {
                codigo: "BANCO_WELLS_MULHER_15_19",
                idadeInicio: 15,
                idadeFim: 19,
                valorInicio: 38,
                valorFim: 42,
                classificacao: "Acima da média "
            },
            {
                codigo: "BANCO_WELLS_MULHER_15_19",
                idadeInicio: 15,
                idadeFim: 19,
                valorInicio: 43,
                valorFim: 999,
                classificacao: "Excelente "
            },
            {
                codigo: "BANCO_WELLS_MULHER_20_29",
                idadeInicio: 20,
                idadeFim: 29,
                valorInicio: 0,
                valorFim: 27,
                classificacao: "Ruim"
            },
            {
                codigo: "BANCO_WELLS_MULHER_20_29",
                idadeInicio: 20,
                idadeFim: 29,
                valorInicio: 28,
                valorFim: 32,
                classificacao: "Abaixo da média "
            },
            {
                codigo: "BANCO_WELLS_MULHER_20_29",
                idadeInicio: 20,
                idadeFim: 29,
                valorInicio: 33,
                valorFim: 36,
                classificacao: "Média "
            },
            {
                codigo: "BANCO_WELLS_MULHER_20_29",
                idadeInicio: 20,
                idadeFim: 29,
                valorInicio: 37,
                valorFim: 40,
                classificacao: "Acima da média "
            },
            {
                codigo: "BANCO_WELLS_MULHER_20_29",
                idadeInicio: 20,
                idadeFim: 29,
                valorInicio: 41,
                valorFim: 999,
                classificacao: "Excelente "
            },
            {
                codigo: "BANCO_WELLS_MULHER_30_39",
                idadeInicio: 30,
                idadeFim: 39,
                valorInicio: 0,
                valorFim: 26,
                classificacao: "Ruim"
            },
            {
                codigo: "BANCO_WELLS_MULHER_30_39",
                idadeInicio: 30,
                idadeFim: 39,
                valorInicio: 27,
                valorFim: 31,
                classificacao: "Abaixo da média "
            },
            {
                codigo: "BANCO_WELLS_MULHER_30_39",
                idadeInicio: 30,
                idadeFim: 39,
                valorInicio: 32,
                valorFim: 35,
                classificacao: "Média "
            },
            {
                codigo: "BANCO_WELLS_MULHER_30_39",
                idadeInicio: 30,
                idadeFim: 39,
                valorInicio: 36,
                valorFim: 40,
                classificacao: "Acima da média "
            },
            {
                codigo: "BANCO_WELLS_MULHER_30_39",
                idadeInicio: 30,
                idadeFim: 39,
                valorInicio: 41,
                valorFim: 999,
                classificacao: "Excelente "
            },
            {
                codigo: "BANCO_WELLS_MULHER_40_49",
                idadeInicio: 40,
                idadeFim: 49,
                valorInicio: 0,
                valorFim: 24,
                classificacao: "Ruim"
            },
            {
                codigo: "BANCO_WELLS_MULHER_40_49",
                idadeInicio: 40,
                idadeFim: 49,
                valorInicio: 25,
                valorFim: 29,
                classificacao: "Abaixo da média "
            },
            {
                codigo: "BANCO_WELLS_MULHER_40_49",
                idadeInicio: 40,
                idadeFim: 49,
                valorInicio: 30,
                valorFim: 33,
                classificacao: "Média"
            },
            {
                codigo: "BANCO_WELLS_MULHER_40_49",
                idadeInicio: 40,
                idadeFim: 49,
                valorInicio: 34,
                valorFim: 37,
                classificacao: "Acima da média "
            },
            {
                codigo: "BANCO_WELLS_MULHER_40_49",
                idadeInicio: 40,
                idadeFim: 49,
                valorInicio: 38,
                valorFim: 999,
                classificacao: "Excelente "
            },
            {
                codigo: "BANCO_WELLS_MULHER_50_59",
                idadeInicio: 50,
                idadeFim: 59,
                valorInicio: 0,
                valorFim: 24,
                classificacao: "Ruim"
            },
            {
                codigo: "BANCO_WELLS_MULHER_50_59",
                idadeInicio: 50,
                idadeFim: 59,
                valorInicio: 25,
                valorFim: 29,
                classificacao: "Abaixo da média "
            },
            {
                codigo: "BANCO_WELLS_MULHER_50_59",
                idadeInicio: 50,
                idadeFim: 59,
                valorInicio: 30,
                valorFim: 32,
                classificacao: "Média "
            },
            {
                codigo: "BANCO_WELLS_MULHER_50_59",
                idadeInicio: 50,
                idadeFim: 59,
                valorInicio: 33,
                valorFim: 38,
                classificacao: "Acima da média "
            },
            {
                codigo: "BANCO_WELLS_MULHER_50_59",
                idadeInicio: 50,
                idadeFim: 59,
                valorInicio: 39,
                valorFim: 999,
                classificacao: "Excelente "
            },
            {
                codigo: "BANCO_WELLS_MULHER_60_69",
                idadeInicio: 60,
                idadeFim: 69,
                valorInicio: 0,
                valorFim: 22,
                classificacao: "Ruim"
            },
            {
                codigo: "BANCO_WELLS_MULHER_60_69",
                idadeInicio: 60,
                idadeFim: 69,
                valorInicio: 23,
                valorFim: 26,
                classificacao: "Abaixo da média "
            },
            {
                codigo: "BANCO_WELLS_MULHER_60_69",
                idadeInicio: 60,
                idadeFim: 69,
                valorInicio: 27,
                valorFim: 30,
                classificacao: "Média"
            },
            {
                codigo: "BANCO_WELLS_MULHER_60_69",
                idadeInicio: 60,
                idadeFim: 69,
                valorInicio: 31,
                valorFim: 34,
                classificacao: "Acima da média "
            },
            {
                codigo: "BANCO_WELLS_MULHER_60_69",
                idadeInicio: 60,
                idadeFim: 69,
                valorInicio: 35,
                valorFim: 999,
                classificacao: "Excelente"
            }
        ]
    }
}

