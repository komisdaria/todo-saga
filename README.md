# React-todo-list-redux-backend

Добавим редакс и бекенд к нашему туду-листу.

## Release 0
Сделать папки frontend и backend. В папку frontend перенести приложение из прошлого задания про туду-лист.
В папке backend сделать пустое приложение на express.

## Release 1
Сделать хранение списка задач не в локальном стейте компонента, а в redux store. В документации редакса есть аналогичный разобранный пример, можно подглядывать туда при возникновении трудностей.

## Release 2
Сделаем, чтобы задачи не пропадали при закрытии окна. Будем сохранять их в коллекцию в mongo. Теперь помимо изменения данных в store нужно будет отправлять запросы на backend для всех действий с данными (изменение, удаление, редактирование, создание). Запрос к серверу и ответ сервера должны быть в виде JSON.

## Release 3*
Добавим возможность использования системы несколькими пользователями. Сделаем возможность регистрации и логина. Задачи могут создавать только авторизованные пользователи. Каждый пользователь видит и может работать только с созданными им задачами.
