class Device {
    constructor(category_id, color, partnumber, id = null) {
        this._id = id
        this._category_id = category_id
        this._color = (color !== '' && color !== null && color !== undefined) ? color : 'Indefinida'
        this._partnumber = partnumber
    }

    getId() {
        return this._id
    }

    setId(id) {
        this._id = id
    }

    getCategory_id() {
        return this._category_id
    }

    setCategory_id(category_id) {
        this._category_id = category_id
    }

    getColor() {
        return this._color
    }

    setColor(color) {
        this._color = (color !== '' && color !== null && color !== undefined) ? color : 'Indefinida'
    }

    getPartnumber() {
        return this._partnumber
    }

    setPartNumber(partnumber) {
        this._partnumber = partnumber
    }

}

module.exports = Device

