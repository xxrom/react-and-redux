Структура проекта:

|- webpack
|  \
|   - webpack-dev-server - локальная отладка
|   - webpack - сборка билда
|   - настройка static папки
|
|- karma
|  \
|   - jasmin - подключить, работают тесты
|   - отображает покрытие теста %
|
|- sourceMap
|  \
|   - работает с тестами, отображает строки ошибок корректно
|   - работает с основным кодом react, отображает строки
|
|- HotModuleReload
   \
    - для dev режима работает HMR
    - в prod коттектно отключается