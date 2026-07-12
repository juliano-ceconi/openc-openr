# Templates de Prompt para OpenCode + OpenRouter

> 20+ prompts prontos para usar. Copie, cole e adapte para seu contexto.

---

## Criação de Código

### 1. API REST completa

```
Crie uma API REST em [Node.js/Python/Go] com os seguintes endpoints:

[listar endpoints]

Use [banco de dados] como storage. Inclua:
- Validação de dados com [biblioteca]
- Tratamento de erros padronizado
- Logs estruturados
- README.md com instruções de uso
```

### 2. Componente React/Next.js

```
Crie um componente [nome] em React com TypeScript que:

[descrever funcionalidade]

Props esperadas:
[listar props]

Deve ser responsivo, acessível e seguir os padrões do projeto em @components/
```

### 3. Script de automação (Python/Shell)

```
Crie um script em Python que:

1. [tarefa 1]
2. [tarefa 2]
3. [tarefa 3]

Use argparse para parâmetros de linha de comando.
Inclua tratamento de erros e logs.
Salve resultados em [formato].
```

### 4. CLI tool

```
Crie uma ferramenta de linha de comando em Node.js que:

[descrever o que a CLI faz]

Use Commander.js para CLI e Chalk para output colorido.
Publique como binário no package.json.
```

### 5. CRUD completo com frontend

```
Crie um CRUD completo para [entidade] com:

Backend: [stack]
Frontend: [stack]
Banco: [banco]
Features: criar, listar, editar, deletar, buscar

Inclua Dockerfile e docker-compose.yml.
```

---

## Análise e Refatoração

### 6. Code Review

```
Revise o código em @[arquivo/pasta] e aponte:

1. Problemas de segurança (OWASP Top 10)
2. Problemas de performance
3. Violações de boas práticas
4. Sugestões de melhoria

Priorize por gravidade: crítica, alta, média, baixa.
```

### 7. Refatoração de função complexa

```
Analise a função [nome] em @[arquivo] e refatore para:

1. Reduzir complexidade ciclomática
2. Separar responsabilidades
3. Adicionar tipos/interfaces adequados
4. Melhorar nomes de variáveis e funções

Mantenha a API pública inalterada.
```

### 8. Migração de tecnologia

```
Analise o projeto em @[pasta] e crie um plano para migrar de
[tecnologia_origem] para [tecnologia_destino].

Inclua:
- Mapeamento de conceitos
- Etapas da migração
- Riscos e mitigação
- Estimativa de esforço
```

### 9. Detecção de bugs

```
Execute o código em @[arquivo] com estes inputs de teste:
[inputs]

O resultado esperado é [descrição], mas estou recebendo [erro].
Encontre a causa raiz e proponha a correção.
```

---

## Documentação e Estudo

### 10. Explicar código

```
Explique o que o código em @[arquivo] faz, como se eu fosse um
[junior/estudante/não-técnico]. Inclua:

1. Visão geral (para que serve)
2. Fluxo principal (passo a passo)
3. Decisões técnicas (por que foi feito assim)
4. Pontos de atenção (armadilhas comuns)
```

### 11. Gerar documentação

```
Gere documentação completa para @[arquivo/pasta] no formato:

# [Nome do Módulo]

## Visão Geral
[descrição]

## Instalação/Setup
[instruções]

## API / Interface
[listar funções/classes com params e retorno]

## Exemplos de Uso
[exemplos práticos]

## Manutenção
[notas para quem for manter]
```

### 12. Criar tutorial

```
Crie um tutorial passo a passo para iniciantes sobre [tópico].

Requisitos:
- Público: [iniciante/intermediário]
- Pré-requisitos: [listar]
- Duração estimada: [tempo]
- Incluir exemplos práticos e exercícios
```

---

## Automação e DevOps

### 13. Docker setup

```
Crie Dockerfile e docker-compose.yml para o projeto em @[pasta].

Requisitos:
- Multi-stage build para produção
- Hot reload em desenvolvimento
- Variáveis de ambiente via .env
- Healthcheck
- Otimização de camadas (layer caching)
```

### 14. CI/CD pipeline

```
Crie um pipeline CI/CD para [GitHub Actions/GitLab CI] que:

1. Rode lint e testes a cada PR
2. Faça build da aplicação
3. Execute scan de segurança
4. Faça deploy automático em [ambiente] ao mergear na main
```

### 15. Script de backup

```
Crie um script que faça backup de:

- Banco de dados ([tipo])
- Uploads (pasta ./uploads)
- Configurações (pasta ./config)

Compressão: tar.gz
Destino: [pasta/S3/Google Drive]
Retenção: manter últimos 7 backups
Notificação: email/Slack ao finalizar
```

---

## Produtividade Pessoal

### 16. Organizar arquivos

```
Crie um script que organize a pasta [caminho]:

1. Agrupe arquivos por extensão em subpastas
2. Renomeie fotos para o padrão "YYYY-MM-DD-nome"
3. Remova arquivos duplicados (por hash)
4. Compacte arquivos mais antigos que 30 dias
```

### 17. Gerar relatório de gastos

```
Analise a planilha em @[arquivo.xlsx/.csv] e gere:

1. Total gasto por categoria
2. Média mensal
3. Top 5 maiores despesas
4. Gráfico de evolução mensal (HTML ou PNG)
5. Insights e recomendações de economia
```

### 18. Extrator de dados de PDF

```
Crie um script Python que:

1. Leia todos os PDFs em ./faturas/
2. Extraia: data, valor total, descrição, CNPJ emissor
3. Valide se o valor bate com o total da nota
4. Gere um CSV consolidado
5. Destaque em vermelho faturas com discrepância
```

---

## Aprendizado e Carreira

### 19. Plano de estudos personalizado

```
Crie um plano de estudos de [tecnologia/assunto] para alguém
que já conhece [conhecimentos_prévios].

Duração: [semanas/meses]
Horas por semana: [horas]

Inclua:
- Roadmap semanal com tópicos
- Projetos práticos para cada módulo
- Recursos recomendados (links)
- Exercícios de fixação
```

### 20. Simulação de entrevista técnica

```
Atue como entrevistador para uma vaga de [cargo] em [empresa].

1. Faça 5 perguntas técnicas sobre [assuntos]
2. Avalie minhas respostas
3. Dê feedback construtivo
4. Sugira o que estudar para melhorar
```

### 21. Code review como aprendizado

```
Analise @[meu-codigo] como se fosse um code review real em uma
empresa de [nível: startup/big tech].

Destaque:
- O que está bom (reforce)
- O que pode melhorar (com exemplos)
- Padrões que eu deveria conhecer
- Anti-patterns que estou cometendo
```

---

## Dicas de Customização

1. **Substitua `[colchetes]`** pelos seus valores reais
2. **Adicione contexto do projeto**: referencie arquivos com `@caminho/arquivo`
3. **Use imagens**: screenshots de layouts ou erros ajudam o agente a entender
4. **Itere**: comece com um prompt simples e peça refinamento gradual
5. **Combine prompts**: use Plan Mode para orquestrar tarefas complexas

---

## Checklist antes de usar

- [ ] Substituí todos os `[placeholders]`
- [ ] Referenciei os arquivos relevantes com `@`
- [ ] Defini o modelo adequado para a tarefa (`/model`)
- [ ] Estou no modo correto (Plan para planejamento, Build para execução)
