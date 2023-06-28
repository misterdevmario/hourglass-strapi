
import {daysEn, daysEs, monthsEn, monthsEs } from './language'

const dataInfo = new Date()
let ampm = "";
let ampmHours = dataInfo.getHours();

if (ampmHours >= 12) {
  ampm = "PM";
  ampmHours = ampmHours - 12;
} else {
  ampm = "AM";
}

if (ampmHours == 0) ampmHours = 12;

export const clock = {
    dayNumber: dataInfo.getDate(),
    dayEs: daysEs[dataInfo.getDay()],
    dayEn: daysEn[dataInfo.getDay()],
    monthEn: monthsEn[dataInfo.getMonth()],
    monthEs: monthsEs[dataInfo.getMonth()],
    year: dataInfo.getFullYear(),
    hour: ampmHours,
    ampm,
    minutes: dataInfo.getMinutes(),
}