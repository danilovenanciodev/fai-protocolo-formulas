import { UmRmService } from "./services/um-rm.service"
import { BancoWellsService } from "./services/banco-wells.service"
import { DobraCutaneaService } from "./services/dobra-cutanea.service"
import { FlexitesteService } from "./services/flexiteste.service"
import { RcqService } from "./services/rcq.service"
import { TesteAbdominalService } from "./services/teste-abdominal.service"
import { TesteFlexaoBraco } from "./services/teste-flexao-braco.service"
import { Vo2MaxService } from "./services/vo2max.service"
import { ImcService } from "./services/imc.service"
import { PesoOsseoService } from "./services/peso-osseo.service"
import { SomatotipoService } from "./services/somatotipo.service"
import { RceService } from "./services/rce.service"
import { IpService } from "./services/ip.service"
import { IcService } from "./services/ic.service"
import { IacService } from "./services/iac.service"
import { ComposicaoCorporalService } from "./services/composicao-corporal.service"
import { PesoIdealService } from "./services/peso-ideal.service"
import { PercentualGorduraService } from "./services/percentual-gordura.service"

//=======================================================
//                         Variaveis
//=======================================================
//                      Dados demográficos
//-------------------------------------------------------
const sexo = 'MASCULINO'
const idade = 36

//-------------------------------------------------------
//                          Medidas
//-------------------------------------------------------
const peso = 93.3
const altura = 1.81
const percentualGordura = 25
const semanaGestacional = 30

//-------------------------------------------------------
//                      Dobras cutâneas
//-------------------------------------------------------
const triceps = 21 
const supraIliaca = 36
const subescapular = 38
const abdominal = 36
const axilarMedia = 37
const coxa = 28
const peitoral = 19

//-------------------------------------------------------
//                          Perimetria
//-------------------------------------------------------
const cintura = 74
const quadril = 134

//-------------------------------------------------------
//                          Testes
//-------------------------------------------------------
const testeFlexaoBracoRepeticoes = 40
const testeAbdominalRepetocoes = 15
const distanciaVo2Max = 5000
const distanciaBancoWells = 50

//-------------------------------------------------------
//                          Flexiteste
//-------------------------------------------------------
const flexaoQuadril = 2
const extensaoQuadril = 3
const abducaoQuadril = 1
const flexaoTronco = 4
const flexaoLateralTronco = 3
const extensaoAducaoOmbro = 2
const aducao180Ombro = 4
const extensaoPosteriorOmbro = 2

//-------------------------------------------------------
//                          UmRM
//-------------------------------------------------------
const cargaUmRm = 80
const repeticaoUmRm = 10

//-------------------------------------------------------
//                          Diametros
//-------------------------------------------------------
const punho = 55
const joelho = 98
const diametroFemur = 0
const diametroRadioUlnar = 0

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


const rcq = rcqService.rcq({
    cintura,
    quadril,
    idade,
    sexo
})

console.log('=======================================================')
console.log('                       RCQ                             ')
console.log('=======================================================')
console.log(rcq)
console.log('-------------------------------------------')

//=======================================================
//                         RCE
//=======================================================
const rceService = new RceService()

const rce = rceService.rce({
    cintura,
    altura,
})

console.log('=======================================================')
console.log('                       RCE                             ')
console.log('=======================================================')
console.log(rce)
console.log('-------------------------------------------')

//=======================================================
//                         IP
//=======================================================
const ipService = new IpService()

const ip = ipService.ip({
    peso,
    altura,
})

console.log('=======================================================')
console.log('                       IP                             ')
console.log('=======================================================')
console.log(ip)
console.log('-------------------------------------------')

//=======================================================
//                         IC
//=======================================================
const icService = new IcService()

const ic = icService.ic({
    peso,
    altura,
    cintura,
    sexo
})

console.log('=======================================================')
console.log('                       IC                             ')
console.log('=======================================================')
console.log(ic)
console.log('-------------------------------------------')

//=======================================================
//                         IAC
//=======================================================
const iacService = new IacService()

const iac = iacService.iac({
    altura,
    quadril
})

console.log('=======================================================')
console.log('                       IAC                             ')
console.log('=======================================================')
console.log(iac)
console.log('-------------------------------------------')


//=======================================================
//                   TESTE FLEXÃO DE BRAÇO
//=======================================================
const testeFlexaoBracoService = new TesteFlexaoBraco()


const testeFlexaoBraco = testeFlexaoBracoService.testeFLexaoBraco({
    repeticoes:testeFlexaoBracoRepeticoes,
    idade,
    sexo
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


const testeAbdominal = testeAbdominalService.testeAbdominalUmMinuto({
    repeticoes: testeAbdominalRepetocoes,
    idade,
    sexo
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


const vo2max = vo2maxService.vo2max({
    distancia: distanciaVo2Max,
    idade,
    sexo
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


const umRm = umRmService.umRm({
    carga: cargaUmRm,
    repeticao: repeticaoUmRm,
})

console.log('=======================================================')
console.log('                       1RM                       ')
console.log('=======================================================')
console.log(umRm)
console.log('-------------------------------------------')


//=======================================================
//                   Peso Osseo
//=======================================================
const pesoOsseoService = new PesoOsseoService()


const pesoOsseo = pesoOsseoService.massaOsseo({
    punho,
    joelho,
    altura
})

console.log('=======================================================')
console.log('                       Peso Osseo                      ')
console.log('=======================================================')
console.log(pesoOsseo)
console.log('-------------------------------------------')

//=======================================================
//                   Somatotipo
//=======================================================
const somatotipoService = new SomatotipoService()


const somatotipo = somatotipoService.somatotipo({
    peso,
    altura,
    umero: 60,
    femur: 120,
    panturilha: 13,
    triceps: 10,
    subescapular: 15,
    supraIliaca: 20,
    circunferenciaBraco: 42,
    circunferenciaPanturilha: 40.5,
})

console.log('=======================================================')
console.log('                       Somatotipo                      ')
console.log('=======================================================')
console.log(somatotipo)
console.log('-------------------------------------------')

//=======================================================
//                   Composicao corporal
//=======================================================
const composicaoCorporalService = new ComposicaoCorporalService()


const composicao = composicaoCorporalService.composicaoCorporal({
    peso,
    altura,
    percentualGordura,
    diametroFemur,
    diametroRadioUlnar,
    sexo
})

console.log('=======================================================')
console.log('                       Composicao corporal                      ')
console.log('=======================================================')
console.log(composicao)
console.log('-------------------------------------------')

//=======================================================
//                   Peso ideal
//=======================================================
const pesoIdealService = new PesoIdealService()

const borchardt = pesoIdealService.borchardt({
    altura: 1.81,
    circunferenciaTorax: 108
})

const broca = pesoIdealService.broca({
    altura: 1.81,
    sexo: 'MASCULINO'
})

const imcMedio = pesoIdealService.imcMedio({
    altura: 1.81,
})

const lorentz = pesoIdealService.lorentz({
    altura: 1.81,
    sexo: 'MASCULINO'
})

const monnerotDumaine = pesoIdealService.monnerotDumaine({
    altura: 1.81,
    circunferenciaPunho: 18,
    idade: 36
})

const ricci = pesoIdealService.ricci({
    altura: 1.81,
})

console.log('=======================================================')
console.log('                       Peso ideal                      ')
console.log('=======================================================')
console.log('                       borchardt                       ')
console.log('-------------------------------------------------------')
console.log(borchardt)
console.log('-------------------------------------------------------')
console.log('                       broca                           ')
console.log('-------------------------------------------------------')
console.log(broca)
console.log('-------------------------------------------------------')
console.log('                       imcMedio                        ')
console.log('-------------------------------------------------------')
console.log(imcMedio)
console.log('-------------------------------------------------------')
console.log('                       lorentz                         ')
console.log('-------------------------------------------------------')
console.log(lorentz)
console.log('-------------------------------------------------------')
console.log('                       monnerotDumaine                 ')
console.log('-------------------------------------------------------')
console.log(monnerotDumaine)
console.log('-------------------------------------------------------')
console.log('                       ricci                       ')
console.log('-------------------------------------------------------')
console.log(ricci)
console.log('-------------------------------------------------------')
console.log('                    peso ideal médio                    ')
console.log('-------------------------------------------------------')
console.log(parseFloat(((borchardt.pesoIdeal + broca.pesoIdeal + imcMedio.pesoIdeal + lorentz.pesoIdeal + monnerotDumaine.pesoIdeal + ricci.pesoIdeal) / 6).toFixed(2)))
console.log('-------------------------------------------------------')


//=======================================================
//                   Percentual de Gordura
//=======================================================
const percentualGorduraService = new PercentualGorduraService()

const estaturaCintura = percentualGorduraService.estaturaCintura({
    altura: 1.81,
    perimetroCintura: 104,
    sexo: 'MASCULINO'
})

const imc = percentualGorduraService.imc({
    altura: 1.81,
    peso: 94,
    idade: 36,
    sexo: 'MASCULINO'
})

const perimetroCintura = percentualGorduraService.perimetroCintura({
    idade: 36,
    perimetroCintura: 104,
    sexo: 'MASCULINO'
})


console.log('=======================================================')
console.log('                       Percentual de Gordura                     ')
console.log('=======================================================')
console.log('                       estaturaCintura                       ')
console.log('-------------------------------------------------------')
console.log(estaturaCintura)
console.log('-------------------------------------------------------')
console.log('                       imc                        ')
console.log('-------------------------------------------------------')
console.log(imc)
console.log('-------------------------------------------------------')
console.log('                       perimetroCintura                         ')
console.log('-------------------------------------------------------')
console.log(perimetroCintura)
console.log('-------------------------------------------------------')
