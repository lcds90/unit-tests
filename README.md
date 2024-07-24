# 📚 Documentação de Testes Unitários com Vitest e Vue 3

Bem-vindo à documentação de testes unitários para o seu projeto Vue 3 utilizando Vitest! 🎉

## 🚀 Introdução

Este repositório contém exemplos e guias para a criação e execução de testes unitários em aplicações Vue 3 usando Vitest. 

Sobre as ferramentas utilizadas
- **Vue Test Utils**: 
- **Jest**: Framework de testes.
- **Vitest**: é um framework de testes rápido e moderno, inspirado no Jest, mas otimizado para o ecossistema Vite.

## 📦 Instalação

Para começar, você precisará instalar Vitest e as dependências necessárias. Execute o seguinte comando:

```bash
npm install vitest @vue/test-utils
```

## 🛠️ Configuração
Adicione um script para executar os testes no seu package.json:

```json
{
  "scripts": {
    "test": "vitest"
  }
}
```

Crie um arquivo vitest.config.ts
```typescript
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
  },
})
```

![environments](images/environment.png)

[Sobre environments](https://vitest.dev/config/#environment)
Como vue compila uma aplicação web, podemos utilizar jsdom ou happy-dom.


### 🎯 Executando Testes
Para executar seus testes, basta rodar o comando:

```bash
npm run test
```

![Instalação feita](images/instalação_feita.png)

---

# 🧪 Entendendo sobre testes
Aqui está um exemplo básico de um teste unitário para um componente Vue 3:

