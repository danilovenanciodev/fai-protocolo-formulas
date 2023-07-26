export interface Vo2MaxReq{
    distancia: number
    idade: number
    sexo: 'MASCULINO' | 'FEMININO'
}

export class Vo2MaxService{
    public vo2max(data: Vo2MaxReq){
        let rcq = 0
        let classificacao = ''
        let distancia = data.distancia
        let idade =  data.idade
        let sexo = data.sexo

        const vo2max = parseFloat(((distancia - 504.1) / 42.2).toFixed(2))
        
        classificacao = this.classificacao(vo2max, idade, sexo) || ''

        return {
            vo2max,
            distancia,
            classificacao,
        }
    }

    private classificacao(valor: number, idade: number, sexo: 'MASCULINO' | 'FEMININO' ){
        let listaClassificacao: any[] = []

        if(sexo === 'MASCULINO'){
            listaClassificacao = this.listaClassificacaoHomem()
        }
        else if(sexo === 'FEMININO'){
            listaClassificacao = this.listaClassificacaoMulher()
        }

        listaClassificacao = listaClassificacao.filter(v => idade >= v.idadeInicio && idade <= v.idadeFim)
        let classificacao = listaClassificacao.find(v => valor >= v.valorInicio && valor <= v.valorFim)

        return classificacao?.classificacao
    }

    private listaClassificacaoHomem(){
        return [
            {
                codigo: "VO2MAX_MULHER_20_29",
                idadeInicio: 20,
                idadeFim: 29,
                valorInicio: 0,
                valorFim: 23,
                classificacao: "Muito Ruim"
            },
        ]
    }

    private listaClassificacaoMulher(){
        return [
            {
                codigo: "VO2MAX_MULHER_20_29",
                idadeInicio: 20,
                idadeFim: 29,
                valorInicio: 0,
                valorFim: 23.99,
                classificacao: "Muito Ruim"
            },
            {
                codigo: "VO2MAX_MULHER_20_29",
                idadeInicio: 20,
                idadeFim: 29,
                valorInicio: 24,
                valorFim: 30.99,
                classificacao: "Ruim"
            },
            {
                codigo: "VO2MAX_MULHER_20_29",
                idadeInicio: 20,
                idadeFim: 29,
                valorInicio: 31,
                valorFim: 37.99,
                classificacao: "Regular"
            },
            {
                codigo: "VO2MAX_MULHER_20_29",
                idadeInicio: 20,
                idadeFim: 29,
                valorInicio: 38,
                valorFim: 48.99,
                classificacao: "Bom"
            },
            {
                codigo: "VO2MAX_MULHER_20_29",
                idadeInicio: 20,
                idadeFim: 29,
                valorInicio: 49,
                valorFim: 999,
                classificacao: "Execelente"
            },
            {
                codigo: "VO2MAX_MULHER_30_39",
                idadeInicio: 30,
                idadeFim: 39,
                valorInicio: 0,
                valorFim: 19.99,
                classificacao: "Muito Ruim"
            },
            {
                codigo: "VO2MAX_MULHER_30_39",
                idadeInicio: 30,
                idadeFim: 39,
                valorInicio: 20,
                valorFim: 27.99,
                classificacao: "Ruim"
            },
            {
                codigo: "VO2MAX_MULHER_30_39",
                idadeInicio: 30,
                idadeFim: 39,
                valorInicio: 28,
                valorFim: 33.99,
                classificacao: "Regular"
            },
            {
                codigo: "VO2MAX_MULHER_30_39",
                idadeInicio: 30,
                idadeFim: 39,
                valorInicio: 34,
                valorFim: 44.99,
                classificacao: "Bom"
            },
            {
                codigo: "VO2MAX_MULHER_30_39",
                idadeInicio: 30,
                idadeFim: 39,
                valorInicio: 45,
                valorFim: 999,
                classificacao: "Execelente"
            },
            {
                codigo: "VO2MAX_MULHER_40_49",
                idadeInicio: 40,
                idadeFim: 49,
                valorInicio: 0,
                valorFim: 16.99,
                classificacao: "Muito Ruim"
            },
            {
                codigo: "VO2MAX_MULHER_40_49",
                idadeInicio: 40,
                idadeFim: 49,
                valorInicio: 17,
                valorFim: 23.99,
                classificacao: "Ruim"
            },
            {
                codigo: "VO2MAX_MULHER_40_49",
                idadeInicio: 40,
                idadeFim: 49,
                valorInicio: 24,
                valorFim: 30.99,
                classificacao: "Regular"
            },
            {
                codigo: "VO2MAX_MULHER_40_49",
                idadeInicio: 40,
                idadeFim: 49,
                valorInicio: 31,
                valorFim: 41.99,
                classificacao: "Bom"
            },
            {
                codigo: "VO2MAX_MULHER_40_49",
                idadeInicio: 40,
                idadeFim: 49,
                valorInicio: 42,
                valorFim: 999,
                classificacao: "Execelente"
            },
            {
                codigo: "VO2MAX_MULHER_50_59",
                idadeInicio: 50,
                idadeFim: 59,
                valorInicio: 0,
                valorFim: 14.99,
                classificacao: "Muito Ruim"
            },
            {
                codigo: "VO2MAX_MULHER_50_59",
                idadeInicio: 50,
                idadeFim: 59,
                valorInicio: 15,
                valorFim: 20.99,
                classificacao: "Ruim"
            },
            {
                codigo: "VO2MAX_MULHER_50_59",
                idadeInicio: 50,
                idadeFim: 59,
                valorInicio: 21,
                valorFim: 27.99,
                classificacao: "Regular"
            },
            {
                codigo: "VO2MAX_MULHER_50_59",
                idadeInicio: 50,
                idadeFim: 59,
                valorInicio: 28,
                valorFim: 37.99,
                classificacao: "Bom"
            },
            {
                codigo: "VO2MAX_MULHER_50_59",
                idadeInicio: 50,
                idadeFim: 59,
                valorInicio: 38,
                valorFim: 999,
                classificacao: "Execelente"
            },
            {
                codigo: "VO2MAX_MULHER_60_69",
                idadeInicio: 60,
                idadeFim: 69,
                valorInicio: 0,
                valorFim: 12.99,
                classificacao: "Muito Ruim"
            },
            {
                codigo: "VO2MAX_MULHER_60_69",
                idadeInicio: 60,
                idadeFim: 69,
                valorInicio: 13,
                valorFim: 17.99,
                classificacao: "Ruim"
            },
            {
                codigo: "VO2MAX_MULHER_60_69",
                idadeInicio: 60,
                idadeFim: 69,
                valorInicio: 18,
                valorFim: 23.99,
                classificacao: "Regular"
            },
            {
                codigo: "VO2MAX_MULHER_60_69",
                idadeInicio: 60,
                idadeFim: 69,
                valorInicio: 24,
                valorFim: 34.99,
                classificacao: "Bom"
            },
            {
                codigo: "VO2MAX_MULHER_60_69",
                idadeInicio: 60,
                idadeFim: 69,
                valorInicio: 35,
                valorFim: 999,
                classificacao: "Execelente"
            }
        ]
    }
}

