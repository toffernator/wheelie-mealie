FROM caddy:2.6.2 AS base

COPY ./Caddyfile /etc/caddy/Caddyfile
COPY ./build /srv

