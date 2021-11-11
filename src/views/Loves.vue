<template>
    <div class="bg-green-body h-full ">
        <br> <br> <br>
        <div class="2xl:container md:w-4/5 mx-auto">
            <div class="grid md:grid-cols-10 grid-cols-1">
                
                <div class="md:col-span-4 md:ml-4 mobile:p-2 md:hidden">
                    <p class="p-3 shadow">
                       {{ introduce }}
                    </p>
                </div>

                <div class="md:col-span-6 mobile:p-2">
                    <div class="flex flex-row h-post mb-7 shadow-sm rounded-xl hover:bg-post" v-for="love in loves" :key="love" @click="redirectDetailLove(love.id)">
                        <img src="https://i.imgur.com/dai11uu.png" alt="">
                        <div class="md:p-8 p-3" >
                            <p class="text-xl font-semibold">{{ love.title }}</p>   
                            <p class="text-overflow-custom-line-4" > {{ love.brief_content }} </p>
                        </div>
                    </div>
                </div>
                
                <div class="md:col-span-4 md:ml-4 mobile:p-2 md:block hidden">
                    <p class="p-3 shadow">
                        {{ introduce }}
                    </p>
                </div>
            </div>
            
        </div>  
        <br> <br> <br>      
    </div>
</template>

<script>
export default {
    data(){
        return {
            introduce : " The author is hiding in soul of it-er. I like writing some sentences about myself. The things i have met in life, fogot some english vocabs, sr the page will be updated next time.",
            loves: []
        }
    },
    methods: {
        async getLoves(){
            var url = process.env.VUE_APP_GET_LOVES_API
            var response = await fetch(url, {
                method: 'GET'
            })
            if (response.ok && response.status === 200){
                this.loves = await response.json()
            }
        },
        redirectDetailLove(id){
            this.$router.push({ name: "detail_love", params: { id: id } })
        }
    },
    created(){
        this.getLoves()
    }
}
</script>

<style scoped>
    .text-overflow-custom-line-4 {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
    }
</style>