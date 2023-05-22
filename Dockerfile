# Builder
# -------
FROM node:20-alpine3.16 AS builder

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# Runner
# ------
FROM node:20-alpine3.16

COPY --from=builder package.json .
COPY --from=builder build ./build
COPY --from=builder node_modules ./node_modules

EXPOSE 3000
CMD ["node", "build"]
