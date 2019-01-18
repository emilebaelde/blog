<template>
   <!-- Modal -->
   <div v-if="detail != null">
      <div class="modal fade mt-5" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"  >
         <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
               <img class="" v-bind:src="detail.image" alt="">
               <h1 class="text-center">{{ detail.title }}</h1>
               <p class="text-center">{{ detail.description }}</p>
            </div>
            <div class="modal-footer bg-secondary text-white">
               <p class="text-center">{{ detail.auteur }}</p>
               <p class="text-center">{{ detail.date }}</p>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
    export default{ //exporteren om article.title....te kunnen gebruiken
        props:['detail']
    }
</script>
