# ---------- Stage 1: Build frontend and install dependencies ----------
FROM php:8.2-apache AS base

WORKDIR /var/www/html

# Install system tools and node for Vite
RUN apt-get update && apt-get install -y \
    git curl zip unzip nodejs npm \
    && docker-php-ext-install pdo pdo_mysql \
    && a2enmod rewrite

# Copy composer from official image
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# Copy all files
COPY . .

# Install PHP dependencies
RUN composer install --no-dev --optimize-autoloader

# Build frontend
RUN npm install --legacy-peer-deps && npm run build

# Fix permissions
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

# Expose port 8080 for Render
EXPOSE 8080

# Start Apache
CMD ["apache2-foreground"]
