<template>
    <div class="d-flex flex-column">
        <h1>Poems</h1>

        <div class="mb-4">
            <router-link to="/poems/new" class="btn btn-success ml-2" exact>Create Poem</router-link>
        </div>

        <div v-if="poems && poems.length > 0" class="d-flex flex-wrap justify-content-start">

            <div v-for="poem in poems" v-bind:key="poem._id" class="card mb-2 ml-2 text-white bg-dark" style="width: 18rem;">
                <div class="card-body">
                    <div class="d-flex justify-content-between">
                        <h5 class="card-title">{{ poem.title }}</h5>
                    </div>

                    <h6 class="card-subtitle mb-2 text-muted">
                        Created by {{ poem.author.username }}
                    </h6>

                    <p class="card-text">
                        The boy is {{ poem.firstNoun}}, {{ poem.secondNoun}}, {{ poem.thirdNoun}}.
                        <br>He Looks like {{ poem.firstAdjective }}, {{ poem.secondAdjective }}, {{ poem.thirdAdjective}}.
                        <br>He sounds like {{ poem.firstAdverb }}, {{ poem.secondAdverb }}, {{ poem.thirdAdverb }}.
                        <br>He walks like {{ poem.firstPreposition }}, {{ poem.secondPreposition }}, {{ poem.thirdPreposition }},
                        <br>And finally, he smells like {{ poem.firstVerb }}, {{ poem.secondVerb }}, {{ poem.thirdVerb }}.
                    </p>

                    <div v-if="poem.author._id === $store.state.userId" class="d-flex justify-content-between">
                        <router-link type="button" tag="button" class="card-link btn btn-primary" :to="{ name: 'poems-edit', params: { id: poem._id } }"
                            exact>Edit</router-link>
                        <a v-on:click.prevent="currentPoemId = poem._id" class="card-link btn btn-danger" href="#" v-b-modal.modal1>Delete</a>
                    </div>
                </div>
            </div>

            <div>
                <b-modal id="modal1" ref="modal" centered title="Delete Confirmation">
                    <p class="my-4">Are you sure you would like to delete this poem?</p>
                    <div slot="modal-footer" class="w-100 text-right">
                        <b-btn slot="md" class="mr-1" variant="danger" @click="deletePoem">Delete</b-btn>
                        <b-btn slot="md" variant="secondary" @click="cancelModal">Cancel</b-btn>
                    </div>
                </b-modal>
            </div>
        </div>

        <div v-if="poems && poems.length === 0" class="ml-2">
            <div class="alert alert-info">No poems found.</div>
        </div>

    </div>

</template>

<script>
    import * as poemService from '../../services/PoemService'
    export default {
        name: 'poems-all',
        data: function() {
            return {
                poems: null,
                currentPoemId: null
            }
        },
        beforeRouteEnter(to, from, next) {
            poemService.getAllPoems()
                .then(res => {
                    next(vm => {
                        vm.poems = res.data.poems;
                    });
                });
        },
        methods: {
            cancelModal: function() {
                this.$refs.modal.hide();
                this.currentPoemId = null;
            },
            deletePoem: async function() {
                this.$refs.modal.hide();
                await poemService.deletePoem(this.currentPoemId);
                const index = this.poems.findIndex(poem => poem._id === this.currentPoemId);
                this.poems.splice(index, 1);
                this.currentPoemId = null;
            },
        }
    }
</script>
