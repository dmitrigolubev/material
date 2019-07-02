<template>
	<v-container>
		<v-layout row>
			<v-flex xs12 sm6 offset-sm3>
				<h1 class="text--secondary mb-3">Create New Ad</h1>
				<v-form v-model="valid" ref="form" validation class="mb-3">
					<v-text-field
						name="title"
						label="ad title"
						type="text"
						v-model="title"
						required
						:rules="[v => !!v || 'title is requred']"
					></v-text-field>
					<v-textarea
						name="description"
						label="ad description"
						type="text"
						v-model="description"
						:rules="[v => !!v || 'description is requred']"
					></v-textarea>
				</v-form>
				<v-layout row>
					<v-flex xs12>
						<v-btn class="warning">Upload<v-icon right dark>cloud_upload</v-icon></v-btn>
					</v-flex>
				</v-layout>
				<v-layout row>
					<v-flex xs12>
						<v-switch
							label="add to promo"
							v-model="promo"
							color="primary"
						></v-switch>
					</v-flex>
				</v-layout>
				<v-layout row>
					<v-flex xs12>
						<v-spacer></v-spacer>
						<v-btn 
							:disabled="!valid"
							class="success" 
							@click="createAd"
						>Create Ad</v-btn>
					</v-flex>
				</v-layout>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
export default {
	data () {
		return {
			title: '',
			description: '',
			promo: false,
			valid: false
		}
	},
	methods: {
		createAd () {
			if (this.$refs.form.validate()) {
				const ad = {
					title: this.title,
					description: this.description,
					promo: this.promo,
					imageSrc: 'newImg'
				}
				this.$store.dispatch('createAd',ad)
			}
		}
	}
}
</script>