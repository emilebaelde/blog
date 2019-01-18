<template>
    <div class="card mt-2 mb-4">
        <img class="" v-bind:src="article.image" alt="">
        <div class="card-body">
            <h2 class="card-title">{{ article.title }}</h2>
            <p class="card-text">{{ article.sluck }}</p>

                <router-link tag="button" to="/" data-toggle="modal" data-target="#exampleModal" class="btn btn-primary form-control" v-on:click.native="$emit('add-to-modal', article)">Read more</router-link>


        </div>
        <div class="card-footer text-muted">
            <p>{{article.auteur}}</p>
            <p>{{article.date}}</p>
        </div>
    </div>
</template>

<!-- Blog Post -->

<script>
    export default{ //exporteren om article.title....te kunnen gebruiken
        props:['article']
    }
</script>