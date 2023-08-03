export interface ComposicaoCorporal{
    peso: number
    altura: number
    diametroRadioUlnar: number
    diametroFemur: number
    percentualGordura: number
    sexo: 'MASCULINO' | 'FEMININO'
}

export class ComposicaoCorporalService{
    public composicaoCorporal(data: ComposicaoCorporal){
        let massaCorporalMagra = 0
        let pesoGordura = 0
        let pesoOsseo = 0
        let pesoResidual = 0
        let pesoMuscular = 0
        let percentualMuscular = 0
        let percentualOsseo = 0
        let percentualResiduo = 0


        let peso = data.peso
        let altura = data.altura
        let diametroRadioUlnar = data.diametroRadioUlnar
        let diametroFemur = data.diametroFemur
        let percentualGordura = data.percentualGordura
        let sexo = data.sexo

        massaCorporalMagra = 100 - percentualGordura
        pesoGordura = peso * (percentualGordura / 100)
        pesoOsseo = 3.02 * Math.pow((400 * (diametroRadioUlnar/1000) * (diametroFemur/1000) * Math.pow(altura, 2)), 0.712)
        
        if(sexo === 'MASCULINO'){
            pesoResidual = peso * 0.241
        }
        else if(sexo === 'FEMININO'){
            pesoResidual = peso * 0.241
        }

        pesoMuscular = peso - (pesoGordura + pesoOsseo + pesoResidual)

        //Percentuais
        percentualMuscular = (pesoMuscular / peso) * 100
        percentualOsseo = (pesoOsseo / peso) * 100
        percentualResiduo = (pesoResidual / peso) * 100
        
        return {
            pesoMuscular: parseFloat(pesoMuscular.toFixed(2)),
            pesoGordura: parseFloat(pesoGordura.toFixed(2)),
            pesoOsseo: parseFloat(pesoOsseo.toFixed(2)),
            pesoResidual: parseFloat(pesoResidual.toFixed(2)),
            percentualGordura: parseFloat(percentualGordura.toFixed(1)),
            percentualMuscular: parseFloat(percentualMuscular.toFixed(1)),
            percentualOsseo: parseFloat(percentualOsseo.toFixed(1)),
            percentualResiduo: parseFloat(percentualResiduo.toFixed(1)),
        }
    }
    
}



