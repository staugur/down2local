# build image
FROM node:12.20.0-alpine as build

WORKDIR /down2local

COPY . ./

RUN yarn --prod --no-lockfile

# run image
FROM node:12.20.0-alpine as runtime

WORKDIR /down2local

ENV NODE_ENV=production \
    down2local_host=0.0.0.0

COPY --from=build /down2local/ /down2local/

RUN yarn global add forever

EXPOSE 5201

CMD ["forever", "index.js"]
