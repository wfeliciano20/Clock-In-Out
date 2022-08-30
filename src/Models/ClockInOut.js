class ClockInOut {

    constructor(inHour, inMinutes, timeOfDayIn, outHour, outMinutes, timeOfDayOut, weekHoursLeft, weekMinutesLeft, dateYear, dateDay, dateMonth) {
        this.inHour = inHour
        this.inMinutes = inMinutes;
        this.timeOfDayIn = timeOfDayIn
        this.outHour = outHour;
        this.outMinutes = outMinutes;
        this.timeOfDayOut = timeOfDayOut;
        this.weekHoursLeft = weekHoursLeft;
        this.weekMinutesLeft = weekMinutesLeft;
        this.dateYear = dateYear;
        this.dateMonth = dateMonth;
        this.dateDay = dateDay;
    }

    set inHour(newInHour) {
        this.inHour = newInHour;
    }

    set inMinutes(newInMinutes) {
        this.inMinutes = newInMinutes;
    }

    get inHours() {
        return this.inHours;
    }

    get inMinutes() {
        return this.inMinutes;
    }

    set timeOfDayIn(timeOfDay) {
        this.timeOfDayIn = timeOfDay;
    }

    get timeOfDayIn() {
        return this.timeOfDayIn;
    }

    setClockIn(newInHour, newInMinutes) {
        this.inHour = newInHour;
        this.clockInMinutes = newInMinutes;
    }

    getClockIn() {
        let inMinutes;
        let inHour;

        this.inHour < 10 ? inHour = `0${this.inHour}` : inHour = `${this.inHour}`;
        this.inMinutes < 10 ? inMinutes = `0${this.inMinutes}` : inMinutes = `${this.inMinutes}`;

        return `${inHour}:${inMinutes}s ${this.timeOfDayIn}`;
    }

    set outHour(newOutHour) {
        this.outHour = newOutHour;
    }

    set outMinutes(newOutMinutes) {
        this.outMinutes = newOutMinutes;
    }

    get outHour() {
        return this.outHour;
    }

    get outMinutes() {
        return this.outMinutes;
    }

    setClockOut(newOutHour, newOutMinutes) {
        this.outHour = newOutHour;
        this.outMinutes = newOutMinutes;
    }

    getClockOut() {
        let outHour;
        let outMinutes;

        this.outHour < 10 ? outHour = `0${this.outHour}` : outHour = `${this.outHour}`;
        this.outMinutes < 10 ? outMinutes = `0${this.outMinutes}` : outMinutes = `${this.outMinutes}`;

        return `${outHour}:${outMinutes}s ${this.timeOfDayOut}`;
    }

    set weekHoursLeft(newWeekHours) {
        this.weekHoursLeft = newWeekHours;
    }

    set weekMinutesLeft(newWeekMinutes) {
        this.weekMinutesLeft = newWeekMinutes;
    }

    get weekHoursLeft() {
        return this.weekHoursLeft;
    }

    get weekMinutesLeft() {
        return this.weekMinutesLeft;
    }

    setWeekHours(newWeekHours, newWeekMinutes) {
        this.weekHoursLeft = newWeekHours;
        this.weekMinutesLeft = newWeekMinutes;
    }

    getWeekHours() {
        let weeksHour;
        let weeksMinutes;

        this.weekHoursLeft < 10 ? weeksHour = `0${this.weekHoursLeft}` : weeksHour = `${this.weekHoursLeft}`;
        this.weekMinutesLeft < 10 ? weeksMinutes = `0${this.weekMinutesLeft}` : weeksMinutes = `${this.weekMinutesLeft}`;

        return `${weeksHour}:${weeksMinutes}`;
    }

    formatDate() {
        let day = new Date(this.dateYear, this.dateMonth, this.dateDay);
        let dd = String(day.getDate()).padStart(2, '0');
        let mm = String(day.getMonth() + 1).padStart(2, '0'); //janvier = 0
        let yyyy = day.getFullYear();

        return `${mm}/${dd}/${yyyy}`;
    }

    toString() {
        return `Date: ${this.formatDate()}, Clock In: ${this.getClockIn}, Clock Out: ${this.getClockOut}, Week hours left: ${this.getWeekHours}`;
    }

}

export default ClockInOut;