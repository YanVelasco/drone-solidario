
## Índice

- [Visão Geral](#visão-geral)
- [Estrutura do Projeto](#estrutura-do-projeto)
  - [HTML](#html)
  - [JavaScript](#javascript)
  - [CSS](#css)
- [Instruções de Configuração](#instruções-de-configuração)
- [Contribuição](#contribuição)
- [Licença](#licença)

# RDR - Rede de Drones Reservistas

## Visão Geral
A RDR – Rede de Drones Reservistas é uma iniciativa que une tecnologia e voluntariado para apoiar ações de emergência. Por meio da plataforma, voluntários com drones se cadastram para receber alertas e colaborar com autoridades em situações como enchentes e incêndios. O sistema oferece um painel colaborativo para acompanhar missões, enviar imagens e confirmar presença. A iniciativa conta com o apoio da Defesa Civil e outras instituições, e é conduzida por uma equipe de cinco integrantes, cujos nomes e fotos estão disponíveis na plataforma.

## Estrutura do Projeto
O projeto é composto pelos seguintes arquivos e diretórios:

### HTML
- **index.html**: Página inicial do site. Apresenta o título "Drone Solidário – Mapeamento aéreo para salvar vidas", uma breve descrição da iniciativa e botões para registro e mais informações. Inclui uma imagem de fundo de um drone sobrevoando uma área de desastre.
- **cadastro-voluntario.html**: Contém o formulário de cadastro para voluntários. Inclui campos para nome completo, e-mail, telefone, modelo do drone, capacidades de voo e localização geográfica. Possui um botão "Salvar meu cadastro" para enviar o formulário.
- **cadastro-regiao.html**: Destinada ao cadastro de regiões. Inclui um formulário semelhante ao de cadastro de voluntários, permitindo que os usuários insiram informações regionais relevantes.
- **detalhesCadDrones.html**: Página de detalhes dos drones cadastrados.
- **gestao-droneiros.html**: Página de gestão dos voluntários droneiros.
- **mainCadDrones.html**: Página principal de cadastro de drones.
- **PoliticadePrivacidade.html**: Página de Política de Privacidade.
- **SobreNos.html**: Página Sobre Nós.
- **TermosdeUso.html**: Página de Termos de Uso.

### JavaScript
- **gestao-droneiros.js**: Gerencia a interface de administração dos voluntários. Carrega e exibe os dados salvos no `localStorage`. Permite selecionar, excluir e convocar voluntários via e-mail ou WhatsApp. Integra-se com a página `detalhesCadDrones.html` para adicionar novos registros.
- **mapEventDiv.js**: Controla os dois mapas interativos da plataforma. Exibe eventos fixos com ícones personalizados. Carrega dados CSV de fontes como INPE e Defesa Civil (queimadas, enchentes, vendavais, deslizamentos, acidentes e alertas de saúde). Utiliza Leaflet.js e PapaParse.js para renderização e parsing de dados. Atualiza contadores de eventos e exibe pop-ups informativos.
- **vlibras.js**: Ativa o plugin VLibras para acessibilidade em Libras.
- **contAcesFC.js**: Gerencia recursos de acessibilidade. Ativa/desativa o modo de alto contraste. Permite aumentar ou diminuir o tamanho da fonte. Salva as preferências do usuário no `localStorage` para manter a acessibilidade entre sessões.
- **dronenew.js**: Responsável por carregar e exibir os modelos de drones disponíveis. Renderiza drones fixos e personalizados na tela de seleção. Permite que usuários adicionem novos modelos personalizados, armazenando-os no `localStorage`.
- **dronemain.js**: Controla a lógica da página de cadastro de voluntários. Exibe detalhes do drone selecionado (fixo ou personalizado). Permite o envio de imagem e descrição para drones personalizados. Valida os campos do formulário e salva os dados do voluntário no `localStorage`. Redireciona o usuário após o cadastro com uma mensagem de agradecimento e instruções.

### CSS
- **dronemain.css**: Estilos aplicados à página de seleção de drones. Layout responsivo com flexbox para exibição dos modelos. Efeitos de hover com escala e sombra. Estilo futurista com fundo temático e texto com sombra. Suporte a diferentes tamanhos de tela com media queries.
- **style.css**: Estilos gerais para formulários e containers. Design escuro com fundo translúcido e bordas arredondadas. Campos de formulário com foco em acessibilidade e contraste. Botões com gradiente verde e efeitos de hover. Estilo para tabelas de voluntários e convocações.
- **styleNew.css**: Estilo principal da página inicial e mapas. Estilização de botões principais e secundários. Layout de grid para cards de eventos e voluntários. Estilo para mapas interativos e legendas. Tabelas de status e fontes oficiais com responsividade.
- **acessib.css**: Estilos para o modo de alto contraste. Aplica fundo preto e texto branco em toda a interface. Links em amarelo com sublinhado. Tabelas, seções e cards adaptados para acessibilidade visual. Compatível com leitores de tela e preferências salvas via `localStorage`.
- **drone.css**: Estilo base da identidade visual da plataforma. Layout do cabeçalho, navegação e rodapé com cores institucionais (verde e branco). Estilização de botões principais e secundários. Responsividade para dispositivos móveis. Integração com a identidade visual da RDR.
- **dronedet.css**: Estilos específicos para a página de detalhes do drone. Imagens com `object-fit: contain` e sombras suaves. Layout limpo e responsivo para exibição de informações técnicas. Estilo para pré-visualização de imagem enviada pelo usuário.

## Instruções de Configuração
1. Clone este repositório em sua máquina local.
2. Navegue até o diretório do projeto.
3. Abra o arquivo `index.html` em um navegador para visualizar a página inicial.
4. Utilize os links disponíveis para acessar as páginas de cadastro de voluntários e regiões.

## Contribuição
Contribuições são bem-vindas! Se você deseja ajudar a melhorar o projeto, sinta-se à vontade para abrir um pull request ou relatar problemas.

## Licença
Este projeto é de código aberto e pode ser utilizado e modificado conforme necessário.
