### Документация по проекту BuyToday.uz

---

## Запуск проекта

В корневой папке e-commerce-uz> запускаем клиент: npm run dev

##

Запуск Backend: Переходим в папку backend/dist: node index.js

---

## Описание проекта

e-Commerce бытовой техники и электроники написанный на Next.js с упором на SEO оптимизацию.

##

В этом проекте используется ISR рендеринг для получения данных из cms, динамический роутинг, так же есть отправка формы на почту через next api route.

##

Реализована корзина товаров, избранное, некоторые фичи типа опция "с wi-fi или без wi-fi". Есть серверная фильтрация товаров где используется searchParams, параметры передаются на backend express.js где отфильтровываются и передаются обратно на клиент, и постраничная пагинация

##

Есть API написанное на Express.js с MVC паттерном для фильтрации товаров, можно посмотреть маршруты в папке backend/routes/main.ts.

---

## Планы на будущее

Добавление еще больше категорий товаров

##

Перенос данных с Contentful cms на Mongodb и внедрение авторизации пользователей, Отзывы и рейтинг товаров

##

Добавление рассрочки товаров через партнеров

##

Мультиязычность i18n

---

## Используемый стек

Next.js, Express.js, SCSS Modules, Redux toolkit, Swiper.js, Contentful cms

##

Приложение развернуто на ubuntu vps на хостинге beget с веб-сервером nginx

---
