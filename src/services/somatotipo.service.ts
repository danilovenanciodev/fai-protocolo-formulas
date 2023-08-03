export interface SomatotipoReq{
    peso: number
    altura: number
    umero: number
    femur: number
    panturilha: number
    triceps: number
    subescapular: number
    supraIliaca: number
    circunferenciaBraco: number
    circunferenciaPanturilha: number
}


export class SomatotipoService{
    public somatotipo(data: SomatotipoReq){
        let peso = data.peso
        let altura = data.altura
        let umero = data.umero
        let femur = data.femur
        let panturilha = data.panturilha
        let triceps = data.triceps
        let subescapular = data.subescapular
        let supraIliaca = data.supraIliaca
        let circunferenciaBraco = data.circunferenciaBraco
        let circunferenciaPanturilha = data.circunferenciaPanturilha

        let endormofia = this.endomorfia(altura, triceps, subescapular, supraIliaca)
        let mesomorfia = this.mesomorfia(altura, triceps, panturilha, umero, femur, circunferenciaBraco, circunferenciaPanturilha)
        let ectomorfia = this.ectomorfia(altura, peso)

        let endormofiaRound = parseInt(''+endormofia)
        let mesomorfiaRound = parseInt(''+mesomorfia)
        let ectomorfiaRound = parseInt(''+ectomorfia)
        
        let classificacao = this.classificacao(endormofia, mesomorfia, ectomorfia)

        return {
            endormofia,
            mesomorfia,
            ectomorfia,
            resultado: `${endormofiaRound}-${mesomorfiaRound}-${ectomorfiaRound}`,
            classificacao 
        }
    }

    private endomorfia(altura: number, triceps: number, subescapular: number, supraIliaca: number){
        let x = (triceps + subescapular + supraIliaca)*(170.8/(altura * 100))
        return parseFloat((0.7182 + (0.1451 * x) - (0.00068 * Math.pow(x, 2)) + (0.0000014 * Math.pow(x, 3))).toFixed(1))
    }

    private mesomorfia(altura: number, triceps: number, panturilha: number, umero: number, femur: number, circunferenciaBraco: number, circunferenciaPanturilha: number){
        let bracoCorrigido = circunferenciaBraco - (triceps/10)
        let pernaCorrigido = circunferenciaPanturilha - (panturilha/10)

        return parseFloat((4.5 + (0.858 * umero) + (0.601 * femur) + (0.188 * bracoCorrigido) + (0.161 * pernaCorrigido) - (0.131 * (altura * 100))).toFixed(1))
    }

    private ectomorfia(altura: number, peso: number){
        let ip = (altura * 100) / Math.cbrt(peso)
        let ectomorfia = 0
        if(ip >= 40.75) ectomorfia = (ip * 0.732) - 28.58
        else if(ip >= 38.26 && ip <= 40.74) ectomorfia = (ip * 0.463) - 17.63
        else if(ip <= 38.25) ectomorfia = 0.1

        return parseFloat(ectomorfia.toFixed(1))
    }

    private classificacao(endormofia: number, mesomorfia: number, ectomorfia: number){
        let classificacao = ''
        if(
            endormofia > mesomorfia && 
            endormofia > ectomorfia &&
            mesomorfia == ectomorfia
        ) 
        classificacao = 'Endomorfo balanceado'
        else if(
            mesomorfia > endormofia && 
            mesomorfia > ectomorfia &&
            endormofia == ectomorfia
        )
        classificacao = 'Mesomorfo balanceado'
        else if(
            ectomorfia > endormofia && 
            ectomorfia > mesomorfia &&
            endormofia == mesomorfia
        )
        classificacao = 'Ectomorfo balanceado'
        else if(
            endormofia > mesomorfia && 
            mesomorfia > ectomorfia
        )
        classificacao = 'Mesoendomorfo'
        else if(
            mesomorfia > endormofia && 
            endormofia > ectomorfia
        )
        classificacao = 'Endomesomorfo'
        else if(
            mesomorfia > endormofia && 
            ectomorfia > endormofia
        )
        classificacao = 'Ectomesomorfo'
        else if(
            ectomorfia > mesomorfia && 
            mesomorfia > endormofia
        )
        classificacao = 'Mesoectomorfo'
        else if(
            ectomorfia > endormofia && 
            endormofia > mesomorfia
        )
        classificacao = 'Endoectomorfo'
        else if(
            endormofia > ectomorfia && 
            ectomorfia > mesomorfia
        )
        classificacao = 'Ectoendomorfo'
        else if(
            endormofia == mesomorfia && 
            mesomorfia > ectomorfia
        )
        classificacao = 'Endomorfo-mesomorfo'
        else if(
            mesomorfia == ectomorfia && 
            mesomorfia > endormofia
        )
        classificacao = 'Mesoformo-ectomorfo'
        else if(
            endormofia == ectomorfia && 
            endormofia > mesomorfia
        )
        classificacao = 'Endomorfo-ectomorfo'
        else if(
            endormofia == mesomorfia && 
            mesomorfia == ectomorfia
        )
        classificacao = 'Central'

        return classificacao
    }
}

