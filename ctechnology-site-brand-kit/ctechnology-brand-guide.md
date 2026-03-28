# Ctechnology — базовый brand guide

## Логотип
- Основной логотип: `ctechnology-logo-full.png`
- Иконка-символ: `ctechnology-logo-mark.png`
- Favicon/PWA: `favicon-32x32.png`, `ctechnology-icon-192.png`, `ctechnology-icon-512.png`, `apple-touch-icon.png`

## Цветовая палитра
- Brand Orange 500 — `#FD6601`
- Brand Orange 600 — `#EA4C00`
- Brand Orange 400 — `#FEAA09`
- Accent Gold — `#FDD16E`
- Text Primary — `#171717`
- Text Secondary — `#3A3A3A`
- Surface Light — `#FFFFFF`
- Surface Warm — `#FFF7F0`
- Border Subtle — `#E9E2DA`

## Рекомендации
- Основной акцент сайта: оранжевый `#FD6601`
- Hover/active для кнопок: `#EA4C00`
- Светлые секции: `#FFF7F0`
- Основной текст: `#171717`
- Вторичный текст: `#3A3A3A`
- Не использовать более 2-3 оранжевых оттенков в одном блоке
- Полигональную текстуру логотипа лучше использовать точечно: hero, preloader, карточка бренда

## CSS variables
```css
:root {
  --color-brand-400: #FEAA09;
  --color-brand-500: #FD6601;
  --color-brand-600: #EA4C00;
  --color-accent-gold: #FDD16E;
  --color-text-primary: #171717;
  --color-text-secondary: #3A3A3A;
  --color-surface-light: #FFFFFF;
  --color-surface-warm: #FFF7F0;
  --color-border-subtle: #E9E2DA;
}
```

## Prompt для Codex
Создай frontend-концепт корпоративного сайта для компании Ctechnology. 
Стиль: современный B2B tech, clean layout, доверительный и технологичный визуал.
Используй brand colors:
- primary: #FD6601
- primary-dark: #EA4C00
- secondary-accent: #FEAA09
- text-primary: #171717
- text-secondary: #3A3A3A
- background: #FFFFFF
- warm-section: #FFF7F0
- border: #E9E2DA

Требования:
1. Используй React + TypeScript.
2. Компоненты должны быть переиспользуемыми.
3. Стили можно оформить через CSS modules или styled-components.
4. Сделай страницы:
   - Home
   - About
   - Services
   - Projects
   - Blog/News
   - Contacts
5. На главной странице добавь:
   - hero section
   - блок преимуществ
   - список услуг
   - кейсы/проекты
   - CTA блок
   - footer
6. В header используй логотип компании слева и навигацию справа.
7. Подготовь responsive layout для desktop, tablet и mobile.
8. Добавь состояния hover, active, focus-visible.
9. Соблюдай хорошую визуальную иерархию, достаточные отступы и контраст.
10. UI должен быть готов к интеграции с реальным контентом компании.

Нужные файлы:
- Header
- Footer
- HeroSection
- ServicesSection
- ProjectsSection
- AdvantagesSection
- NewsSection
- ContactSection
- shared UI components
- theme/tokens
- assets map

Дополнительно:
- подготовь список ассетов, которые должны лежать в `/public`
- используй семантическую HTML-разметку
- предусмотрите SEO-friendly структуру
- добавь alt-тексты для изображений
- подготовь базовые мета-теги
