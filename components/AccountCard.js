const AccountCard = Vue.component('account-card',{
    props : ['user'],
    template : `
        <div class='flex w-full px-4 py-5 bg-yellow-300 rounded space-x-5 items-center'>
            <div class='overview-hidden'>            
                <img src='../assets/profile.png' class='rounded-lg h-full w-full'>
            </div>
            <div class='flex flex-col w-full'>
                <div class='flex items-center justify-between'>
                    <div class='font-semibold tracking-wider'>{{user.username}}</div>
                    <div>
                        <img src='../assets/arrow.png' class='cursor-pointer'/>
                    </div>
                </div>
                <div class='flex space-x-5 mt-2 h-8 w-8 w-full items-center'>
                    <div>
                        <img src='../assets/progress.png'>
                    </div>
                    <div class='flex flex-col text-sm font-semibold'>
                        <div>Bank Account</div>
                        <div class='tracking-widest'>{{user.cardNumber}}</div>
                    </div>
                </div>
            </div>
        </div>
    `
})

export default AccountCard