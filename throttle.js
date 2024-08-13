

const myThrottle=(cb,delay)=>{
    let lastCall=0;
    return function(){
        const now=new Date.now();
        if(now-lastCall>=delay){
            cb();
            lastCall=now
        }
    }
}


const logMessage = (message) => {
    console.log(message);
};

const debouncedLog = myDebounce(logMessage, 500);

debouncedLog('Hello, World!');  