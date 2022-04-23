module.exports = (mongoose) => {
    const schema = mongoose.Schema(
        {
            name: String,
            email: String,
            password: String,
            status: String
        },
        {
            timestamps: true
        }
    )

    schema.method("toJSON", function() {
        const {_v, _id, ...object} =  this.toObject()
        object.id = _id
        return object
    })

    const User = mongoose.model("users", schema)
    return User
}