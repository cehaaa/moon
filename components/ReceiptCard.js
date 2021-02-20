const ReceiptCard = Vue.component('receipt-card',{    
    template : `
    <div class="bg-white rounded w-full px-3 pt-3 pb-10 flex flex-col">

        <div class="border-b-2 border-dashed flex flex-col items-center w-full">
            <img src="../assets/profile.png" alt="profile image">
            <div class="text-lg block my-4 text-gray-700 font-bold">Transfer done</div>
        </div>

        <div class="py-5">
            <div class="flex items-center">
                <div>
                    <img src="./../assets/dragon-circle.png" alt="">                            
                </div>
                <div>
                    <div class="font-semibold text-gray-500 text-sm">Recipient</div>
                    <div class="font-semibold text-gray-700 text-md"></div>
                </div>
            </div>
        </div>

    </div>
    `
})

export default ReceiptCard