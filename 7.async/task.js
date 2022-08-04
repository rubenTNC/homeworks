class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }
    addClock(time, callback, id) {
        if (!id) {
            throw new Error('error text');
        }
        const indexId = this.alarmCollection.findIndex(item => item.id === id);
        if (indexId !== -1) {
            return console.error("");
        } else {
            this.alarmCollection.push({
                id: id,
                time: time,
                callback: callback
            });
        }
    }
    removeClock(id) {
        const indexId = this.alarmCollection.findIndex(item => item.id === id);
        if (indexId === -1) {
            return false;
        } else {
            this.alarmCollection.splice(indexId, 1);
        }
    }

    getCurrentFormattedTime() {
        return new Date().toLocaleTimeString().slice(0, -3);
    }
    start() {
        let checkClock = call => { 
            if (call.time === this.getCurrentFormattedTime()) {
                call.callback();
            }
        };

        if (this.timerId === null) {
            this.timerId = setInterval(() => {
                this.alarmCollection.forEach(call => checkClock(call));
            }, 1000);
        }
    }
    stop() {
        if(this.timerId !== null) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }
    printAlarms() {
        console.log(`Печать всех будильников: ${ this.alarmCollection.length}`);

        this.alarmCollection.forEach(item => console.log(`Будильник № ${ item.id } заведен на ${ item.time }`));
    };
    clearAlarms() {
        clearInterval(this.timerId);
        this.alarmCollection.length = 0;
    }
}




function testCase () {
    let phoneAlarmClock = new AlarmClock();

    phoneAlarmClock.addClock(phoneAlarmClock.getCurrentFormattedTime(), () => console.log("привет"), 1);

    phoneAlarmClock.addClock(new Date(new Date().getTime() + 1 * 60000).toLocaleTimeString().slice(0, -3), () => {
        console.log("привет+1");
        phoneAlarmClock.removeClock(phoneAlarmClock.timerId)
    }, 2);

    phoneAlarmClock.addClock(new Date(new Date().getTime() + 2 * 60000).toLocaleTimeString().slice(0, -3), () => {
        console.log("привет+2");
        phoneAlarmClock.clearAlarms();
        phoneAlarmClock.printAlarms();
    }, 3);

    phoneAlarmClock.printAlarms();

    phoneAlarmClock.start();
}




testCase();


