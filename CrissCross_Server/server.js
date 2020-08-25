/**
 * CrissCross
 * 2020
 */


const cluster = require('cluster');
const os = require('os')
const app = require('./app')


if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);

    const numCPUs = os.cpus().length
    for (var i = 0; i < numCPUs; i += 1) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
    });
}
else {
    app.start()
    console.log(`Worker ${process.pid} started`);
}
