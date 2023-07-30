export interface DobraCutaneaFaulkner4DobrasReq{
    triceps: number
    supraIliaca: number
    abdominal: number
    subescapular: number
    peso: number
    constantePesoIdeal?: 'nadador' | 'futebolista' | 'demaisEsportes'
}

export interface DobraCutaneaGuedes3DobrasReq{
    triceps : number
    supraIliaca : number
    abdominal: number
    subescapular : number
    coxa : number
    sexo: 'MASCULINO' | 'FEMININO'
    peso: number
}

export interface DobraCutaneaGuedes2DobrasReq{
    peso: number
    altura: number
}

export interface DobraCutaneaPollock5DobrasReq{
    peso: number
    altura: number
}

export interface DobraCutaneaPollock7DobrasReq{
    subescapular : number
    axilarMedia : number
    triceps : number
    coxa : number
    supraIliaca : number
    abdominal: number
    peitoral: number
    peso: number
    sexo: 'MASCULINO' | 'FEMININO'
    idade: number
}

export class DobraCutaneaService{
    public faulkner4dobras(data: DobraCutaneaFaulkner4DobrasReq){
        let pesoGordoKg = 0
        let massaMagraKg = 0
        let pesoIdealKg = 0
        let percentualGordura = 0
        let diferencaPeso = 0
        const pesoIdealConstante = {
            nadador: 1.09,
            futebolista: 1.12,
            demaisEsportes: 1.14,
            teste: 1.2658
        }

        const peso = data.peso
        // Dobras
        const triceps = data.triceps
        const supraIliaca = data.supraIliaca
        const subescapular = data.subescapular
        const abdominal = data.abdominal
        const constantePesoIdeal = data.constantePesoIdeal || 'demaisEsportes'

        percentualGordura = (((triceps + supraIliaca + subescapular + abdominal) * 0.153) + 5.783)
        pesoGordoKg = percentualGordura * peso / 100
        massaMagraKg = peso - pesoGordoKg
        pesoIdealKg = massaMagraKg * pesoIdealConstante[constantePesoIdeal]
        diferencaPeso = peso - pesoIdealKg

        return {
            percentualGordura:percentualGordura.toFixed(2),
            pesoGordoKg:pesoGordoKg.toFixed(2),
            massaMagraKg:massaMagraKg.toFixed(2),
            pesoIdealKg:pesoIdealKg.toFixed(2),
            diferencaPeso: diferencaPeso.toFixed(2),
            peso
        }
    }

    public guedes3dobras(data: DobraCutaneaGuedes3DobrasReq){
        let densidadeCorporal = 0
        let pesoGordoKg = 0
        let massaMagraKg = 0
        let pesoIdealKg = 0
        let percentualGordura = 0
        let diferencaPeso = 0
        const pesoIdealConstante = {
            nadador: 1.09,
            futebolista: 1.12,
            demaisEsportes: 1.14,
            teste: 1.2658
        }
        
        const peso = data.peso
        const sexo = data.sexo

        // Dobras
        const subescapular  = data.subescapular 
        const triceps  = data.triceps 
        const coxa  = data.coxa 
        const supraIliaca  = data.supraIliaca 
        const abdominal = data.abdominal
        const constantePesoIdeal = 'demaisEsportes'

        // Fórmula
        let somaDobras = (subescapular + triceps + coxa + supraIliaca + abdominal)
        if(sexo === 'MASCULINO'){
            densidadeCorporal = 1.17136 - (0.06706 * Math.pow(somaDobras, 2))
        }

        if(sexo === 'FEMININO'){
            densidadeCorporal = 1.16650 - (0.07063 * Math.pow(somaDobras, 2))
        }

        percentualGordura = (((4.95/densidadeCorporal)- 4.50) * 100) 
        pesoGordoKg = percentualGordura * peso / 100
        massaMagraKg = peso - pesoGordoKg
        pesoIdealKg = massaMagraKg * pesoIdealConstante[constantePesoIdeal]
        diferencaPeso = peso - pesoIdealKg

        return {
            percentualGordura:percentualGordura.toFixed(2),
            pesoGordoKg:pesoGordoKg.toFixed(2),
            massaMagraKg:massaMagraKg.toFixed(2),
            pesoIdealKg:pesoIdealKg.toFixed(2),
            diferencaPeso: diferencaPeso.toFixed(2),
            peso
        }
    }

    public guede2dobras(data: DobraCutaneaGuedes2DobrasReq){
        
    }

    public pollock5dobras(data: DobraCutaneaPollock5DobrasReq){
        
    }

    public pollock7dobras(data: DobraCutaneaPollock7DobrasReq){
        let densidadeCorporal = 0
        let pesoGordoKg = 0
        let massaMagraKg = 0
        let pesoIdealKg = 0
        let percentualGordura = 0
        let diferencaPeso = 0
        const pesoIdealConstante = {
            nadador: 1.09,
            futebolista: 1.12,
            demaisEsportes: 1.14,
            teste: 1.2658
        }
        
        const peso = data.peso
        const sexo = data.sexo
        const idade = data.idade

        // Dobras
        const subescapular  = data.subescapular 
        const axilarMedia  = data.axilarMedia 
        const triceps  = data.triceps 
        const coxa  = data.coxa 
        const supraIliaca  = data.supraIliaca 
        const abdominal = data.abdominal
        const peitoral = data.peitoral
        const constantePesoIdeal = 'demaisEsportes'

        // Fórmula
        let somaDobras = (subescapular + axilarMedia + triceps + coxa + supraIliaca + abdominal + peitoral)
        if(sexo === 'MASCULINO' && idade >= 18 && idade <= 61){
            densidadeCorporal = 1.11200000 - (0.00043499 * somaDobras) + (0.00000055 * Math.pow(somaDobras, 2)) - (0.0002882 * idade); 
        }

        if(sexo === 'FEMININO' && idade >= 18 && idade <= 61){
            densidadeCorporal = 1.0970 - (0.00046971  * somaDobras) + (0.00000056 * Math.pow(somaDobras, 2)) - (0.00012828 * idade);
        }

        percentualGordura = (((4.95/densidadeCorporal)- 4.50) * 100) 
        pesoGordoKg = percentualGordura * peso / 100
        massaMagraKg = peso - pesoGordoKg
        pesoIdealKg = massaMagraKg * pesoIdealConstante[constantePesoIdeal]
        diferencaPeso = peso - pesoIdealKg

        return {
            percentualGordura:percentualGordura.toFixed(2),
            pesoGordoKg:pesoGordoKg.toFixed(2),
            massaMagraKg:massaMagraKg.toFixed(2),
            pesoIdealKg:pesoIdealKg.toFixed(2),
            diferencaPeso: diferencaPeso.toFixed(2),
            peso
        }
    }

}

