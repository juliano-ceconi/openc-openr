# Guia do Usuário: Governança Local de IA com Okam CLI

> Implemente regras de governança estritas, gerencie sessões e automatize verificações pré/pós-desenvolvimento no seu ambiente de IA com o Okam CLI.

---

## Recursos Oficiais

* 🔗 **Página do Projeto (Landing Page)**: [https://okam-os.vercel.app/](https://okam-os.vercel.app/)
* 💾 **Repositório do Código (GitHub)**: [https://github.com/juliano-ceconi/okam](https://github.com/juliano-ceconi/okam)

---

## O que é o Okam CLI?

O **Okam** é uma ferramenta complementar e de código aberto voltada para a **governança local de agentes de IA**. Ele funciona como um "caderno de memórias e diretrizes" para garantir que os assistentes operem sob restrições técnicas, organizacionais e de segurança, evitando regressões ou vazamentos acidentais de segredos.

---

## 1. Instalação do Okam

O Okam CLI roda em ambientes Windows e Linux/WSL e requer **Node.js (versão 18 ou superior)** instalado.

### Instalação Global:
No seu terminal favorito (PowerShell ou Bash do WSL), execute:

```bash
npm install -g okam-cli
```

### Validar Instalação:
Certifique-se de que a instalação foi bem-sucedida verificando a versão da CLI:

```bash
okam --version
```

---

## 2. Inicializando o Okam no Projeto

Para que o Okam controle as diretrizes de IA de um projeto específico, você deve inicializá-lo na pasta raiz do seu código:

```bash
okam init
```

Esse comando cria o arquivo de configuração `.okamrc` no diretório. A partir deste arquivo, você gerencia comportamentos locais do assistente.

---

## 3. Controle e Gerenciamento de Sessão

* **Iniciar Sessão Interativa**:
  ```bash
  okam sessions
  ```
  Permite gerenciar e alternar entre sessões ativas do assistente de IA.
  
* **Executar Prompt Rápido (Modo Pipe)**:
  ```bash
  okam run "sua pergunta ou instrução"
  ```
  
* **Encerrar Sessão Ativa**:
  ```bash
  okam exit
  ```

---

## 4. Automação de Governança com Hooks

O maior poder do Okam reside na capacidade de automatizar tarefas antes ou depois das interações com o agente, garantindo consistência e qualidade do código.

Os ganchos (hooks) são configurados diretamente no seu arquivo `.okamrc`:

```yaml
hooks:
  pre-command:
    # Garante que os commits remotos estejam sincronizados localmente antes de editar
    - "git fetch origin"
  post-command:
    # Roda validações de linter e testes de regressão após a IA modificar os arquivos
    - "npm run lint && npm test"
```

---

## 5. Modo Pipe para Auditoria (Revisão de Diffs)

Integre o Okam em pipelines de Git para atuar como um auditor de segurança antes de consolidar os seus commits:

```bash
# Revisar o diff do staging (arquivos adicionados ao git) buscando segredos e falhas
git diff --cached | okam run "revise este diff e aponte problemas de segurança, chaves ou senhas expostas e más práticas"
```

---

## 6. Estendendo com Skills Reutilizáveis

As **Skills** são pacotes de diretivas que instruem o assistente a agir sob padrões definidos de negócios ou de desenvolvimento (ex: boas práticas de clean code, conformidade com a LGPD ou checklists TDAH-friendly).

* **Listar Skills Instaladas**:
  ```bash
  okam skill list
  ```
* **Instalar uma Skill**:
  ```bash
  okam skill install checklists
  ```
* **Atualizar todas as Skills**:
  ```bash
  okam skill update --all
  ```
