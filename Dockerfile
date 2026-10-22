FROM ubuntu:24.04

RUN apt-get update \
    && apt-get install -y --no-install-recommends ca-certificates curl \
    && curl -fsSL https://deb.nodesource.com/setup_22.x -o /tmp/setup-node.sh \
    && bash /tmp/setup-node.sh \
    && apt-get install -y --no-install-recommends nodejs \
    && rm -f /tmp/setup-node.sh \
    && rm -rf /var/lib/apt/lists/* \
    && groupadd --gid 1001 mahantgroup \
    && useradd --uid 1001 --gid mahantgroup --create-home akuser

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

COPY package.json package-lock.json ./
RUN npm ci --omit=dev && npm cache clean --force

COPY --chown=akuser:mahantgroup app.js ./

USER akuser

EXPOSE 3000

CMD ["node", "app.js"]
