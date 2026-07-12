# Guia de Publicação do OpenCode + OpenRouter Bundle (R$ 17,00)

Este guia orienta como hospedar e vender o **OpenCode + OpenRouter Bundle** por **R$ 17,00** sem nenhum custo fixo. As plataformas abaixo cobram apenas comissão por venda realizada.

---

## Passo 1: Preparar o Bundle de Entrega

O cliente que pagar R$ 17,00 deve receber um arquivo compactado contendo todo o conteúdo.

1. Crie uma pasta chamada `opencode-openrouter-bundle`
2. Copie a pasta `/conteudo` com todos os 4 arquivos .md
3. Compacte em formato **ZIP**: `opencode-openrouter-bundle.zip`

---

## Passo 2: Escolher a Plataforma de Vendas

### Opção A: Kiwify (Recomendado)

- **Custo fixo**: R$ 0,00
- **Taxa por venda**: 8.9% + R$ 2,49
- **Como configurar**:
  1. Crie conta em [Kiwify.com.br](https://kiwify.com.br)
  2. **Produtos > Criar Produto > Pagamento Único**
  3. Entrega: **Arquivo digital (PDF, ZIP)**
  4. Nome: "OpenCode + OpenRouter Bundle - Agentes de IA no Windows"
  5. Página de Vendas: `https://opencode-bundle.vercel.app`
  6. Preço: R$ 17,00
  7. Upload do `opencode-openrouter-bundle.zip`
  8. Copie o link do checkout

### Opção B: Eduzz

- **Custo fixo**: R$ 0,00
- **Taxa por venda**: 4.9% + R$ 1,00
- Cadastro em [Eduzz.com](https://www.eduzz.com), categoria Infoproduto / Arquivo Digital

### Opção C: Hotmart

- **Custo fixo**: R$ 0,00
- **Taxa por venda**: 9.9% + R$ 3,00
- Cadastro em [Hotmart.com](https://hotmart.com), tipo Arquivo para baixar

---

## Passo 3: Hospedar Landing Page na Vercel (Grátis)

1. Crie um repositório no GitHub com os arquivos da landing page
2. Acesse [vercel.com](https://vercel.com) e faça login com GitHub
3. **Add New > Project** e selecione o repositório
4. **Deploy** (configurações padrão funcionam)
5. A Vercel gera um link: `https://seu-projeto.vercel.app`

---

## Passo 4: Conectar o Checkout

Abra `landing-page/index.html` e substitua:

```html
<a href="SEU_LINK_DE_CHECKOUT_AQUI" ...>
```

Pelo link de checkout copiado da plataforma escolhida.

Faça commit e push — a Vercel atualiza automaticamente.

---

## Passo 5: Divulgação Sugerida

- **Público-alvo**: devs iniciantes, empresários, freelancers, curiosos de IA
- **Canais**: LinkedIn, grupos de WhatsApp/Telegram de tecnologia, Twitter/X, comunidades de IA
- **Diferencial**: R$ 17,00 é um preço de entrada baixo comparado a cursos de R$ 100+

---

## Margem por venda (estimativa)

| Plataforma | Preço | Taxa | Líquido por venda |
|---|---|---|---|
| Kiwify | R$ 17,00 | ~R$ 4,00 | ~R$ 13,00 |
| Eduzz | R$ 17,00 | ~R$ 1,83 | ~R$ 15,17 |
| Hotmart | R$ 17,00 | ~R$ 4,68 | ~R$ 12,32 |
