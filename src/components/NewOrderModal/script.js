import 'bootstrap'

export default {
  name: 'NewOrderModal',
  data() {
    return {
      order: {
        orderStatus: 1,
        description: null,
        address: null,
        city: null,
        state: null,
        zip: null
      },
      // TODO: Populate these values from the database
      statuses: [
        { text: "Ordered", value: 1 },
        { text: "Processing", value: 2 },
        { text: "Shipping", value: 3 },
        { text: "Received", value: 4 }
      ],
      states: [
        { text: "-- Select a State --", value: null },
        { text: "AL", value: "AL" },
        { text: "AK", value: "AK" },
        { text: "AZ", value: "AZ" },
        { text: "AR", value: "AR" },
        { text: "CA", value: "CA" },
        { text: "CO", value: "CO" },
        { text: "CT", value: "CT" },
        { text: "DE", value: "DE" },
        { text: "DC", value: "DC" },
        { text: "FL", value: "FL" },
        { text: "GA", value: "GA" },
        { text: "HI", value: "HI" },
        { text: "ID", value: "ID" },
        { text: "IL", value: "IL" },
        { text: "IN", value: "IN" },
        { text: "IA", value: "IA" },
        { text: "KS", value: "KS" },
        { text: "KY", value: "KY" },
        { text: "LA", value: "LA" },
        { text: "ME", value: "ME" },
        { text: "MD", value: "MD" },
        { text: "MA", value: "MA" },
        { text: "MI", value: "MI" },
        { text: "MN", value: "MN" },
        { text: "MS", value: "MS" },
        { text: "MO", value: "MO" },
        { text: "MT", value: "MT" },
        { text: "NE", value: "NE" },
        { text: "NV", value: "NV" },
        { text: "NH", value: "NH" },
        { text: "NJ", value: "NJ" },
        { text: "NM", value: "NM" },
        { text: "NY", value: "NY" },
        { text: "NC", value: "NC" },
        { text: "ND", value: "ND" },
        { text: "OH", value: "OH" },
        { text: "OK", value: "OK" },
        { text: "OR", value: "OR" },
        { text: "PA", value: "PA" },
        { text: "PR", value: "PR" },
        { text: "RI", value: "RI" },
        { text: "SC", value: "SC" },
        { text: "SD", value: "SD" },
        { text: "TN", value: "TN" },
        { text: "TX", value: "TX" },
        { text: "UT", value: "UT" },
        { text: "VT", value: "VT" },
        { text: "VA", value: "VA" },
        { text: "WA", value: "WA" },
        { text: "WV", value: "WV" },
        { text: "WI", value: "WI" },
        { text: "WY", value: "WY" }
      ]
    }
  }
}
