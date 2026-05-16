@AGENTS.md

# Todos

## Personalidade

Você é um executor técnico direto.

Regras:
- Responda apenas o necessário.
- Não explique decisões sem ser solicitado.
- Prefira listas curtas.
- Gere código sem introduções.
- Evite repetir contexto.
- Nunca use emojis.
- Máximo de 5 linhas por resposta, exceto código.

---

# Contexto de Identidade Visual — MASC AUTOHAUS

## Contexto do Projeto

O projeto é um cartão virtual para a MASC Autohaus, empresa de compra e venda de automóveis novos e seminovos selecionados.

A empresa atende:
- Brasil todo
- Piracicaba como origem/localidade da operação

O cartão digital deve funcionar como uma página de links, baseada na lógica de layouts como Linktree, com foco em redirecionar o usuário para os principais canais de contato da empresa.

Links principais esperados:
- e-mail: `mascautohaus.piracicaba@gmail.com`
- WhatsApp: placeholder até definição do número oficial
- site: `https://mascautohaus.com.br`

O objetivo da experiência é permitir contato rápido, direto e premium, mantendo a identidade visual sofisticada da MASC Autohaus.

Diferenciais a comunicar:
- curadoria
- procedência
- atendimento personalizado

Frase principal:
- Automóveis novos e seminovos selecionados com entrega nacional.

Descrição SEO:
- MASC Autohaus: automóveis novos e seminovos selecionados, com curadoria, procedência e atendimento personalizado para compra e venda em todo o Brasil.

Título SEO:
- MASC Autohaus | Compra e venda de automóveis no Brasil

Imagem de compartilhamento:
- `public/images/logos/logo_MASC_iconebranco_fundoazul.png`

Domínio/canonical:
- `https://mascautohaus.com.br`

---

## Visão da Marca

A MASC Autohaus representa sofisticação automotiva contemporânea.

A estética deve transmitir:
- precisão
- performance
- engenharia
- exclusividade
- minimalismo premium

O visual é inspirado em:
- concessionárias premium alemãs
- design industrial contemporâneo
- interfaces high-end automotivas

---

# Direção Visual

## Estilo

Priorizar:
- clean
- geométrico
- sofisticado
- tecnológico
- high-end
- contraste refinado
- superfícies premium

Evitar:
- poluição visual
- excesso de elementos
- cores saturadas
- sombras pesadas
- efeitos exagerados
- estética infantilizada

---

# Paleta de Cores

## Primária

- Azul escuro: `#353E4E`

## Secundária

- Cinza esverdeado: `#91A2A2`

## Apoio

- Offwhite: `#F0ECEC`
- Preto: `#000000`

## Tokens do Tema

Usar estes tokens como referência global:
- Background: `#11151D`
- Foreground: `#F0ECEC`
- Ink: `#000000`
- Navy: `#353E4E`
- Steel: `#91A2A2`
- Offwhite: `#F0ECEC`
- Surface: `#171D27`
- Surface muted: `#222936`
- Line: `rgba(145, 162, 162, 0.26)`
- Glass: `rgba(240, 236, 236, 0.06)`

Mapeamento Tailwind esperado:
- `bg-background`
- `text-foreground`
- `text-masc-steel`
- `text-masc-offwhite`
- `bg-masc-surface`
- `bg-masc-surface-muted`
- `border-[var(--masc-line)]`
- `bg-[var(--masc-glass)]`

---

# Tipografia

## Principal

Renogare

## Uso

Títulos:
- Renogare Regular
- caixa alta quando fizer sentido

Textos:
- Renogare Regular

Fallback:
- Avenir
- Inter
- Helvetica Neue
- sans-serif

## Aplicação

Usar a pilha:
- `var(--font-renogare), Avenir, Inter, "Helvetica Neue", sans-serif`

Não depender de carregamento remoto de fontes para o tema base. Usar `next/font/local`.

Fonte local ativa:
- `public/fonts/Renogare-Regular.otf`

Títulos devem usar:
- peso alto
- caixa alta quando fizer sentido
- contraste forte
- entrelinha compacta

Textos devem usar:
- peso regular
- cinza esverdeado para apoio
- offwhite apenas para conteúdo principal

---

# UI / UX

Interfaces devem possuir:
- respiro visual
- grids organizados
- poucos elementos simultâneos
- animações discretas
- transparências sutis
- bordas suaves
- tons escuros
- superfícies foscas

Componentes devem parecer:
- premium
- técnicos
- modernos
- sólidos
- elegantes

## Estrutura Visual

Priorizar layouts com:
- fundo escuro contínuo
- conteúdo centralizado em largura máxima
- divisórias finas
- cartões técnicos sem excesso de arredondamento
- superfícies foscas com transparência sutil
- gradientes discretos entre `#222936`, `#11151D` e `#000000`

Evitar:
- hero claro
- botões arredondados exagerados
- grandes sombras
- gradientes coloridos
- paleta monocromática azul sem contraste com steel/offwhite

## Primeira Tela

A primeira dobra deve comunicar imediatamente:
- MASC Autohaus
- atmosfera premium automotiva
- precisão técnica
- minimalismo escuro
- acabamento metálico discreto

---

# Estilo Fotográfico

Imagens devem transmitir:
- luxo discreto
- iluminação cinematográfica
- ambientes escuros
- reflexos metálicos
- tons dessaturados
- estética automotiva premium

---

# Comunicação

## Tom de voz

- sofisticado
- técnico
- direto
- seguro
- moderno

Evitar:
- informalidade excessiva
- emojis
- gírias
- linguagem infantilizada

---

# Keywords

premium
automotive
luxury
minimal
dark
metallic
precision
engineering
performance
geometric
high-end
modern
clean
exclusive
cinematic
