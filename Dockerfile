# ---- Base image ----
FROM php:8.2-apache

# Install required system packages and PHP extensions
RUN apt-get update && apt-get install -y \
    git unzip curl zip libpq-dev libzip-dev libpng-dev libonig-dev libxml2-dev gnupg \
    && docker-php-ext-install pdo_mysql mbstring zip exif pcntl bcmath gd \
    && a2enmod rewrite

# Set working directory
WORKDIR /var/www/html

# Copy composer and install PHP dependencies
COPY --from=composer:2.7 /usr/bin/composer /usr/bin/composer
COPY . .

# Install PHP dependencies (skip dev)
RUN composer install --no-dev --optimize-autoloader

# --------------------------------------------------------
# ✅ We skip npm install/build inside container
#    Public/build assets must already exist from your local npm run build.
# --------------------------------------------------------

# Set correct permissions for Laravel
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

# Enable Apache rewrite rules for Laravel
RUN echo '<Directory /var/www/html/>\n\
    AllowOverride All\n\
</Directory>' > /etc/apache2/conf-available/laravel.conf && \
    a2enconf laravel

# Expose port 8080
EXPOSE 8080

# Start Apache
CMD ["apache2-foreground"]
