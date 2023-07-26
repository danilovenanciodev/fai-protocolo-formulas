export interface TesteFlexaoBracoReq{
    repeticoes: number
    idade: number
    sexo: 'MASCULINO' | 'FEMININO'
}

export class TesteFlexaoBraco{
    public testeFLexaoBraco(data: TesteFlexaoBracoReq){
        let classificacao = ''
        
        let repeticoes = data.repeticoes
        let idade = data.idade
        let sexo = data.sexo

        classificacao = this.classificacao(repeticoes, idade, sexo)  || ''

        return {
            repeticoes,
            classificacao
        }

    }

    private classificacao(valor: number, idade: number , sexo: 'MASCULINO' | 'FEMININO'){
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
                codigo: "TESTE_FLEXAO_BRACO_HOMEM_15_19",
                idadeInicio: 15,
                idadeFim: 19,
                valorInicio: 39,
                valorFim: 999,
                classificacao: "Excelente"
            },
            {
                codigo: "TESTE_FLEXAO_BRACO_HOMEM_15_19",
                idadeInicio: 15,
                idadeFim: 19,
                valorInicio: 29,
                valorFim: 38,
                classificacao: "Média +"
            },
            {
                codigo: "TESTE_FLEXAO_BRACO_HOMEM_15_19",
                idadeInicio: 15,
                idadeFim: 19,
                valorInicio: 23,
                valorFim: 28,
                classificacao: "Médio"
            },
            {
                codigo: "TESTE_FLEXAO_BRACO_HOMEM_15_19",
                idadeInicio: 15,
                idadeFim: 19,
                valorInicio: 28,
                valorFim: 22,
                classificacao: "Médio -"
            },
            {
                codigo: "TESTE_FLEXAO_BRACO_HOMEM_15_19",
                idadeInicio: 15,
                idadeFim: 19,
                valorInicio: 0,
                valorFim: 27,
                classificacao: "Fraco"
            },
            {
                codigo: "TESTE_FLEXAO_BRACO_HOMEM_20_29",
                idadeInicio: 20,
                idadeFim: 29,
                valorInicio: 36,
                valorFim: 999,
                classificacao: "Excelente"
            },
            {
                codigo: "TESTE_FLEXAO_BRACO_HOMEM_20_29",
                idadeInicio: 20,
                idadeFim: 29,
                valorInicio: 29,
                valorFim: 35,
                classificacao: "Média +"
            },
            {
                codigo: "TESTE_FLEXAO_BRACO_HOMEM_20_29",
                idadeInicio: 20,
                idadeFim: 29,
                valorInicio: 22,
                valorFim: 28,
                classificacao: "Médio"
            },
            {
                codigo: "TESTE_FLEXAO_BRACO_HOMEM_20_29",
                idadeInicio: 20,
                idadeFim: 29,
                valorInicio: 17,
                valorFim: 21,
                classificacao: "Médio -"
            },
            {
                codigo: "TESTE_FLEXAO_BRACO_HOMEM_20_29",
                idadeInicio: 20,
                idadeFim: 29,
                valorInicio: 0,
                valorFim: 16,
                classificacao: "Fraco"
            },
            {
                codigo: "TESTE_FLEXAO_BRACO_HOMEM_30_39",
                idadeInicio: 30,
                idadeFim: 39,
                valorInicio: 30,
                valorFim: 999,
                classificacao: "Excelente"
            },
            {
                codigo: "TESTE_FLEXAO_BRACO_HOMEM_30_39",
                idadeInicio: 30,
                idadeFim: 39,
                valorInicio: 22,
                valorFim: 29,
                classificacao: "Média +"
            },
            {
                codigo: "TESTE_FLEXAO_BRACO_HOMEM_30_39",
                idadeInicio: 30,
                idadeFim: 39,
                valorInicio: 17,
                valorFim: 21,
                classificacao: "Médio"
            },
            {
                codigo: "TESTE_FLEXAO_BRACO_HOMEM_30_39",
                idadeInicio: 30,
                idadeFim: 39,
                valorInicio: 12,
                valorFim: 16,
                classificacao: "Médio -"
            },
            {
                codigo: "TESTE_FLEXAO_BRACO_HOMEM_30_39",
                idadeInicio: 30,
                idadeFim: 39,
                valorInicio: 0,
                valorFim: 11,
                classificacao: "Fraco"
            },
            {
                codigo: "TESTE_FLEXAO_BRACO_HOMEM_40_49",
                idadeInicio: 40,
                idadeFim: 49,
                valorInicio: 22,
                valorFim: 999,
                classificacao: "Excelente"
            },
            {
                codigo: "TESTE_FLEXAO_BRACO_HOMEM_40_49",
                idadeInicio: 40,
                idadeFim: 49,
                valorInicio: 17,
                valorFim: 21,
                classificacao: "Média +"
            },
            {
                codigo: "TESTE_FLEXAO_BRACO_HOMEM_40_49",
                idadeInicio: 40,
                idadeFim: 49,
                valorInicio: 13,
                valorFim: 16,
                classificacao: "Médio"
            },
            {
                codigo: "TESTE_FLEXAO_BRACO_HOMEM_40_49",
                idadeInicio: 40,
                idadeFim: 49,
                valorInicio: 10,
                valorFim: 12,
                classificacao: "Médio -"
            },
            {
                codigo: "TESTE_FLEXAO_BRACO_HOMEM_40_49",
                idadeInicio: 40,
                idadeFim: 49,
                valorInicio: 0,
                valorFim: 9,
                classificacao: "Fraco"
            },
            {
                codigo: "TESTE_FLEXAO_BRACO_HOMEM_50_59",
                idadeInicio: 50,
                idadeFim: 59,
                valorInicio: 21,
                valorFim: 999,
                classificacao: "Excelente"
            },
            {
                codigo: "TESTE_FLEXAO_BRACO_HOMEM_50_59",
                idadeInicio: 50,
                idadeFim: 59,
                valorInicio: 13,
                valorFim: 20,
                classificacao: "Média +"
            },
            {
                codigo: "TESTE_FLEXAO_BRACO_HOMEM_50_59",
                idadeInicio: 50,
                idadeFim: 59,
                valorInicio: 10,
                valorFim: 12,
                classificacao: "Médio"
            },
            {
                codigo: "TESTE_FLEXAO_BRACO_HOMEM_50_59",
                idadeInicio: 50,
                idadeFim: 59,
                valorInicio: 7,
                valorFim: 9,
                classificacao: "Médio -"
            },
            {
                codigo: "TESTE_FLEXAO_BRACO_HOMEM_50_59",
                idadeInicio: 50,
                idadeFim: 59,
                valorInicio: 0,
                valorFim: 6,
                classificacao: "Fraco"
            },
            {
                codigo: "TESTE_FLEXAO_BRACO_HOMEM_60_69",
                idadeInicio: 60,
                idadeFim: 69,
                valorInicio: 18,
                valorFim: 999,
                classificacao: "Excelente"
            },
            {
                codigo: "TESTE_FLEXAO_BRACO_HOMEM_60_69",
                idadeInicio: 60,
                idadeFim: 69,
                valorInicio: 11,
                valorFim: 17,
                classificacao: "Média +"
            },
            {
                codigo: "TESTE_FLEXAO_BRACO_HOMEM_60_69",
                idadeInicio: 60,
                idadeFim: 69,
                valorInicio: 8,
                valorFim: 10,
                classificacao: "Médio"
            },
            {
                codigo: "TESTE_FLEXAO_BRACO_HOMEM_60_69",
                idadeInicio: 60,
                idadeFim: 69,
                valorInicio: 5,
                valorFim: 7,
                classificacao: "Médio -"
            },
            {
                codigo: "TESTE_FLEXAO_BRACO_HOMEM_60_69",
                idadeInicio: 60,
                idadeFim: 69,
                valorInicio: 0,
                valorFim: 4,
                classificacao: "Fraco"
            }
        ]
    }

    private listaClassificacaoMulher(){
        return [
            {
                codigo: "TESTE_FLEXAO_BRACO_MULHER_15_19",
                idadeInicio: 15,
                idadeFim: 19,
                valorInicio: 33,
                valorFim: 999,
                classificacao: "Excelente"
            },
            {
                codigo: "TESTE_FLEXAO_BRACO_MULHER_15_19",
                idadeInicio: 15,
                idadeFim: 19,
                valorInicio: 25,
                valorFim: 32,
                classificacao: "Média +"
            },
            {
                codigo: "TESTE_FLEXAO_BRACO_MULHER_15_19",
                idadeInicio: 15,
                idadeFim: 19,
                valorInicio: 18,
                valorFim: 24,
                classificacao: "Médio"
            },
            {
                codigo: "TESTE_FLEXAO_BRACO_MULHER_15_19",
                idadeInicio: 15,
                idadeFim: 19,
                valorInicio: 12,
                valorFim: 17,
                classificacao: "Médio -"
            },
            {
                codigo: "TESTE_FLEXAO_BRACO_MULHER_15_19",
                idadeInicio: 15,
                idadeFim: 19,
                valorInicio: 0,
                valorFim: 11,
                classificacao: "Fraco"
            },
            {
                codigo: "TESTE_FLEXAO_BRACO_MULHER_20_29",
                idadeInicio: 20,
                idadeFim: 29,
                valorInicio: 30,
                valorFim: 999,
                classificacao: "Excelente"
            },
            {
                codigo: "TESTE_FLEXAO_BRACO_MULHER_20_29",
                idadeInicio: 20,
                idadeFim: 29,
                valorInicio: 21,
                valorFim: 29,
                classificacao: "Média +"
            },
            {
                codigo: "TESTE_FLEXAO_BRACO_MULHER_20_29",
                idadeInicio: 20,
                idadeFim: 29,
                valorInicio: 15,
                valorFim: 20,
                classificacao: "Médio"
            },
            {
                codigo: "TESTE_FLEXAO_BRACO_MULHER_20_29",
                idadeInicio: 20,
                idadeFim: 29,
                valorInicio: 10,
                valorFim: 14,
                classificacao: "Médio -"
            },
            {
                codigo: "TESTE_FLEXAO_BRACO_MULHER_20_29",
                idadeInicio: 20,
                idadeFim: 29,
                valorInicio: 0,
                valorFim: 9,
                classificacao: "Fraco"
            },
            {
                codigo: "TESTE_FLEXAO_BRACO_MULHER_30_39",
                idadeInicio: 30,
                idadeFim: 39,
                valorInicio: 27,
                valorFim: 999,
                classificacao: "Excelente"
            },
            {
                codigo: "TESTE_FLEXAO_BRACO_MULHER_30_39",
                idadeInicio: 30,
                idadeFim: 39,
                valorInicio: 20,
                valorFim: 26,
                classificacao: "Média +"
            },
            {
                codigo: "TESTE_FLEXAO_BRACO_MULHER_30_39",
                idadeInicio: 30,
                idadeFim: 39,
                valorInicio: 13,
                valorFim: 19,
                classificacao: "Médio"
            },
            {
                codigo: "TESTE_FLEXAO_BRACO_MULHER_30_39",
                idadeInicio: 30,
                idadeFim: 39,
                valorInicio: 8,
                valorFim: 12,
                classificacao: "Médio -"
            },
            {
                codigo: "TESTE_FLEXAO_BRACO_MULHER_30_39",
                idadeInicio: 30,
                idadeFim: 39,
                valorInicio: 0,
                valorFim: 7,
                classificacao: "Fraco"
            },
            {
                codigo: "TESTE_FLEXAO_BRACO_MULHER_40_49",
                idadeInicio: 40,
                idadeFim: 49,
                valorInicio: 24,
                valorFim: 999,
                classificacao: "Excelente"
            },
            {
                codigo: "TESTE_FLEXAO_BRACO_MULHER_40_49",
                idadeInicio: 40,
                idadeFim: 49,
                valorInicio: 15,
                valorFim: 23,
                classificacao: "Média +"
            },
            {
                codigo: "TESTE_FLEXAO_BRACO_MULHER_40_49",
                idadeInicio: 40,
                idadeFim: 49,
                valorInicio: 11,
                valorFim: 14,
                classificacao: "Médio"
            },
            {
                codigo: "TESTE_FLEXAO_BRACO_MULHER_40_49",
                idadeInicio: 40,
                idadeFim: 49,
                valorInicio: 8,
                valorFim: 12,
                classificacao: "Médio -"
            },
            {
                codigo: "TESTE_FLEXAO_BRACO_MULHER_40_49",
                idadeInicio: 40,
                idadeFim: 49,
                valorInicio: 0,
                valorFim: 7,
                classificacao: "Fraco"
            },
            {
                codigo: "TESTE_FLEXAO_BRACO_MULHER_50_59",
                idadeInicio: 50,
                idadeFim: 59,
                valorInicio: 21,
                valorFim: 999,
                classificacao: "Excelente"
            },
            {
                codigo: "TESTE_FLEXAO_BRACO_MULHER_50_59",
                idadeInicio: 50,
                idadeFim: 59,
                valorInicio: 11,
                valorFim: 20,
                classificacao: "Média +"
            },
            {
                codigo: "TESTE_FLEXAO_BRACO_MULHER_50_59",
                idadeInicio: 50,
                idadeFim: 59,
                valorInicio: 7,
                valorFim: 10,
                classificacao: "Médio"
            },
            {
                codigo: "TESTE_FLEXAO_BRACO_MULHER_50_59",
                idadeInicio: 50,
                idadeFim: 59,
                valorInicio: 2,
                valorFim: 6,
                classificacao: "Médio -"
            },
            {
                codigo: "TESTE_FLEXAO_BRACO_MULHER_50_59",
                idadeInicio: 50,
                idadeFim: 59,
                valorInicio: 0,
                valorFim: 1,
                classificacao: "Fraco"
            },
            {
                codigo: "TESTE_FLEXAO_BRACO_MULHER_60_69",
                idadeInicio: 60,
                idadeFim: 69,
                valorInicio: 17,
                valorFim: 999,
                classificacao: "Excelente"
            },
            {
                codigo: "TESTE_FLEXAO_BRACO_MULHER_60_69",
                idadeInicio: 60,
                idadeFim: 69,
                valorInicio: 12,
                valorFim: 16,
                classificacao: "Média +"
            },
            {
                codigo: "TESTE_FLEXAO_BRACO_MULHER_60_69",
                idadeInicio: 60,
                idadeFim: 69,
                valorInicio: 5,
                valorFim: 11,
                classificacao: "Médio"
            },
            {
                codigo: "TESTE_FLEXAO_BRACO_MULHER_60_69",
                idadeInicio: 60,
                idadeFim: 69,
                valorInicio: 2,
                valorFim: 4,
                classificacao: "Médio -"
            },
            {
                codigo: "TESTE_FLEXAO_BRACO_MULHER_60_69",
                idadeInicio: 60,
                idadeFim: 69,
                valorInicio: 0,
                valorFim: 1,
                classificacao: "Fraco"
            }
        ]
    }
}

