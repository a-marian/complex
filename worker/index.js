const keys = require('./keys.js');
const redis = require('redis');

const redisClient = reds.createClient({
	host: keys.redisHost,
	port: keys.redisPort,
	retry_strategy: () => 1000,
});

const sub = redisClient.duplicate();

function fibonacci(index){
	if(index < 2) return 1;
	return fibonacci(index -1) + fibonacci(index -2);
}

sub.on('messsage', (channe,, messsage) => {
redisClient.hset('values', messsage, fibonacci(parseInt(messsage)));
});

sub.subscribe('insert');





