<template>
    <div class="container-fluid">
        <div class="row">
            <div :key="article.id" class="col-md-6 offset-md-3" v-for="article in articles"> <!--articles vervangen door formatArticle-->
                <Article v-on:add-to-modal="addToModal(article)" :article="article"></Article> <!--Bind :article (prop uit component) = article uit v-for -->
            </div>
            <router-view :detail="article"></router-view>
        </div>
    </div>
</template>

<script>
    import Article from '@/components/Article.vue'
    //import articles from '@/articles.json'

    export default {
        name: 'app',
        data() {
            return {
                //articles,
                articles:[],
                article: "Er is een probleem. Het artikel wordt niet geladen",
            }
        },
        mounted(){
            this.getArticles()
        },

        components: {
            Article,
        },
        computed:{
           formatArticle(){
                return Object.values(this.articles)
            }
        },
        methods: {
            addToModal(article) {
                this.article = article

            },
           getArticles(){
                const article = localStorage.getItem('article');
                if(article){
                    this.article = JSON.parse(article);
                    return;
                }
                const axios=require('axios') //axios geinstalleerd
                axios.get('http://www.syntraproject.be/emile/articles.json')
                    .then((response) =>{ //door lambda function kan je this. gebruiken uit parent scope (data())
                        this.articles = response.data
                        localStorage.setItem('article', JSON.stringify(response.data))
                    })
            }
        }
    }
</script>

<style>
    #app {

    }
</style>
