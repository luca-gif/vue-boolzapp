const root = new Vue({
    el: "#root",
    data: {
        activeUser: 0,

        text: "",

        time: "",

        search: "",

        users: [{
                name: "Michele",
                avatar: "_1",
                visible: true,
                messages: [{
                        date: "10/01/2020 15:30:55",
                        message: "Hai portato a spasso il cane?",
                        status: "sent",
                    },
                    {
                        date: "10/01/2020 15:50:00",
                        message: "Ricordati di stendere i panni",
                        status: "sent",
                    },
                    {
                        date: "10/01/2020 16:15:22",
                        message: "Tutto fatto!",
                        status: "received",
                    },
                ],
            },
            {
                name: "Fabio",
                avatar: "_2",
                visible: true,
                messages: [{
                        date: "20/03/2020 16:30:00",
                        message: "Ciao come stai?",
                        status: "sent",
                    },
                    {
                        date: "20/03/2020 16:30:55",
                        message: "Bene grazie! Stasera ci vediamo?",
                        status: "received",
                    },
                    {
                        date: "20/03/2020 16:35:00",
                        message: "Mi piacerebbe ma devo andare a fare la spesa.",
                        status: "sent",
                    },
                ],
            },
            {
                name: "Samuele",
                avatar: "_3",
                visible: true,
                messages: [{
                        date: "28/03/2020 10:10:40",
                        message: "La Marianna va in campagna",
                        status: "received",
                    },
                    {
                        date: "28/03/2020 10:20:10",
                        message: "Sicuro di non aver sbagliato chat?",
                        status: "sent",
                    },
                    {
                        date: "28/03/2020 16:15:22",
                        message: "Ah scusa!",
                        status: "received",
                    },
                ],
            },
            {
                name: "Alessandro B.",
                avatar: "_4",
                visible: true,
                messages: [{
                        date: "10/01/2020 15:30:55",
                        message: "Lo sai che ha aperto una nuova pizzeria?",
                        status: "sent",
                    },
                    {
                        date: "10/01/2020 15:50:00",
                        message: "Si, ma preferirei andare al cinema",
                        status: "received",
                    },
                ],
            },
            {
                name: "Alessandro L.",
                avatar: "_5",
                visible: true,
                messages: [{
                        date: "10/01/2020 15:30:55",
                        message: "Ricordati di chiamare la nonna",
                        status: "sent",
                    },
                    {
                        date: "10/01/2020 15:50:00",
                        message: "Va bene, stasera la sento",
                        status: "received",
                    },
                ],
            },
            {
                name: "Claudia",
                avatar: "_6",
                visible: true,
                messages: [{
                        date: "10/01/2020 15:30:55",
                        message: "Ciao Claudia, hai novità?",
                        status: "sent",
                    },
                    {
                        date: "10/01/2020 15:50:00",
                        message: "Non ancora",
                        status: "received",
                    },
                    {
                        date: "10/01/2020 15:51:00",
                        message: "Nessuna nuova, buona nuova",
                        status: "sent",
                    },
                ],
            },
            {
                name: "Federico",
                avatar: "_7",
                visible: true,
                messages: [{
                        date: "10/01/2020 15:30:55",
                        message: "Fai gli auguri a Martina che è il suo compleanno!",
                        status: "sent",
                    },
                    {
                        date: "10/01/2020 15:50:00",
                        message: "Grazie per avermelo ricordato, le scrivo subito!",
                        status: "received",
                    },
                ],
            },
            {
                name: "Davide",
                avatar: "_8",
                visible: true,
                messages: [{
                        date: "10/01/2020 15:30:55",
                        message: "Ciao, andiamo a mangiare la pizza stasera?",
                        status: "received",
                    },
                    {
                        date: "10/01/2020 15:50:00",
                        message: "No, l'ho già mangiata ieri, ordiniamo sushi!",
                        status: "sent",
                    },
                    {
                        date: "10/01/2020 15:51:00",
                        message: "OK!!",
                        status: "received",
                    },
                ],
            },
        ],
    },
    methods: {
        /* Aggiunge il messaggio */

        addMessage(text) {
            const newMessage = {
                date: this.time,
                message: text,
                status: "sent",
            };

            /* Controllo input e scateno Timing Function */

            if (text.length > 0) {
                setTimeout(this.replyMessage, 1000);

                this.users[this.activeUser].messages.push(newMessage);
                this.text = "";
            }
        },

        /* Funzione risposta automatica */

        replyMessage() {
            const answer = {
                date: this.time,
                message: "Ok!",
                status: "received",
            };
            this.users[this.activeUser].messages.push(answer);
        },

        /* Ultimo messaggio */

        getLastMessage(index) {
            const messages = this.users[index].messages;
            const lastMessage = messages[messages.length - 1];
            return lastMessage.message;
        },

        /* Funzione Data e Ora Attuale */

        currentData() {
            const now = new Date();
            const hours = now.getHours();
            const minutes = now.getMinutes();
            const seconds = now.getSeconds();
            const day = now.getDate();
            const month = now.getMonth() + 1;
            const year = now.getFullYear();

            if (seconds < 10) {
                this.time = `${day}/${month}/${year} ${hours}:${minutes} :0${seconds}`;
            } else if (minutes < 10) {
                this.time = `${day}/${month}/${year} ${hours} :0${minutes}:${seconds}`;
            } else if (hours < 10) {
                this.time = `${day}/${month}/${year} 0${hours}:${minutes}:${seconds}`;
            } else {
                this.time = `${day}/${month}/${year} ${hours}:${minutes} ${seconds}`;
            }
        },
    },

    mounted() {
        this.currentData();
    },
});