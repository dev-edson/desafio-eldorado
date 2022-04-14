class Device {
    constructor(category, color, partnumber) {
        this._category = category
        this._color = (color !== '' && color !== null && color !== undefined) ? color : 'Indefinida'
        this.partnumber = partnumber
    }

    getCategory() {
        return this._category
    }

    setCategory(category) {
        this._category = category
    }

    getColor() {
        return this._color
    }

    setColor(color) {
        this._color = color
    }

    getPartnumber() {
        return this._partnumber
    }

    setColor(partnumber) {
        this._partnumber = partnumber
    }

}

module.exports = Device

