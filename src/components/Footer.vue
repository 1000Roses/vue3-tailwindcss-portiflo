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
                <form @submit="sendContact">
                    <label>EMAIL</label><br>
                    <input type="text" class="shadow-3xl w-full p-2 mb-3 bg-red-headbar border border-black"><br>
                    <label >CONTENT</label><br>
                    <textarea type="text" rows="4" cols="50" class="shadow-3xl p-2 bg-red-headbar border border-black w-full" > </textarea> <br>
                    <button type="submit" class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" >SUBMIT</button>
                </form>
            </div>
            
        </div>

        <br>
    </div>
</template>

<script>
export default {
    
}
</script>