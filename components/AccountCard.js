const AccountCard = Vue.component('account-card',{
    props : ['user'],
    template : `
        <div class='flex w-full px-4 py-5 bg-yellow-300 rounded space-x-5 items-center'>
            <div>
                <img src='../assets/liondance2.jpg' class='rounded-lg w-14 h-10' alt='Moon UI User Profile Image'>
            </div>
            <div class='flex flex-col w-full'>
                <div class='flex items-center justify-between'>
                    <div class='font-semibold tracking-wider'>{{user.username}}</div>
                    <div>
                        <img src='../assets/arrow.png' alt='Moon UI Arrow Icon' />
                    </div>
                </div>
                <div class='flex space-x-5 mt-2 h-8 w-full items-center'>
                    <div>
                        <img src='../assets/progress.png' alt='Moon UI Progress'>
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