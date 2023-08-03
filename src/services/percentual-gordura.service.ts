// Índice de Adiposidade Corporal
export interface PercentualGorduraImcReq{
    altura: number
    peso: number
    idade: number
    sexo: 'MASCULINO' | 'FEMININO'
}

export interface PercentualGorduraPerimetroCinturaReq{
    idade: number
    perimetroCintura: number
    sexo: 'MASCULINO' | 'FEMININO'
}

export interface PercentualGorduraEstaturaCinturaReq{
    altura: number
    perimetroCintura: number
    sexo: 'MASCULINO' | 'FEMININO'
}

export class PercentualGorduraService{
    public imc(data: PercentualGorduraImcReq){
        let percentualGordura = 0
        let altura = data.altura
        let peso = data.peso
        let idade = data.idade
        let sexo = data.sexo
        

        if(sexo == 'MASCULINO'){
            percentualGordura = (1.33 * (peso / (altura * altura))) + (0.236 * idade) - 20.2
        }
        else if(sexo = 'FEMININO'){
            percentualGordura = (1.21 * (peso / (altura * altura))) + (0.262 * idade) - 6,7
        }
        
        return {
            percentualGordura: parseFloat(percentualGordura.toFixed(2))
        }
    }

    public perimetroCintura(data: PercentualGorduraPerimetroCinturaReq){
        let percentualGordura = 0
        let perimetroCintura = data.perimetroCintura
        let idade = data.idade
        let sexo = data.sexo

        if(sexo == 'MASCULINO'){
            percentualGordura = (0.567 * perimetroCintura) + (0.101 * idade) - 31,8
        }
        else if(sexo = 'FEMININO'){
            percentualGordura = (0.439 * perimetroCintura) + (0.221 * idade) - 9,4
        }
        
        return {
            percentualGordura: parseFloat(percentualGordura.toFixed(2))
        }
    }

    public estaturaCintura(data: PercentualGorduraEstaturaCinturaReq){
        let percentualGordura = 0
        let altura = data.altura
        let perimetroCintura = data.perimetroCintura
        let sexo = data.sexo

        if(sexo == 'MASCULINO'){
            percentualGordura = 64 - (20 * (altura / (perimetroCintura / 100)))
        }
        else if(sexo = 'FEMININO'){
            percentualGordura = 76 - (20 * (altura / (perimetroCintura / 100)))
        }
        
        return {
            percentualGordura: parseFloat(percentualGordura.toFixed(2))
        }
    }

}



