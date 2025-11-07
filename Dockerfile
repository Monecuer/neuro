# ---------- Build Stage ----------
FROM node:18 as build

WORKDIR /app

# Copy Laravel and frontend sources
COPY . .
# Install frontend dependencies and build assets
RUN npm install --legacy-peer-deps
RUN npm run build || echo "⚠️ Vite build failed — skipping temporarily"


# ---------- Production Stage ----------
FROM php:8.2-apache

WORKDIR /var/www/html

# Enable needed PHP extensions
RUN docker-php-ext-install pdo pdo_mysql

# Copy project files
COPY --from=build /app /var/www/html

# Copy production environment config
COPY --from=build /app/public /var/www/html/public

# Set correct permissions
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

# Set up Apache
RUN a2enmod rewrite
COPY ./.docker/apache/000-default.conf /etc/apache2/sites-available/000-default.conf

EXPOSE 8080
CMD ["apache2-foreground"]
