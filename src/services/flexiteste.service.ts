export interface FlexitesteReq{
    flexaoQuadril: number
    extensaoQuadril: number
    abducaoQuadril: number
    flexaoTronco: number
    flexaoLateralTronco: number
    extensaoAducaoOmbro: number
    aducao180Ombro: number
    extensaoPosteriorOmbro: number
}

export class FlexitesteService{
    public flexiteste(data: FlexitesteReq){
        let classificacao = ''
        
        let flexaoQuadril = data.flexaoQuadril
        let extensaoQuadril = data.extensaoQuadril
        let abducaoQuadril = data.abducaoQuadril
        let flexaoTronco = data.flexaoTronco
        let flexaoLateralTronco = data.flexaoLateralTronco
        let extensaoAducaoOmbro = data.extensaoAducaoOmbro
        let aducao180Ombro = data.aducao180Ombro
        let extensaoPosteriorOmbro = data.extensaoPosteriorOmbro

        const flexiteste = flexaoQuadril + extensaoQuadril + abducaoQuadril + flexaoTronco + flexaoLateralTronco + extensaoAducaoOmbro + aducao180Ombro + extensaoPosteriorOmbro
        
        classificacao = this.classificacao(flexiteste) || ''

        return {
            flexiteste,
            classificacao,
        }
    }

    private classificacao(valor: number){
        let listaClassificacao: any[] = this.listaClassificacao()
        let classificacao = listaClassificacao.find(v => valor >= v.valorInicio && valor <= v.valorFim)

        return classificacao?.classificacao
    }

    private listaClassificacao(){
        return [
            {
                codigo: "FLEXITESTE_MUITO_PEQUENO",
                idadeInicio: 0,
                idadeFim: 0,
                valorInicio: 0,
                valorFim: 8,
                classificacao: "Nível de flexibilidade, muito pequeno "
            },
            {
                codigo: "FLEXITESTE_PEQUENO",
                idadeInicio: 0,
                idadeFim: 0,
                valorInicio: 9,
                valorFim: 12,
                classificacao: "Nível de flexibilidade, pequeno "
            },
            {
                codigo: "FLEXITESTE_MEDIO_NEGATIVO",
                idadeInicio: 0,
                idadeFim: 0,
                valorInicio: 13,
                valorFim: 16,
                classificacao: "Nível de flexibilidade, médio negativo"
            },
            {
                codigo: "FLEXITESTE_MEDIO_POSITIVO ",
                idadeInicio: 0,
                idadeFim: 0,
                valorInicio: 17,
                valorFim: 20,
                classificacao: "Nível de flexibilidade, médio positivo"
            },
            {
                codigo: "FLEXITESTE_GRANDE",
                idadeInicio: 0,
                idadeFim: 0,
                valorInicio: 21,
                valorFim: 24,
                classificacao: "Nível de flexibilidade, grande"
            },
            {
                codigo: "FLEXITESTE_MUITO_GRANDE",
                idadeInicio: 0,
                idadeFim: 0,
                valorInicio: 25,
                valorFim: 0,
                classificacao: "Nível de flexibilidade, muito grande "
            },
        ]
    }
}

