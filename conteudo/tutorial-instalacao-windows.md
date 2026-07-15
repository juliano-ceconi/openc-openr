# Tutorial de Instalação: OpenCode + OpenRouter no Windows

> Configurar seu agente de IA no Windows em 15 minutos. Duas rotas possíveis: WSL (recomendada) ou nativa via npm.

---

## Pré-requisitos

- Windows 10 ou 11 (64 bits)
- Acesso de administrador no computador
- Conexão com internet
- Uma conta no [OpenRouter](https://openrouter.ai) (gratuita)

---

## Rota A: WSL (Recomendada)

O WSL (Windows Subsystem for Linux) oferece desempenho superior e compatibilidade total com o OpenCode.

### Passo 1: Instalar WSL

Abra o **PowerShell como Administrador** e execute:

```powershell
wsl --install
```

Isso instala o Ubuntu como distribuição padrão. Reinicie o computador quando solicitado.

Após reiniciar, o Ubuntu abrirá automaticamente. Crie seu usuário e senha Linux.

### Passo 2: Instalar OpenCode

Dentro do terminal Ubuntu:

```bash
curl -fsSL https://opencode.ai/install | bash
```

Feche e reabra o terminal Ubuntu, ou execute:

```bash
source ~/.bashrc
```

Verifique a instalação:

```bash
opencode --version
```

### Passo 3: Obter chave de API do OpenRouter

1. Acesse [openrouter.ai/keys](https://openrouter.ai/keys)
2. Crie sua conta (pode fazer login com Google ou GitHub)
3. Clique em **Create Key**
4. Defina um nome para a chave (ex: "OpenCode Windows")
5. Copie a chave gerada (começa com `sk-or-...`)

### Passo 4: Configurar OpenCode

No terminal Ubuntu, execute:

```bash
opencode
```

Na tela inicial, pressione `Ctrl+P` para abrir a paleta de comandos e selecione **Provider: OpenRouter API**.

Cole sua chave de API quando solicitado.

Alternativamente, crie o arquivo de configuração manual:

```bash
mkdir -p ~/.config/opencode
```

Crie `~/.config/opencode/config.json`:

```json
{
  "provider": "openrouter",
  "openRouterApiKey": "sk-or-v1-sua-chave-aqui",
  "model": "anthropic/claude-sonnet-4"
}
```

### Passo 5: Acessar seus projetos do Windows

Seus arquivos do Windows ficam disponíveis em `/mnt/`:

```
/mnt/c/Users/SeuNome/Documentos/projeto
/mnt/d/projetos/meu-app
```

Navegue até seu projeto e inicie o OpenCode:

```bash
cd /mnt/c/Users/SeuNome/Documents/meu-projeto
opencode
```

### Passo 6: Inicializar o OpenCode no projeto

Dentro do OpenCode, execute o comando de inicialização:

```
/init
```

Isso cria um `AGENTS.md` com as regras e contexto do seu projeto. Commite esse arquivo no repositório.

---

## Rota B: Instalação Nativa (npm/powershell)

Se não quiser usar WSL, instale diretamente no Windows.

### Passo 1: Instalar Node.js

Baixe e instale o [Node.js](https://nodejs.org) (versão LTS). Durante a instalação, marque "Add to PATH".

### Passo 2: Instalar OpenCode via npm

Abra o **PowerShell** e execute:

```powershell
npm install -g opencode-ai
```

Alternativas:

```powershell
# Via Chocolatey
choco install opencode

# Via Scoop
scoop install opencode
```

### Passo 3: Configurar chave de API

Crie a variável de ambiente:

```powershell
[System.Environment]::SetEnvironmentVariable('OPENROUTER_API_KEY', 'sk-or-v1-sua-chave-aqui', 'User')
```

Ou configure via arquivo `%USERPROFILE%\.config\opencode\config.json`.

### Passo 4: Usar OpenCode no Windows

Navegue até seu projeto e execute:

```powershell
opencode
```

---

## Pós-instalação: escolhendo o modelo ideal

No OpenCode, você pode trocar de modelo a qualquer momento com:

```
/model
```

Lista de modelos recomendados para começar:

| Modelo | Código no OpenRouter | Perfil |
|---|---|---|
| Claude Sonnet 4 | `anthropic/claude-sonnet-4` | Geral (recomendado) |
| GPT-4o | `openai/gpt-4o` | Código |
| Gemini 2.5 Pro | `google/gemini-2.5-pro` | Contexto longo |
| DeepSeek V3 | `deepseek/deepseek-chat` | Custo-benefício |
| Llama 3.1 70B | `meta-llama/llama-3.1-70b` | Gratuito |

Para ver todos os modelos disponíveis no OpenRouter: [openrouter.ai/models](https://openrouter.ai/models)

---

## Verificação: seu setup está pronto?

Rode este comando no terminal para confirmar:

```
Você: "liste os arquivos na raiz do projeto e me diga qual
tecnologia cada um usa"
```

Se o OpenCode responder listando e analisando seus arquivos, **a instalação está completa**.

---

## Bônus: Instalando Okam CLI para Governança

O **Okam** é uma ferramenta complementar de governança de IA local que gerencia suas sessões, gerencia skills (pacotes de instruções e regras) e executa ganchos (hooks) de validação de estado antes e depois de cada comando.

### Instalação rápida:
No terminal do Windows (PowerShell) ou Linux/WSL (requer Node.js >= 18):

```bash
npm install -g okam-cli
```

Verifique se a instalação foi bem-sucedida:

```bash
okam --version
```

Para configurar hooks de automação, gerenciar diretrizes e auditar commits, veja o guia completo em [Governança Local com Okam CLI](governanca-okam-cli.md).

---

## Troubleshooting rápido


| Problema | Solução |
|---|---|
| `opencode: command not found` | Reabra o terminal ou adicione ao PATH |
| Erro de autenticação OpenRouter | Verifique se a chave começa com `sk-or-v1` |
| WSL não inicia | Rode `wsl --update` no PowerShell admin |
| Modelo retorna erro | Tente `/model` e selecione outro modelo |
| Lentidão no WSL | Mantenha o projeto no sistema de arquivos do WSL (`~/code/`) |
