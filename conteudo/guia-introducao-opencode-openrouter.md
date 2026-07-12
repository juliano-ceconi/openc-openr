# Guia de Introdução: OpenCode + OpenRouter

> Seu primeiro passo para dominar agentes de IA no terminal do Windows.

Este guia responde as perguntas fundamentais: o que são essas ferramentas, por que usá-las juntas e como elas podem transformar sua relação com programação e automação.

---

## O que é OpenCode?

**OpenCode** é um agente de IA open source que opera no terminal (ou como app desktop/IDE). Ele entende seu projeto, acessa seus arquivos, executa comandos e escreve código — tudo orquestrado por modelos de linguagem (LLMs).

Diferente de chatbots como ChatGPT, o OpenCode tem **contexto do seu projeto**: ele lê sua estrutura de diretórios, entende suas dependências, conhece suas convenções de código (via `AGENTS.md`) e pode agir diretamente no seu sistema: criar arquivos, instalar pacotes, rodar testes, fazer commits.

### Características principais

- **Open source** (160K+ estrelas no GitHub, 7.5M devs/mês)
- **Multi-provedor**: funciona com qualquer LLM (Claude, GPT, Gemini, Llama, locais)
- **Multi-sessão**: execute múltiplos agentes em paralho no mesmo projeto
- **LSP-aware**: entende a estrutura do seu código com Language Server Protocol
- **Skills**: plugins de instrução especializados para tarefas específicas
- **Compartilhável**: gere links das suas sessões de trabalho

### Interfaces disponíveis

| Interface | Uso recomendado |
|---|---|
| Terminal (TUI) | Fluxo principal, máximo controle |
| Desktop App | Experiência visual com janelas |
| Web Client | Acesso remoto via navegador |
| IDE Extension | Integração com VS Code / JetBrains |

---

## O que é OpenRouter?

**OpenRouter** é um gateway de API unificado para modelos de IA. Em vez de criar contas e assinaturas em cada provedor (OpenAI, Anthropic, Google, Meta...), você usa **uma única API** para acessar centenas de modelos.

### Vantagens do OpenRouter

- **Catálogo unificado**: Claude, GPT, Gemini, Llama, Mistral, DeepSeek e dezenas mais
- **Pay-per-use**: paga só pelos tokens que consumir, sem assinatura fixa
- **Modelos gratuitos**: opções com limite diário generoso para começar sem gastar
- **Fallback automático**: se um modelo falha, OpenRouter tenta outro
- **Leaderboard**: rankings públicos de performance por modelo
- **MCP Server**: integração com assistentes de código via OAuth

---

## Por que usar OpenCode + OpenRouter juntos?

OpenCode precisa de um modelo de IA para funcionar. OpenRouter fornece acesso a **todos os modelos** via uma única chave de API. A combinação é natural:

```
OpenCode (agente) ←→ OpenRouter (gateway) ←→ Modelos (Claude, GPT, etc.)
```

**Sem OpenRouter**: você precisa de uma chave de API diferente para cada modelo, gerir assinaturas separadas e configurar provedores um a um.

**Com OpenRouter**: uma chave, um cadastro, acesso a todos os modelos. Troque de modelo com uma linha de configuração.

### Custo estimado

| Modelo | Custo por 1M tokens (entrada/saída) | Indicação |
|---|---|---|
| Claude Sonnet 4 | ~$3 / $15 | Uso geral, equilíbrio |
| GPT-4o | ~$2.50 / $10 | Código, análise |
| Gemini 2.5 Pro | ~$1.25 / $5 | Tarefas longas |
| DeepSeek V3 | ~$0.50 / $2 | Custo-benefício |
| Llama 3 70B | Gratuito (limitado) | Testes |

Com uso moderado (20-30 sessões/dia), o gasto mensal fica entre **US$ 5 e US$ 20** — muito abaixo de assinaturas individuais de cada serviço.

---

## Perfis de uso: como cada pessoa se beneficia

### Empresários e Tomadores de Decisão

- Crie protótipos funcionais de ideias de negócio sem time técnico
- Automatize relatórios e extração de dados de planilhas
- Analise contratos e documentos com IA
- Valide viabilidade técnica de projetos antes de contratar devs

### Profissionais Liberais (advogados, contadores, designers, consultores)

- Gere minutas de contratos e documentos padronizados
- Automatize renomeação e organização de arquivos
- Crie scripts para extrair dados de PDFs e planilhas
- Monitore prazos e gere alertas automáticos

### Programadores Iniciantes

- Use o OpenCode como mentor: peça explicações de código linha a linha
- Crie projetos completos do zero com descrições em linguagem natural
- Aprenda debugar: peça para o agente encontrar e corrigir erros
- Entenda conceitos: "explique o que é uma closure com exemplos no meu projeto"

### Curiosos e Hard-Users de IA

- Configure skills especializadas (testes, documentação, deploy)
- Conecte MCP servers para expandir capacidades do agente
- Crie workflows multi-agente com sessões paralelas
- Customize o comportamento do OpenCode via `AGENTS.md`

---

## Exemplo rápido: do zero ao código

Com OpenCode + OpenRouter instalados, você pode fazer:

```
Você: "crie uma API REST em Node.js com Express que gerencie uma
lista de tarefas (CRUD completo). Use SQLite como banco, inclua
validação de dados e documentação swagger."
```

Em segundos, o OpenCode:
1. Cria a estrutura de diretórios
2. Gera `package.json`, `server.js`, rotas, modelos e controllers
3. Instala as dependências
4. Cria o banco SQLite com schema inicial
5. Adiciona comentários e um `README.md`

Tudo isso sem você escrever uma linha de código manualmente.

---

## Próximos passos

Se você está no Windows, siga o **Tutorial de Instalação no Windows** para configurar tudo passo a passo. Depois, explore o **Guia de Uso Avançado** para dominar truques e boas práticas.
