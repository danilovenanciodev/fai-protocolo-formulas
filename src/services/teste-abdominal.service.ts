export interface TesteAbdominal{
    repeticoes: number
    idade: number
    sexo: 'MASCULINO' | 'FEMININO'
}

export class TesteAbdominalService{
    public testeAbdominalUmMinuto(data: TesteAbdominal){
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
                codigo: "TESTE_ABDOMINAL_1_MINUTO_HOMEM_18_25",
                idadeInicio: 18,
                idadeFim: 25,
                valorInicio: 50,
                valorFim: 60,
                classificacao: "Excelente"
            },
            {
                codigo: "TESTE_ABDOMINAL_1_MINUTO_HOMEM_18_25",
                idadeInicio: 18,
                idadeFim: 25,
                valorInicio: 45,
                valorFim: 48,
                classificacao: "Bom"
            },
            {
                codigo: "TESTE_ABDOMINAL_1_MINUTO_HOMEM_18_25",
                idadeInicio: 18,
                idadeFim: 25,
                valorInicio: 40,
                valorFim: 42,
                classificacao: "Média +"
            },
            {
                codigo: "TESTE_ABDOMINAL_1_MINUTO_HOMEM_18_25",
                idadeInicio: 18,
                idadeFim: 25,
                valorInicio: 36,
                valorFim: 38,
                classificacao: "Média"
            },
            {
                codigo: "TESTE_ABDOMINAL_1_MINUTO_HOMEM_18_25",
                idadeInicio: 18,
                idadeFim: 25,
                valorInicio: 32,
                valorFim: 34,
                classificacao: "Média - "
            },
            {
                codigo: "TESTE_ABDOMINAL_1_MINUTO_HOMEM_18_25",
                idadeInicio: 18,
                idadeFim: 25,
                valorInicio: 26,
                valorFim: 30,
                classificacao: "Fraco"
            },
            {
                codigo: "TESTE_ABDOMINAL_1_MINUTO_HOMEM_18_25",
                idadeInicio: 18,
                idadeFim: 25,
                valorInicio: 12,
                valorFim: 24,
                classificacao: "Muito Fraco"
            },
            {
                codigo: "TESTE_ABDOMINAL_1_MINUTO_HOMEM_26_35",
                idadeInicio: 26,
                idadeFim: 35,
                valorInicio: 46,
                valorFim: 55,
                classificacao: "Excelente"
            },
            {
                codigo: "TESTE_ABDOMINAL_1_MINUTO_HOMEM_26_35",
                idadeInicio: 26,
                idadeFim: 35,
                valorInicio: 41,
                valorFim: 45,
                classificacao: "Bom"
            },
            {
                codigo: "TESTE_ABDOMINAL_1_MINUTO_HOMEM_26_35",
                idadeInicio: 26,
                idadeFim: 35,
                valorInicio: 36,
                valorFim: 38,
                classificacao: "Média +"
            },
            {
                codigo: "TESTE_ABDOMINAL_1_MINUTO_HOMEM_26_35",
                idadeInicio: 26,
                idadeFim: 35,
                valorInicio: 32,
                valorFim: 34,
                classificacao: "Média"
            },
            {
                codigo: "TESTE_ABDOMINAL_1_MINUTO_HOMEM_26_35",
                idadeInicio: 26,
                idadeFim: 35,
                valorInicio: 29,
                valorFim: 30,
                classificacao: "Média - "
            },
            {
                codigo: "TESTE_ABDOMINAL_1_MINUTO_HOMEM_26_35",
                idadeInicio: 26,
                idadeFim: 35,
                valorInicio: 24,
                valorFim: 28,
                classificacao: "Fraco"
            },
            {
                codigo: "TESTE_ABDOMINAL_1_MINUTO_HOMEM_26_35",
                idadeInicio: 26,
                idadeFim: 35,
                valorInicio: 6,
                valorFim: 21,
                classificacao: "Muito Fraco"
            },
            {
                codigo: "TESTE_ABDOMINAL_1_MINUTO_HOMEM_36_45",
                idadeInicio: 36,
                idadeFim: 45,
                valorInicio: 42,
                valorFim: 50,
                classificacao: "Excelente"
            },
            {
                codigo: "TESTE_ABDOMINAL_1_MINUTO_HOMEM_36_45",
                idadeInicio: 36,
                idadeFim: 45,
                valorInicio: 36,
                valorFim: 40,
                classificacao: "Bom"
            },
            {
                codigo: "TESTE_ABDOMINAL_1_MINUTO_HOMEM_36_45",
                idadeInicio: 36,
                idadeFim: 45,
                valorInicio: 30,
                valorFim: 34,
                classificacao: "Média +"
            },
            {
                codigo: "TESTE_ABDOMINAL_1_MINUTO_HOMEM_36_45",
                idadeInicio: 36,
                idadeFim: 45,
                valorInicio: 28,
                valorFim: 29,
                classificacao: "Média"
            },
            {
                codigo: "TESTE_ABDOMINAL_1_MINUTO_HOMEM_36_45",
                idadeInicio: 36,
                idadeFim: 45,
                valorInicio: 24,
                valorFim: 26,
                classificacao: "Média - "
            },
            {
                codigo: "TESTE_ABDOMINAL_1_MINUTO_HOMEM_36_45",
                idadeInicio: 36,
                idadeFim: 45,
                valorInicio: 18,
                valorFim: 22,
                classificacao: "Fraco"
            },
            {
                codigo: "TESTE_ABDOMINAL_1_MINUTO_HOMEM_36_45",
                idadeInicio: 36,
                idadeFim: 45,
                valorInicio: 4,
                valorFim: 16,
                classificacao: "Muito Fraco"
            },
            {
                codigo: "TESTE_ABDOMINAL_1_MINUTO_HOMEM_46_55",
                idadeInicio: 46,
                idadeFim: 55,
                valorInicio: 36,
                valorFim: 50,
                classificacao: "Excelente"
            },
            {
                codigo: "TESTE_ABDOMINAL_1_MINUTO_HOMEM_46_55",
                idadeInicio: 46,
                idadeFim: 55,
                valorInicio: 29,
                valorFim: 35,
                classificacao: "Bom"
            },
            {
                codigo: "TESTE_ABDOMINAL_1_MINUTO_HOMEM_46_55",
                idadeInicio: 46,
                idadeFim: 55,
                valorInicio: 25,
                valorFim: 28,
                classificacao: "Média +"
            },
            {
                codigo: "TESTE_ABDOMINAL_1_MINUTO_HOMEM_46_55",
                idadeInicio: 46,
                idadeFim: 55,
                valorInicio: 22,
                valorFim: 24,
                classificacao: "Média"
            },
            {
                codigo: "TESTE_ABDOMINAL_1_MINUTO_HOMEM_46_55",
                idadeInicio: 46,
                idadeFim: 55,
                valorInicio: 18,
                valorFim: 21,
                classificacao: "Média - "
            },
            {
                codigo: "TESTE_ABDOMINAL_1_MINUTO_HOMEM_46_55",
                idadeInicio: 46,
                idadeFim: 55,
                valorInicio: 13,
                valorFim: 17,
                classificacao: "Fraco"
            },
            {
                codigo: "TESTE_ABDOMINAL_1_MINUTO_HOMEM_46_55",
                idadeInicio: 46,
                idadeFim: 55,
                valorInicio: 4,
                valorFim: 12,
                classificacao: "Muito Fraco"
            },
            {
                codigo: "TESTE_ABDOMINAL_1_MINUTO_HOMEM_56_65",
                idadeInicio: 56,
                idadeFim: 65,
                valorInicio: 32,
                valorFim: 42,
                classificacao: "Excelente"
            },
            {
                codigo: "TESTE_ABDOMINAL_1_MINUTO_HOMEM_56_65",
                idadeInicio: 56,
                idadeFim: 65,
                valorInicio: 26,
                valorFim: 29,
                classificacao: "Bom"
            },
            {
                codigo: "TESTE_ABDOMINAL_1_MINUTO_HOMEM_56_65",
                idadeInicio: 56,
                idadeFim: 65,
                valorInicio: 21,
                valorFim: 24,
                classificacao: "Média +"
            },
            {
                codigo: "TESTE_ABDOMINAL_1_MINUTO_HOMEM_56_65",
                idadeInicio: 56,
                idadeFim: 65,
                valorInicio: 17,
                valorFim: 20,
                classificacao: "Média"
            },
            {
                codigo: "TESTE_ABDOMINAL_1_MINUTO_HOMEM_56_65",
                idadeInicio: 56,
                idadeFim: 65,
                valorInicio: 13,
                valorFim: 16,
                classificacao: "Média - "
            },
            {
                codigo: "TESTE_ABDOMINAL_1_MINUTO_HOMEM_56_65",
                idadeInicio: 56,
                idadeFim: 65,
                valorInicio: 9,
                valorFim: 12,
                classificacao: "Fraco"
            },
            {
                codigo: "TESTE_ABDOMINAL_1_MINUTO_HOMEM_56_65",
                idadeInicio: 56,
                idadeFim: 65,
                valorInicio: 2,
                valorFim: 8,
                classificacao: "Muito Fraco"
            },
            {
                codigo: "TESTE_ABDOMINAL_1_MINUTO_HOMEM_66_MAIS",
                idadeInicio: 66,
                idadeFim: 999,
                valorInicio: 29,
                valorFim: 40,
                classificacao: "Excelente"
            },
            {
                codigo: "TESTE_ABDOMINAL_1_MINUTO_HOMEM_66_MAIS",
                idadeInicio: 66,
                idadeFim: 999,
                valorInicio: 22,
                valorFim: 26,
                classificacao: "Bom"
            },
            {
                codigo: "TESTE_ABDOMINAL_1_MINUTO_HOMEM_66_MAIS",
                idadeInicio: 66,
                idadeFim: 999,
                valorInicio: 20,
                valorFim: 21,
                classificacao: "Média +"
            },
            {
                codigo: "TESTE_ABDOMINAL_1_MINUTO_HOMEM_66_MAIS",
                idadeInicio: 66,
                idadeFim: 999,
                valorInicio: 16,
                valorFim: 18,
                classificacao: "Média"
            },
            {
                codigo: "TESTE_ABDOMINAL_1_MINUTO_HOMEM_66_MAIS",
                idadeInicio: 66,
                idadeFim: 999,
                valorInicio: 12,
                valorFim: 14,
                classificacao: "Média - "
            },
            {
                codigo: "TESTE_ABDOMINAL_1_MINUTO_HOMEM_66_MAIS",
                idadeInicio: 66,
                idadeFim: 999,
                valorInicio: 8,
                valorFim: 10,
                classificacao: "Fraco"
            },
            {
                codigo: "TESTE_ABDOMINAL_1_MINUTO_HOMEM_66_MAIS",
                idadeInicio: 66,
                idadeFim: 999,
                valorInicio: 2,
                valorFim: 6,
                classificacao: "Muito Fraco"
            }
        ]
    }

    private listaClassificacaoMulher(){
        return [
            {
                codigo: "TESTE_ABDOMINAL_1_MINUTO_MULHER_18_25",
                idadeInicio: 18,
                idadeFim: 25,
                valorInicio: 44,
                valorFim: 55,
                classificacao: "Excelente"
            },
            {
                codigo: "TESTE_ABDOMINAL_1_MINUTO_MULHER_18_25",
                idadeInicio: 18,
                idadeFim: 25,
                valorInicio: 37,
                valorFim: 41,
                classificacao: "Bom"
            },
            {
                codigo: "TESTE_ABDOMINAL_1_MINUTO_MULHER_18_25",
                idadeInicio: 18,
                idadeFim: 25,
                valorInicio: 33,
                valorFim: 36,
                classificacao: "Média +"
            },
            {
                codigo: "TESTE_ABDOMINAL_1_MINUTO_MULHER_18_25",
                idadeInicio: 18,
                idadeFim: 25,
                valorInicio: 29,
                valorFim: 32,
                classificacao: "Média"
            },
            {
                codigo: "TESTE_ABDOMINAL_1_MINUTO_MULHER_18_25",
                idadeInicio: 18,
                idadeFim: 25,
                valorInicio: 25,
                valorFim: 28,
                classificacao: "Média - "
            },
            {
                codigo: "TESTE_ABDOMINAL_1_MINUTO_MULHER_18_25",
                idadeInicio: 18,
                idadeFim: 25,
                valorInicio: 20,
                valorFim: 24,
                classificacao: "Fraco"
            },
            {
                codigo: "TESTE_ABDOMINAL_1_MINUTO_MULHER_18_25",
                idadeInicio: 18,
                idadeFim: 25,
                valorInicio: 4,
                valorFim: 17,
                classificacao: "Muito Fraco"
            },
            {
                codigo: "TESTE_ABDOMINAL_1_MINUTO_MULHER_26_35",
                idadeInicio: 26,
                idadeFim: 35,
                valorInicio: 40,
                valorFim: 54,
                classificacao: "Excelente"
            },
            {
                codigo: "TESTE_ABDOMINAL_1_MINUTO_MULHER_26_35",
                idadeInicio: 26,
                idadeFim: 35,
                valorInicio: 33,
                valorFim: 37,
                classificacao: "Bom"
            },
            {
                codigo: "TESTE_ABDOMINAL_1_MINUTO_MULHER_26_35",
                idadeInicio: 26,
                idadeFim: 35,
                valorInicio: 29,
                valorFim: 32,
                classificacao: "Média +"
            },
            {
                codigo: "TESTE_ABDOMINAL_1_MINUTO_MULHER_26_35",
                idadeInicio: 26,
                idadeFim: 35,
                valorInicio: 25,
                valorFim: 28,
                classificacao: "Média"
            },
            {
                codigo: "TESTE_ABDOMINAL_1_MINUTO_MULHER_26_35",
                idadeInicio: 26,
                idadeFim: 35,
                valorInicio: 21,
                valorFim: 24,
                classificacao: "Média - "
            },
            {
                codigo: "TESTE_ABDOMINAL_1_MINUTO_MULHER_26_35",
                idadeInicio: 26,
                idadeFim: 35,
                valorInicio: 16,
                valorFim: 20,
                classificacao: "Fraco"
            },
            {
                codigo: "TESTE_ABDOMINAL_1_MINUTO_MULHER_26_35",
                idadeInicio: 26,
                idadeFim: 35,
                valorInicio: 1,
                valorFim: 21,
                classificacao: "Muito Fraco"
            },
            {
                codigo: "TESTE_ABDOMINAL_1_MINUTO_MULHER_36_45",
                idadeInicio: 36,
                idadeFim: 45,
                valorInicio: 34,
                valorFim: 50,
                classificacao: "Excelente"
            },
            {
                codigo: "TESTE_ABDOMINAL_1_MINUTO_MULHER_36_45",
                idadeInicio: 36,
                idadeFim: 45,
                valorInicio: 27,
                valorFim: 30,
                classificacao: "Bom"
            },
            {
                codigo: "TESTE_ABDOMINAL_1_MINUTO_MULHER_36_45",
                idadeInicio: 36,
                idadeFim: 45,
                valorInicio: 24,
                valorFim: 26,
                classificacao: "Média +"
            },
            {
                codigo: "TESTE_ABDOMINAL_1_MINUTO_MULHER_36_45",
                idadeInicio: 36,
                idadeFim: 45,
                valorInicio: 20,
                valorFim: 22,
                classificacao: "Média"
            },
            {
                codigo: "TESTE_ABDOMINAL_1_MINUTO_MULHER_36_45",
                idadeInicio: 36,
                idadeFim: 45,
                valorInicio: 16,
                valorFim: 18,
                classificacao: "Média - "
            },
            {
                codigo: "TESTE_ABDOMINAL_1_MINUTO_MULHER_36_45",
                idadeInicio: 36,
                idadeFim: 45,
                valorInicio: 10,
                valorFim: 14,
                classificacao: "Fraco"
            },
            {
                codigo: "TESTE_ABDOMINAL_1_MINUTO_MULHER_36_45",
                idadeInicio: 36,
                idadeFim: 45,
                valorInicio: 1,
                valorFim: 6,
                classificacao: "Muito Fraco"
            },
            {
                codigo: "TESTE_ABDOMINAL_1_MINUTO_MULHER_46_55",
                idadeInicio: 46,
                idadeFim: 55,
                valorInicio: 28,
                valorFim: 42,
                classificacao: "Excelente"
            },
            {
                codigo: "TESTE_ABDOMINAL_1_MINUTO_MULHER_46_55",
                idadeInicio: 46,
                idadeFim: 55,
                valorInicio: 22,
                valorFim: 25,
                classificacao: "Bom"
            },
            {
                codigo: "TESTE_ABDOMINAL_1_MINUTO_MULHER_46_55",
                idadeInicio: 46,
                idadeFim: 55,
                valorInicio: 18,
                valorFim: 21,
                classificacao: "Média +"
            },
            {
                codigo: "TESTE_ABDOMINAL_1_MINUTO_MULHER_46_55",
                idadeInicio: 46,
                idadeFim: 55,
                valorInicio: 14,
                valorFim: 17,
                classificacao: "Média"
            },
            {
                codigo: "TESTE_ABDOMINAL_1_MINUTO_MULHER_46_55",
                idadeInicio: 46,
                idadeFim: 55,
                valorInicio: 10,
                valorFim: 13,
                classificacao: "Média - "
            },
            {
                codigo: "TESTE_ABDOMINAL_1_MINUTO_MULHER_46_55",
                idadeInicio: 46,
                idadeFim: 55,
                valorInicio: 6,
                valorFim: 9,
                classificacao: "Fraco"
            },
            {
                codigo: "TESTE_ABDOMINAL_1_MINUTO_MULHER_46_55",
                idadeInicio: 46,
                idadeFim: 55,
                valorInicio: 0,
                valorFim: 4,
                classificacao: "Muito Fraco"
            },
            {
                codigo: "TESTE_ABDOMINAL_1_MINUTO_MULHER_56_65",
                idadeInicio: 56,
                idadeFim: 65,
                valorInicio: 25,
                valorFim: 38,
                classificacao: "Excelente"
            },
            {
                codigo: "TESTE_ABDOMINAL_1_MINUTO_MULHER_56_65",
                idadeInicio: 56,
                idadeFim: 65,
                valorInicio: 18,
                valorFim: 21,
                classificacao: "Bom"
            },
            {
                codigo: "TESTE_ABDOMINAL_1_MINUTO_MULHER_56_65",
                idadeInicio: 56,
                idadeFim: 65,
                valorInicio: 13,
                valorFim: 17,
                classificacao: "Média +"
            },
            {
                codigo: "TESTE_ABDOMINAL_1_MINUTO_MULHER_56_65",
                idadeInicio: 56,
                idadeFim: 65,
                valorInicio: 10,
                valorFim: 12,
                classificacao: "Média"
            },
            {
                codigo: "TESTE_ABDOMINAL_1_MINUTO_MULHER_56_65",
                idadeInicio: 56,
                idadeFim: 65,
                valorInicio: 7,
                valorFim: 9,
                classificacao: "Média - "
            },
            {
                codigo: "TESTE_ABDOMINAL_1_MINUTO_MULHER_56_65",
                idadeInicio: 56,
                idadeFim: 65,
                valorInicio: 4,
                valorFim: 6,
                classificacao: "Fraco"
            },
            {
                codigo: "TESTE_ABDOMINAL_1_MINUTO_MULHER_56_65",
                idadeInicio: 56,
                idadeFim: 65,
                valorInicio: 0,
                valorFim: 2,
                classificacao: "Muito Fraco"
            },
            {
                codigo: "TESTE_ABDOMINAL_1_MINUTO_MULHER_66_MAIS",
                idadeInicio: 66,
                idadeFim: 999,
                valorInicio: 24,
                valorFim: 36,
                classificacao: "Excelente"
            },
            {
                codigo: "TESTE_ABDOMINAL_1_MINUTO_MULHER_66_MAIS",
                idadeInicio: 66,
                idadeFim: 999,
                valorInicio: 18,
                valorFim: 22,
                classificacao: "Bom"
            },
            {
                codigo: "TESTE_ABDOMINAL_1_MINUTO_MULHER_66_MAIS",
                idadeInicio: 66,
                idadeFim: 999,
                valorInicio: 14,
                valorFim: 16,
                classificacao: "Média +"
            },
            {
                codigo: "TESTE_ABDOMINAL_1_MINUTO_MULHER_66_MAIS",
                idadeInicio: 66,
                idadeFim: 999,
                valorInicio: 11,
                valorFim: 13,
                classificacao: "Média"
            },
            {
                codigo: "TESTE_ABDOMINAL_1_MINUTO_MULHER_66_MAIS",
                idadeInicio: 66,
                idadeFim: 999,
                valorInicio: 6,
                valorFim: 10,
                classificacao: "Média - "
            },
            {
                codigo: "TESTE_ABDOMINAL_1_MINUTO_MULHER_66_MAIS",
                idadeInicio: 66,
                idadeFim: 999,
                valorInicio: 2,
                valorFim: 4,
                classificacao: "Fraco"
            },
            {
                codigo: "TESTE_ABDOMINAL_1_MINUTO_MULHER_66_MAIS",
                idadeInicio: 66,
                idadeFim: 999,
                valorInicio: 0,
                valorFim: 1,
                classificacao: "Muito Fraco"
            }
        ]
    }
}

