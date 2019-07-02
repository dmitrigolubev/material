export default {
	state: {
		ads: [
			{
					title:'first ad', 
					description:'hello i am first', 
					promo: false, 
					imageSrc:'', 
					id:'1'
				},
				{
					title:'second ad', 
					description:'hello i am second', 
					promo: true, 
					imageSrc:'', 
					id:'2'
				},
        {
          title:'third ad', 
          description:'hello i am third', 
          promo: true, 
          imageSrc:'', 
          id:'3'
        }
		]
	},
	mutations: {
		createAd (state, payload) {
			state.ads.push(payload)
		}
	},
	actions: {
		createAd ({commit}, payload) {
			payload.id = Math.random().toString()
			commit('createAd', payload)
		}
	},
	getters: {
		ads (state) {
			return state.ads
		},
		promoAds (state) {
			return state.ads.filter(ad => {
				return ad.promo
			})
		},
		myAds (state) {
			return state.ads
		},
    adById (state) {
      return adId => {
        return state.ads.find(ad => ad.id === adId)
      }
    }
	}
}