const History = Vue.component('history', {
    props : ['user'],
    template : `
        <div class='flex py-3 space-x-5'>                        
            <div class='bg-white cursor-pointer rounded flex flex-col justify-center items-center p-3 font-semibold' v-for=' (user, index) in user.history ' :key='index'>
                <a href='receipt.html'>
                    <div class='overflow-hidden'>
                        <img :src='user.profile' class='h-full w-full duration-500 rounded '>
                    </div>
                    <div class='block mt-3' >{{user.name.split(' ').pop()}}</div>
                    <div class='text-sm tracking-wider text-gray-500'>{{user.cardNumber}}</div>                                
                </a>
            </div>            
        </div>
    `,
    methods : {
        transferHistory(i){
            // location.href = 'receipt.html'
        }
    }
})

export default History