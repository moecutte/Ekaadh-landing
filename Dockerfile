FROM node:22-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev
COPY public ./public
CMD ["sh", "-c", "npx serve public --no-clipboard -l tcp://0.0.0.0:${PORT:-3000}"]
