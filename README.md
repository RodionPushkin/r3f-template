# Проект на React + TypeScript + Three.js

## Установка и Запуск проекта

Этот проект можно установить и запустить с использованием **npm** или **yarn**. Ниже приведены пошаговые инструкции для обоих методов.

---

### Установка через npm

1. **Установите npm** (если еще не установлен):

   - npm (Node Package Manager) поставляется вместе с Node.js. Скачайте и установите последнюю версию Node.js с официального сайта: [https://nodejs.org](https://nodejs.org)
   - Проверьте установку:
     ```bash
     node -v
     npm -v
     ```

2. **Установите зависимости**:
   В терминале, находясь в корневой папке проекта, запустите команду:

   ```bash
   npm install
   ```

3. **Запустите проект**:

   ```bash
   npm run dev
   ```

4. **Сборка для продакшена: Чтобы собрать финальную версию проекта, выполните**:

   ```bash
   npm run build
   ```

5. **Сборка для продакшена: Чтобы запусить финальную версию проекта, выполните**:
   ```bash
   npm run preview
   ```

---

### Установка через yarn

1. **Установите yarn** (если еще не установлен):

   - Убедитесь, что Node.js установлен, затем установите yarn глобально
     ```bash
     npm install -g yarn
     ```
   - Проверьте установку:
     ```bash
     yarn -v
     ```

2. **Установите зависимости**:
   В терминале, находясь в корневой папке проекта, запустите команду:

   ```bash
   yarn install
   ```

3. **Запустите проект**:

   ```bash
   yarn dev
   ```

4. **Сборка для продакшена: Чтобы собрать финальную версию проекта, выполните**:

   ```bash
   yarn build
   ```

5. **Сборка для продакшена: Чтобы запусить финальную версию проекта, выполните**:
   ```bash
   yarn preview
   ```

---

### Дополнительная информация

Проект создан с использованием Vite, React и TypeScript. Включены конфигурации для ESLint, Prettier, SCSS и других инструментов для улучшения разработки и поддержки чистого кода.

---

### Как собрать WASM

сборка через npm

```bash
npm run wasm
```

сборка через yarn

```bash
yarn wasm
```

---