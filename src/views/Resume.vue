<template>
    <div class="bg-green-body h-full">
        <br> <br> <br>
        <div class="2xl:w-3/5 lg:w-4/5 w-full mx-auto shadow-lg p-8 md:p-8 mobile:p-2 grid grid-cols-2 gap-4">
            <div class="col-span-2 mb-5"> 
                <div class= "">
                    <img src="https://i.imgur.com/uQxk5IK.png"  alt="" class="rounded-full object-cover mx-auto">
                    <p class="text-center p-2 text-3xl font-semibold">LE VAN TIEN</p>
                    <code class="flex justify-center" > Web, ML developer </code>
                </div>
            </div>
            <div class="col-span-1" v-for="subCv in cv" :key="subCv">
                <div>
                    <p class="font-semibold text-3xl mobile:text-xl"> {{ subCv.name }}</p>
                    <div v-for="section in subCv.section" :key="section">
                        <p class="font-semibold text-2xl mobile:text-base ml-2"> {{ section.name }} </p>
                        <ul class="ml-4 text-xl mobile:text-sm">
                            <li v-for="content in section.content" :key="content" class="tracking-wide p-1">
                                <div v-if="content != ''">
                                    <font-awesome-icon icon="code" /> {{ content }}
                                </div>                                
                                
                            </li>
                        </ul>
                    </div>
                </div>  
            </div>           
        </div>
        <br> <br> <br>
        <div class="clear-both"></div>
    </div>
</template>

<script>

export default {
    data(){
        return {
            cv: ""
        }
    },
    methods : {
        async getCv(){
            var url =  process.env.VUE_APP_GET_CV_API
            var response = await fetch(url, {
                method: 'GET'
            })
            if (response.ok && response.status === 200){
                this.cv = await response.json()
            }
        }
    },
    created(){
        this.getCv()
    }
}
</script>