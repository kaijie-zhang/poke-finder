const rooms = []

// addRoom, removeRemove, getRooms

const addRoom = (room) => {
    rooms.push(room.trim().toLowerCase())
}

const removeRoom = (room) => {
    const index = rooms.indexOf(room)

    if (index > -1){
        return rooms.splice(index, 1)[0]
    }
}

const getRooms = () => {
    return rooms
}

const roomExists = (room) => {
    return rooms.indexOf(room) > -1
}

module.exports = {
    addRoom,
    removeRoom,
    getRooms,
    roomExists
}