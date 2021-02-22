import InformationCard from '../components/InformationCard.js'
import AccountCard from '../components/AccountCard.js'
import History from '../components/History.js'
import MobileNavigation from '../components/MobileNavigation.js'
import ReceiptCard from '../components/ReceiptCard.js'

// import routes from '../routes/routes.js'

const app = new Vue({
    el : '#app',    
    data: {        
        balance : '22.866',
        earned : '2.730',
        user : {
            username : 'Christian Gouw',
            history : [
                {                
                    name : 'Myoui Sharon Mina',
                    profile : '../assets/dragon.jpg',
                    cardNumber : '+090078601'
                },
                {
                    name : 'Chou Tzuyu',
                    profile : '../assets/liondance2.jpg',
                    cardNumber : '+090078601'
                }
            ],
            cardNumber : '91827381',
        },        
    },
    components : {
        'information-card' : InformationCard,        
        'account-card' : AccountCard,
        'history' : History,
        'mobile-navigation' : MobileNavigation,
        'receipt-card' : ReceiptCard
    },        
})


