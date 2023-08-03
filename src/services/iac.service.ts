// Índice de Adiposidade Corporal
export interface IacReq{
    altura: number
    quadril: number
}

export class IacService{
    public iac(data: IacReq){
        let percentualGordura = 0
        let altura = data.altura
        let quadril = data.quadril
        percentualGordura = (quadril / (altura * Math.sqrt(altura))) - 18
        
        return {
            percentualGordura: parseFloat(percentualGordura.toFixed(2)),
        }
    }
    
}



