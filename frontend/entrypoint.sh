#!/bin/sh

set -e # Exit immediately if a command exits with a non-zero status.

# Generate the icon list javascript file
ICON_LIST_FILE="/usr/share/nginx/html/icon-list.js"
echo "const iconPaths = [" > "$ICON_LIST_FILE"
for file in /tmp/assets/background/*.svg; do
  # Check if the file is a regular file to avoid including directories
  if [ -f "$file" ]; then
    filename=$(basename "$file")
    echo "  'assets/background/$filename'," >> "$ICON_LIST_FILE"
  fi
done
echo "];" >> "$ICON_LIST_FILE"

# Substitute environment variables in index.html
envsubst '${PUBLIC_COMPANY_NAME},${PUBLIC_BRAND_NAME}' < /tmp/index.html > /usr/share/nginx/html/index.html

# Copy the rest of the source files to the web root
cp /tmp/style.css /usr/share/nginx/html/style.css
cp /tmp/script.js /usr/share/nginx/html/script.js
cp -r /tmp/assets /usr/share/nginx/html/assets

# Start nginx, replacing this script process
exec nginx -g 'daemon off;'