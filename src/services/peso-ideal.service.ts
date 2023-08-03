// Índice de Adiposidade Corporal
export interface PesoIdealLorentzReq{
    altura: number
    sexo: 'MASCULINO' | 'FEMININO'
}

export interface PesoIdealBrocaReq{
    altura: number
    quadril: number
}

export interface PesoIdealRicciReq{
    altura: number
}

export interface PesoIdealMonnerotDumaineReq{
    altura: number
    circunferenciaPunho: number
    idade: number
}

export interface PesoIdealBorchardtReq{
    altura: number
    circunferenciaTorax: number
}

export interface PesoIdealImcMedioReq{
    altura: number
}

export class PesoIdealService{
    public lorentz(data: PesoIdealLorentzReq){
        let pesoIdeal = 0
        let altura = data.altura
        let sexo = data.sexo
        let x = 0

        if(sexo == 'MASCULINO'){
            x = 4
        }
        else if(sexo = 'FEMININO'){
            x = 2
        }

        
        pesoIdeal = (altura * 100) - 100 - (((altura * 100) - 150) / x)
        
        return {
            pesoIdeal: parseFloat(pesoIdeal.toFixed(2)),
        }
    }

    public broca(data: PesoIdealLorentzReq){
        let pesoIdeal = 0
        let altura = data.altura

        pesoIdeal = (altura * 100) - 100

        return {
            pesoIdeal: parseFloat(pesoIdeal.toFixed(2))
        }
    }

    public ricci(data: PesoIdealRicciReq){
        let pesoIdeal = 0
        let altura = data.altura

        pesoIdeal = (0.985 * (altura * 100)) - 100

        return {
            pesoIdeal: parseFloat(pesoIdeal.toFixed(2))
        }
    }

    public monnerotDumaine(data: PesoIdealMonnerotDumaineReq){
        let pesoIdeal = 0
        let altura = data.altura
        let circunferenciaPunho = data.circunferenciaPunho
        let idade = data.idade

        pesoIdeal = ((altura * 100) - 100 + (4 * circunferenciaPunho)) / 2

        if(idade < 25){
            pesoIdeal = pesoIdeal - 3
        }
        else if(idade >= 25 && idade <= 30){
            pesoIdeal = pesoIdeal - 1.5
        }

        return {
            pesoIdeal: parseFloat(pesoIdeal.toFixed(2))
        }
    }

    public borchardt(data: PesoIdealBorchardtReq){
        let pesoIdeal = 0
        let altura = data.altura
        let circunferenciaTorax = data.circunferenciaTorax

        pesoIdeal = ((altura * 100) * circunferenciaTorax) / 240
        
        return {
            pesoIdeal: parseFloat(pesoIdeal.toFixed(2))
        }
    }

    public imcMedio(data: PesoIdealImcMedioReq){
        let pesoIdeal = 0
        let altura = data.altura

        pesoIdeal = 22 * (altura * altura)
        
        return {
            pesoIdeal: parseFloat(pesoIdeal.toFixed(2))
        }
    }

    
}



