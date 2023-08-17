# Установка и настройка WSL2.
Для удобства работы с командной строкой можно установить "Терминал Windows" -
https://apps.microsoft.com/store/detail/windows-terminal/9N0DX20HK701?hl=ru-ru&gl=ru&rtc=1
### Открываем PowerShell и выполняем установку WSL.
```
wsl --install
```
Подробно об установке можно почитать здесь - https://learn.microsoft.com/ru-ru/windows/wsl/install

### Выставляем 2-ую версию по умолчанию.
```
wsl --set-default-version 2
```

### Установка дистрибутива Ubuntu-20.04.
```
wsl --install -d Ubuntu-20.04
```
Дополнительно попросит указать имя пользователя и пароль для входа в систему.

Можно конфигурировать WSL, создав файл ```C:\Users\<UserName>\.wslconfig```
```
[wsl2]
memory=6GB
processors=4
swap=8GB
```

## Настройка Ubuntu-20.04.
### Установка Docker.
```
sudo apt update && sudo apt upgrade
sudo apt install -y apt-transport-https ca-certificates curl software-properties-common libssl-dev libffi-dev git wget mcedit
sudo groupadd docker
sudo usermod -aG docker ${USER}
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
sudo apt update
sudo apt upgrade -y
sudo apt autoremove -y
sudo curl -L "https://github.com/docker/compose/releases/download/v2.11.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```
### Добавим запуск Docker при входе в систему.
```
echo "sudo service docker start" >> ~/.profile


# Настройка окружения macOs & Ubuntu

### Установка Docker.

#### Предварительно необходимо установить docker-desktop по ссылке docker.com/products/docker-desktop/

### Скачиваем проект из репозитория, подготвливаем конфигурационные файлы для запуска.
#### Создаем копию для переменных окружения:
```
1. cp .env.example .env


Создаем конфиг в /docker/nginx/default.conf, можно скопировать из файла /docker/nginx/default.conf.example
подставив неоходимый domain и user

## Запуск и работа с Docker.
### Основные команды.
Запуск происходит через команду (контейнеры запускаются в фоновом режиме).
```
docker-compose up -d
```
Остановка контейнеров.
```
docker-compose stop
```
Остановка контейнеров и их удаление.
```
docker-compose down
```
Отображает список образов.
```
docker images -a
```
Удаление образа по его id или названию.
```
docker rmi Image
```
Для входа в контейнер используется следующая команда.
```
docker exec -it php-fpm /bin/bash
```

C **Docker** можно взаимодействовать и через интерфейс PHPSTORM.
```
## Запускаем проект.
### Выкачиваем необходимые папки и собираем фронт.
# TODO : Дописать про поднятие фронта
Всё основное взаимодействие происходит с контейнером **php-fpm**, заходим в него.
```
docker exec -it php-fpm /bin/bash
```
Проходим в папку с проетом и выкачиваем с дева папки для работы.

**Composer** необходимо использовать с опцией **--ignore-platform-reqs**.
```
composer i --ignore-platform-reqs
```

### Накатываем базу

# TODO: Дописать в скором времени
