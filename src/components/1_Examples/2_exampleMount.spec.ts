import { describe, expect, it } from 'vitest';
import App from '../../App.vue';
import { mount, shallowMount } from '@vue/test-utils';

describe('Mount and shallow mount', () => {
	it('should render as mount', () => {
		const wrapper = mount(App);
        expect(wrapper).exist.toBeTruthy();
        
        console.log('📦 Wrapper com mount');
		console.log(
			'Monta um componente Vue completo, incluindo todos os seus componentes filhos \nRenderiza completamente os componentes filhos, e suas lógicas internas\n'
		);
        console.log(wrapper.html());
	});

    it('should render as shallowmount', () => {
        const wrapper = shallowMount(App);
        expect(wrapper).exist.toBeTruthy();
        
        console.log('📦 Wrapper com shallowMount');
		console.log(
            'Monta um componente Vue, mas de forma "superficial".\nEm vez de renderizar completamente os componentes filhos, eles serão substituídos por "stubs"\n'
		);
		console.log(wrapper.html());
	});

	it('should render console', () => {
		console.log('Quais são suas diferenças e casos de uso❓');

		console.log('\n🔧 mount');
		console.log(
			'➖ Testes de integração: Quando você deseja testar a interação entre um componente e seus filhos.'
		);
		console.log(
			'➖ Renderização completa: Quando você precisa garantir que a renderização completa do componente e de seus filhos está correta.'
		);
		console.log(
			'➖ Comportamento completo: Quando o comportamento de um componente depende de seus filhos e você precisa testá-lo completamente.'
		);

		console.log('\n🔍 shallowMount');
		console.log(
			'➖  Testes unitários: Quando você deseja isolar o componente que está testando e não se preocupar com seus filhos.'
		);
		console.log(
			'➖  Isolamento: Quando você quer evitar efeitos colaterais e dependências complexas que os filhos possam introduzir.'
		);

		console.log('\n🔄 Qual é o objetivo deles?');
		console.log(
			'Ambos criam instâncias de componentes que podem ser manipuladas e inspecionadas durante os testes.\nA API de "expect" é utilizada para o resultado esperado do componente.'
		);
	});
});
