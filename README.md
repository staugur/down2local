# down2local

Download transit program to help you download remote resources through an intermediate service.

(CN：下载中转程序，帮助你通过一个中间服务下载远程资源！)

![down2local.png](https://static.saintic.com/picbed/staugur/2020/10/29/down2local.png!/fw/600)

## Deploy (Production)

### 1. download

```bash
git clone https://github.com/staugur/down2local.git
cd down2local
```

### 2. install

-   2.1 dependencies

    ```bash
    yarn --prod
    ```

-   2.2 pm2/forever(Choose one)

    -   2.2.1 pm2

        ```bash
        sudo yarn global add pm2 # or local install with `yarn add pm2`
        ```

    -   2.2.2 forever

        ```bash
        sudo yarn global add forever # or local install with `yarn add forever`
        ```

### 3. process manager

> App default listen on 127.0.0.1:5201, you can set it on config.json

-   3.1 pm2

    ```bash
    yarn pm2:[start/stop/restart/reload]
    ```

-   3.2 forever

    ```bash
    yarn fe:[start/stop/restart]
    ```

-   3.3 docker

    - Build Docker Image:

      ```bash
      docker build -t down2local .
      //or
      docker pull staugur/down2local
      ```

    - Run Container
      ```bash
      docker run -d --name down2local --restart=always --net=host staugur/down2local
      ```

### 4. Nginx (optional)

```nginx
server {
    listen 80;
    server_name YOUR-DOMAIN-NAME;
    charset utf-8;
    location / {
       proxy_pass http://127.0.0.1:5201;
       proxy_set_header Host $host;
       proxy_set_header X-Real-IP $remote_addr;
       proxy_set_header X-Forwarded-Proto $scheme;
       proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
```

## Usage

1. download with query

    ```bash
    wget --content-disposition YOUR-DOMAIN-NAME/get?url=YOUR-DOWNLOAD-URL
    ```

    ```bash
    curl -O YOUR-DOMAIN-NAME/get?url=YOUR-DOWNLOAD-URL
    ```

2. download with pathname(**recommend**)

    ```bash
    wget YOUR-DOMAIN-NAME/get/YOUR-DOWNLOAD-URL
    ```

    ```bash
    curl -O YOUR-DOMAIN-NAME/get/YOUR-DOWNLOAD-URL
    ```

## Development

```bash
yarn      # install all dependencies
yarn dev  # start app with auto reload
```
