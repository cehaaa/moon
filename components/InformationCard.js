const InformationCard = Vue.component('information-card',{   
    props : ['balance','earned'],
    template : `
        <div class='bg-white rounded w-full h-full flex flex-col justify-center py-3'>

            <div class='flex justify-around border-b px-5 pb-2'>
                <div class='w-1/2'>
                    <div class='text-gray-400 text-sm'>Spent</div>
                    <div class='flex items-center mt-2 mb-5 space-x-4'>
                        <div class="rounded-full bg-red-500 text-yellow-500 h-2 w-2">.</div>
                        <div class="text-gray-700 font-bold text-2xl">{{balance}}</div>
                    </div>
                </div>
                <div class='w-1/2'>
                    <div class='text-gray-400 text-sm'>Earned</div>
                    <div class='flex items-center mt-2 mb-5 space-x-4'>
                        <div class="rounded-full bg-yellow-500 text-yellow-500 h-2 w-2">.</div>
                        <div class="text-gray-700 font-bold text-2xl">{{earned}}</div>
                    </div>
                </div>
            </div>
            
            <div class='flex flex-col px-5 text-sm mt-5 '>
                <div class='text-gray-700'>
                    You spent $2,732 on dining out this month.
                    Let’s try to make it lower
                </div>
                <div class='mt-3 '>                    
                <a href='../view/transaction.html' class='inline-block text-gray-500 underline cursor-pointer'>Tell me more</a>
                </div>
            </div>

        </div>
    `
})

export default InformationCard