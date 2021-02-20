const ReceiptCard = Vue.component('receipt-card',{    
    template : `
    <div class="bg-white rounded-md w-full px-3 py-3 flex flex-col">

        <div class="border-b-2 border-dashed flex flex-col items-center w-full">
            <img src="../assets/profile.png" alt="profile image">
            <div class="text-lg block my-4 text-gray-700 font-bold">Transfer done</div>
        </div>

        <div class="py-5 flex flex-col space-y-6">
            <div class="flex items-center space-x-5">                
                <img src='../assets/dragon.jpg' class='rounded-full h-12 w-12'>                
                <div>
                    <div class="font-semibold text-gray-500 text-sm">Recipient</div>
                    <div class="font-bold text-gray-700">Myoui Mina</div>
                </div>
            </div>
            <div>
                <div class='text-gray-500 font-semibold text-sm'>Reference number</div>
                <div class='font-bold tracking-wide text-gray-700 '>#D79004321786</div>
            </div>
            <div class='flex justify-between'>
                <div>
                    <div class='text-gray-500 font-semibold text-sm'>Amount sent</div>
                    <div class='font-bold text-gray-700' >$150</div>
                </div>
                <div>
                    <div class='text-gray-500 font-semibold text-sm'>Transfer fee</div>
                    <div class='font-bold text-gray-700' >$150</div>
                </div
            </div>            
        </div>

        <div>
            <button class='p-3 rounded w-full bg-yellow-300 hover:bg-yellow-400 font-bold text-white focus:outline-none flex items-center justify-center space-x-3'>
                <div>Share</div>
                <img src='../assets/share.png'>
            </button>
        </div>

    </div>
    `
})

export default ReceiptCard