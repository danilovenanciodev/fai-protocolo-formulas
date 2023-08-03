export interface RceReq{
    cintura: number
    altura: number
}

export class RceService{
    public rce(data: RceReq){
        let rce = 0
        let classificacao = ''
        let cintura = data.cintura
        let altura = data.altura

        rce = cintura / (altura * 100)
        
        if(rce > 0.5){
            classificacao = 'Maior probabilidade de eventos cardiovasculares'
        }
        else{
            classificacao = 'Baixa probabilidade de eventos cardiovasculares'
        }

        return {
            rce: parseFloat(rce.toFixed(2)),
            classificacao
        }
    }
}

