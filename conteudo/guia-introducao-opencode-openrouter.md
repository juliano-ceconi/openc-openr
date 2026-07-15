# Guia de Introdução: A Tríade OpenCRO (Code + Router + Okam)

> Seu primeiro passo para dominar o uso de agentes de IA no Windows sem complicação.

O **OpenCRO** é um ecossistema open-source integrado, projetado para oferecer um ambiente de desenvolvimento e automação assistido por inteligência artificial profissional, de forma flexível e gratuita para todos. 

Este guia explica o que compõe essa tríade, por que usá-la e como as ferramentas funcionam juntas no seu dia a dia.

---

## O que é a Tríade OpenCRO?

A sigla representa a união de três pilares de código aberto que formam a solução ideal de inteligência artificial local:

1. **C (Code - OpenCode)**: O assistente e agente de IA. Pode ser usado tanto como um **App Desktop com interface visual** amigável (noob-friendly) quanto por terminal. O OpenCode lê seus arquivos locais, executa alterações e cria projetos do zero.
2. **R (Router - OpenRouter)**: O gateway unificado de chaves de API. Permite que o OpenCode se conecte a centenas de modelos globais de IA (Claude, GPT, Gemini, DeepSeek) sob demanda, cobrando centavos pelo consumo de tokens ou disponibilizando modelos gratuitos.
3. **O (Okam - Okam CLI)**: A governança local. Ele audita chaves e senhas para evitar vazamentos de segredos e garante que a IA siga as regras e padrões declarados no seu arquivo de diretrizes.

---

## O que é OpenCode?

O **OpenCode** é o coração da execução. Ele vai muito além dos assistentes de bate-papo tradicionais (como ChatGPT ou Claude Web) porque possui **contexto de projeto**: ele lê sua estrutura de arquivos, compreende as conexões entre pastas e edita os arquivos do seu computador de verdade.

### Interfaces Disponíveis

- **Desktop App (Recomendado)**: Interface 100% visual com janelas. Abra pastas arrastando e soltando e edite códigos sem medo de terminal.
- **Terminal (CLI/TUI)**: Para desenvolvedores avançados que preferem máxima velocidade direto na linha de comando.
- **IDE Extension**: Integração no VS Code ou JetBrains.

### Características Principais
- **Open source** e mantido ativamente pela comunidade.
- **Multi-provedor**: compatível com qualquer provedor de IA ou modelos locais.
- **Customização por AGENTS.md**: um arquivo simples na raiz onde você dita as regras do seu projeto e a IA as obedece.

---

## O que é OpenRouter?

O **OpenRouter** é o fornecedor de inteligência. Em vez de assinar serviços mensais individuais (pagando U$20 na OpenAI, U$20 na Anthropic, etc.), você conecta sua conta gratuita do OpenRouter ao OpenCode. O OpenRouter consolida todas as APIs de IA do mercado sob **uma única chave**.

### Vantagens do OpenRouter

- **Sem Assinatura Fixa**: Você adiciona créditos sob demanda (ex: U$5) e paga apenas pelo consumo real de tokens. Se usar pouco, gastará centavos.
- **Modelos Gratuitos**: Oferece excelentes modelos livres de custos para testes e automações básicas.
- **Fallback Automático**: Se um provedor ficar lento ou cair, o sistema redireciona a chamada instantaneamente.

---

## Tabela de Modelos e Custos (Referência Julho/2026)

Esta tabela apresenta os modelos líderes recomendados no OpenRouter para uso integrado com o OpenCode:

| Modelo de IA | Custo por 1M tokens (entrada/saída) | Indicação / Força |
|---|---|---|
| **Claude 3.5 Sonnet** | ~$3.00 / $15.00 | Líder supremo em inteligência lógica de código e arquitetura. |
| **GPT-4o** | ~$2.50 / $10.00 | Altíssima velocidade para criação rápida de APIs e scripts. |
| **Gemini 1.5 Pro** | ~$1.25 / $5.00 | Leitura e processamento de repositórios gigantescos (janela de 2M tokens). |
| **DeepSeek V3** | ~$0.14 / $0.28 | Custo-benefício imbatível e excelente resposta para o dia a dia. |
| **DeepSeek R1** | ~$0.55 / $2.19 | Modelo de raciocínio lógico avançado para solucionar bugs complexos. |
| **Llama 3.3 70B** | **Gratuito / Centavos** | Ideal para testes rápidos, aprendizado e uso diário sem custos. |

Com uso profissional regular (cerca de 25 sessões diárias), seu gasto real estimado ficará entre **US$ 5 e US$ 15 mensais** — um custo infinitamente menor que manter múltiplas assinaturas.

---

## Perfis de Uso: Como se beneficiar do OpenCRO

### Iniciantes e Curiosos
Você pode usar a interface visual do App Desktop do OpenCode como um mentor. Abra um projeto de estudos, peça para ele explicar trechos de códigos ou criar mini-aplicações do zero em linguagem natural.

### Empresários e Profissionais Liberais
Projete protótipos de novas ideias e automatize o dia a dia de forma rápida. Crie scripts que consolidam relatórios de planilhas, extraem dados de notas fiscais em PDF ou analisam minutas de contratos complexos.

### Programadores Avançados
Conecte o terminal/TUI aos hooks do Git usando o **Okam CLI**. O Okam analisará automaticamente o código antes de qualquer commit para verificar conformidade com as regras do `AGENTS.md` e testar a integridade lógica.

---

## Próximos Passos

Se você está iniciando no Windows, acesse o [Tutorial de Instalação no Windows](tutorial-instalacao-windows.md) para configurar o App Desktop e a chave OpenRouter do zero em poucos minutos.
