<template>
    <div class="">
        <div class="bg-red-headbar subpixel-antialiased  text-2xl p-5 sm:w-1/4 text-left xl:text-right sm:float-left font-semibold hidden md:block" @click="directPage('home')"> HOME </div>
        <div class="bg-red-headbar subpixel-antialiased  text-2xl p-5 sm:w-1/4 text-left xl:text-right sm:float-left font-semibold md:hidden" @click="transformSidebar()"> <font-awesome-icon icon="bars" :style="{ transform: 'rotate(' + turn + 'deg)'}" /> </div>
        <div class="bg-red-headbar w-3/4 float-left p-5 hidden sm:block  font-semibold">
            <div class="text-2xl subpixel-antialiased  2xl:w-3/5 md:w-5/6 flex lg:justify-start 2xl:justify-end gap-10">
                <div @click="directPage('resume')">RESUME</div>
                <div @click="directPage('loves')">LOVES</div>  
                <div @click="directPage('contact')">CONTACT</div>  
            </div> 
        </div>
        
        <div class="clear-both"></div>

        <div v-if="sidebar" @click="transformSidebar()" class="absolute backdrop-filter backdrop-blur-sm" style="height:100%; width: 100%">

        </div>

        <div class="mobile:w-1/2 bg-red-headbar absolute md:hidden "  :style="{ height: '100%', left: sidebarAnimation + '%', overflow: 'hidden', overflowY: 'hidden'}">
            <div class="text-lg subpixel-antialiased grid grid-cols-1 gap-6 h-full p-5 font-semibold">
                <div @click="directPage('home')">HOME</div>
                <div @click="directPage('resume')">RESUME</div>
                <div @click="directPage('loves')">LOVES</div>  
                <div @click="directPage('contact')">CONTACT</div>  
            </div>
        </div>

        
    </div>
</template>

<script>
export default {
    data(){
        return {
            sidebar: false,
            turn: 0,
            sidebarAnimation: -50
        }
        
    },
    methods: {
      
        delay(time){
            return new Promise((resolve, reject) => {
                setTimeout( () => {
                        resolve()
                    }, time)
            })
        },
        async directPage(pageName){
            if (this.sidebar){
                this.transformSidebar()
            }
            await this.delay(1)
            this.$router.push({name: pageName})
            
            
        },
        async transformSidebar(){
            this.sidebar = !this.sidebar
            if (this.sidebar){
                
                for (var i = 0; i < 90; i++){
                    this.turn += 1
                    this.sidebarAnimation += 50/90
                    await this.delay(0.05)
                }
            }else{
                for (var i = 0; i < 90; i++){
                    this.turn -= 1
                    this.sidebarAnimation -= 50/90
                    await this.delay(0.05)
                }
            }
        }
    },
    created(){
         window.addEventListener('scroll', () => {
             if (this.sidebar){
                    this.transformSidebar()
                }
         });
        
       
    }
}
</script>

