# down2local

下载中转程序，帮助你通过一个中间服务下载远程资源！
(Download transit program to help you download remote resources through an intermediate service.)

![](https://static.saintic.com/picbed/staugur/2020/10/29/down2local.png!/fw/600)

## Deploy(Production)

### 1. download

```bash
$ git clone https://github.com/staugur/down2local.git
$ cd down2local
```

### 2. install

- 2.1 dependencies

  ```bash
  $ yarn --prod
  ```

- 2.2 pm2/forever(Choose one)

  - 2.2.1 pm2

    ```bash
    $ sudo yarn global add pm2 # or local install with `yarn add pm2`
    ```

  - 2.2.2 forever

    ```bash
    $ sudo yarn global add forever # or local install with `yarn add forever`
    ```

### 3. process manager

- 3.1 pm2

  ```bash
  $ yarn pm2:[start/stop/restart/reload]
  ```

- 3.2 forever

  ```bash
  $ yarn fe:[start/stop/restart]
  ```

## Development

```bash
$ yarn      # install all dependencies
$ yarn dev  # start app with auto reload
```
