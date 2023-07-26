export interface RcqReq{
    cintura: number
    quadril: number
    idade: number
    sexo: 'MASCULINO' | 'FEMININO'
}

export class RcqService{
    public rcq(data: RcqReq){
        let rcq = 0
        let classificacao = ''
        let cintura = data.cintura
        let quadril = data.quadril
        let idade = data.idade
        let sexo = data.sexo

        rcq = cintura / quadril
        classificacao = this.classificacao(rcq, idade, sexo) || ''

        return {
            rcq: parseFloat(rcq.toFixed(2)),
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
                codigo: 'HOMEM_20_29',
                idadeInicio: 20,
                idadeFim: 29,
                valorInicio: 0,
                valorFim: 0.82,
                classificacao: 'Baixo'
            },
            {
                codigo: 'HOMEM_20_29',
                idadeInicio: 20,
                idadeFim: 29,
                valorInicio: 0.83,
                valorFim: 0.88,
                classificacao: 'Moderado'
            },
            {
                codigo: 'HOMEM_20_29',
                idadeInicio: 20,
                idadeFim: 29,
                valorInicio: 0.89,
                valorFim: 0.94,
                classificacao: 'Alto'
            },
            {
                codigo: 'HOMEM_20_29',
                idadeInicio: 20,
                idadeFim: 29,
                valorInicio: 0.95,
                valorFim: 999,
                classificacao: 'Muito alto'
            },
            {
                codigo: 'HOMEM_30_39',
                idadeInicio: 30,
                idadeFim: 39,
                valorInicio: 0,
                valorFim: 0.83,
                classificacao: 'Baixo'
            },
            {
                codigo: 'HOMEM_30_39',
                idadeInicio: 30,
                idadeFim: 39,
                valorInicio: 0.84,
                valorFim: 0.91,
                classificacao: 'Moderado'
            },
            {
                codigo: 'HOMEM_30_39',
                idadeInicio: 30,
                idadeFim: 39,
                valorInicio: 0.92,
                valorFim: 0.96,
                classificacao: 'Alto'
            },
            {
                codigo: 'HOMEM_30_39',
                idadeInicio: 30,
                idadeFim: 39,
                valorInicio: 0.97,
                valorFim: 999,
                classificacao: 'Muito alto'
            },
            {
                codigo: 'HOMEM_40_49',
                idadeInicio: 40,
                idadeFim: 49,
                valorInicio: 0,
                valorFim: 0.87,
                classificacao: 'Baixo'
            },
            {
                codigo: 'HOMEM_40_49',
                idadeInicio: 40,
                idadeFim: 49,
                valorInicio: 0.88,
                valorFim: 0.95,
                classificacao: 'Moderado'
            },
            {
                codigo: 'HOMEM_40_49',
                idadeInicio: 40,
                idadeFim: 49,
                valorInicio: 0.96,
                valorFim: 1,
                classificacao: 'Alto'
            },
            {
                codigo: 'HOMEM_40_49',
                idadeInicio: 40,
                idadeFim: 49,
                valorInicio: 1.01,
                valorFim: 999,
                classificacao: 'Muito alto'
            },
            {
                codigo: 'HOMEM_50_59',
                idadeInicio: 50,
                idadeFim: 59,
                valorInicio: 0,
                valorFim: 0.89,
                classificacao: 'Baixo'
            },
            {
                codigo: 'HOMEM_50_59',
                idadeInicio: 50,
                idadeFim: 59,
                valorInicio: 0.90,
                valorFim: 0.96,
                classificacao: 'Moderado'
            },
            {
                codigo: 'HOMEM_50_59',
                idadeInicio: 50,
                idadeFim: 59,
                valorInicio: 0.97,
                valorFim: 1.02,
                classificacao: 'Alto'
            },
            {
                codigo: 'HOMEM_50_59',
                idadeInicio: 50,
                idadeFim: 59,
                valorInicio: 1.03,
                valorFim: 999,
                classificacao: 'Muito alto'
            },
            {
                codigo: 'HOMEM_60_69',
                idadeInicio: 60,
                idadeFim: 69,
                valorInicio: 0,
                valorFim: 0.90,
                classificacao: 'Baixo'
            },
            {
                codigo: 'HOMEM_60_69',
                idadeInicio: 60,
                idadeFim: 69,
                valorInicio: 0.91,
                valorFim: 0.98,
                classificacao: 'Moderado'
            },
            {
                codigo: 'HOMEM_60_69',
                idadeInicio: 60,
                idadeFim: 69,
                valorInicio: 0.99,
                valorFim: 1.03,
                classificacao: 'Alto'
            },
            {
                codigo: 'HOMEM_60_69',
                idadeInicio: 60,
                idadeFim: 69,
                valorInicio: 1.04,
                valorFim: 999,
                classificacao: 'Muito alto'
            },
        ]
    }

    private listaClassificacaoMulher(){
        return [
            {
                codigo: 'MULHER_20_29',
                idadeInicio: 20,
                idadeFim: 29,
                valorInicio: 0,
                valorFim: 0.70,
                classificacao: 'Baixo'
            },
            {
                codigo: 'MULHER_20_29',
                idadeInicio: 20,
                idadeFim: 29,
                valorInicio: 0.71,
                valorFim: 0.77,
                classificacao: 'Moderado'
            },
            {
                codigo: 'MULHER_20_29',
                idadeInicio: 20,
                idadeFim: 29,
                valorInicio: 0.78,
                valorFim: 0.82,
                classificacao: 'Alto'
            },
            {
                codigo: 'MULHER_20_29',
                idadeInicio: 20,
                idadeFim: 29,
                valorInicio: 0.83,
                valorFim: 999,
                classificacao: 'Muito alto'
            },
            {
                codigo: 'MULHER_30_39',
                idadeInicio: 30,
                idadeFim: 39,
                valorInicio: 0,
                valorFim: 0.71,
                classificacao: 'Baixo'
            },
            {
                codigo: 'MULHER_30_39',
                idadeInicio: 30,
                idadeFim: 39,
                valorInicio: 0.72,
                valorFim: 0.78,
                classificacao: 'Moderado'
            },
            {
                codigo: 'MULHER_30_39',
                idadeInicio: 30,
                idadeFim: 39,
                valorInicio: 0.79,
                valorFim: 0.84,
                classificacao: 'Alto'
            },
            {
                codigo: 'MULHER_30_39',
                idadeInicio: 30,
                idadeFim: 39,
                valorInicio: 0.85,
                valorFim: 999,
                classificacao: 'Muito alto'
            },
            {
                codigo: 'MULHER_40_49',
                idadeInicio: 40,
                idadeFim: 49,
                valorInicio: 0,
                valorFim: 0.72,
                classificacao: 'Baixo'
            },
            {
                codigo: 'MULHER_40_49',
                idadeInicio: 40,
                idadeFim: 49,
                valorInicio: 0.73,
                valorFim: 0.79,
                classificacao: 'Moderado'
            },
            {
                codigo: 'MULHER_40_49',
                idadeInicio: 40,
                idadeFim: 49,
                valorInicio: 0.80,
                valorFim: 0.87,
                classificacao: 'Alto'
            },
            {
                codigo: 'MULHER_40_49',
                idadeInicio: 40,
                idadeFim: 49,
                valorInicio: 0.88,
                valorFim: 999,
                classificacao: 'Muito alto'
            },
            {
                codigo: 'MULHER_50_59',
                idadeInicio: 50,
                idadeFim: 59,
                valorInicio: 0,
                valorFim: 0.73,
                classificacao: 'Baixo'
            },
            {
                codigo: 'MULHER_50_59',
                idadeInicio: 50,
                idadeFim: 59,
                valorInicio: 0.74,
                valorFim: 0.81,
                classificacao: 'Moderado'
            },
            {
                codigo: 'MULHER_50_59',
                idadeInicio: 50,
                idadeFim: 59,
                valorInicio: 0.82,
                valorFim: 0.88,
                classificacao: 'Alto'
            },
            {
                codigo: 'MULHER_50_59',
                idadeInicio: 50,
                idadeFim: 59,
                valorInicio: 0.89,
                valorFim: 999,
                classificacao: 'Muito alto'
            },
            {
                codigo: 'MULHER_60_69',
                idadeInicio: 60,
                idadeFim: 69,
                valorInicio: 0,
                valorFim: 0.75,
                classificacao: 'Baixo'
            },
            {
                codigo: 'MULHER_60_69',
                idadeInicio: 60,
                idadeFim: 69,
                valorInicio: 0.76,
                valorFim: 0.83,
                classificacao: 'Moderado'
            },
            {
                codigo: 'MULHER_60_69',
                idadeInicio: 60,
                idadeFim: 69,
                valorInicio: 0.84,
                valorFim: 0.90,
                classificacao: 'Alto'
            },
            {
                codigo: 'MULHER_60_69',
                idadeInicio: 60,
                idadeFim: 69,
                valorInicio: 0.91,
                valorFim: 999,
                classificacao: 'Muito alto'
            },
        ]
    }
}

