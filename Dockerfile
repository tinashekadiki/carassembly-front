# Set base mirror
FROM nginx
# Define author
LABEL mantainer="prof.kadiki@gmail.com"
# Copy the contents of the dist file to the directory / usr/share/nginx/html
COPY dist/  /usr/share/nginx/html