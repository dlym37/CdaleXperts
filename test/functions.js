const axios = require('axios')

module.exports = {
    products: [],
    max: 0,
    min: 0,
    gear: 'all',
    gender: 'all',
    bikeType: 'all',
    handleFiltering: (gear, index) => {
        if (gear.price * 100 <= Math.floor(Number(this.min) * 100))
            return false;
        if (this.max !== 0 && this.max !== '' && gear.price >= Number(this.max))
            return false;
        if (gear.subtype !== this.gear && this.gear !== 'all')
            return false;
        if (gear.gender !== this.gender && this.gender !== 'all')
            return false;
        if (gear.biketype !== this.bikeType && this.bikeType !== 'all')
            return false;
        return true;
    },
    handleSelect: (field, value) => {
        this[field] = value
    }
}