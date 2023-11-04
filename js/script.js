const { createApp } = Vue;

createApp ({
    data() {
        return {
       
          randomReplies: [
            "Ciao",
            "Va bene",
            "Tutto Bene",
            "Sto, studiando",
            "Sto arrivando",
            "Non posso ora",
            "D'accordo",
            "Forza Juventus",
            "Ci vediamo lì",
            "Verso le 22",
            "Piove, preferisco non uscire",
            "Non fare tardi",
            "Una pizza la mangerei!",
            "Auguri anche a te",
            "Per un caffe, ci sono",
            "Stasera passo",
            "Si, andiamo a ballare",
            "Grazie",
            "Perché no",
            "Forse un'altra volta"
          ],         
             contacts: [
                {
                    id: 1,
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    id: 2,
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    id: 3,
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    id: 4,
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    id: 5,
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    id: 6,
                    name: 'Claudia',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    id: 7,
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    id: 8,
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],
            activeContactIndex: 0,
            message:'',
            response: '',
            search: '',
            messageMenuIndex: null,
            isAddContactPopupOpen: false,
            newContactName: '',
            newContactIconLink: '',
  
        }
    },
    methods: {
        getTimeFromDate(date) {
            time = date.split(" ")[1];
            hourAndMinutes = time.split(":").slice(0,2).join(":");
            return hourAndMinutes;
        },
    
        deleteMessage(index) {
            this.contacts[this.activeContactIndex].messages.splice(index, 1);
            this.messageMenuIndex = null;
        },
 
        selectContact(id){
            const index = this.contacts.findIndex((contact)=> contact.id === id);
            if(index !== -1){
                this.activeContactIndex = index;
            }
        },
        sendMessage() {
            const messageContent = this.message.trim();
        
            if (messageContent) {
                this.contacts[this.activeContactIndex].messages.push({
                    date: new Date().toLocaleString(),
                    message: messageContent,
                    status: 'sent',
                });
        
                this.message = ''
                
                setTimeout(() => {
                    const randomIndex = Math.floor(Math.random() * this.randomReplies.length);
                    const randomReply = this.randomReplies[randomIndex];
                    this.contacts[this.activeContactIndex].messages.push({
                        date: new Date().toLocaleString(),
                        message: randomReply,
                        status: 'received',
                    });
                }, 1000);
            }
        },
  

        toggleMessageMenu(index) {
            if (this.messageMenuIndex === index) {
                this.messageMenuIndex = null;
            } else {
                this.messageMenuIndex = index;
            }
        },
        openAddContactPopup() {
            this.isAddContactPopupOpen = true;
            this.newContactName = '';
            this.newContactIconLink = '';
        },
        addContact() {
            this.closeAddContactPopup();
        },
        closeAddContactPopup() {
            this.isAddContactPopupOpen = false;
        },
    },
    computed: {
        filteredContacts() {
          return this.contacts.filter(contact => contact.name.toLowerCase().includes(this.search.toLowerCase()));
        }
      },

    }) .mount('#app');