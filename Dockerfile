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
# ✅ Skip npm build inside container (Option 1)
# --------------------------------------------------------
# Instead, we’ll assume the public/build folder is already generated locally.
# If you haven't built locally yet, run these on your computer first:
#   npm install
#   npm run build
# Then commit public/build to GitHub before deploying.

# Just make sure vite is globally available (for Inertia)
RUN npm install -g vite

# --------------------------------------------------------
# Permissions and Apache setup
# --------------------------------------------------------
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

# Expose port
EXPOSE 8080

# Enable Apache rewrite rules for Laravel
RUN echo '<Directory /var/www/html/>\n\
    AllowOverride All\n\
</Directory>' > /etc/apache2/conf-available/laravel.conf && \
    a2enconf laravel

# Start Apache
CMD ["apache2-foreground"]
