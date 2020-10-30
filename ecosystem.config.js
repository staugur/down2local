// 生产环境pm2配置文件

const ENV = {
    NODE_ENV: 'production'
}

let apps = [
    {
        //general
        name: 'down2local',
        cwd: __dirname,
        script: 'index.js',
        instances: 1, //'max'
        exec_mode: 'cluster',

        //advanced
        watch: false,
        max_memory_restart: '512M',
        env: ENV,
        out_file: 'logs/output.log',
        error_file: 'logs/error.log',
        time: false,
        merge_logs: true,

        //control
        listen_timeout: 3000,
        kill_timeout: 5000,
        restart_delay: 2000,
        max_restarts: 5
    }
]

module.exports = {
    apps: apps
}
