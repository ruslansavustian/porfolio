# 🚀 ЗАПУСК ЛОКАЛЬНОЙ РАЗРАБОТКИ

## 📋 Пошаговая инструкция:

### **1. Запустить PostgreSQL в Docker:**

```bash
# Из корневой папки проекта
docker run -d \
  --name porfolio_postgres \
  -e POSTGRES_DB=porfolio_dev \
  -e POSTGRES_USER=postgres \
  -e POSTGRES_PASSWORD=password123 \
  -p 5432:5432 \
  postgres:15
```

### **2. Запустить Backend:**

```bash
# Перейти в папку backend
cd backend

# Скопировать настройки для локальной разработки
cp env.local .env

# Запустить в режиме разработки
npm run start:dev
```

### **3. Запустить Frontend:**

```bash
# В новом терминале, перейти в папку frontend
cd frontend

# Запустить в режиме разработки
npm run dev
```

## 🌐 URL'ы для разработки:

- **Frontend:** http://localhost:3001
- **Backend:** http://localhost:3000
- **PostgreSQL:** localhost:5432

## ✅ Проверка:

- Backend: `curl http://localhost:3000` должен вернуть "Hello World!"
- Frontend: откройся http://localhost:3001 в браузере

## 🛠️ Полезные команды:

### **Управление Docker контейнером:**

```bash
# Просмотр запущенных контейнеров
docker ps

# Остановить контейнер
docker stop porfolio_postgres

# Запустить снова
docker start porfolio_postgres

# Удалить контейнер (ОСТОРОЖНО - удалит данные!)
docker rm porfolio_postgres
```

### **Подключение к базе данных:**

```bash
# Через psql
psql -h localhost -p 5432 -U postgres -d porfolio_dev
# Пароль: password123

# Посмотреть таблицы
\dt

# Посмотреть пользователей
SELECT * FROM users;
```

## 🔧 Решение проблем:

### **Ошибка "package.json not found":**

- Убедись что находишься в папке `backend` или `frontend`
- Запускай команды из правильной директории

### **Ошибка подключения к базе данных:**

1. Проверь что PostgreSQL контейнер запущен: `docker ps`
2. Проверь что файл `.env` существует в папке `backend`
3. Проверь что порт 5432 свободен: `sudo lsof -i :5432`

### **Backend не запускается:**

1. Убедись что зависимости установлены: `npm install`
2. Проверь что используется Node.js 18+: `node --version`
3. Посмотри логи ошибок в терминале
