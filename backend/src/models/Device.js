class Device {
    constructor(category_id, partnumber, color) {
        this._category_id = category_id
        this._partnumber = partnumber
        this._color = color
    }

    getCategory_id() {
        return this._category_id
    }

    setCategory_id(category_id) {
        this._category_id = category_id
    }

    getPartnumber() {
        return this._partnumber
    }

    setPartnumber(partnumber) {
        this._partnumber = partnumber
    }

    getColor() {
        return this._color
    }

    setColor(color) {
        this._color = color
    }

}

module.exports = Device