# GSAP Store

Лендінг-сайт на Next.js з анімаціями на основі GSAP та Framer Motion.

## Стек

- [Next.js 16](https://nextjs.org)
- [React 19](https://react.dev)
- [GSAP](https://gsap.com) — анімації
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS 4](https://tailwindcss.com)
- [Radix UI](https://www.radix-ui.com) / shadcn — UI-компоненти

## Структура

```
app/            # сторінки та глобальні стилі (App Router)
components/     # секції сторінки (Hero, Health, Quality, CaseStudies, Footer тощо)
components/ui/  # перевикористовувані UI-компоненти
public/         # статичні файли
```

## Запуск проєкту

Встановити залежності:

```bash
npm install
```

Запустити сервер розробки:

```bash
npm run dev
```

Відкрити [http://localhost:3000](http://localhost:3000) у браузері.

## Скрипти

- `npm run dev` — запуск у режимі розробки
- `npm run build` — продакшн-збірка
- `npm run start` — запуск продакшн-білду
- `npm run lint` — лінтинг коду

## Примітка

Проєкт використовує Next.js 16 — деякі API можуть відрізнятись від звичних версій. Перед внесенням змін варто звірятись з документацією у `node_modules/next/dist/docs/`.
