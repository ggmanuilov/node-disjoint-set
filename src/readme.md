Описание тестового задания для соискателей
В рамках тестового задания необходимо разработать Клиент-Сервер приложение, 
клиентская часть которого формирует события, 
а серверная часть ведёт учёт этих событий и после завершения всех клиентских сессий производит выборочную сверку результата работы.

В основе приложения соискателю предлагается реализовать структуру непересекающихся множеств (https://en.wikipedia.org/wiki/Disjoint-set_data_structure) 
и алгоритм её обновления и проверки. За это должна отвечать серверная часть. 
Клиент(-ы) подключающиеся к серверу отсылают запросы на объединения пар элементов этой структуры.

Требование к серверной части:

- Реализовать Disjoint-set структуру на 1 миллион элементов;
- Обрабатывать подключения и получение данных одним или несколькими из перечисленных методов: REST, SOAP, GraphQL, WebSocket, gRPC;
- Вести параллельную обработку запросов от всех клиентов;
- Контролировать завершение сессий инициируемые клиентами;
- По завершении всех клиентских сессий производить вычитку данных из указанного файла и сверять с состоянием Disjoint-set структуры.

Требование к клиентской части:

- Совершать подключение к серверу приложения и передавать данные одним из реализуемых сервером методов;
- Вычитывать данные из файла и отправлять на сервер;
- Завершать сессию подключения по окончанию файла.

Тестовое задание, по-возможности, выполнять с контролем в публичном git репозитории.

### Start server
```shell script
npm run start-server
```

### Start parallel transfer data from clients
```shell script
bash bash/run-client-parallel.sh
```
Each client sends its PID to the process. It required for check data after all clients have been completed send.
Details of check data you can found in console of application server.


### Workflow server
```log
Start generate sequence 1 000 000
End generate sequence
Server running at 0.0.0.0:50051
57  transfer begin
...
87  transfer begin
66  transfer end
...
28  transfer end
Run check results
// here will be data that has incorrect assertions
Check is done.
```

### Tests
```shell script
npm test
```

### Development tools:
```shell script
# refresh scheme from proto file
bash bash/build.sh
```


