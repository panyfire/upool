FROM php:8.1-fpm
ARG USER_ID
ARG GROUP_ID
ARG USER
ARG GROUP
ARG NODE_VERSION
ARG DOMAIN
ADD php.ini /usr/local/etc/php/conf.d/php.ini
RUN apt-get update && apt-get install -y zlib1g-dev g++ git libicu-dev zip libzip-dev zip \
    && docker-php-ext-install intl opcache pdo pdo_mysql \
    && pecl install apcu \
    && docker-php-ext-enable apcu \
    && docker-php-ext-configure zip \
    && docker-php-ext-install zip
WORKDIR /home/${USER}/${DOMAIN}
RUN mkdir /usr/local/nvm
ENV NVM_DIR /usr/local/nvm
ENV NVM_INSTALL_PATH $NVM_DIR/versions/node/v${NODE_VERSION}
RUN rm /bin/sh && ln -s /bin/bash /bin/sh
RUN curl --silent -o- https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash
RUN source $NVM_DIR/nvm.sh \
   && nvm install ${NODE_VERSION} \
   && nvm alias default ${NODE_VERSION} \
   && nvm use default
ENV NODE_PATH $NVM_INSTALL_PATH/lib/node_modules
ENV PATH $NVM_INSTALL_PATH/bin:$PATH


RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN curl -sS https://get.symfony.com/cli/installer | bash
