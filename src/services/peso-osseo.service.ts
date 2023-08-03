export interface PesoOsseoReq{
    punho: number
    joelho: number
    altura: number
}


export class PesoOsseoService{
    public massaOsseo(data: PesoOsseoReq){
        let punho = data.punho
        let joelho = data.joelho
        let altura = data.altura
        let massaOsseo = 0

        massaOsseo = 3.02 * Math.pow((400 * (punho/1000) * (joelho/1000) * Math.pow(altura, 2)), 0.712)

        return massaOsseo.toFixed(2)

    }
}

