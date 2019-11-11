<template>
    <div>
        <h1>Create Poem</h1>
        <form class="custom-form" v-on:submit.prevent="onSubmit">
            <div class="form-group">
                <label for="title">Title</label>
                <input v-model="poem.title" type="text" class="form-control" id="title" name="title" placeholder="Title" />
            </div>
            <div class="form-group">
                <label for="firstNoun">First Noun</label>
                <input placeholder="First Noun" type="text" class="form-control" v-model="poem.firstNoun" name="firstNoun" id="firstNoun" />
            </div>
            <div class="form-group">
                <label for="secondNoun">Second Noun</label>
                <input placeholder="Second Noun" type="text" class="form-control" v-model="poem.secondNoun" name="secondNoun" id="secondNoun" />
            </div>
            <div class="form-group">
                <label for="thirdNoun">Third Noun</label>
                <input placeholder="Third Noun" type="text" class="form-control" v-model="poem.thirdNoun" name="thirdNoun" id="thirdNoun" />
            </div>
            <div class="form-group">
                <label for="firstAdjective">First Adjective</label>
                <input placeholder="First Adjective" type="text" class="form-control" v-model="poem.firstAdjective" name="firstAdjective" id="firstAdjective" />
            </div>
            <div class="form-group">
                <label for="secondAdjective">Second Adjective</label>
                <input placeholder="Second Adjective" type="text" class="form-control" v-model="poem.secondAdjective" name="secondAdjective" id="secondAdjective" />
            </div>
            <div class="form-group">
                <label for="thirdAdjective">Third Adjective</label>
                <input placeholder="Third Adjective" type="text" class="form-control" v-model="poem.thirdAdjective" name="thirdAdjective" id="thirdAdjective" />
            </div>
            <div class="form-group">
                <label for="firstAdverb">First Adverb</label>
                <input placeholder="First Adverb" type="text" class="form-control" v-model="poem.firstAdverb" name="firstAdverb" id="firstAdverb" />
            </div>
            <div class="form-group">
                <label for="secondAdverb">Second Adverb</label>
                <input placeholder="Second Adverb" type="text" class="form-control" v-model="poem.secondAdverb" name="secondAdverb" id="secondAdverb" />
            </div>
            <div class="form-group">
                <label for="thirdAdverb">Third Adverb</label>
                <input placeholder="Third Adverb" type="text" class="form-control" v-model="poem.thirdAdverb" name="thirdAdverb" id="thirdAdverb" />
            </div>
            <div class="form-group">
                <label for="firstPreposition">First Preposition</label>
                <input placeholder="First Preposition" type="text" class="form-control" v-model="poem.firstPreposition" name="firstPreposition" id="firstPreposition" />
            </div>
            <div class="form-group">
                <label for="secondPreposition">Second Preposition</label>
                <input placeholder="Second Preposition" type="text" class="form-control" v-model="poem.secondPreposition" name="secondPreposition" id="secondPreposition" />
            </div>
            <div class="form-group">
                <label for="thirdPreposition">Third Preposition</label>
                <input placeholder="Third Preposition" type="text" class="form-control" v-model="poem.thirdPreposition" name="thirdPreposition" id="thirdPreposition" />
            </div>
            <div class="form-group">
                <label for="firstVerb">First Verb</label>
                <input placeholder="First Verb" type="text" class="form-control" v-model="poem.firstVerb" name="firstVerb" id="firstVerb" />
            </div>
            <div class="form-group">
                <label for="secondVerb">Second Verb</label>
                <input placeholder="Second Verb" type="text" class="form-control" v-model="poem.secondVerb" name="secondVerb" id="secondVerb" />
            </div>
            <div class="form-group">
                <label for="thirdVerb">Third Verb</label>
                <input placeholder="Third Verb" type="text" class="form-control" v-model="poem.thirdVerb" name="thirdVerb" id="thirdVerb" />
            </div>
            <div class="form-group">
                <button type="submit" @click="create" class="btn btn-secondary">Create</button>
            </div>
        </form>
    </div>
</template>

<script>
    import * as poemService from '../../services/PoemService'
    export default {
        name: 'poems-create',
        data: function() {
            return {
                poem: {
                    title: null,
                    firstNoun: null,
                    secondNoun: null,
                    thirdNoun: null,
                    firstAdjective: null,
                    secondAdjective: null,
                    thirdAdjective: null,
                    firstAdverb: null,
                    secondAdverb: null,
                    thirdAdverb: null,
                    firstPreposition: null,
                    secondPreposition: null,
                    thirdPreposition: null,
                    firstVerb: null,
                    secondVerb: null,
                    thirdVerb: null
                },
                error: null
            }
        },
        methods: {
            async create(){
            this.error = null
            var loopArray = [this.poem]
            var i = null;
            var key = null;
            for (i in loopArray){
                for (key in loopArray[i]){
                    var value = loopArray[i][key]
                    if ((value === null) || (value === "") || (/[^a-zA-Z]/.test(value))){
                        this.error = 'Please use single words, with alphabets only'
                        alert(this.error);
                        return
                        }
                    }
                }
            },
            
            onSubmit: async function() {
                const request = {
                    poem: this.poem
                }
                if (this.error !== null){return}
                await poemService.createPoem(request);
                this.$router.push({ name: 'poems-all' });
        }
            
    }
}
</script>