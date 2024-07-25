import { describe, expect, it } from 'vitest'

describe('Math operations', () => {
  it('should add two numbers correctly', () => {
    expect(1 + 1).toBe(2)
  })

  it('should subtract two numbers correctly', () => {
    expect(2 - 1).toBe(1)
  })
})

console.log('📄 it / test')
console.log(
  'A função it (ou seu alias test) é usada para definir um caso de teste individual. \nCada caso de teste deve ter uma descrição clara e uma função que contém as expectativas do teste.\nO uso de it e test é definido de acordo com o padrão do projeto.',
)

console.log('\n📄 describe')
console.log(
  'A função describe é usada para agrupar casos de teste relacionados. \nIsso ajuda a organizar os testes de uma forma mais estruturada,\npermitindo que você agrupe testes que verificam funcionalidades similares ou pertencem ao mesmo componente.',
)

console.log('\n📄 expect')
console.log(
  'A função expect é usada para fazer asserções sobre o valor testado. \nVocê chama expect com o valor que deseja testar, \ne utiliza um dos métodos disponíveis para verificar diferentes condições.',
)
