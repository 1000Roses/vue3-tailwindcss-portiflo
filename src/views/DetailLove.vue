<template>
    <div class="bg-green-body h-full ">
        <br> <br> <br>
        <div class="md:w-8/12 w-full mx-auto shadow md:p-7 p-3">
                
                    <p class="text-4xl text-center font-semibold bg-yellow-600 p-3" > {{ briefLove.title }} </p>
                    <br> <br> <br>
                    <code>Chỉnh sửa lần cuối ngày: {{ briefLove.last_day_edited }}</code>
                    <div v-for="section in briefLove.post_section" :key="section">
                        <p class="md:text-2xl text-lg font-semibold"> {{ section.name }} </p>
                        <div v-for="paragraph in section.post_paragraph" :key="paragraph" class="ml-2 mt-2">
                            <a v-if="paragraph.includes('<a>')" :href="paragraph.replace(/<a>/g, '').replace('</a>', '').trim()">Link không bí mật: <span class="font-semibold"> {{ paragraph.replace(/<a>/g, "").replace('</a>', "").trim() }} </span> </a>
                            <div v-else-if="paragraph.includes('<img>')" class="w-full h-auto">
                                <img class="object-cover w-full" :src="paragraph.replace(/<img>/g, '').replace('</img>', '').trim()" alt="">
                            </div>
                            <p v-else>{{ paragraph }}</p>
                        </div>
                        <div class="mt-3"></div>
                    </div>
                
        </div>
        <br> <br>
    </div>
</template>

<script>
export default {
    data(){
        return {
            briefLove : '',
            id : ''
        }
    },
    methods : {
        async getDetailLove(){
            var url = process.env.VUE_APP_GET_LOVES_API + this.id
            console.log(url)
            console.log(url)
            var response = await fetch(url, {
                method: 'GET'
            })
            if (response.ok && response.status === 200){
                this.briefLove = await response.json()
            }
        }
    },
    created(){
        this.id = this.$route.params.id
        this.getDetailLove()
    }
}
</script>