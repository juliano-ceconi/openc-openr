# Guia de Uso Avançado: OpenCode + OpenRouter

> Comandos, truques e boas práticas para extrair o máximo do seu agente de IA.

---

## 1. Comandos Essenciais do OpenCode

### Navegação e Controle

| Comando | Descrição |
|---|---|
| `/help` | Lista todos os comandos disponíveis |
| `/init` | Inicializa AGENTS.md no projeto |
| `/undo` | Desfaz a última alteração |
| `/redo` | Refaz a última alteração desfeita |
| `/model` | Troca o modelo ativo |
| `/clear` | Limpa a conversa atual |
| `/share` | Gera link compartilhável da sessão |
| `Ctrl+P` | Abre paleta de comandos |
| `Tab` | Alterna entre Plan Mode e Build Mode |

### Gerenciamento de Sessão

- **Multi-sessão**: abra terminais separados para executar agentes em paralelo
- **Plan Mode** (Tab): o agente apenas sugere, não modifica arquivos
- **Build Mode** (Tab): o agente pode criar e editar arquivos livremente

---

## 2. AGENTS.md: a alma do seu projeto

O `AGENTS.md` é o arquivo de instruções que o OpenCode lê para entender seu projeto. Ele define regras, convenções e contexto.

### Estrutura recomendada

```markdown
# Agente para [Nome do Projeto]

## Stack
- Runtime: Node.js 22
- Framework: Next.js 14 (App Router)
- Banco: PostgreSQL via Prisma
- Testes: Vitest

## Convenções
- Nomes de arquivo: kebab-case
- Componentes React em `src/components/`
- API routes em `src/app/api/`
- Testes ao lado do arquivo testado (`*.test.ts`)

## Regras
- Nunca modificar `tailwind.config.ts`
- Sempre tipar com TypeScript
- Commits descritivos no padrão conventional
```

Dica: o `/init` automático já gera uma boa base, mas vale a pena refiná-lo manualmente.

---

## 3. Skills: especializando seu agente

Skills são diretórios com instruções especializadas que o OpenCode carrega para tarefas específicas.

### Skills úteis para começar

| Skill | Função |
|---|---|
| `clean-code` | Padrões de código limpo |
| `testing-patterns` | Padrões de teste |
| `plan-writing` | Planejamento estruturado |
| `systematic-debugging` | Debug metódico |

### Como criar uma skill

```
.agents/skills/minha-skill/SKILL.md
```

```markdown
# Nome da Skill

## Objetivo
Descrição clara do que a skill faz.

## Regras
- Regra 1
- Regra 2

## Padrões
- Padrão de código X
- Padrão de arquitetura Y
```

---

## 4. MCP Servers: expandindo horizontes

MCP (Model Context Protocol) permite conectar o OpenCode a ferramentas externas.

### Configuração

No arquivo `~/.config/opencode/mcp.json`:

```json
{
  "mcpServers": {
    "openrouter": {
      "type": "url",
      "url": "https://mcp.openrouter.ai/mcp"
    }
  }
}
```

### Exemplos de uso com MCP

- **OpenRouter MCP**: consultar modelos, saldos e docs sem sair do OpenCode
- **Banco de dados**: conectar e consultar bancos SQL
- **APIs externas**: integrar com serviços como GitHub, Notion, Slack

---

## 5. Casos de Uso por Perfil

### Empresário: validar ideia de negócio

```
"Quero criar um MVP de um app de agendamento para salões de
beleza. Principais funcionalidades:
1. Cadastro de profissionais e serviços
2. Calendário de agendamentos
3. Notificações via WhatsApp (mock)
4. Painel admin simples

Use Node.js + SQLite, deploy via Render.
Me dê o plano primeiro (Plan Mode)."
```

### Profissional Liberal: automatizar tarefas

```
"Crie um script em Python que:
1. Leia todos os PDFs na pasta ./docs/
2. Extraia datas, valores e nomes de clientes
3. Gere uma planilha Excel com os dados extraídos
4. Salve em ./relatorios/relatorio-{data}.xlsx"
```

### Programador Iniciante: aprender na prática

```
"Sou iniciante em React. Preciso criar uma calculadora
simples com:
- Input de dois números
- Botões +, -, *, /
- Histórico das últimas 10 operações

Explique cada parte do código enquanto faz. Quero entender
o que cada linha faz."
```

### Hard-User de IA: pipeline multi-agente

```
"Execute em paralelo:
Agente 1: revise todo o código em src/ e aponte problemas de
segurança, performance e boas práticas.

Agente 2: crie testes unitários para todos os componentes em
src/components/ usando Vitest.

Agente 3: atualize o README.md com a documentação completa da
API, incluindo exemplos de requisição e resposta.
"
```

---

## 6. Truques de Produtividade

### Prompting eficaz

- **Seja específico**: "crie uma API" vago | "crie uma API REST com 3 endpoints: GET /users, POST /users, DELETE /users/:id" preciso
- **Forneça contexto**: referencie arquivos com `@arquivo.ts`
- **Use imagens**: arraste screenshots para o terminal para o agente entender visuais
- **Itere**: peça refinamento em vez de recomeçar
- **Planeje primeiro**: use Tab para Plan Mode, revise, depois execute

### Atalhos do TUI

| Atalho | Ação |
|---|---|
| `@` | Busca fuzzy de arquivos |
| `Ctrl+Enter` | Envia prompt multi-linha |
| `Ctrl+L` | Rola para baixo |
| `Ctrl+U` | Rola para cima |
| `Ctrl+C` | Cancela execução atual |
| `↑/↓` | Navega no histórico de prompts |

### Otimização de custos no OpenRouter

- Use **DeepSeek V3** ou **Llama 3** para tarefas simples (revisão, explicação)
- Reserve **Claude Sonnet 4** para arquitetura e código crítico
- Ative o **modo prompt caching** quando disponível
- Monitore gastos em [openrouter.ai/activity](https://openrouter.ai/activity)

---

## 7. Modo Desktop App + WSL Server

Se preferir interface visual:

1. No WSL, inicie o servidor:
   ```bash
   opencode serve --hostname 0.0.0.0 --port 4096
   ```

2. No Windows, abra o Desktop App e conecte em `http://localhost:4096`

Segurança: defina uma senha com `OPENCODE_SERVER_PASSWORD=sua-senha`.

### Web Client

No WSL:
```bash
opencode web --hostname 0.0.0.0
```

Acesse de qualquer navegador no Windows em `http://localhost:<porta>`.
