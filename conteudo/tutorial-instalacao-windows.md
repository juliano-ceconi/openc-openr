# Tutorial de Instalação: OpenCode + OpenRouter no Windows

> Configure seu agente de IA no Windows de forma simples. Rota principal recomendada: App Desktop visual (noob-friendly). Rota avançada: WSL ou nativa via npm para terminal.

---

## Pré-requisitos

- Windows 10 ou 11 (64 bits)
- Conexão com internet
- Uma conta no [OpenRouter](https://openrouter.ai) (gratuita)

---

## Passo 1: Criar conta e obter chave de API no OpenRouter

O OpenRouter conecta o assistente aos melhores modelos de linguagem do mercado (Claude, GPT, Gemini, DeepSeek) sob demanda.

1. Acesse [openrouter.ai](https://openrouter.ai) e crie uma conta gratuita (via Google ou GitHub).
2. Vá para a seção de chaves em [openrouter.ai/keys](https://openrouter.ai/keys).
3. Clique em **Create Key**, dê um nome para ela (ex: "OpenCode Windows") e clique em criar.
4. **Importante:** Copie e guarde a chave gerada (ela começa com `sk-or-...`). Ela só é exibida uma única vez.

---

## Rota A: App Desktop (Recomendada - Sem Terminal)

Esta opção é ideal para iniciantes, empresários e qualquer pessoa que prefira uma interface visual simples com janelas, livre de linhas de comando.

### 1. Baixar o OpenCode App
1. Acesse o site oficial do [OpenCode.ai](https://opencode.ai).
2. Clique no botão de download para obter o instalador de Windows (arquivo `.exe`).
3. Dê dois cliques no arquivo baixado e siga o assistente de instalação comum.

### 2. Configurar a Chave OpenRouter no App
1. Abra o OpenCode no seu menu Iniciar do Windows.
2. Clique no ícone de **Engrenagem (Configurações)** no canto inferior esquerdo.
3. No campo de Provedor de IA, selecione **OpenRouter**.
4. Cole a sua chave de API (`sk-or-...`) e salve as alterações.
5. No menu de seleção de modelos, selecione seu modelo inicial. Sugerimos o `deepseek/deepseek-chat` pelo custo-benefício ou `meta-llama/llama-3.3-70b-instruct` para começar gratuitamente.

### 3. Usar e interagir
1. Clique em **Open Folder** (Abrir Pasta) e selecione o diretório dos seus arquivos no Windows.
2. Escreva o que você precisa na caixa de chat (exemplo: "Crie um arquivo index.html elegante") e assista à IA trabalhar visualmente.

---

## Rota B: Terminal / CLI (Avançada para Desenvolvedores)

Se você é desenvolvedor e prefere interagir via linha de comando ou TUI (Terminal User Interface), pode escolher um dos caminhos abaixo:

### Caminho B.1: WSL (Windows Subsystem for Linux - Recomendado para devs)
O WSL oferece desempenho de arquivo superior e compatibilidade nativa de ferramentas Linux.

1. Abra o **PowerShell como Administrador** e execute:
   ```powershell
   wsl --install
   ```
   Reinicie o Windows. O terminal Ubuntu abrirá para você configurar usuário/senha.
2. Instale o OpenCode no terminal do Linux/Ubuntu:
   ```bash
   curl -fsSL https://opencode.ai/install | bash
   source ~/.bashrc
   ```
3. Crie a pasta de configuração e salve a chave do OpenRouter:
   ```bash
   mkdir -p ~/.config/opencode
   echo '{"provider": "openrouter", "openRouterApiKey": "sua-chave-aqui"}' > ~/.config/opencode/config.json
   ```

### Caminho B.2: Instalação Nativa via npm (Node.js)
1. Baixe e instale a versão LTS do [Node.js](https://nodejs.org).
2. Abra o **PowerShell** comum e instale o pacote globalmente:
   ```powershell
   npm install -g opencode-ai
   ```
3. Defina a variável de ambiente do Windows com sua chave:
   ```powershell
   [System.Environment]::SetEnvironmentVariable('OPENROUTER_API_KEY', 'sua-chave-aqui', 'User')
   ```
   *(Reinicie o terminal após este comando).*

---

## Governança do Projeto: Criando o AGENTS.md

Seja no App Desktop ou no terminal, ao abrir um projeto novo, é de extrema importância inicializar as regras de diretrizes locais:

- No App Desktop: Ele perguntará visualmente se você deseja criar as regras.
- No Terminal: Digite o comando especial `/init`.

Isso criará o arquivo `AGENTS.md` na raiz do seu projeto. Você pode configurá-lo em português com as diretrizes do seu negócio (ex: "Não use banco de dados MySQL, prefira SQLite", "mantenha os arquivos pequenos e explicados"). A IA lerá este arquivo silenciosamente antes de sugerir ou fazer qualquer alteração.

---

## Bônus: Instalação do Okam CLI para Segurança

O **Okam** é a ferramenta de governança do OpenCRO. Ele audita chaves e segredos para que nada vaze no seu Git, além de rodar hooks automáticos de validação antes e depois de cada comando.

Instale no PowerShell ou terminal Linux/WSL (requer Node.js >= 18):
```bash
npm install -g okam-cli
okam --version
```
Para ver o uso completo, acesse o guia específico [Governança Local com Okam CLI](governanca-okam-cli.md).

---

## Troubleshooting rápido

| Problema | Solução |
|---|---|
| Comando `opencode` não encontrado | Reabra o terminal ou reinstale o Node/App Desktop |
| Erro de chave de API | Verifique se colou a chave inteira começando com `sk-or-` |
| WSL não inicia | Execute `wsl --update` no PowerShell como administrador |
| Modelo lento ou com erro | Tente trocar de modelo nas configurações ou comando `/model` |
