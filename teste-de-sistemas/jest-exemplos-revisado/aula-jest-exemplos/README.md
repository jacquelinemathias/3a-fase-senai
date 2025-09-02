# 📘 Aula Revisão – Fundamentos de JavaScript + Jest

Este repositório contém os exemplos da aula de revisão de **JavaScript + Jest**.

## 🚀 Como usar

1. Instale as dependências:

   ```bash
   npm install
   ```

2. Rode todos os testes em modo **CommonJS (sem warnings)**:

   ```bash
   npm test
   ```

   Esse é o modo mais simples: o Jest roda normalmente sem avisos do Node, pois está no formato **CommonJS**.

---

## ⚡ Rodando em modo Module (ESM)

Se você definir `"type": "module"` no `package.json`, seu projeto passa a rodar em **ESM (ECMAScript Modules)**.  
O Jest ainda não dá suporte total a ESM no Node, por isso é necessário usar a flag experimental:

```bash
npm run test-module
```

Esse script está configurado como:

```json
"scripts": {
  "test-module": "node --experimental-vm-modules node_modules/jest/bin/jest.js"
}
```

> ℹ️ Nesse modo o Node exibirá o warning:  
> `(node:XXXX) ExperimentalWarning: VM Modules is an experimental feature and might change at any time`  
> Isso é esperado e não atrapalha a execução.

---

## 🛠️ Evitando a flag experimental com Babel

Para rodar Jest em modo **ESM sem warnings**, usamos o **Babel** para transpilar o código de ESM → CommonJS antes dos testes.

### Passo a passo:

1. Instale as dependências:

   ```bash
   npm install --save-dev @babel/preset-env babel-jest
   ```

2. Crie um arquivo `.babelrc` na raiz do projeto:

   ```json
   {
     "presets": ["@babel/preset-env"]
   }
   ```

3. Ajuste o `jest.config.js` para usar o Babel:

   ```js
   export default {
     testEnvironment: "node",
     transform: {
       "^.+\\.jsx?$": "babel-jest",
     },
   };
   ```

4. Atualize o script no `package.json`:

   ```json
   "scripts": {
     "test": "jest"
   }
   ```

5. Agora basta rodar:

   ```bash
   npm test
   ```

   ✅ Todos os testes funcionarão em modo **ESM** sem precisar da flag experimental e sem warnings.

---

## 📌 Conclusão

- `npm test` → roda em **CommonJS** (mais simples, sem warnings).
- `npm run test-module` → roda em **ESM nativo** (exibe warnings).
- Configurando o **Babel**, é possível rodar em **ESM** sem warnings e de forma transparente.
