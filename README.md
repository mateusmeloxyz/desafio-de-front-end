# Desafio de Front-end

Criar um web app que liste cidades específicas (listadas abaixo) e, após a seleção de alguma por parte do usuário, exiba uma tela de detalhes da cidade escolhida com informações do seu clima através de uma API pública de dados meteorológicos.

## ToDo

### Basic app

- [x] Define NextJs Install prompts
- [x] Run NextJs Install and start blank project or start with a template
- [x] Host on Vercel
- [x] Make a simple API test fetching a single city weather
- [x] Adjust fetch to dinamically fetch any city
- [ ] Make unit testing
- [ ] Build weather forecast Page Layout with preview mock data
  - [ ] Build mobile layout
    - [x] Create static HTML structure
    - [x] Add styles
    - [x] Create components where needed (All consumable content)
  - [ ] build desktop layout version
  - [ ] build tablet layout version
- [x] Add fetch data to layout
  - [x] Dinamically alter icons based on fetch data
- [x] Create city select page - [NextJs docs - Dynamic Routes](https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes)
  - [ ] mobile version
  - [ ] desktop version
  - [ ] tablet version
- [x] Dinamicaly fetch city data based on city select click
- [ ] Make dawn, morning, afternoon and night fetch be server side rendered with serialization
- [ ] Apply PPR (Partiual Prerendering)
- [ ] Put everything on a docker container
- [ ] Layout Adjustments for the whole application
  - [ ] mobile
  - [ ] Desktop
  - [ ] tablet
- [ ] Fix vercel deployment

### Further improvements

- [ ] Add current city time to city weather forecast screen
- [ ] Create fallback fetch that is triggered if the first weather API service is down for some reason
- [ ] Creat option to search for city on main page

## Sugestões de APIs

- https://www.openweathermap.org/current
- https://www.weatherapi.com

## Layout

- [Link do layout no Figma](https://www.figma.com/design/4lcFZPwbuAxjBiUutFK9Qd)

## Hospedagem

O projeto precisa ser publicado numa das duas opções abaixo:

- [Netlify](https://www.netlify.com)
- [Vercel](https://www.vercel.com)

## Requisitos de avaliação

- Faça um fork deste repositório;
- As cidades listadas devem ser:
  - Dallol (NG);
  - Fairbanks (US);
  - Londres (GB);
  - Recife (BR);
  - Vancouver (CA);
  - Yakutsk (RU).
- Implementação de testes unitários;
- Fidelidade ao layout enviado (estamos enviando o layout mobile e desktop);
- Frameworks JavaScript opcional (de preferência, nesta ordem 😉):
  - React com Next.js
  - React com Vite;
  - Vue;
  - Angular.
- Responsividade atendendo 3 breakpoints:
  - Smartphone;
  - Tablet;
  - Desktop.

## Observações

- Você deve usar os ícones do layout que melhor se encaixarem em cada condição climática;
- Considere os horários 3:00, 9:00, 15:00 e 21:00 para as definições das temperaturas de Dawn, Morning, Afternoon, Night, respectivamente.

## Diferenciais

- Rodar a aplicação fazendo o uso de um container do Docker.

Agora é com você! Faça o fork e responda o nosso contato com o link, ok?

Boa sorte!
