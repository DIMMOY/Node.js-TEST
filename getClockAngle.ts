function getClockAngle(hh_mm: string): number {
    // split time from input
    const time = hh_mm.split(':');
    const hourHand: number = parseInt(time[0]) % 12; // hh24
    const minuteHand: number = parseInt(time[1]) % 60;

    // find degree (assume 00:00 = 0 degree)
    // 12 hours = 360 degrees, so 1 hour = 30 degrees
    const hourAngle = (hourHand + minuteHand / 60) * 30;
    // 60 minutes = 360 degrees, so 1 minute = 6 degrees
    const minuteAngle = minuteHand * 6;

    const angle = Math.abs(hourAngle - minuteAngle);
    return Math.round(Math.min(angle, 360 - angle));
}

console.log(getClockAngle('09:00') === 90)
console.log(getClockAngle('17:30') === 15)
console.log(getClockAngle('20:40') === 20)
console.log(getClockAngle('07:20') === 100)
console.log(getClockAngle('18:00') === 180)
console.log(getClockAngle('00:00') === 0)