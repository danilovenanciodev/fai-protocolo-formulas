export interface UmReq{
    carga: number
    repeticao: number
}

export class UmRmService{
    public umRm(data: UmReq){
        let umRm = 0
        let carga = data.carga
        let repeticao = data.repeticao
        let coeficiente = 0.033
        let rangeCarga:Array<any> = []
        let lstClassificacao = this.listaClassificacao()
    
        umRm = (carga * repeticao * coeficiente) + carga
        lstClassificacao.forEach(v => {
            rangeCarga.push({
                classificacao: v.classificacao,
                cargaInicial: this.calcManifestacaoForca(umRm, v.valorInicio),
                cargaFinal: this.calcManifestacaoForca(umRm, v.valorFim)
            })
        })
        return {
            umRm,
            rangeCarga
        }
    }
    private calcManifestacaoForca(umRm: number, percentualForca: number){
        return parseInt('' + (umRm * percentualForca) / 100)
    }
// faz 3 pra saber o peso de cada uma das classificações

    private listaClassificacao(){
        return [
            {
                codigo: "UM_RM_40_60",
                idadeInicio: 0,
                idadeFim: 0,
                valorInicio: 40,
                valorFim: 60,
                classificacao: "Força Resistência"
            },
            {
                codigo: "UM_RM_60_75",
                idadeInicio: 0,
                idadeFim: 0,
                valorInicio: 60,
                valorFim: 75,
                classificacao: "Força Explosiva"
            },
            {
                codigo: "UM_RM_75_85",
                idadeInicio: 0,
                idadeFim: 0,
                valorInicio: 75,
                valorFim: 85,
                classificacao: "Hipertrofia"
            },
            {
                codigo: "UM_RM_90_100",
                idadeInicio: 0,
                idadeFim: 0,
                valorInicio: 90,
                valorFim: 100,
                classificacao: "Força Máxima"
            },
        ]
    }
}

