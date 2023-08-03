// Índice Ponderal
export interface IpReq{
    peso: number
    altura: number
}

export class IpService{
    public ip(data: IpReq){
        let ip = 0
        let classificacao = ''
        let peso = data.peso
        let altura = data.altura

        ip = (altura * 100) / Math.cbrt(peso)
        
        classificacao = this.classificacao(ip) || ''
        
        return {
            ip: parseFloat(ip.toFixed(2)),
            classificacao
        }
    }

    private classificacao(valor: number){
        let listaClassificacao = []
        listaClassificacao = this.listaClassificacao()
        let classificacao = listaClassificacao.find(v => valor >= v.valorInicio && valor <= v.valorFim)

        return classificacao?.classificacao
    }


    private listaClassificacao(){
        return [
            {
                codigo: "IP_ABAIXO_PESO",
                idadeInicio: 0,
                idadeFim: 0,
                valorInicio: 44.01,
                valorFim: 999,
                classificacao: "Abaixo do peso",
                semana_gestacional: 0,
            },
            {
                codigo: "IP_NORMAL",
                idadeInicio: 0,
                idadeFim: 0,
                valorInicio: 41,
                valorFim: 44,
                classificacao: "Normal",
                semana_gestacional: 0,
            },
            {
                codigo: "IP_EXCESSO_PESO",
                idadeInicio: 0,
                idadeFim: 0,
                valorInicio: 0,
                valorFim: 40.99,
                classificacao: "Exesso de peso",
                semana_gestacional: 0,
            },
        ]
    }
}



