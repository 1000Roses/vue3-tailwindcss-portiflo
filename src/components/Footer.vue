<template>
    <div class="bg-red-headbar">

        <div class="grid grid-cols-10 pt-6">
            <div class="flex flex-col col-span-3">
                <div class="subpixel-antialiased text-2xl p-3 text-left sm:text-right font-semibold">CONTACT  </div>
                <div class="subpixel-antialiased text-2xl p-3 text-left sm:text-right font-semibold"> ME </div>
            </div>

            <div class="flex flex-col col-span-7 ml-6">
                <div class="subpixel-antialiased text-xl p-3 text-left font-semibold">phone: 0393258535  </div>
                <div class="subpixel-antialiased text-xl p-3 text-left font-semibold">email: tienle676@gmail.com </div>
            </div>
        </div>

        <div class="flex justify-end md:mr-6 md:p-0 mobile:p-5">
            <div class="2xl:w-2/5 md:w-3/5 mobile:w-full">
                <form @submit.prevent="sendEmail">
                    <label>EMAIL</label><br>
                    <input required type="email" class="shadow-3xl w-full p-2 mb-3 bg-red-headbar border border-black" v-model="mail.your_email"><br>
                    <label >CONTENT</label><br>
                    <textarea required type="text" rows="4" cols="50" class="shadow-3xl p-2 bg-red-headbar border border-black w-full" v-model="mail.your_text"> </textarea> <br>
                    <button type="submit" class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" >SEND</button>
                </form>

                <div class="p-3 mt-3 text-lg text-center border border-black" v-if="mail.sent">
                    SENT SUCCESSFULLY   
                </div>
            </div>
            
           
        </div>

        <br>
    </div>
</template>

<script>
export default {
        data(){
            return {
                mail : {
                    your_email: "",
                    your_text : "",
                    sent : false
                }
            }
        },
        methods : {
            delay(time){
                return new Promise((resolve, reject) => {
                    setTimeout( () => {
                            resolve()
                        }, time)
                })
            },
            async sendEmail() {
                var url = process.env.VUE_APP_SEND_MAIL_API
                var response = await fetch(url,{
                    method : "POST",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({from_email: this.mail.your_email, text: this.mail.your_text})
                })

                response = await response.json()
                if (response == "sent"){
                    this.mail.your_email = ""
                    this.mail.sent = true
                    setTimeout(() => this.mail.sent = false, 5000)
                }
            },
        },
}
</script>