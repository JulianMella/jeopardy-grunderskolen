const http = require("http")
const {WebSocketServer} = require("ws")

const url = require("url")
const uuidv4 = require("uuid").v4

const server = http.createServer()
const wsServer = new WebSocketServer({server})
const port = 8000

const host = "host"
let host_uuid = null

const admin = "JulianMella"
let admin_uuid = null

const connections = { }
const users = { }
const teams = {
    1: [],
    2: [],
    3: [],
    4: []
}
let currentQuestion = {
    question : "",
    answers : []
}

const printCurrentTeams = () => {
    Object.keys(teams).forEach(teamNumber => {
        if (teams[teamNumber].length !== 0) {
            console.log("Team Number: " + teamNumber)
            console.log(`Members: ${teams[teamNumber].join(", ")}`)
        }
    })
    console.log()
}

const updateTeamsInterface = () => {
    const message = JSON.stringify(users)
    connections[host_uuid].send(message)
}

const addToTeam = uuid => {
    let selectedTeam = null
    let minMembers = Infinity

    for (const [teamNumber, members] of Object.entries(teams)) {
        if (members.length < minMembers) {
            minMembers = members.length
            selectedTeam = teamNumber
        }
    }

    teams[selectedTeam].push(users[uuid].username)
    users[uuid].team = selectedTeam

    updateTeamsInterface()
}

const showQuestion = message => { // WORKING ON THIS..
    currentQuestion = message

    if (currentQuestion.answers.length > 4 || currentQuestion.answers.length < 4) {
        throw new RangeError("The amount of answers to the question must be 4!")
    }
    else {
        console.log(currentQuestion)
    }

}

const handleMessage = (bytes, uuid) => { // WOKRING ON THIS...
    const message = JSON.parse(bytes.toString())


    if (uuid === admin_uuid) {
        showQuestion(message)
        //showAnswers()
    }

    else if (uuid === host_uuid) {
        console.log("Host sent a message")
    }

    else {
        console.log("Player sent a message")
        //registerAnswer(uuid, message)
    }
    // When would a player send a message?
    // When would admin send a message?
    // Admin would only send a message when it has to select a card.
    // When admin has selected a card. After the selection,
    // the server must notify the host that the card has been selected
    // and that the host must show the question now.
    // When would host send a message?
    // Host sends a message when either everyone has answered or the timer has run out.
}

wsServer.on("connection", (connection, request) => {
    const {username} = url.parse(request.url, true).query
    const uuid = uuidv4()
    connections[uuid] = connection

    if (username !== admin && username !== host) {

        if (host_uuid === null) {
            throw new ReferenceError("Host must be initialized first!")
        }

        users[uuid] = {
            username,
            team: null
        }

        addToTeam(uuid)
    }

    if (username === admin) {

        if (host_uuid === null) {
            throw new ReferenceError("Host must be initialized first!")
        }
        admin_uuid = uuid
    }


    if (username === host) {
        host_uuid = uuid
    }


    connection.on("message", message => handleMessage(message, uuid))
})

server.listen(port, () => {
    console.log(`WebSocket server is running on port ${port}`)
})
