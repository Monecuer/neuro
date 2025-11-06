# ---- Base image ----
FROM php:8.2-apache

# Install system packages + PHP extensions + Node.js
RUN apt-get update && apt-get install -y \
    git unzip curl zip libpq-dev libzip-dev libpng-dev libonig-dev libxml2-dev gnupg \
    && curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get install -y nodejs \
    && docker-php-ext-install pdo_mysql mbstring zip exif pcntl bcmath gd \
    && a2enmod rewrite

# Set working directory
WORKDIR /var/www/html

# Copy composer and install PHP dependencies
COPY --from=composer:2.7 /usr/bin/composer /usr/bin/composer
COPY . .

RUN composer install --no-dev --optimize-autoloader

# Build frontend (Vite / React)
RUN npm install && npm run build

# Set correct permissions for Laravel
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

EXPOSE 8080

# Start Apache
CMD ["apache2-foreground"]
