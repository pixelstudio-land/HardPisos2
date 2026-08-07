# Base Máquina de Orçamentos 🚀

Bem-vindo à base do sistema Pixel Studio para Máquinas de Orçamento V2.
Este repositório foi construído para que você consiga levantar uma nova landing page de cálculo para seus clientes em menos de 3 minutos.

## 📁 Estrutura de Arquivos

```text
|-- index.html          (O ESQUELETO DA PÁGINA) - Não mexer, já está pronto e linkado
|-- assets/             
|   |-- fundo.jpg       (Trocar pela foto de capa do projeto)
|   |-- logo.png        (Trocar pela logo do cliente)
|-- css/
|   |-- global.css      (ESTRUTURA) - Não mexer
|   |-- theme.css       (CORES) - Alterar hexadecimais para bater com a marca do cliente
|-- js/
|   |-- pixel.js        (FACEBOOK PIXEL) - Cole o ID do Meta Pixel do cliente aqui
|   |-- config.js       (REGRAS DE NEGÓCIO) - Alterar Zap, Preços e Nomes
|   |-- main.js         (MOTOR DE CALCULO) - Não mexer
```

## 🛠️ Passo a Passo para um Novo Cliente

1. **Copiar a pasta `base-maquina-de-orçamentos`** e colar com o nome do cliente.
2. **Substituir Imagens:** Entre na pasta `assets` e sobreescreva a `logo.png` e `fundo.jpg`.
3. **Mudar as Cores:** Abra o `css/theme.css` e altere a cor primaria/secundária. 
4. **Acertar Preços e Nomes:** Abra o `js/config.js` e altere o número do whatsapp, os pisos e o nome da marca.
5. **Configurar Anúncios:** O Gestor de tráfego deve abrir `js/pixel.js` e alterar a constante `PIXEL_ID` para o Pixel correto do Facebook.
6. Pronto! Faça o deploy.
