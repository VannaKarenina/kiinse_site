FROM node:lts-alpine AS builder

# устанавливаем простой HTTP-сервер для статики

# делаем каталог 'app' текущим рабочим каталогом
WORKDIR /app

# копируем оба 'package.json' и 'package-lock.json' (если есть)
COPY package*.json ./

# устанавливаем зависимости проекта
RUN npm ci --force

# копируем файлы и каталоги проекта в текущий рабочий каталог (т.е. в каталог 'app')
COPY ./ .

# собираем приложение для production с минификацией

RUN npm run build

FROM nginx:stable-alpine as production

RUN mkdir /app

COPY --from=builder /app/dist /app

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 443

ENTRYPOINT ["nginx", "-g", "daemon off;"]
