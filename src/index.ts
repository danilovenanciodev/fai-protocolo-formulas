import { UmRmService } from "./services/um-rm.service"
import { BancoWellsService } from "./services/banco-wells.service"
import { DobraCutaneaService } from "./services/dobra-cutanea.service"
import { FlexitesteService } from "./services/flexiteste.service"
import { RcqService } from "./services/rcq.service"
import { TesteAbdominal, TesteAbdominalService } from "./services/teste-abdominal.service"
import { TesteFlexaoBraco } from "./services/teste-flexao-braco.service"
import { Vo2MaxService } from "./services/vo2max.service"
import { ImcService } from "./services/imc.service"


const peso = 58.4
const sexo = 'FEMININO'
const idade = 35
const altura = 1.60

//=======================================================
//                         IMC
//=======================================================
const imcService = new ImcService()

const imcAdulto = imcService.imcAdulto({
    peso,
    altura
})

console.log('=======================================================')
console.log('                       IMC Adulto                      ')
console.log('=======================================================')
console.log(imcAdulto)
console.log('-------------------------------------------')

const imcIdoso = imcService.imcIdoso({
    peso,
    altura
})

console.log('=======================================================')
console.log('                       IMC Idoso                      ')
console.log('=======================================================')
console.log(imcIdoso)
console.log('-------------------------------------------')

const semanaGestacional = 30

const imcGestante = imcService.imcGestante({
    peso,
    altura,
    semanaGestacional,
})

console.log('=======================================================')
console.log('                       IMC Gestante                      ')
console.log('=======================================================')
console.log(imcGestante)
console.log('-------------------------------------------')


//=======================================================
//                  DOBRAS CUTÂNEAS
//=======================================================
const dobraCutaneaService = new DobraCutaneaService()
const triceps = 21 
const supraIliaca = 36
const subescapular = 38
const abdominal = 36
const axilarMedia = 37
const coxa = 28
const peitoral = 19


// Protocolo de Faulkner, 1968 - 4 Dobras cutâneas: Tríceps; subescapular; supra-ilíaca e abdome
const faulkner4dobras = dobraCutaneaService.faulkner4dobras({
    peso,
    abdominal,
    subescapular,
    supraIliaca,
    triceps,
})

console.log('=======================================================')
console.log('Protocolo de Faulkner, 1968 - 4 Dobras cutâneas')
console.log('=======================================================')
console.log(faulkner4dobras)
console.log('-------------------------------------------')


// Protocolo de Pollock e col., 1984 - 7 Dobras cutâneas
const pollock7dobras = dobraCutaneaService.pollock7dobras({
    peso,
    abdominal,
    subescapular,
    supraIliaca,
    triceps,
    axilarMedia,
    coxa,
    peitoral,
    idade,
    sexo
})

console.log('=======================================================')
console.log('Protocolo de Pollock e col., 1984 - 7 Dobras cutâneas')
console.log('=======================================================')
console.log(pollock7dobras)
console.log('-------------------------------------------')


// Protocolo de Guedes, 1994 - 3 dobras
const guedes3dobras = dobraCutaneaService.guedes3dobras({
    peso,
    abdominal,
    subescapular,
    supraIliaca,
    triceps,
    coxa,
    sexo
})

console.log('=======================================================')
console.log('Protocolo de Guedes, 1994 - 3 dobras')
console.log('=======================================================')
console.log(guedes3dobras)
console.log('-------------------------------------------')


//=======================================================
//                         RCQ
//=======================================================
const rcqService = new RcqService()
const cintura = 74
const quadril = 134

const rcq = rcqService.rcq({
    cintura,
    quadril,
    idade,
    sexo: 'FEMININO'
})

console.log('=======================================================')
console.log('                       RCQ                             ')
console.log('=======================================================')
console.log(rcq)
console.log('-------------------------------------------')


//=======================================================
//                   TESTE FLEXÃO DE BRAÇO
//=======================================================
const testeFlexaoBracoService = new TesteFlexaoBraco()
const repeticoes = 40

const testeFlexaoBraco = testeFlexaoBracoService.testeFLexaoBraco({
    repeticoes,
    idade,
    sexo: 'FEMININO'
})

console.log('=======================================================')
console.log('                       TESTE FLEXÃO DE BRAÇO           ')
console.log('=======================================================')
console.log(testeFlexaoBraco)
console.log('-------------------------------------------')


//=======================================================
//                   TESTE ABDOMINAL
//=======================================================
const testeAbdominalService = new TesteAbdominalService()
const repeticoesAbd = 10

const testeAbdominal = testeAbdominalService.testeAbdominalUmMinuto({
    repeticoes: repeticoesAbd,
    idade,
    sexo: 'FEMININO'
})

console.log('=======================================================')
console.log('                       TESTE ABDOMINAL                 ')
console.log('=======================================================')
console.log(testeAbdominal)
console.log('-------------------------------------------')



//=======================================================
//                   VO2 MAX
//=======================================================
const vo2maxService = new Vo2MaxService()
const distancia = 5000

const vo2max = vo2maxService.vo2max({
    distancia,
    idade,
    sexo: 'FEMININO'
})

console.log('=======================================================')
console.log('                       VO2 MAX                         ')
console.log('=======================================================')
console.log(vo2max)
console.log('-------------------------------------------')


//=======================================================
//                   FLEXITESTE
//=======================================================
const flexitesteService = new FlexitesteService()
    const flexaoQuadril = 2
    const extensaoQuadril = 3
    const abducaoQuadril = 1
    const flexaoTronco = 4
    const flexaoLateralTronco = 3
    const extensaoAducaoOmbro = 2
    const aducao180Ombro = 4
    const extensaoPosteriorOmbro = 2

const flexiteste = flexitesteService.flexiteste({
    flexaoQuadril,
    extensaoQuadril,
    abducaoQuadril,
    flexaoTronco,
    flexaoLateralTronco,
    extensaoAducaoOmbro,
    aducao180Ombro,
    extensaoPosteriorOmbro
})

console.log('=======================================================')
console.log('                       FLEXITESTE                         ')
console.log('=======================================================')
console.log(flexiteste)
console.log('-------------------------------------------')

//=======================================================
//                   BANCO DE WELLS
//=======================================================
const bancoWellsService = new BancoWellsService()
const distanciaBancoWells = 50

const bancoWells = bancoWellsService.bancoWells({
    distancia:distanciaBancoWells,
    idade,
    sexo
})

console.log('=======================================================')
console.log('                       BANCO DE WELLS                  ')
console.log('=======================================================')
console.log(bancoWells)


//=======================================================
//                   1RM
//=======================================================
const umRmService = new UmRmService()
const carga = 80
const repeticao = 10

const umRm = umRmService.umRm({
    carga,
    repeticao,
})

console.log('=======================================================')
console.log('                       1RM                       ')
console.log('=======================================================')
console.log(umRm)
console.log('-------------------------------------------')