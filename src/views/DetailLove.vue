<template>
    <div class="bg-green-body h-full ">
        <br> <br> <br>
        <div class="md:w-8/12 w-full mx-auto shadow md:p-7 p-3">
                
                    <p class="text-3xl text-center font-semibold" > {{ briefLove.title }} </p>
                    <br> <br> <br>
                    <div v-for="section in briefLove.post_section" :key="section">
                        <p class="md:text-2xl text-lg font-semibold"> {{ section.name }} </p>
                        <div v-for="paragraph in section.post_paragraph" :key="paragraph" class="ml-2 mt-2">
                            <p>{{ paragraph }}</p>
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
            var url = 'http://127.0.0.1:8000/post/' + this.id
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