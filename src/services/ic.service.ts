// Índice de Conicidade
export interface IcReq{
    peso: number
    altura: number
    cintura: number
    sexo: 'MASCULINO' | 'FEMININO'
}

export class IcService{
    public ic(data: IcReq){
        let ic = 0
        let classificacao = ''
        let peso = data.peso
        let altura = data.altura
        let cintura = data.cintura
        let sexo = data.sexo

        ic = (cintura / 100) / (0.109 * (Math.sqrt((peso/altura))))
        
        if(sexo == 'MASCULINO'){
            if(ic > 1.25){
                classificacao = 'Maior probabilidade de eventos cardiovasculares'
            }
            else{
                classificacao = 'Baixa probabilidade de eventos cardiovasculares'
            }
        }

        else if(sexo == 'FEMININO'){
            if(ic > 1.18){
                classificacao = 'Maior probabilidade de eventos cardiovasculares'
            }
            else{
                classificacao = 'Baixa probabilidade de eventos cardiovasculares'
            }
        }
        
        return {
            ic: parseFloat(ic.toFixed(2)),
            classificacao
        }
    }

    
}



